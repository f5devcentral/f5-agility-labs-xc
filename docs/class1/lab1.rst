Lab 1: Deploying F5 Distributed Cloud Proxy Services to Securely Deliver a Public Endpoint
==========================================================================================

Lab 1 will focus on the deployment and security of an existing hosted application using F5 
Distributed Cloud Platform and Services.  This lab will be deployed in a SaaS only 
configuration with no on-premises (public or private cloud) elements.  All configuration
will be made via the F5 Distributed Cloud Console and within the F5 Distributed Cloud Global
Network services architecture.

For the tasks that follow, you should have already noted your individual **namespace**. If you
failed to note it, return to the **Introduction** section of this lab, follow the instructions
provided and note your **namespace** accordingly. The **Delegated Domain** and the F5 
Distributed Cloud **Tenant** are listed below for your convenience as they will be the same for
all lab attendees.

* **Delegated Domain:** *.lab-sec.f5demos.com* 
* **F5 Distributed Cloud Tenant:** https://f5-xc-lab-sec.console.ves.volterra.io 

Following the tasks in the prior **Introduction** Section, you should now be able to access the
F5 Distributed Cloud Console, having set your Work Domain Roles and Skill levels. If you have
not done so already, please login to your tenant for this lab and proceed to Task 1.

Task 1: Configure Load Balancer and Origin Pool
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will allow you to deploy and advertise a globally available application.
These steps will create an origin pool, add a health monitor, define an application, register
its DNS, and advertise the application on the Internet using the F5 Distributed Cloud Global
Network.

