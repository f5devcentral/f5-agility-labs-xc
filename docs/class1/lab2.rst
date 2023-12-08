Lab 2: Protecting a Private Endpoint
====================================

In the previous lab you learned how to protect a resource that is already on the Public Internet.

In this next lab we will look at two additional topologies of how you can use a Customer Edge node
to secure traffic that is going to an endpoint that is not directly exposed to the Internet.

In this lab we will protect an application that is hosted in AWS but not directly exposed to the Internet.

F5 Distributed Cloud AWS VPC Site
---------------------------------

In addition to protecting resources using F5 Distributed Cloud WAF/WAAP enforcement at an F5 Regional Edge (RE),
you can also deploy a Customer Edge (CE) that may or may not be exposed to the public Internet. CE nodes may be 
deployed in physical data centers and/or public cloud environments.
 
Once a CE has been deployed, it unlocks two additional topologies.

1. Client -> RE -> CE -> Protected resource  

Leveraging F5 Distributed Cloud REs to provide WAF and other services upstream, 
then proxying the clean traffic to the protected resource via the CE.  It is recommended that a firewall rule be placed at the site with the CE
to only allow traffic from an RE.  This ensures that all traffic is scrubbed upstream before entering the site.

2. Client -> CE -> Protected resource  

In this scenario, the CE advertises the services directly.  While this topology sacrifices some functionality such as 
volumetric DDoS protection and anycast availability from the Distributed Cloud global network, there are some use cases where it can be beneficial.  
One such example is when clients and protected resources are both local to each other without having to traverse the Internet.

With either toplogy, two encrypted tunnels are automatically created between the CE and the two closest REs.  These redundant tunnels provide
high availability in the unlikely event of an outage at a specific RE within the Distributed Cloud global network.

In the event of an Internet outage at a CE site, local survivability will continue to provide data plane services locally for a period of time.  
During this time, control plane services are suspended and will resume upon Internet connection reestablishment.

While a single CE may be adequate for non-production environments, a high-availability cluster of at least 3 CE's is highly recommended for production.

This lab has auto deployed an AWS site with a Customer Edge node for you. You may walk through this process using the F5 Distributed Cloud Simulator if you wish.

https://simulator.f5.com/s/cloud2cloud_via_sites_brownfield/nav/aws/005/0

Continue with the steps below to allow secure connectivity to the AWS hosted application. 


Task 1. Create Origin Pools
---------------------------

Previously we created an origin pool that was accessible via the Public Internet.
The next lab exercise will create an origin pool that will provide internal resources discovered with local DNS by the AppMesh node that is deployed in our lab AWS environment. 

Exercise 1: Create Private Origin Pool
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We will first create an Origin Pool that refers to the "Private Endpoint" site in our lab environment.

#. Start in F5 Distributed Cloud Console and switch back to the "Web App & API Protection" context.

#. Navigate the menu to go to "Manage"->"Load Balancers"->"Origin Pools". Click on *Add Origin Pool*.

#. Enter the following variables:

   ================================= =====
   Variable                          Value
   ================================= =====
   Name                              private
   ================================= =====

#. Click on "Add Item" under the section "Origin Servers"

   Enter the following variables: 

   ================================= =====
   Variable                          Value
   ================================= =====
   Select Type of Origin Server      DNS Name of Origin Server on given Sites
   DNS Name                          private.lab.f5demos.internal
   Site                              system/student-awsnet
   ================================= =====
    
   |op-pool-basic|

   Click on "Apply" to return to the previous screen.

#. Below the "Origin Servers" section fill in the Port information

   ================================= =====
   Variable                          Value
   ================================= =====
   Port                              8080
   ================================= =====

#. In the **Health Checks**, click **Add Item**.                                             

#. From the resulting Health Check object dropdown select **Add Item**.                      

#. In the resulting window enter **<namespace>-hc** in the **Name** field.  

#. In the **Health Check Parameters** section click **View Configuration** under the **HTTP HealthCheck** section.                                                      

#. In the resulting window note the value of the **Path** parameter.   

#. Also note the value of the **Expected Status Codes** parameter.       

#. Click **Back** to retain the default settings.                                           

.. note::                                                                                    


*The default Health Check makes a request to the root path and expects a response code of*

*200. These values can be modified to meet the requirements of the application.*          


13. After returning to the prior window, note the values of **Timeout(s)**, **Interval(s)**,   

