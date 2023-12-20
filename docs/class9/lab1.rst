Lab 1: Policy Supervisor Overview
=================================

Policy Supervisor is an online unified configuration solution for security policies, built with the purposes of managing and converting configuration across multiple F5 Web App Firewall solutions.
It enables operators of F5 WAF technologies to easily convert policy files from BIG-IP AWAF, F5 Distributed Cloud WAF, and NGINX NAP formats. In the process Policy Supervisor generates and uses an intermediate
JSON-based common declarative format called CDP (Common Declarative Policy) for policy lifecycle management. After a policy is converted to CDP, it can then be deployed to any supported WAF Solution, which is referred to as a Provider in Policy Supervisor lingo. Please refer to the [GitHub repo for the Policy Supervisor Tutorial](https://github.com/f5devcentral/ps-convert) for currently supported Provider types.

Policy Supervisor provides a graphical interface for visual policy creation, editing and management for traditional SecOps personas.

Task 1: Login and create a new provider
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will walk you through connecting *Policy Supervisor* to your *BIG-IP WAF*.

The first step is to create a *Provider*.

A *Provider* is a generic name used by *Policy Supervisor* to indicate an F5 Web App Firewall. The supported *Provider* types are: *F5 Distributed Cloud WAF*, *BIG-IP Advanced WAF* (AWAF), and *NGINX Application Protection* (NAP). Add and connect *providers* in *Policy Supervisor* to enable the deployment of your configuration policies across endpoints and load balancers for complete WAF protection.

When you add a BIG-IP instance as a *provider*, you must first set up an *agent* and associated secret on the private network to enable a secure connection between the BIG-IP instance and *Policy Supervisor*.

- The *agent* must be connected to the same private network where the *provider* is running to ensure a secure connection between *Policy Supervisor* and the *provider*.
- The *agent* machine must also have outbound Internet access for connectivity back to *Policy Supervisor*.
- The *Policy Supervisor* *Agent* is a Linux binary that is first installed on this machine/VM and is registered using a unique token generated in the *Policy Supervisor* UI for your *Policy Supervisor* *workspace* only.
- The *Agent* is used to create *Secrets*, which are stored in your environment only and are never transmitted outside of your network.
- These *secrets* are used to connect to your *BIG-IP AWAF* or *NGINX NAP* instance to execute various policy-related functions within a Docker container environment on that machine/VM.

.. note::
   *Installation of the *Policy Supervisor Agent* requires Docker and wget to be installed on your Linux machine/VM!*

+---------------------------------------------------------------------------------------------------------------+
| 1. Login to https://policysupervisor.io                                                                       |
| 2. On the *Overview > Providers* page, click **Add Provider**. If this is the first provider being added,     |
|    there are two *Add Provider* buttons on the screen.                                                        |
|                                                                                                               |
| .. image:: image9.png                                                                                         |
|     :width: 800px                                                                                             |
|                                                                                                               |
|                                                                                                               |
| 3. On the resultant *Add Providers* pane, in the *Provider Type* drop-down, choose **BIG-IP**.                |
| 4. In the *Select Agent* field, click **+ Add new agent**.                                                    |
|                                                                                                               |
| .. image:: image17.png                                                                                        |
|                                                                                                               |
|                                                                                                               |
| 5. An Add Agent pane slides out, with a token generated as a long text string.                                |
|    Copy and paste the Token to a text file to be used later                                                   |
| 6. In the *Add Agent* pane, click the *agent-install* link to open the GitLab repository.                     |
| 7. On the *gitlab.policysupervisor.io* site, right-click on the agent-installer file name                     |
| 8. Select **Copy Link**. A URL similar to this one is copied to your clipboard:                               |
|    For example: *…gitlab.policysupervisor.io/wafps/agent-install/-/package_files/…*                           |
|                                                                                                               |
| .. note::                                                                                                     |
|    *The version of the *agent-installer* file will be different than the one shown in the image above.        |
|                                                                                                               |
+---------------------------------------------------------------------------------------------------------------+
| .. image:: image9.png                                                                                         |
|     :width: 800px                                                                                             |
+---------------------------------------------------------------------------------------------------------------+

Step-by-step instructions:
            Login to https://policysupervisor.io
            Click "Add Provider"
            Select the "BIG-IP" option for the provider type.
            Click "+ Add new agent"
            Select/copy the value of the token and save for later.
            In the Add Agent pane, click the agent-install link to open the GitLab repository.
            On the gitlab.policysupervisor.io site, right-click on the agent-installer file name and select Copy Link.
            A URL similar to this one is copied to your clipboard:
            …https://gitlab.policysupervisor.io/wafps/agent-install/-/package_files/….
In UDF, select the "WEB SHELL" access method for the Superjumphost machine.
cd /tmp
Execute the following wget command on the command line to retrieve the policy supervisor agent software:
wget  https://gitlab.policysupervisor.io/wafps/agent-inst…….
Rename the downloaded package from download to agent-installer by using the following command:
mv download agent-installer
Next, give the installer package execution rights to enable it to run:
chmod +x ./agent-installer
Then, go ahead and run the agent installer by using the following command:
./agent-installer
Paste the token copied above when prompted.
Type "udf" when prompted for the agent name.
Wait for the agent registration to complete successfully.
Type "bigip" when prompted for the secret name.
Type "admin" when prompted for the username.
Type "Canada123!" when prompted for the password.
Press "Enter" when prompted for the ssh key path (we're not using one in this demo).
Press "Enter" when prompted to select an option (choose the default "Finish" option).
Go back to the policysupervisor.io web page and click "Done".
Select the "udf" option for on the dropdown list for "Agent".
The *Secrets* field is then displayed. From the *Secrets* drop-down list, choose the **bigip** secret you created above and click **Continue**.
Click "Continue".
Type "bigip1" for the "Provider Name".
Type "https://10.1.1.6" for the "Provider URL".
Click the "Test Connection" button.
Wait for the tests to complete successfully.
Click the "Add another Provider" button.
Select the "BIG-IP" optino for the provider type.
Select the "udf" option for on the dropdown list for "Agent".
Select the "bigip" option on the dropdown list for "Secret".
Click "Continue".
Type "bigip2" for the "Provider Name".
Type "https://10.1.1.7" for the "Provider URL".
Click the "Test Connection" button.
Wait for the tests to complete successfully.
Click the "Got to overview" link.
Click to select the "bigip1" provider.
Click "Ingest Policies".
Select the discovered policy (i.e., "My_ASM_Rapid_Deployment_Po…").
Click Continue.
Click Next.
Type "Ingest from bigip1" for the quired "commit message".
Click " Save & Ingest Policy".
Wait for the ingestion to complete successfully.
Click "Policies Overview".
Select the policy.
Click "Deploy".
Select the "bigip2" option from the "Provider" dropdown.
Type "Deploy to bigip2" in the commit message text box.
Click the "Conversion Summary" button.
Wait for the Conversion Summary screen to appear.
Click the "Save & Continue" button.
Click the "Continue Deployment" button.
Select the "service" Virtual server from the dropdown list.
Click the "Next button.
Click the "Deploy" button.

+---------------------------------------------------------------------------------------------------------------+
| 4. In the resulting window, enter **<namespace>-pool** in the **Name** field and click **Add Item** under     |
|                                                                                                               |
|    **Origin Servers**                                                                                         |
+---------------------------------------------------------------------------------------------------------------+
| |lab003|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 5. In the resulting window, **Public DNS Name of Origin Server** should be selected for **Select Type of**    |
|                                                                                                               |
|    **Origin Server**.                                                                                         |
|                                                                                                               |
| 6. For **DNS Name** enter the following hostname: **demo-app.amer.myedgedemo.com** and then click **Apply**   |
+---------------------------------------------------------------------------------------------------------------+
| |lab004|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 7. After returning to the prior window, change the **Port** under **Origin server Port** to **80**.           |
|                                                                                                               |
| 8. Scroll to the bottom and click **Save and Exit**.                                                          |
+---------------------------------------------------------------------------------------------------------------+
| |lab005|                                                                                                      |
|                                                                                                               |
| |lab006|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 9. In the left-hand navigation expand **Manage** and click **Load Balancers > HTTP Load** **Balancers**.      |
|                                                                                                               |
| 10. In the resulting screen click the **Add HTTP Load Balancer** in the graphic as shown.                     |
+---------------------------------------------------------------------------------------------------------------+
| |lab007|                                                                                                      |
|                                                                                                               |
| |lab008|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 11. Using the left-hand navigation and in the sections as shown, enter the following data. Values where       |
|                                                                                                               |
|     **<namespace>** is required, use the name of your given namespace.                                        |
|                                                                                                               |
|     * **Metadata:Name ID:**  *<namespace>-lb*                                                                 |
|     * **Domains and LB Type: List of Domains:** *<namespace>.lab-sec.f5demos.com*                             |
|     * **Domains and LB Type: Select Type of Load Balancer:** *HTTP*                                           |
|     * **Domains and LB Type: Automatically Manage DNS Records:** *(Check the checkbox)*                       |
|     * **Domains and LB Type: HTTP Port:** *80*                                                                |
+---------------------------------------------------------------------------------------------------------------+
| |lab009|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 12. In the current window's left-hand navigation, click **Origins**. Next, click **Add Item Pools** section of|
|                                                                                                               |
|     **Origins**.                                                                                              |
+---------------------------------------------------------------------------------------------------------------+
| |lab010|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 13. In the resulting window, verify **Origin Pool** is selected for **Select Origin Pool **Method**.          |
|                                                                                                               |
| 14. Select the **<namespace>/<namespace>-pool** from the **Origin Pool**  dropdown.                           |
|                                                                                                               |
| 15. Click **Apply**                                                                                           |
+---------------------------------------------------------------------------------------------------------------+
| |lab011|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 16. In the resulting **HTTP Load Balancer** window, scroll to the **Other Settings** section and note the     |
|                                                                                                               |
|     **VIP Advertisement** setting.                                                                            |
|                                                                                                               |
| 17. Click **Save and Exit** at the bottom of the **HTTP Load Balancer** configuration screen.                 |
|                                                                                                               |
| .. note::                                                                                                     |
|    *The VIP Advertisement selection controls how/where the application is advertised. The "Internet" setting* |
|                                                                                                               |
|    *means that this application will be advertised globally using the F5 Distributed Cloud Global Network*    |
|                                                                                                               |
|    *utilizing Anycast.*                                                                                       |
+---------------------------------------------------------------------------------------------------------------+
| |lab012|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 18. In the **HTTP Load Balancers** window, note the application hostname under the **Domains** column *(This* |
|                                                                                                               |
|     *was done in Task1: Step 19)*.                                                                            |
|                                                                                                               |
+---------------------------------------------------------------------------------------------------------------+
| |lab013|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

Task 2: Testing the Application and Viewing Telemetry Data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will validate access to the application via web browser, review the
Performance Monitoring dashboard, and gather request details.

+---------------------------------------------------------------------------------------------------------------+
| 1. Open another tab in your browser (Chrome shown), navigate to the newly configured Load Balancer            |
|                                                                                                               |
|    configuration: **http://<namespace>.lab-sec.f5demos.com**, to confirm it is functional.                    |
|                                                                                                               |
| 2. Navigate to the **HEADER** section under **Menu** to generate additional traffic.                          |
+---------------------------------------------------------------------------------------------------------------+
| |lab014|                                                                                                      |
|                                                                                                               |
| |lab015|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 3. Returning to the F5 Distributed Cloud Console, use the left-hand navigation to navigate to Multi-Cloud App |
|                                                                                                               |
|    Connect section and expand **Virtual Hosts** and then click on **HTTP Load Balancers**                     |
|                                                                                                               |
| 4. Click on **Performance Monitoring** link provided for your respective load balancer.                       |
|                                                                                                               |
+---------------------------------------------------------------------------------------------------------------+
| |lab016|                                                                                                      |
|                                                                                                               |
| |lab017|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 5. Change the viewable time period from Last 5 minutes (default) to **1 hour** by selecting the dropdown      |
|                                                                                                               |
|    shown, click **Last 1 hour** then clicking **Apply**.                                                      |
|                                                                                                               |
| 6. Note the **End to end Latency** tile.  This shows the average latency for all requests to this load        |
|                                                                                                               |
|    balancer.                                                                                                  |
|                                                                                                               |
| .. note::                                                                                                     |
|    *As you have not run many requests, summary analytics may not be available in the dashboard view yet.*     |
+---------------------------------------------------------------------------------------------------------------+
| |lab018|                                                                                                      |
|                                                                                                               |
| |lab019|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 7. Click the **Requests** link to see detailed information about individual requests.                         |
|                                                                                                               |
| 8. Note the **Chart** shows a graphical representation of all of the response codes for the selected time     |
|                                                                                                               |
|    frame.                                                                                                     |
|                                                                                                               |
| .. note::                                                                                                     |
|    *This data can be filtered to quickly narrow in on points of interest.*                                    |
+---------------------------------------------------------------------------------------------------------------+
| |lab020|                                                                                                      |
|                                                                                                               |
| |lab021|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 9. Click the **Hide Chart** link to free up space in the browser window.                                      |
|                                                                                                               |
| 10. Expand one of the individual requests to view additional details about that request.                      |
|                                                                                                               |
| 11. Note the **Duration** section.  This shows the latency for this specific request.  These values can be    |
|                                                                                                               |
|     compared to the average latency data noted in step 6.                                                     |
+---------------------------------------------------------------------------------------------------------------+
| |lab022|                                                                                                      |
|                                                                                                               |
| |lab023|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

Task 3: Configure an Application Firewall Policy to Protect the Application
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will guide you through adding a Web Application Firewall (WAF) Policy.

These steps will create a WAF Policy and apply the WAF policy to the load balancer created in Task 1.

+---------------------------------------------------------------------------------------------------------------+
| 1. Following **Task 2**, you should have the **Multi-Cloud App Connect** navigation panel on the left of your |
|                                                                                                               |
|    console.  If for some reason you do not see the **Multi-Cloud App Connect** navigation panel, use the      |
|                                                                                                               |
|    **Select Service** dropdown at the top left, and click **Multi-Cloud App Connect** as shown in the         |
|                                                                                                               |
|    *Introduction section, Task 2, Step 9*.                                                                    |
|                                                                                                               |
| 2. In the left-hand navigation expand **Security** and click **App Firewall**.                                |
|                                                                                                               |
| 3. On the resulting page click **Add App Firewall**                                                           | 
+---------------------------------------------------------------------------------------------------------------+
| |lab024|                                                                                                      |
|                                                                                                               |
| |lab025|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 4. In the resulting window's **Metadata** section enter **<namespace>-appfw** for the **Name**.               |
|                                                                                                               |
| 5. Under **Enforcement Mode**, change the mode to **Blocking**.                                               |
|                                                                                                               |
| 6. Leaving all other values as default, scroll to the bottom and click **Save and Exit**.                     |
+---------------------------------------------------------------------------------------------------------------+
| |lab026|                                                                                                      |
|                                                                                                               |
| |lab027|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 7. In the left-hand navigation expand **Manage** and click **Load Balancers > HTTP Load Balancers**           |
|                                                                                                               |
| 8. On the resulting page find the HTTP Load Balancer created in **Task 1** *(<namespace>-lb)*.  Click the     |
|                                                                                                               |
|    ellipsis under Actions and select **Manage Configuration**.                                                |
+---------------------------------------------------------------------------------------------------------------+
| |lab028|                                                                                                      |
|                                                                                                               |
| |lab029|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 9. On the resulting page click **Edit Configuration**.                                                        |
|                                                                                                               |
| 10. Click **Web Application Firewall** in the left-hand navigation.                                           |  
+---------------------------------------------------------------------------------------------------------------+
| |lab030|                                                                                                      |
|                                                                                                               |
| |lab031|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+


+---------------------------------------------------------------------------------------------------------------+
| 11. Under the **Web Application Firewall** section select **Enable** from the **Web Application Firewall**    |
|                                                                                                               |
|     **(WAF)** dropdown.                                                                                       |
|                                                                                                               |
| 12. Select the Web Application Firewall name that you created in *Steps 1-6* of this task                     |
|                                                                                                               |
|     *(<namespace>-appfw)* from the **Enable** dropdown.                                                       |
|                                                                                                               |
| 13. Scroll to the bottom of the page and click **Save and Exit**                                              |
+---------------------------------------------------------------------------------------------------------------+
| |lab032|                                                                                                      |
|                                                                                                               |
| |lab033|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

Task 4. Test the Application Firewall and View Security Events
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will test and validate the Web Application Firewall, review the Security

Monitoring dashboard, and gather security event details.

+---------------------------------------------------------------------------------------------------------------+
| 1. Open another tab in your browser (Chrome shown), navigate to the newly configured Load Balancer            |
|                                                                                                               |
|    configuration: **http://<namespace>.lab-sec.f5demos.com**, to confirm it is functional.                    |
|                                                                                                               |
| 2. Using some of the sample attacks below, add the URI path & variables to your application to generate       |
|                                                                                                               |
|    security event data.                                                                                       |
|                                                                                                               |
|    * /?cmd=cat%20/etc/passwd                                                                                  |
|    * /product?id=4%20OR%201=1                                                                                 |
|    * /cart?search=aaa'><script>prompt('Please+enter+your+password');</script>                                 |
|                                                                                                               |
| .. note::                                                                                                     |
|    *The web application firewall is blocking these requests to protect the application. The block page can*   |
|                                                                                                               |
|    *be customized to provide additional information.*                                                         |
+---------------------------------------------------------------------------------------------------------------+
| |lab034|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 3. Returning to the F5 Distributed Cloud Console, use the left-hand navigation to navigate to Multi-Cloud App |
|                                                                                                               |
|    Connect setion and expand **Virtual Hosts** and click on **HTTP Load Balancers**.                          |
|                                                                                                               |
| 4. Click on the **Security Monitoring** link for your respective load balancer.                               |
+---------------------------------------------------------------------------------------------------------------+
| |lab035|                                                                                                      |
|                                                                                                               |
| |lab036|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 5. From the **Dashboard** view, using the horizontal navigation, click **Requests**.                          |
|                                                                                                               |
| 6. Note the **Chart** shows a graphical representation of all of the response codes for the selected time     |
|                                                                                                               |
|    frame.                                                                                                     |
|                                                                                                               |
| .. note::                                                                                                     |
|    *If you lost your 1 Hour Filter, re-apply using Task 2: Step 5*                                            |
+---------------------------------------------------------------------------------------------------------------+
| |lab037|                                                                                                      |
|                                                                                                               |
| |lab038|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 7. Click the **Hide Chart** link to free up space in the browser window.                                      |
|                                                                                                               |
| 8. Expand your latest security event as shown.                                                                |
|                                                                                                               |
| 9. Note the summary detail provided in the **Information** link.  The **req_id** which is synonymous with     |
|                                                                                                               |
|    **Support ID** (filterable) from the block page.                                                           |
|                                                                                                               |
| 10. Scroll to the bottom of the information screen to see specific signatures detected and actions taken      |
|                                                                                                               |
|     during the security event.                                                                                |
|                                                                                                               |
| .. note::                                                                                                     |
|    *Note that Requests have additional detail in JSON format*                                                 |
+---------------------------------------------------------------------------------------------------------------+
| |lab039|                                                                                                      |
|                                                                                                               |
| |lab040|                                                                                                      |
|                                                                                                               |
| |lab041|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **End of Lab 1:**  This concludes Lab 1.  In this lab you created an origin pool to connect to the            |
|                                                                                                               |
| application, you then created a load balancer and associated the origin pool to the load balancer.  This      |
|                                                                                                               |
| allowed the application to be advertised via the F5 Distributed Cloud Global Network.  The Distributed Cloud  |
|                                                                                                               |
| Console was then used to review telemetry data gathered for the application.  Next an Application Firewall    |
|                                                                                                               |
| policy was created and assigned to protect the application.  Finally a sample attack was run against the      |
|                                                                                                               |
| application and the security event data was reviewed within the Distributed Cloud Console.                    |
|                                                                                                               |
| A brief presentation will be shared prior to the beginning of Lab 2.                                          |
+---------------------------------------------------------------------------------------------------------------+
| |labend|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

.. |lab001| image:: _static/lab1-001.png
   :width: 800px
.. |lab002| image:: _static/lab1-002.png
   :width: 800px
.. |lab003| image:: _static/lab1-003.png
   :width: 800px
.. |lab004| image:: _static/lab1-004.png
   :width: 800px
.. |lab005| image:: _static/lab1-005.png
   :width: 800px
.. |lab006| image:: _static/lab1-006.png
   :width: 800px
.. |lab007| image:: _static/lab1-007.png
   :width: 800px
.. |lab008| image:: _static/lab1-008.png
   :width: 800px
.. |lab009| image:: _static/lab1-009.png
   :width: 800px
.. |lab010| image:: _static/lab1-010.png
   :width: 800px
.. |lab011| image:: _static/lab1-011.png
   :width: 800px
.. |lab012| image:: _static/lab1-012.png
   :width: 800px
.. |lab013| image:: _static/lab1-013.png
   :width: 800px
.. |lab014| image:: _static/lab1-014.png
   :width: 800px
.. |lab015| image:: _static/lab1-015.png
   :width: 800px
.. |lab016| image:: _static/lab1-016.png
   :width: 800px
.. |lab017| image:: _static/lab1-017.png
   :width: 800px
.. |lab018| image:: _static/lab1-018.png
   :width: 800px
.. |lab019| image:: _static/lab1-019.png
   :width: 800px
.. |lab020| image:: _static/lab1-020.png
   :width: 800px
.. |lab021| image:: _static/lab1-021.png
   :width: 800px
.. |lab022| image:: _static/lab1-022.png
   :width: 800px
.. |lab023| image:: _static/lab1-023.png
   :width: 800px
.. |lab024| image:: _static/lab1-024.png
   :width: 800px
.. |lab025| image:: _static/lab1-025.png
   :width: 800px
.. |lab026| image:: _static/lab1-026.png
   :width: 800px
.. |lab027| image:: _static/lab1-027.png
   :width: 800px
.. |lab028| image:: _static/lab1-028.png
   :width: 800px
.. |lab029| image:: _static/lab1-029.png
   :width: 800px
.. |lab030| image:: _static/lab1-030.png
   :width: 800px
.. |lab031| image:: _static/lab1-031.png
   :width: 800px
.. |lab032| image:: _static/lab1-032.png
   :width: 800px
.. |lab033| image:: _static/lab1-033.png
   :width: 800px
.. |lab034| image:: _static/lab1-034.png
   :width: 800px
.. |lab035| image:: _static/lab1-035.png
   :width: 800px
.. |lab036| image:: _static/lab1-036.png
   :width: 800px
.. |lab037| image:: _static/lab1-037.png
   :width: 800px
.. |lab038| image:: _static/lab1-038.png
   :width: 800px
.. |lab039| image:: _static/lab1-039.png
   :width: 800px
.. |lab040| image:: _static/lab1-040.png
   :width: 800px
.. |lab041| image:: _static/lab1-041.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
