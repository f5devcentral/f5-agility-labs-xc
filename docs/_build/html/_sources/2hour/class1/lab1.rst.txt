Lab 1: Deploying and Managing F5 Distributed Cloud Web Application Firewall Configuration
=========================================================================================

Lab 1 will focus on the deployment and security of an existing hosted application using F5 
Distributed Cloud Platform and Services. This lab will be deployed in a SaaS only configuration 
with no on-premises (public or private cloud) elements.  All configurations will be made via 
the F5 Distributed Cloud Console and within the F5 Distributed Cloud Global Network services architecture.

For the tasks that follow, you should have already noted your individual **namespace**. If you 
failed to note it, return to the **Introduction** section of this lab, follow the instructions
provided and note your **namespace** accordingly. The **Delegated Domain** and the F5 Distributed Cloud 
**Tenant** are listed below for your convenience as they will be the same for all lab attendees.

* **Delegated Domain:** *.lab-sec.f5demos.com* 
* **F5 Distributed Cloud Tenant:** https://f5-xc-lab-sec.console.ves.volterra.io 

Following the tasks in the prior **Introduction** Section, you should now be able to access the
F5 Distributed Cloud Console, having set your Work Domain Roles and Skill levels. If you have not
done so already, please login to your tenant for this lab and proceed to Task 1.

**Expected Lab Time: 25 minutes**

Task 1: Configure Load Balancer and Origin Pool
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will allow you to deploy and advertise a globally available application.  These
steps will define an application, register its DNS and assign a target as an origin.

+----------------------------------------------------------------------------------------------+
| 1. Following the **Introduction** section instructions, you should now be in the **Web**     |
|                                                                                              |
|    **App & API Protection** configuration window. If for some reason you are not in the      |
|                                                                                              |
|    **Web App & API Protection** window, use the **Select Service** in the left-hand          |
|                                                                                              |
|    navigation, and click **Web App & API Protection** as shown in the *Introduction Section* |
|                                                                                              |
| 2. In the left-hand navigation expand **Manage** and click **Load Balancers > HTTP Load**    |
|                                                                                              |
|    **Balancers**                                                                             |
|                                                                                              |
| 3. In the resulting screen click the **Add HTTP Load Balancer** in the graphic as shown.     |
+----------------------------------------------------------------------------------------------+
| |lab001|                                                                                     |
+----------------------------------------------------------------------------------------------+
| |lab002|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. note::
   *You have defaulted to your specific namespace as that is the only namespace to which you*
   *have administrative access.*

+----------------------------------------------------------------------------------------------+
| 4. Using the left-hand navigation and in the sections as shown, enter the following          |
|                                                                                              |
|    data. Values where **<namespace>** is required, use the name of your given namespace.     |
|                                                                                              |
|    * **Metadata:Name ID:**  *<namespace>-lb*                                                 |
|    * **Basic Configuration: List of Domains:** *<namespace>.lab-sec.f5demos.com*             |
|    * **Basic Configuration: Select Type of Load Balancer:** *HTTP*                           |
|    * **Basic Configuration: Automatically Manage DNS Records:** *(Check the checkbox)*       |
|    * **Basic Configuration: HTTP Port:** *80*                                                |
| Note : If you do not check the checkbox for Automatically Manage DNS Records you will have   | 
| to start over.                                                                               |
+----------------------------------------------------------------------------------------------+
| |lab003|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. In the current window's left-hand navigation, click **Origins**. In the adjacent          |
|                                                                                              |
|    **Origins** section, under **Origin Pools**, click **Add Item**.                          |
+----------------------------------------------------------------------------------------------+
| |lab004|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. In the resulting window, use the drop down as shown and click **Add Item**.               |
+----------------------------------------------------------------------------------------------+
| |lab005|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. In the resulting window, enter **<namespace>-pool** in the **Name** field and click       |
|                                                                                              |
|    **Add Item** under **Origin Servers** as shown.                                           |
+----------------------------------------------------------------------------------------------+
| |lab006|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. In the resulting window, **Public DNS Name of Origin Server** should be selected for      |
|                                                                                              |
|    **Select Type of Origin Server**.                                                         |
|                                                                                              |
| 9. In the **DNS Name** field enter the following hostname:                                   |
|                                                                                              |
|    **demo-app.amer.myedgedemo.com** and then click **Apply**                                 |
+----------------------------------------------------------------------------------------------+
| |lab007|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. After returning to the prior window, make sure **Port:** within the **Origin Servers**   |
|                                                                                              |
|     section, under **Origin Server Port** is configured for **80**.                          |
|                                                                                              |
| 11. Leave all other values as shown while scrolling to the bottom and click, **Continue**.   |
|                                                                                              |
| 12. After returning to the next window and confirming the content, click **Apply**.          |
+----------------------------------------------------------------------------------------------+
| |lab008|                                                                                     |
+----------------------------------------------------------------------------------------------+
| |lab009|                                                                                     |
+----------------------------------------------------------------------------------------------+
| |lab010|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 2: Configure WAF Policy on the Load Balancer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will guide you through adding a Web Application Firewall (WAF) Policy.
These steps will demonstrate various aspects of the configuration.