**Unhealthy Threshold**, and **Healthy Threshold**.                                      

14. Click **Continue**.                                                                      

.. note::                                                                                    


*The Timeout, Interval, Unhealthy Threshold, and Healthy Threshold control how often*     

*health checks are sent and when an endpoint is marked healthy or unhealthy.  These*      

*values can be modified to meet the requirements of the application.*                     


15. After returning to the Origin Pool configuration window, click **Save and Exit**.        

.. |app-context| image:: _static/app-context.png
.. |origin_pools_menu| image:: _static/origin_pools_menu.png
.. |origin_pools_add| image:: _static/origin_pools_add.png
.. |origin_pools_config| image:: _static/origin_pools_config.png
.. |origin_pools_config_api| image:: _static/origin_pools_config_api.png
.. |origin_pools_config_mongodb| image:: _static/origin_pools_config_mongodb.png
.. |origin_pools_show_child_objects| image:: _static/origin_pools_show_child_objects.png
.. |origin_pools_show_child_objects_status| image:: _static/origin_pools_show_child_objects_status.png
.. |http_lb_origin_pool_health_check| image:: _static/http_lb_origin_pool_health_check.png
.. |http_lb_origin_pool_health_check2| image:: _static/http_lb_origin_pool_health_check2.png

.. |op-add-pool| image:: _static/op-add-pool.png
.. |op-api-pool| image:: _static/op-api-pool.png
.. |op-pool-basic| image:: _static/op-pool-basic-private.png
  :width: 75% 
.. |op-spa-check| image:: _static/op-spa-check.png
.. |op-tshoot| image:: _static/op-tshoot.png

Task 2. Update HTTP Load Balancer on F5 Distributed Cloud Regional Edge
-----------------------------------------------------------------------

We will now update the HTTP load balancer that we previously created to connect to
the "Private Endpoint" via the AppMesh node that is deployed in the AWS lab environment.

.. image:: _static/testdrive-volterra-waf-hybrid-vip.png

Exercise 1: HTTP Load Balancer Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Start in F5 Distributed Cloud Console and switch to the "Web App & API Protection" context. [You should already be here from previous lab]

#. Navigate the menu to go to "Manage"->"HTTP Load Balancers" and look for the Load Balancer named *<namespace>-lb* that you previously created.

#. Click on the three dots "..." to the right of the name of your *<namespace>-lb* Load Balancer and select the "Manage Configuration" option.

   .. image:: _static/screenshot-global-vip-actions-manage.png

#. Click on "Edit Configuration" in the upper right of the screen (after your *<namespace>-lb* Load Balancer is loaded).

   .. image:: _static/screenshot-global-vip-edit-config.png

#. Under "Origins" find your previous "<namespace>-pool" Origin pool and click on the three dots "..." to the right under "Actions" and select "Edit"

   .. image:: _static/screenshot-global-vip-edit-config-pools.png

#. Change the selection of "Origin Pool" from "<namespace>-pool" to "private" and click "Apply"

   .. image:: _static/screenshot-global-vip-edit-config-pools-select.png

#. Click "*Save and Exit* to update the HTTP Load Balancer.

You should now be able to go to the DNS name that you entered 
previously in a web browser.  The FQDN we used in our example is http://stable-sheep.lab-sec.f5demos.com/.  

Exercise 2: Verify Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The private demo app should look like the following:

.. image:: _static/screenshot-global-vip-private.png
   :width: 50%

In this topology we are sending traffic to an AnyCast IP that is hosted in F5 Distributed Cloud's Regional Edge.

We then connect to the AWS resource via the AppMesh node that is deployed in the same VPC as the "Private Endpoint".  
The AppMesh is only being used for network connectivity to the Private Endpoint; enforcement of the WAF policy is still
being applied in the Regional Edge.

In the next exercise we will look at a third topology of deploying a WAF policy that will be enforced within the AWS VPC
on the AppMesh node (in the Customer Edge).

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/s-BHH0Qayfc?start=366" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Task 3. Creating HTTP Load Balancer on F5 Distributed Cloud Customer Edge
-------------------------------------------------------------------------

In the previous lab exercises we were connecting to a F5 Distributed Cloud Load Balancer that was deployed in a Regional Edge.

In the next lab exercise we will deploy a Load Balancer on the AppMesh node that was deployed in the AWS VPC (Customer Edge location).

.. image:: _static/testdrive-volterra-waf-local-vip.png