+----------------------------------------------------------------------------------------------+
| 1. Following the **Introduction** section  instructions, you should now be in the **Multi-** |
|                                                                                              |
|    **Cloud App Connect** configuration window. If for some reason you are not in the         |
|                                                                                              |
|    **Multi-Cloud App Connect** window, use the **Select Service** in the left-hand           |
|                                                                                              |
|    navigation, and click **Multi-Cloud App Connect** as shown in the *Introduction section,  |
|                                                                                              |
|    Task 2, Step 9*.                                                                          |
|                                                                                              |
| 2. In the left-hand navigation expand **Manage** and click **Load Balancers > Origin **      |
|                                                                                              |
|    **Pools**                                                                                 |
|                                                                                              |
| 3. In the resulting screen click the **Add Origin Pool** in the graphic as shown.            |
|                                                                                              |
| .. note::                                                                                    |
|    *You have defaulted to your specific namespace as that is the only namespace to which you*|
|                                                                                              |
|    *have administrative access.*                                                             |
+----------------------------------------------------------------------------------------------+
| |lab001|                                                                                     |
|                                                                                              |
| |lab002|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. In the resulting window, enter **<namespace>-pool** in the **Name** field and click       |
|                                                                                              |
|    **Add Item** under **Origin Servers**                                                     |
+----------------------------------------------------------------------------------------------+
| |lab003|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. In the resulting window, **Public DNS Name of Origin Server** should be selected for      |
|                                                                                              |
|    **Select Type of Origin Server**.                                                         |
|                                                                                              |
| 6. For **DNS Name** enter the following hostname:                                            |
|                                                                                              |
|    **demo-app.amer.myedgedemo.com** and then click **Apply**                                 |
+----------------------------------------------------------------------------------------------+
| |lab004|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. After returning to the prior window, change the **Port:** under **Origin server Port**    |
|                                                                                              |
|    to **80**.                                                                                |
+----------------------------------------------------------------------------------------------+
| |lab005|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. In the **Health Checks**, click **Add Item**.                                             |
|                                                                                              |
| 9. From the resulting Health Check object dropdown select **Add Item**.                      |
+----------------------------------------------------------------------------------------------+
| |lab006|                                                                                     |
|                                                                                              |
| |lab007|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. In the resulting window enter **<namespace>-hc** in the **Name** field.                  |
|                                                                                              |
| 11. In the **Health Check Parameters** section click **View Configuration** under the        |
|                                                                                              |
|     **HTTP HealthCheck** section.                                                            |
+----------------------------------------------------------------------------------------------+
| |lab008|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. In the resulting window note the value of the **Path** parameter.                        |
|                                                                                              |
| 13. Also note the value of the **Expected Status Codes** parameter.                          |
|                                                                                              |
| 14. Click **Back** to retain the default settings.                                           |
|                                                                                              |
| .. note::                                                                                    |
|    *The default Health Check makes a request to the root path and expects a response code of*|
|                                                                                              |
|    *200. These values can be modified to meet the requirements of the application.*          |
+----------------------------------------------------------------------------------------------+
| |lab009|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 15. After returning to the prior window, note the values of **Timeout(s)**, **Interval(s),   |
|                                                                                              |
|     **Unhealthy Threshold**, and **Healthy Threshold**.                                      |
|                                                                                              |
| 16. Click **Continue**.                                                                      |
|                                                                                              |
| .. note::                                                                                    |
|    *The Timeout, Interval, Unhealthy Threshold, and Healthy Threshold control how often*     |
|                                                                                              |
|    *health checks are sent and when an endpoint is marked healthy or unhealthy.  These*      |
|                                                                                              |
|    *values can be modified to meet the requirements of the application.*                     |
+----------------------------------------------------------------------------------------------+
| |lab010|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 17. After returning to the Origin Pool configuration window, click **Save and Exit**.        |
+----------------------------------------------------------------------------------------------+
| |lab011|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 18. In the left-hand navigation expand **Manage** and click **Load Balancers > HTTP Load**   |
|                                                                                              |
|     **Balancers**.                                                                           |
|                                                                                              |
| 19. In the resulting screen click the **Add HTTP Load Balancer** in the graphic as shown.    |
+----------------------------------------------------------------------------------------------+
| |lab012|                                                                                     |
|                                                                                              |
| |lab013|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 20. Using the left-hand navigation and in the sections as shown, enter the following         |
|                                                                                              |
|     data. Values where **<namespace>** is required, use the name of your given namespace.    |
|                                                                                              |
|     * **Metadata:Name ID:**  *<namespace>-lb*                                                |
|     * **Domains and LB Type: List of Domains:** *<namespace>.lab-sec.f5demos.com*            |
|     * **Domains and LB Type: Select Type of Load Balancer:** *HTTP*                          |
|     * **Domains and LB Type: Automatically Manage DNS Records:** *(Check the checkbox)*      |
|     * **Domains and LB Type: HTTP Port:** *80*                                               |
+----------------------------------------------------------------------------------------------+
| |lab014|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 21. In the current window's left-hand navigation, click **Origins**. Next, click **Add Item**|
|                                                                                              |
|     within the **Origin Pools** section of **Origins**.                                      |
+----------------------------------------------------------------------------------------------+
| |lab015|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 22. In the resulting window, verify **Origin Pool** is selected for **Select Origin Pool**   |
|                                                                                              |
|     **Method**.                                                                              |
|                                                                                              |
| 23. Select the **<namespace>/<namespace>-pool** from the **Origin Pool**  dropdown.          |
|                                                                                              |
| 24. Click **Apply**                                                                          |
+----------------------------------------------------------------------------------------------+
| |lab016|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 25. In the resulting **HTTP Load Balancer** window, scroll to the **Other Settings** section |
|                                                                                              |
|     and note the **VIP Advertisement** setting.                                              |
|                                                                                              |
| 26. Click **Save and Exit** at the bottom of the **HTTP Load Balancer** configuration screen.|
|                                                                                              |
| .. note::                                                                                    |
|    *The VIP Advertisement selection controls how/where the application is advertised. The*   |
|                                                                                              |
|    *"Internet" setting means that this application will be advertised globally using the F5* |
|                                                                                              |
|    *Distributed Cloud Global Network utilizing Anycast.*                                     |
+----------------------------------------------------------------------------------------------+
| |lab017|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 27. In the **HTTP Load Balancers** window, note the application hostname under the           |
|                                                                                              |
|     **Domains** column *(This was done in Task1: Step 19)*.                                  |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab018|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 2: Testing the Application and Viewing Telemetry Data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will validate access to the application via web browser, review the 
Performance Monitoring dashboard, and gather request details.