+----------------------------------------------------------------------------------------------+
| 1. Continuing in the **HTTP Load Balancer** section, on the left-hand menu click on the      |
|                                                                                              |
|    **Web Application Firewall (WAF)** drop down and select **Enable**.                       |
+----------------------------------------------------------------------------------------------+
| |lab011|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. In the resulting **Enable** field drop down, select **Add Item**.                         |
+----------------------------------------------------------------------------------------------+
| |lab012|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. note::
   *The "shared/base-appfw" policy is in the "shared namespace" which can be applied to* 
   *multiple Load Balancer configurations across namespaces, reducing policy sprawl.* 

+----------------------------------------------------------------------------------------------+
| 3. In the new window's **Metadata** section enter **<namespace>-appfw** for the              |
|    **Name**.                                                                                 |
|                                                                                              |
| 4. Under **Enforcement Mode**, change the mode to **Blocking**.                              |
|                                                                                              |
| 5. In the **Detection Settings** section, click the **Security Policy** dropdown.            |
|                                                                                              |
| 6. Select **Custom** from the dropdown menu. Additional configurations will become available.|
+----------------------------------------------------------------------------------------------+
| |lab013|                                                                                     |
+----------------------------------------------------------------------------------------------+
| |lab014|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. In the expanded configuration, in the **Attack Signatures** section use the dropdown for  |
|                                                                                              |
|    **Signature Selection by Accuracy** and select **High, Medium, and Low**.                 |
+----------------------------------------------------------------------------------------------+
| |lab015|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. Leaving all other values as default, scroll to the bottom and click **Continue**.         |
+----------------------------------------------------------------------------------------------+
| |lab016|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. note::
   *Automatic Attack Signatures Tuning is enabled which engages an automatic False Positive*
   *suppression engine.  Any suppressed events are logged within Security Events.*

.. note::
   *Attack Signatures Staging is disabled.  This can be enabled should an Application*
   *Firewall with new or updated attack signatures be staged (monitored) for a period of*
   *prior to enforcement (blocking).*

+----------------------------------------------------------------------------------------------+
| 9. Returning to the **HTTP Load Balancer** window, scroll to (or click in the left-hand      |
|                                                                                              |
|    navigation) to the **Other Settings** section and note the **VIP Advertisement** setting. |
|                                                                                              |
| 10. Click **Save and Exit** at the bottom of the **HTTP Load Balancer** configuration screen.|
+----------------------------------------------------------------------------------------------+
| |lab017|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. note::
   *The above selection controls how/where the application is advertised. The "Internet"*
   *setting means that this application will be advertised globally from the F5*
   *Distributed Cloud Global Network utilizing Anycast.*