Exercise 1: HTTP Load Balancer Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Start in F5 Distributed Cloud Console and switch to the "Web App & API Protection" context. [You should already be here from previous lab]

#. Navigate the menu to go to "Manage"->"HTTP Load Balancers" and click on "Add HTTP Load Balancer".

#. Enter the following variables:

   ================================= =====
   Variable                          Value
   ================================= =====
   Name                              local
   Domains                           [NAMESPACE].aws.lab.f5demos.com
   Select type of Load Balancer      HTTP
   Automatically Manage DNS Records  No/Unchecked 
   ================================= =====

Exercise 2: Configure Default Origin Server
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We'll next configure the "Origin Servers".   
    
#. Click on the *Add Item* button in the the *Origin Pools* section.

#. The "Select Origin Pool Method" will be set to "Origin Pool". Under the "Origin Pool" dropdown menu select the "private" pool you created earlier.
 
#. Click the *Apply* button to exit the "Origin Pool with Weight and Priority" dialogue.

Exercise 3: Configure Local VIP
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Previously we configured a VIP that was advertised on F5's Regional Edge (PoP) locations.
We will modify this configuration to expose the service on the "Outside" interface of the AppMesh
node that is deployed in AWS.  This will allow us to access the VIP via the Public IP Address (AWS Elastic IP)
that is attached to that interface.  If we wished to only have the service available within the AWS VPC
we could opt to use the "Inside" interface that does not have an AWS EIP attached.

#. Under "Other Settings" set "VIP Advertisement" to "Custom"

   .. image:: _static/screenshot-local-vip-advertise-custom.png
      :width: 50%

#. Click on "Configure" under "Custom"
#. In "List of Sites to Advertise", click on "Add Item"
#. For "Site Network" click on "Outside Network" 
#. For "Site Reference" select `system/student-awsnet`

   .. image:: _static/lb-local-vip-advertise.png
      :width: 60%

#. Click on "Apply" 
#. Click on "Apply" to return to previous screen


Exercise 4: Configure WAF Policy
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Under the *Web Application Firewall* section 

#. Choose the following options:

   =============================== =================================
   Variable                        Value
   =============================== =================================
   Web Application Firewall (WAF)  Enable
   Select App Firewall             [NAMESPACE]/suited-guppy-appfw
   =============================== =================================

#. Click "Save and Exit" to create the HTTP Load Balancer.

Once the HTTP Load Balancer has been deployed, you should now be able to go to the DNS name that you entered 
previously in a web browser.  The FQDN we used in our example is http://stable-sheep.aws.lab.f5demos.com.  
This is a wildcard DNS entry that points to the Public IP (AWS Elastic IP) that is attached to the AppMesh node.

Exercise 5: Verify Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The private demo app should look like the following:

.. image:: _static/screenshot-local-vip-private.png
   :width: 50%


Exercise 6: Verify DNS
^^^^^^^^^^^^^^^^^^^^^^

You can verify that you are connecting directly to AWS by comparing the DNS of the two hosts.

.. code-block:: 

   $ dig +short student001.aws.lab.f5demos.com
   52.4.72.136

   $ dig -x 52.4.72.136 +short
   ec2-52-4-72-136.compute-1.amazonaws.com.

.. code-block:: 

   $ nslookup student001.aws.lab.f5demos.com

   Server:		2a01:cb04:765:e00:a6ce:daff:fe11:96ea
   Address:	2a01:cb04:765:e00:a6ce:daff:fe11:96ea#53

   Non-authoritative answer:
   Name:	student001.aws.lab.f5demos.com
   Address: 52.4.72.136


In this topology we are sending traffic to the AWS EIP that's attached to the AppMesh node in the AWS VPC.

We then connect to the AWS resource via it's Private IP address.  

<! Try adding the following to the URL "?cat%20/etc/passwd".  ###this request hung without providing a blocking page>

Try adding the following to the URL "/cart?search=aaa’><script>prompt(‘Please+enter+your+password’);</script>"

You should see a block page.  This is similar behavior to what we saw in the previous lab,
but in this case the enforcement of the WAF policy is occurring on the AppMesh node
that is deployed in the AWS Lab Environment and not in the F5 Distributed Cloud Regional Edge.

In the next lab we will look at how to customize our WAF policy.

Video Walkthrough 
^^^^^^^^^^^^^^^^^

Optional Video you can watch if you get stuck

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/s-BHH0Qayfc?start=400" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