+----------------------------------------------------------------------------------------------+
| 1. Open another tab in your browser (Chrome shown), navigate to the newly configured Load    |
|                                                                                              |
|    Balancer configuration: **http://<namespace>.lab-sec.f5demos.com**, to confirm it is      |
|                                                                                              |
|    functional.                                                                               |
|                                                                                              |
| 2. Navigate to the **HEADER** section under **Menu** to generate additional traffic.         |
+----------------------------------------------------------------------------------------------+
| |lab019|                                                                                     |
|                                                                                              |
| |lab020|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. Returning to the F5 Distributed Cloud Console, use the left-hand navigation to navigate   |
|                                                                                              |
|    to Multi-Cloud App Connect section and expand **Virtual Hosts** and then click on         |
|                                                                                              |
|    **HTTP Load Balancers**                                                                   |
|                                                                                              |
| 4. Click on **Performance Monitoring** link provided for your respective load balancer.      |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab021|                                                                                     |
|                                                                                              |
| |lab022|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. Change the viewable time period from Last 5 minutes (default) to **1 hour** by selecting  |
|                                                                                              |
|    the dropdown shown, click **Last 1 hour** then clicking **Apply**.                            |
|                                                                                              |
| 6. Note the **End to end Latency** tile.  This shows the average latency for all requests to |
|                                                                                              |
|    this load balancer.                                                                       |
|                                                                                              |
| .. note::                                                                                    |
|    *As you have not run many requests, summary analytics may not be available in the*        |
|                                                                                              |
|    *dashboard view yet.*                                                                     |
+----------------------------------------------------------------------------------------------+
| |lab023|                                                                                     |
|                                                                                              |
| |lab024|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. Click the **Requests** link to see detailed information about individual requests.        |
|                                                                                              |
| 8. Note the **Chart** shows a graphical representation of all of the response codes for the  |
|                                                                                              |
|    selected time frame.                                                                      |
|                                                                                              |
| .. note::                                                                                    |
|    *This data can be filtered to quickly narrow in on points of interest.*                   |
+----------------------------------------------------------------------------------------------+
| |lab025|                                                                                     |
|                                                                                              |
| |lab026|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. Click the **Hide Chart** link to free up space in the browser window.                     |
|                                                                                              |
| 10. Expand one of the individual requests to view additional details about that request.     |
|                                                                                              |
| 11. Note the **Duration** section.  This shows the latency for this specific request.  These |
|                                                                                              |
|     values can be compared to the average latency data noted in step 6.                      |
+----------------------------------------------------------------------------------------------+
| |lab027|                                                                                     |
|                                                                                              |
| |lab028|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 3: Configure an Application Firewall Policy to Protect the Application
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will guide you through adding a Web Application Firewall (WAF) Policy.

These steps will create a WAF Policy and apply the WAF policy to the load balancer created in 

Task 1.

+----------------------------------------------------------------------------------------------+
| 1. Following **Task 2**, you should have the **Multi-Cloud App Connect** navigation panel on |
|                                                                                              |
|    the left of your console.  If for some reason you do not see the **Multi-Cloud App**      |
|                                                                                              |
|    **Connect** navigation panel, use the **Select Service** dropdown at the top left, and    |
|                                                                                              |
|    click **Multi-Cloud App Connect** as shown in the *Introduction section, Task 2, Step 9*. |
|                                                                                              |
| 2. In the left-hand navigation expand **Security** and click **App Firewall**.               |
|                                                                                              |
| 3. On the resulting page click **Add App Firewall**                                          | 
+----------------------------------------------------------------------------------------------+
| |lab029|                                                                                     |
|                                                                                              |
| |lab030|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. In the resulting window's **Metadata** section enter **<namespace>-appfw** for the        |
|                                                                                              |
|    **Name**.                                                                                 |
|                                                                                              |
| 5. Under **Enforcement Mode**, change the mode to **Blocking**.                              |
|                                                                                              |
| 6. Leaving all other values as default, scroll to the bottom and click **Save and Exit**.    |
+----------------------------------------------------------------------------------------------+
| |lab031|                                                                                     |
|                                                                                              |
| |lab032|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. In the left-hand navigation expand **Manage** and click **Load Balancers > HTTP **        |
|                                                                                              |
|    **Load Balancers**                                                                        |
|                                                                                              |
| 8. On the resulting page find the HTTP Load Balancer created in **Task 1**                   |
|                                                                                              |
|    *(<namespace>-lb)*.  Click the ellipsis under Actions and select **Manage Configuration**.|
+----------------------------------------------------------------------------------------------+
| |lab033|                                                                                     |
|                                                                                              |
| |lab034|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. On the resulting page click **Edit Configuration**.                                       |
|                                                                                              |
| 10. Click **Web Application Firewall** in the left-hand navigation.                          |  
+----------------------------------------------------------------------------------------------+
| |lab035|                                                                                     |
|                                                                                              |
| |lab036|                                                                                     |
+----------------------------------------------------------------------------------------------+