+----------------------------------------------------------------------------------------------+
| 11. In the **HTTP Load Balancers** window, note the application hostname under the           |
|                                                                                              |
|     **Domains** column *(This was done in Task1: Step 4)*.                                   |
|                                                                                              |
| 12. Click the **Action** dots, and then in the subsequent menu **Manage Configuration**.     |
+----------------------------------------------------------------------------------------------+
| |lab018|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 13. Click **DNS Information** in the left-hand navigation.                                   |
|                                                                                              |
|     The value for a CNAME is listed under **Host Name**. The associated "Default/Tenant IP"  |
|                                                                                              |
|     is also shown under **IP Address**. The "Default/Tenant IP" is uniquely assigned to each |
|                                                                                              |
|     F5 Distributed Cloud Tenant. Additional Public IPs can be added to the Tenant.           |
+----------------------------------------------------------------------------------------------+
| |lab019|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 14. Click **JSON** in the horizontal navigation at the top-left of the screen.               |
|                                                                                              |
|     The JSON payload (or YAML format, from dropdown) provides for the entire Load Balancer   |
|                                                                                              |
|     configuration.  This can be used for backup or subsequent CI/CD automation operations.   |
+----------------------------------------------------------------------------------------------+
| |lab020|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 15. Click **Documentation** in the horizontal navigation at the top of the screen.           |
|                                                                                              |
|     The Documentation screen provides details on the F5 Distributed Cloud Console API.       |
|                                                                                              |
|     All operations in the F5 Distributed Cloud Platform are API-first. This includes all GUI |
|                                                                                              |
|     actions and associated audit logging.                                                    |
|                                                                                              |
| 16. Click **Cancel and Exit** to return to the **HTTP Load Balancers** screen.               |
+----------------------------------------------------------------------------------------------+
| |lab021|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 3: Testing the WAF Policy & Reviewing Event Data  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You will now perform basic testing of the Web Application Firewall (WAF) Policy. You will also 
review the generated event data to make additional configuration changes.

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
|    * /product?id=4%20OR%201=1                                                                |
|    * /../../../../etc/shadow                                                                 |
|    * /cart?search=aaa'><script>prompt('Please+enter+your+password');</script>                |
|                                                                                              |
| 3. In the resulting block screens, note the **URL** and the **Support ID**. (copy and paste  |
|                                                                                              |
|    to a notepad or note resource).                                                           |
+----------------------------------------------------------------------------------------------+
| |lab022|                                                                                     |
+----------------------------------------------------------------------------------------------+
| |lab024|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. Returning to the F5 Distributed Cloud Console, use the left-hand menu to select           |
|                                                                                              |
|    **Overview > Dashboard > Performance Dashboard** section.  This dashboard will provide a  |
|                                                                                              |
|    summary view for all of the configured Load Balancers.                                    |
+----------------------------------------------------------------------------------------------+
| |lab025|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. note::
   *As you have not run many requests, summary analytics may not be available in the*
   *dashboard view yet.*

+----------------------------------------------------------------------------------------------+
| 5. Scroll to the bottom and select your load balancer.                                       |
+----------------------------------------------------------------------------------------------+
| |lab026|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. From the **Performance Dashboard** view, using the horizontal navigation, click           |
|                                                                                              |
|    **Requests**.                                                                             |
|                                                                                              |
| 7. Change the viewable time period from 5 minutes (default) to **1 hour** by selecting the   |
|                                                                                              |
|    dropdown shown, click **Last 1 hour** then clicking **Apply**.                            |
+----------------------------------------------------------------------------------------------+
| |lab027|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. note::
   *Security Event data may take 15-20 seconds to populate in the Console. Please force a*
   *refresh using the Refresh icon next to the Time Period selection in step 6.*

