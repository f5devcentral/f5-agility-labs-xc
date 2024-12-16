
Lab 2: Deploying F5 Distributed Cloud Proxy Services to Securely Deliver a Private Endpoint via Regional Edges
====================================

Your company is about to launch a new application that resides in a public cloud environment.  To avoid having to learn 
yet another public cloud environment for publishing an application, you will use F5 Distributed Cloud for publishing the 
application.  You can do that by deploying a CE node in your public cloud environment, which will allow the data plane to 
run in that environment while having the configuration and observability of the Distributed Cloud console.  In this lab, 
you will configure the deployment in Distributed Cloud where application traffic will pass through Distributed Cloud to 
your application running in the public cloud.  You will use a CE node that has already been deployed in the public cloud
environment. In this example, the application does not have Internet connectivity via the public cloud.

Your design includes the following workflow Client -> RE -> CE -> Protected application resource.  Let's get started!

.. image:: _static/lab3-appworld2025-topology-diagram.png


Task 1. Create Private Origin Pool
---------------------------

In Lab #1 we created an origin pool that was accessible via the Public Internet.
This lab exercise will create an origin pool that will provide internal resources discovered with local DNS by the CE node that is deployed in our lab AWS environment. 

We will first create an Origin Pool that refers to the "Private Endpoint" site in our lab environment.

+------------------------------------------------------------------------------------------------------------+
|| 1. Start in F5 Distributed Cloud Console and switch back to the **Multi-Cloud App Connect** context.      |
||                                                                                                           |
|| 2. Navigate the menu to go to **"Manage"->"Load Balancers"->"Origin Pools"**. Click on *Add Origin Pool*. |
||                                                                                                           |
|| 3. Enter the following variables:                                                                         |
||                                                                                                           |
+------------------------------------------------------------------------------------------------------------+
|                                                                                                            |
|   ================================= =====                                                                  |
|   *Variable*                        *Value*                                                                |
|   ================================= =====                                                                  |
|   Name                              **[NAMESPACE]-private-ce-pool**                                        |
|   ================================= =====                                                                  |
|                                                                                                            |
+------------------------------------------------------------------------------------------------------------+
||                                                                                                           |
|| 4. Click on "Add Item" under the section "Origin Servers"                                                 |
||                                                                                                           |
+------------------------------------------------------------------------------------------------------------+
|                                                                                                            |
|   ================================= =====                                                                  |
|   Variable                          Value                                                                  |
|   ================================= =====                                                                  |
|   Select Type of Origin Server      DNS Name of Origin Server on given Sites                               |
|   DNS Name                          private.lab.f5demos.internal                                           |
|   Site                              system/student-awsnet                                                  |
|   ================================= =====                                                                  |
+------------------------------------------------------------------------------------------------------------+   
|                                                                                                            |
| |lab301|                                                                                                   | 
|                                                                                                            |
||                                                                                                           |
|| 5. Click on **"Apply"** to return to the previous screen.                                                 |
||                                                                                                           |
|| 6. Below the "Origin Servers" section fill in the Origin Server Port information                          |     
||                                                                                                           |
+------------------------------------------------------------------------------------------------------------+
|                                                                                                            |
|                                                                                                            |
|   ================================= =====                                                                  |
|   *Variable*                          *Value*                                                              |
|   ================================= =====                                                                  |
|   Port                              **8080**                                                               |
|   ================================= =====                                                                  |
|                                                                                                            |
+------------------------------------------------------------------------------------------------------------+   
||                                                                                                           |
|| 7. Click **Save and Exit**.                                                                               |
||                                                                                                           |
+------------------------------------------------------------------------------------------------------------+



Task 2. Create and Deploy a HTTP Load Balancer on F5 Distributed Cloud CE 
---------------------------------------------------------------------------

In the first lab we were connecting to a F5 Distributed Cloud Load Balancer that was deployed in a RE.
Now we will deploy a Load Balancer on the CE node that was deployed in the AWS VPC (CE location).

+-----------------------------------------------------------------------------------------------------------------------------------+
|| 1. Start in F5 Distributed Cloud Console and switch back to the **Multi-Cloud App Connect** context.                             |
||                                                                                                                                  |
|| 2. Navigate the menu to go to **"Manage"->"Load Balancers"-> "HTTP Loabalancers"**.  Click on *Add HTTP Loadbalancer*.           |
||                                                                                                                                  |
|| 3. Enter the following variables:                                                                                                |
||                                                                                                                                  |
+-----------------------------------------------------------------------------------------------------------------------------------+
|                                                                                                                                   |
|                                                                                                                                   |
|   ================================= =====                                                                                         |
|   Variable                          Value                                                                                         |
|   ================================= =====                                                                                         |
|   Name                              [NAMESPACE]-private-ce-lb                                                                     |
|   Domains                           [NAMESPACE]-2.lab-sec.f5demos.com                                                             |
|   Select type of Load Balancer      HTTP                                                                                          |
|   Automatically Manage DNS Records  No/Unchecked                                                                                  |
|   ================================= =====                                                                                         |
|                                                                                                                                   |
+-----------------------------------------------------------------------------------------------------------------------------------+                                                                                       
|                                                                                                                                   |
|  |lab311|                                                                                                                         |
||                                                                                                                                  |
|| 4. Under Origin Pools Click *"Add Item"*                                                                                         |
||                                                                                                                                  |
|  |lab302|                                                                                                                         |
||                                                                                                                                  |
|| 5. Select the recently created **[NAMESPACE]-private-ce-pool** under Origin pool and then click *"Apply"*                        |
||                                                                                                                                  |
|  |lab303|                                                                                                                         |
||                                                                                                                                  |
|| 6. Now you can see your Origin Pool has been added to the HTTP Loadbalancer Configuration                                        |
||                                                                                                                                  |
|  |lab304|                                                                                                                         |
||                                                                                                                                  |
|| 7. Now we want to confirm how this Load Balancer is advertised, we will select the "Other Settings" on the left hand side.       |
||    This will auto-scroll the configuations towards the bottom of the Load Balancer configuration section labled "Other Settings" |
||                                                                                                                                  |
|| |lab305|                                                                                                                         |
||                                                                                                                                  |
|| 8. Under *VIP Advertisement* Confirm it is set to *Internet*. This will allow *XC* to advertise the Virtual IP address.          |
||                                                                                                                                  |
|| |lab306|                                                                                                                         |
||                                                                                                                                  |
|| 0 Click on *"Apply"* and once again *"Apply"* on the next screen.                                                                |
||                                                                                                                                  |
|                                                                                                                                   |       
+-----------------------------------------------------------------------------------------------------------------------------------+