+----------------------------------------------------------------------------------------------+
| 11. Under the **Web Application Firewall** section select **Enable** from the **Web**
|                                                                                              |
|     **Application Firewall (WAF)** dropdown.                                                 |
|                                                                                              |
| 12. Select the Web Application Firewall name that you created in *Steps 1-6* of this task    |
|                                                                                              |
|     *(<namespace>-appfw)* from the **Enable** dropdown.                                      |
|                                                                                              |
| 13. Scroll to the bottom of the page and click **Save and Exit**                             |
+----------------------------------------------------------------------------------------------+
| |lab037|                                                                                     |
|                                                                                              |
| |lab038|                                                                                     |
+----------------------------------------------------------------------------------------------+


Task 4. Test the Application Firewall and View Security Events
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will validate demonstrate the Web Application Firewall, review the  Security
Monitoring dashboard, and gather security event details.

+----------------------------------------------------------------------------------------------+
| 1. Open another tab in your browser (Chrome shown), navigate to the newly configured Load    |
|                                                                                              |
|    Balancer configuration: **http://<namespace>.lab-sec.f5demos.com**, to confirm it is      |
|                                                                                              |
|    functional.                                                                               |
|                                                                                              |
| 2. Using some of the sample attacks below, add the URI path & variables to your application  |
|                                                                                              |
|    to generate security event data.                                                          |
|                                                                                              |
|    * /?cmd=cat%20/etc/passwd                                                                 |
|    * /product?id=4%20OR%201=1                                                                |
|    * /cart?search=aaa'><script>prompt('Please+enter+your+password');</script>                |
|                                                                                              |
| .. note::                                                                                    |
|    *The web application firewall is blocking these requests to protect the application.*     |
|                                                                                              |
|    *The block page can be customized to provide additional information.*                     |
+----------------------------------------------------------------------------------------------+
| |lab039|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. Returning to the F5 Distributed Cloud Console, use the left-hand navigation to navigate   |
|                                                                                              |
|    to Multi-Cloud App Connect setion and expand **Virtual Hosts** and click on **HTTP Load   |
|                                                                                              |
|    Balancers**.                                                                              |
|                                                                                              |
| 4. Click on the **Security Monitoring** link for your respective load balancer.              |
+----------------------------------------------------------------------------------------------+
| |lab040|                                                                                     |
|                                                                                              |
| |lab041|
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. From the **Dashboard** view, using the horizontal navigation, click **Security Events**.  |
|                                                                                              |
| 8. Note the **Chart** shows a graphical representation of all of the response codes for the  |
|                                                                                              |
|    selected time frame.                                                                      |
|                                                                                              |
| .. note::                                                                                    |
|    *If you lost your 1 Hour Filter, re-apply using Task 2: Step 5*                           |
+----------------------------------------------------------------------------------------------+
| |lab042|                                                                                     |
|                                                                                              |
| |lab043|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. Click the **Hide Chart** link to free up space in the browser window.                     |
|                                                                                              |
| 7. Expand your latest security event as shown.                                               |
|                                                                                              |
| 8. Note the summary detail provided in the **Information** link.  The **Request ID** which   |
|                                                                                              |
|    is synonymous with **Support ID** (filterable) from the Security Event Block Page.        |
|                                                                                              |
| 9. Scroll to the bottom of the information screen to see specific signatures detected and    |
|                                                                                              |
|    actions taken during the security event.                                                  |
|                                                                                              |
| .. note::                                                                                    |
|    *Similar to a Request, Security Events also have additional detail in JSON format.*       |
+----------------------------------------------------------------------------------------------+
| |lab044|                                                                                     |
|                                                                                              |
| |lab045|                                                                                     |
|                                                                                              |
| |lab046|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **End of Lab 1:**  This concludes Lab 1.  In this lab you created an origin pool to connect  |
|                                                                                              |
| to the application, you then created a load balancer and associated the origin pool to the   |
|                                                                                              |
| load balancer.  This allowed the application to be advertised via the F5 Distributed Cloud   |
|                                                                                              |
| Global Network.  The Distributed Cloud Console was then used to review telemetry data        |
|                                                                                              |
| gathered for the application.  Next an Application Firewall policy was created and assigned  |
|                                                                                              |
| to protect the application.  Finally a sample attack was run against the application and the |
|                                                                                              |
| security event data was reviewed within the Distributed Cloud Console.                       |
|                                                                                              |
| A brief presentation will be shared prior to the beginning of Lab 2.                         |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+

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
.. |lab042| image:: _static/lab1-042.png
   :width: 800px
.. |lab043| image:: _static/lab1-043.png
   :width: 800px
.. |lab044| image:: _static/lab1-044.png
   :width: 800px
.. |lab045| image:: _static/lab1-045.png
   :width: 800px
.. |lab046| image:: _static/lab1-046.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px