+----------------------------------------------------------------------------------------------+
| 8. Expand one of the requests and note the **Information** tab link. This summarizes request |
|                                                                                              |
|    details and provides request duration timing.                                             |
+----------------------------------------------------------------------------------------------+
| |lab028|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. Click on the **JSON** link to get more data about the request.                            |
|                                                                                              |
| 10. Click **Add Filter** as shown to see how you can filter by key identifiers.              |
+----------------------------------------------------------------------------------------------+
| |lab029|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 11. Using the left-hand navigation, click **Dashboards** and then select **Security**.       |
|                                                                                              |
|     If you lost your 1 Hour Filter, re-apply using Task 3: Step 7.                           |
+----------------------------------------------------------------------------------------------+
| |lab033|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. Review the **Security Dashboard** display (you may have limited data) .                  |
+----------------------------------------------------------------------------------------------+
| |lab034|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 13. Scroll to **Load Balancers** section and click the **<namespace>-lb** object.            |
+----------------------------------------------------------------------------------------------+
| |lab035|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. note::
   *This is a multi-application view. Here you could get the summary security status of*
   *each application (iw Threat Level, WAF Mode, etc)* and then click into one for more*
   *specific details.*

+----------------------------------------------------------------------------------------------+
| 14. From the **Security Dashboard** view, using the horizontal navigation, click **Security**|
|                                                                                              |
|     **Analytics**.                                                                           |
+----------------------------------------------------------------------------------------------+
| |lab036|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 15. Expand your latest security event as shown.                                              |
+----------------------------------------------------------------------------------------------+
| |lab037|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. note::
   *If you lost your 1 Hour Filter, re-apply using Task 3: Step 6*

+----------------------------------------------------------------------------------------------+
| 16. Note the summary detail provided **Information** link and identify the **Request ID**    |
|                                                                                              |
|     which is synonymous with **Support ID** (filterable) from the Security Event Block Page. |
+----------------------------------------------------------------------------------------------+
| |lab038|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 17. Scroll to the bottom of the information screen to see specific signatures detected and   |
|                                                                                              |
|     actions taken during the security event.                                                 |
|                                                                                              |
| 18. Next, click on the **Add Filter** link just under the **Security Analytics** title near  |
|                                                                                              |
|     the top of the **Security Analytics** window.                                            |
+----------------------------------------------------------------------------------------------+
| |lab039|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 19. Type **req** in the open dialogue window and select **req_id** from the dropdown.        |
|                                                                                              |
| 20. Next, select **In** from the **Select Operator** dropdown.                               |
|                                                                                              |
| 21. Finally, select/assign a value that matches one of your copied **Support IDs** from      |
|                                                                                              |
|     Task 3, Step 2 as shown.  You can also optionally just paste the Support ID in the       |
|                                                                                              |
|     value field and click **Apply**.                                                         |
+----------------------------------------------------------------------------------------------+
| |lab040|                                                                                     |
+----------------------------------------------------------------------------------------------+
| |lab041|                                                                                     |
+----------------------------------------------------------------------------------------------+
| |lab042|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 22. You should now be filtered to a single "Security Event", as shown with your selected     |
|                                                                                              |
|     filter. You can expand and review the request as desired using the **arrow** icon.       |
|                                                                                              |
| 23. Under the **Actions** column, click on the three Action dots (Scroll to right).          |
|                                                                                              |
|     This is where you will be able to create WAF Exceptions.                                 |
|                                                                                              |
|     Additionally, Add Blocked and Add Trusted Clients is available.                          |
+----------------------------------------------------------------------------------------------+
| |lab043|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **End of Lab 1:**  This concludes Lab 1, feel free to review and test the configuration.     |
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
.. |lab047| image:: _static/lab1-047.png
   :width: 800px
.. |lab048| image:: _static/lab1-048.png
   :width: 800px
.. |lab049| image:: _static/lab1-049.png
   :width: 800px
.. |lab050| image:: _static/lab1-050.png
   :width: 800px
.. |lab051| image:: _static/lab1-051.png
   :width: 800px
.. |lab052| image:: _static/lab1-052.png
   :width: 800px
.. |lab053| image:: _static/lab1-053.png
   :width: 800px
.. |lab054| image:: _static/lab1-054.png
   :width: 800px
.. |lab055| image:: _static/lab1-055.png
   :width: 800px
.. |lab056| image:: _static/lab1-056.png
   :width: 800px
.. |lab057| image:: _static/lab1-057.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