Task 3: Configure WAF Policy
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Now that we have our load balancer and orign server configured we want to make sure we are protecting the origin server.  Here we   
are easily applying a pre-existing shared WAF policy to our loadbalancer.  The shared WAF policy is available for all namespaces
under this tenant.

+-----------------------------------------------------------------------------------------------------------------------------------+
|| 1. Under the *Web Application Firewall* section                                                                                  |
||                                                                                                                                  |
|| 2. Choose the following options:                                                                                                 |
||                                                                                                                                  | 
+-----------------------------------------------------------------------------------------------------------------------------------+
|                                                                                                                                   |
|   =============================== =================================                                                               |
|   Variable                        Value                                                                                           |
|   =============================== =================================                                                               |
|   Web Application Firewall (WAF)  **Enable**                                                                                      |
|   Select App Firewall             **shared/base-appfw**                                                                           |
|   =============================== =================================                                                               |
|                                                                                                                                   |
+-----------------------------------------------------------------------------------------------------------------------------------+
||                                                                                                                                  |
|| 3.  Scroll to the botton of the screen and click "Save and Exit" to create the HTTP Load Balancer.                               |
||                                                                                                                                  |
|      Once the HTTP Load Balancer has been deployed, you should now be able to go to the DNS name that you entered                 |
|      previously in a web browser.  The FQDN we used in our example is http://[NAMESPACE]-2.lab-sec.f5demos.com.                   |
||                                                                                                                                  |
||  4.  Click on *"Save and Exit"* to complete the Load Balancer configuration                                                      |
||                                                                                                                                  |
+-----------------------------------------------------------------------------------------------------------------------------------+

Task 4: Verify Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You should now be able to go to the DNS name that you created in this Load Balancer configuration.  
The FQDN we used in our example is http://[NAMESPACE]-2.lab-sec.f5demos.com/.  

+-----------------------------------------------------------------------------------------------------------------------------------+
||  The private demo app should look like the following:                                                                            |
||                                                                                                                                  |
|  |lab312|                                                                                                                         |
|                                                                                                                                   |
|                                                                                                                                   |
+-----------------------------------------------------------------------------------------------------------------------------------+


Task 5: Verify WAF Protection
^^^^^^^^^^^^^^^^^^^^^^

In this topology we are sending traffic to the application via the public IP advertised on *XC*, which then sends to the application
in AWS via the connection to the CE node in AWS.

+-----------------------------------------------------------------------------------------------------------------------------------+
| <! Try adding the following to the URL "?cat%20/etc/passwd".  ###this request hung without providing a blocking page>             |
|                                                                                                                                   |
| Try adding the following to the URL "/cart?search=aaa’><script>prompt(‘Please+enter+your+password’);</script>"                    |
|                                                                                                                                   |
| You should see a block page.                                                                                                      |
|                                                                                                                                   |
|   |lab313|                                                                                                                        |                                      
|                                                                                                                                   |
+-----------------------------------------------------------------------------------------------------------------------------------+

This is similar behavior to what we saw in the previous lab,
but in this case the enforcement of the WAF policy is occurring on the CE node
that is deployed in the AWS Lab Environment and not in the F5 Distributed Cloud Regional Edge.

.. |lab300| image:: _static/lab3-appworld2025-topology-diagram.png
   :width: 800px
.. |lab301| image:: _static/lab3-appworld2025-task1-originserver.png
   :width: 800px
.. |lab302| image:: _static/lab3-appworld2025-task2-lb-add-origin-pool.png
   :width: 800px
.. |lab303| image:: _static/lab3-appworld2025-task2-lb-add-origin-pool2.png
   :width: 800px
.. |lab304| image:: _static/lab3-appworld2025-task2-lb-origin-pool-added.png
   :width: 800px
.. |lab305| image:: _static/lab3-appworld2025-task2-lb-other-settings.png
   :width: 800px
.. |lab306| image:: _static/lab3-appworld2025-task2-lb-change-vip-advertisement.png
   :width: 800px
.. |lab307| image:: _static/lab3-appworld2025-list-sites-advertise.png
   :width: 800px
.. |lab308| image:: _static/lab3-appworld2025-task2-lb-site-change.png
   :width: 800px
.. |lab309| image:: _static/screenshot-global-vip-private.png
   :width: 800px
.. |lab310| image:: _static/lab3-appworld2025-waf-block-message.png
   :width: 800px
.. |lab311| image:: _static/lab3-appworld2025-task2-lb-updated.png
   :width: 800px 
.. |lab312| image:: _static/screenshot-global-vip-private.png
   :width: 800px 
.. |lab313| image:: _static/lab3-appworld2025-waf-block-message.png
   :width: 800px 