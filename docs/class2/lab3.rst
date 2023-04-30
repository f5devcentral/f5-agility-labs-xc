Lab 3: Exploring Service Policies 
=================================

The following lab tasks will guide you the configuration of various Service Policies 
which can be used to implement a variety of security controls. 

Task 1: Creating Local Namespace Service Policies  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will add geo-filter and allowed-ip based service policies.

+----------------------------------------------------------------------------------------------+
| 1. Within Web **App & API Protection**, under the **Manage** section in the left-hand        |
|                                                                                              |
|    navigation menu, click **Service Policies**. In the flyout menu, click the **Service**    |
|                                                                                              |
|    **Policies** link.                                                                        |
|                                                                                              |
| 2. Observe the existing Service Policies and note they are source from the **shared**        |
|                                                                                              |
|    namespace which means they could be used within any other namespace.                      |
|                                                                                              |
| 3. Click **Add Service Policy** in the top left area as shown.                               |
|                                                                                              |
| .. note::                                                                                    |
|    *Using shared namespace Service Policies provides the ability to use API-updated*         |
|                                                                                              |
|    *policy controls to implement common service security across multiple resources.*         |
+----------------------------------------------------------------------------------------------+
| |lab001|                                                                                     |
|                                                                                              |
| |lab002|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. In the **Metadata** section enter **geo-filter** for the **Name** and then click **Rules**|
|                                                                                              |
|    in the left-hand navigation.                                                              |
|                                                                                              |
| 5. Select **Denied Sources** from the dropdown for **Select Policy Rules**.                  |
+----------------------------------------------------------------------------------------------+
| |lab003|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. Locate the **Country List** input field and begin typing **Fiji** and then select it from |
|                                                                                              |
|    the list that appears.                                                                    |
|                                                                                              |
| 7. Click the dropdown for **Default Action**. Observe the available options and select       |
|                                                                                              |
|    **Next Policy** then click **Save and Exit**.                                             |
+----------------------------------------------------------------------------------------------+
| |lab004|                                                                                     |
|                                                                                              |
| |lab005|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. Observe the resulting added **geo-filter** Service Policy added in your namespace.        |
+----------------------------------------------------------------------------------------------+
| |lab006|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. Open another tab in your browser (Chrome shown), navigate to https://ipinfo.io and note   |
|                                                                                              |
|    your IP address as shown. (example provided)                                              |
+----------------------------------------------------------------------------------------------+
| |lab007|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. Return to the **Service Policies** window and click **Add Service Policy**.              |
+----------------------------------------------------------------------------------------------+
| |lab008|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 11. In the **Metadata** section enter **allowed-ip** for the **Name** and then click         |
|                                                                                              |
|     **Rules** in the left-hand navigation.                                                   |
|                                                                                              |
| 12. Select **Allowed Sources** from the dropdown for **Select Policy Rules**.                |
+----------------------------------------------------------------------------------------------+
| |lab009|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 13. In the updated **IPv4 Prefix List** section, click **Configure** link.                   |
|                                                                                              |
| .. note::                                                                                    |
|    *The section just below "List of IP Prefix Set" allows you to build a collection of*      |
|                                                                                              |
|    *of various IP lists which can be maintained through API controls.*                       |
+----------------------------------------------------------------------------------------------+
| |lab010|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 14. Enter your IP address captured in Step 9 above with mask notation (**/32**) as shown then|
|                                                                                              |
|     click the **Apply** button.                                                              |
+----------------------------------------------------------------------------------------------+
| |lab011|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 15. In the resulting window, observer **IPv4 Prefix List** in now configured then scroll to  |
|                                                                                              |
|     the bottom of the **Rules** section.                                                     |
+----------------------------------------------------------------------------------------------+
| |lab012|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 16. Locate and click the dropdown for **Default Action**, and select **Deny** then click     |
|                                                                                              |
|     **Save and Exit**.                                                                       |
+----------------------------------------------------------------------------------------------+
| |lab013|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 17. Observe the resulting added **allowed-ip** Service Policy added in your namespace.       |
+----------------------------------------------------------------------------------------------+
| |lab014|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 2: Attaching Service Policies and configuring IP Reputation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will enable you to attach Service Policies to your configured Load Balancer.
It will also help you understand additional approaches for Service Policies.

+----------------------------------------------------------------------------------------------+
| 1. Return to the Load Balancer in the F5 Distributed Cloud Console,**Manage > Load Balancer**|
|                                                                                              |
|    **> HTTP Load Balancers** and use the **Action Dots** and click **Manage Configuration**  |
|                                                                                              |
| 2. Click **Edit Configuration** in the top right-hand corner.                                |
+----------------------------------------------------------------------------------------------+
| |lab015|                                                                                     |
|                                                                                              |
| |lab016|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. Click **Common Security Controls** in the left-hand navigation.                           |
|                                                                                              |
| 4. From the **Service Policies** dropdown, select **Apply Specified Service Policies**.      |
|                                                                                              |
| 5. In the added menu for **Apply Specified Service Policies**, click **Configure**.          |
+----------------------------------------------------------------------------------------------+
| |lab017|                                                                                     |
|                                                                                              |
| |lab018|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. In the resulting **Policies** window, use the **List of Policies** dropdown to select     |
|                                                                                              |
|    your **<namespace>/geo-filter** Service Policy then click **Apply**.                      |
+----------------------------------------------------------------------------------------------+
| |lab019|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. Returning to the Load Balancer window, you will note the changes shown in your            |
|                                                                                              |
|    **Service Policies** section.                                                             |
|                                                                                              |
| 8. As we are already in this section, we will go ahead and add IP reputation filtering. This |
|                                                                                              |
|    can be added as a Service Policy (shared or local namespace) or as a direct configuration.|
|                                                                                              |
| 9. To start, the IP Reputation as a direct configuration (on the Load Balancer), locate the  |
|                                                                                              |
|    **IP Reputation** section and click the dropdown menu, then select **Enable**.            |
+----------------------------------------------------------------------------------------------+
| |lab020|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. Using the **List of IP Threat Categories to choose** you may add any of the available    |
|                                                                                              |
|     Threat Categories listed.                                                                |
|                                                                                              |
| 11. Select **Spam Sources** and **Tor Proxy**, then click **Other Settings** in the left-hand|
|                                                                                              |
|     navigation or scroll to the bottom of the window and click the **Save and Exit** button. |
+----------------------------------------------------------------------------------------------+
| |lab021|                                                                                     |
|                                                                                              |
| |lab022|                                                                                     |
|                                                                                              |
| |lab023|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. In your browser (Chrome shown), navigate to your application/Load Balancer configuration:|
|                                                                                              |
|     **http://<namespace>.lab-sec.f5demos.com**.                                              |
|                                                                                              |
| 13. You should receive a 403 Forbidden error.  This is due to a Service Policy configuration |
|                                                                                              |
|     error.  Because we only attached the **geo-filter** Service Policy and the **Default**   |
|                                                                                              |
|     **Action** was **Next Policy**, there is no other or next policy to "Allow" traffic,     |
|                                                                                              |
|     therefore, all other traffic is disallowed producing the 403.  This is will also show in |
|                                                                                              |
|     the **Security Events** window.                                                          |
+----------------------------------------------------------------------------------------------+
| |lab024|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 14. Return to **Web App & API Protection** in the F5 Distributed Cloud Console, **Manage >** |
|                                                                                              |
|     **Load Balancer > HTTP Load Balancers** and use the **Action Dots** and click **Manage** |
|                                                                                              |
|     **Configuration**.                                                                       |
|                                                                                              |
| 15. Click **Edit Configuration** in the top right-hand corner.                               |
+----------------------------------------------------------------------------------------------+
| |lab025|                                                                                     |
|                                                                                              |
| |lab026|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 16. Click **Common Security Controls** in the left-hand navigation.                          |
|                                                                                              |
| 17. From the **Service Policies** section, click **Edit Configuration**.                     |
+----------------------------------------------------------------------------------------------+
| |lab027|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 18. In the resulting window click **Add Item** as shown.  From the added dropdown select the |
|                                                                                              |
|     **<namespace>/allowed-ip** Service Policy previously created.                            |
|                                                                                              |
| 19. Observe the order. Service Policies must be ordered correctly in a order to process      |
|                                                                                              |
|     traffic as intended.  Click **Apply** when completed.                                    |
|                                                                                              |
| .. note::                                                                                    |
|   *Because the "allowed-ip" begins with an allowed ip (yours) and ends in a "Deny" a*        |
|                                                                                              |
|   *positive security model will be applied (denying all other traffic).  Similar positive or*|
|                                                                                              |
|   *negative service policies can be created and applied*                                     |
+----------------------------------------------------------------------------------------------+
| |lab028|                                                                                     |
|                                                                                              |
| |lab029|                                                                                     |
|                                                                                              |
| |lab030|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 20. Click **Other Settings** in the left-hand navigation or scroll to the bottom of the      |
|                                                                                              |
|     HTTP Load Balancer configuration and click **Save and Exit**.                            |
+----------------------------------------------------------------------------------------------+
| |lab031|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 21. In your browser (Chrome shown), navigate to your application/Load Balancer configuration:|
|                                                                                              |
|     **http://<namespace>.lab-sec.f5demos.com**. You should now be able to successfully       |
|                                                                                              |
|     access the application.                                                                  |
+----------------------------------------------------------------------------------------------+
| |lab032|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 3: Create, assign and test a Custom Service Policy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task you will add Custom Policy and assign it to your Load Balancer. Custom Service 
Policies provide the flexibility to build **Positive** or **Negative** security models and custom
rules or controls.

Through prior lab tasks, Fiji has been Geo-location blocked, and your testing resource's 
IP has been allowed, and all other IP addresses have been denied> You will build some additional 
blocking/deny rules to illustrate Service Policy controls. 

+----------------------------------------------------------------------------------------------+
| 1. Before beginning this task, re-evaluate your access from your client to the following:    |
|                                                                                              |
|    * **Browser**: http://<namespace>.lab-sec.f5demos.com?page=header                         |
|    * **cURL**: http://<namespace>.lab-sec.f5demos.com                                        |
|    * **cURL**: http://<namespace>.lab-sec.f5demos.com?page=header                            |
|                                                                                              |
|    The expectation is that all are successful based on the current Service Policies.         |
| .. note::                                                                                    |
|    *cURL is supported on Windows, Mac & Linux platforms*.                                    |
+----------------------------------------------------------------------------------------------+
| |lab033|                                                                                     |
|                                                                                              |
| |lab034|                                                                                     |
|                                                                                              |
| |lab035|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. Returning to **Web App & API Protection**, in the left-hand navigation menu, expand the   |
|                                                                                              |
|    **Manage** section and click **Service Policies**. In the flyout menu, click the          |
|                                                                                              |
|    **Service Policies** link.                                                                | 
|                                                                                              |
| 3. Observe the existing Service Policies and note that some are sourced from the **shared**  |
|                                                                                              |
|    namespace which means they could be used within any other namespace.                      |
|                                                                                              |
| 4. Click **Add Service Policy** in the top left area as shown.                               |
+----------------------------------------------------------------------------------------------+
| |lab036|                                                                                     |
|                                                                                              |
| |lab037|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. In the **Metadata** section enter **custom-deny** for the **Name** and then click         |
|                                                                                              |
|    **Rules** in the left-hand navigation.                                                    |
|                                                                                              |
| 6. Then select **Custom Rule List** from the dropdown for **Select Policy Rules**.           |
|                                                                                              |
|    Locate **Rules** configuration section and click **Configure**.                           |
+----------------------------------------------------------------------------------------------+
| |lab038|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. In the **Rules** window, click **Add Item**.                                              |
|                                                                                              |
| 8. In the **Metadata** section **Name** field input **curl-deny** and toggle the             |
|                                                                                              |
|    **Show Advanced Fields** to see extra configuration options in **Action** section.        |
|                                                                                              |
| 9. In the **Action** section, select **Deny** for the **Action** & use the drop-down select  |
|                                                                                              |
|    menu for **Select App Firewall Action Type** to select **App Firewall Detection Control**.|
+----------------------------------------------------------------------------------------------+
| |lab039|                                                                                     |
|                                                                                              |
| |lab040|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. In the expanded **App Firewall Detection Control**, locate the **Attack Types** section  |
|                                                                                              |
|     and click **Add Item** as shown.                                                         |
|                                                                                              |
| 11. In the new input field for **Attack Type**, use the drop-down to select **Non-Browser**  |
|                                                                                              |
|     **Client**.                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab041|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. In the expanded **App Firewall Detection Control**, locate the **Bot Names** section     |
|                                                                                              |
|     and click **Add Item** as shown.                                                         |
|                                                                                              |
| 13. In the new input field for **Bot Name**, enter **curl** as shown.                        |
+----------------------------------------------------------------------------------------------+
| |lab042|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 14. Scroll down to the bottom of the **Rule Configuration** and click **Apply**.             |
+----------------------------------------------------------------------------------------------+
| |lab043|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 15. In the **custom-deny** Service Policy Rule window, click **Add Item** to add another rule|
|                                                                                              |
| .. note::                                                                                    |
|    *Multiple Rules can be added to a single Service Policy*.                                 |
+----------------------------------------------------------------------------------------------+
| |lab044|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 16. In the **Metadata** section **Name** field input **header-page-deny** and then click     |
|                                                                                              |
|     **Request Match** in the left-hand navigation.                                           |
+----------------------------------------------------------------------------------------------+
| |lab045|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 17. In the **Request Match** section under **HTTP Methods**, add **GET** to the method list. |
|                                                                                              |
| 18. In the **HTTP Path** area, click the **Configure** link.                                 |
+----------------------------------------------------------------------------------------------+
| |lab046|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 19. Click **Add Item** in **Prefix Values** area and in the input field type "/index.php"    |
|                                                                                              |
|     and then click **Apply**.                                                                |
+----------------------------------------------------------------------------------------------+
| |lab047|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 20. Observe that the **HTTP Path** is now **Configured**.                                    |
|                                                                                              |
| 21. In section **HTTP Query Parameters** click **Add Item**                                  |
+----------------------------------------------------------------------------------------------+
| |lab048|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 22. In **Query Parameter Matcher** window, in the **Query Parameter Name**, field enter      |
|                                                                                              |
|     **page**.                                                                                |
|                                                                                              |
| 23. In **Match Options** section, ensure **Match Values** is selected and then click **Add** |
|                                                                                              |
|     **Item** in the area with **Exact Values** as shown.                                     |
|                                                                                              |
| 24. Input **header** into the **Exact Values** input field as shown and then click **Apply**.|
+----------------------------------------------------------------------------------------------+
| |lab049|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 25. Observe that the **HTTP Query Parameters** is now **Configured** and scroll to the       |
|                                                                                              |
|     of the rule configuration and click **Apply**                                            |
+----------------------------------------------------------------------------------------------+
| |lab050|                                                                                     |
|                                                                                              |
| |lab051|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 26. Observe that both configured rules are present and then click **Apply**.                 |
|                                                                                              |
| .. note::                                                                                    |
|    *Rules within the Service Policy can placed in order as needed*.                          |
+----------------------------------------------------------------------------------------------+
| |lab052|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 27. Observe that the Custom Rule is now configured for **custom-deny** Service Policy and    |
|                                                                                              |
|     click **Apply**.                                                                         |
+----------------------------------------------------------------------------------------------+
| |lab053|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 28. The **custom-deny** Service Policy is now listed among all Service Policies and has a    |
|                                                                                              |
|     **Rule Count** of **2**.                                                                 |
|                                                                                              |
| .. note::                                                                                    |
|    *This window also show the Service Policy "Hits" when validating usage*.                  |
+----------------------------------------------------------------------------------------------+
| |lab054|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 29. Return to **Web App & API Protection** in the F5 Distributed Cloud Console, **Manage >** |
|                                                                                              |
|     **Load Balancer > HTTP Load Balancers** and use the **Action Dots** and click **Manage** |
|                                                                                              |
|     **Configuration**.                                                                       |
|                                                                                              |
| 30. Click **Edit Configuration** in the top right-hand corner.                               |
+----------------------------------------------------------------------------------------------+
| |lab055|                                                                                     |
|                                                                                              |
| |lab056|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 31. Click **Common Security Controls** in the left-hand navigation.                          |
|                                                                                              |
| 32. From the **Service Policies** section, click **Edit Configuration**.                     |
+----------------------------------------------------------------------------------------------+
| |lab057|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 33. Observe the order of the previously created Service Policies (geo-filter,allowed-ip) and |
|                                                                                              |
|     click **Add Item**.  Use thw drop-down as shown and select **<namespace>/custom-deny**   |
|                                                                                              |
|     from the available Service Policy list.                                                  |
|                                                                                              |
| 34. Click the six squares icon to drag **<namespace>/custom-deny** into the second position  |
|                                                                                              |
|     in policy order as shown then click **Apply**.                                           |
+----------------------------------------------------------------------------------------------+
| |lab058|                                                                                     |
|                                                                                              |
| |lab059|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 35. Observe the configured state on Services Polices then click **Other Settings** or scroll |
|                                                                                              |
|     to the bottom of the HTTP Load Balancer configuration and click **Save & Exit**.         |
+----------------------------------------------------------------------------------------------+
| |lab060|                                                                                     |
|                                                                                              |
| |lab061|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 36. Time to re-access your access. Now test the following from your client:                  |
|                                                                                              |
|     * **Browser**: http://<namespace>.lab-sec.f5demos.com?page=header                        |
|     * **cURL**: http://<namespace>.lab-sec.f5demos.com                                       |
|     * **cURL**: http://<namespace>.lab-sec.f5demos.com?page=header                           |
|                                                                                              |
| 37. What where your results?                                                                 |
+----------------------------------------------------------------------------------------------+
| |lab062|                                                                                     |
+----------------------------------------------------------------------------------------------+

Service Policies provide a powerful framework to implement both positive and negative security models
and you matching criteria from client requests (headers, parameters, paths, request body payload) to 
effectively control the access to protected applications and APIs.

Task 4: Observing Route Configurations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

NOTE: THIS SECTION HS NOT YET BEEN UPDATED

The following steps will enable you to attach Service Policies to your configured Load Balancer.
It will also help you understand additional approaches for Service Policies.

+----------------------------------------------------------------------------------------------+
| 1. Return to the Load Balancer in the F5 Distributed Cloud Console, *Manage > Load Balancer* |
|                                                                                              |
|    *> HTTP Load Balancers* and use the **Action Dots** and click **Manage Configuration**    |
|                                                                                              |
| 2. Click **Edit Configuration** in the top right-hand corner.                                |
+----------------------------------------------------------------------------------------------+
| |lab063|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. Click **Routes Configuration** in the left-hand navigation.                               |
|                                                                                              |
| 4. Toggle the **Show Advanced Fields** button to the **On** position.                        |
|                                                                                              |
| 5. Under the **Routes** section, click **Configure**.                                        |
+----------------------------------------------------------------------------------------------+
| |lab064|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. In **Routes**, click the **Add Item** link.                                               |
|                                                                                              |
| 7. In the resulting menu, toggle the **Show Advanced Fields** button to the **On** position. |
|                                                                                              |
| 8. Observe the various route types and matching criteria controls that can be leveraged to   |
|                                                                                              |
|    securely control access, perform pool targeting, make path responses or develop custom    |
|                                                                                              |
|    control to secure protected applications.                                                 |
+----------------------------------------------------------------------------------------------+
| |lab065|                                                                                     |
|                                                                                              |
| |lab066|                                                                                     |
|                                                                                              |
| |lab067|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **End of Lab 3:**  This concludes Lab 3, feel free to review and test the configuration.     |
|                                                                                              |
| A Q&A session will begin shortly to conclude the overall lab.                                |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. |lab001| image:: _static/lab3-001.png
   :width: 800px
.. |lab002| image:: _static/lab3-002.png
   :width: 800px
.. |lab003| image:: _static/lab3-003.png
   :width: 800px
.. |lab004| image:: _static/lab3-004.png
   :width: 800px
.. |lab005| image:: _static/lab3-005.png
   :width: 800px
.. |lab006| image:: _static/lab3-006.png
   :width: 800px
.. |lab007| image:: _static/lab3-007.png
   :width: 800px
.. |lab008| image:: _static/lab3-008.png
   :width: 800px
.. |lab009| image:: _static/lab3-009.png
   :width: 800px
.. |lab010| image:: _static/lab3-010.png
   :width: 800px
.. |lab011| image:: _static/lab3-011.png
   :width: 800px
.. |lab012| image:: _static/lab3-012.png
   :width: 800px
.. |lab013| image:: _static/lab3-013.png
   :width: 800px
.. |lab014| image:: _static/lab3-014.png
   :width: 800px
.. |lab015| image:: _static/lab3-015.png
   :width: 800px
.. |lab016| image:: _static/lab3-016.png
   :width: 800px
.. |lab017| image:: _static/lab3-017.png
   :width: 800px
.. |lab018| image:: _static/lab3-018.png
   :width: 800px
.. |lab019| image:: _static/lab3-019.png
   :width: 800px
.. |lab020| image:: _static/lab3-020.png
   :width: 800px
.. |lab021| image:: _static/lab3-021.png
   :width: 800px
.. |lab022| image:: _static/lab3-022.png
   :width: 800px
.. |lab023| image:: _static/lab3-023.png
   :width: 800px
.. |lab024| image:: _static/lab3-024.png
   :width: 800px
.. |lab025| image:: _static/lab3-025.png
   :width: 800px
.. |lab026| image:: _static/lab3-026.png
   :width: 800px
.. |lab027| image:: _static/lab3-027.png
   :width: 800px
.. |lab028| image:: _static/lab3-028.png
   :width: 800px
.. |lab029| image:: _static/lab3-029.png
   :width: 800px
.. |lab030| image:: _static/lab3-030.png
   :width: 800px
.. |lab031| image:: _static/lab3-031.png
   :width: 800px
.. |lab032| image:: _static/lab3-032.png
   :width: 800px
.. |lab033| image:: _static/lab3-033.png
   :width: 800px
.. |lab034| image:: _static/lab3-034.png
   :width: 800px
.. |lab035| image:: _static/lab3-035.png
   :width: 800px
.. |lab036| image:: _static/lab3-036.png
   :width: 800px
.. |lab037| image:: _static/lab3-037.png
   :width: 800px
.. |lab038| image:: _static/lab3-038.png
   :width: 800px
.. |lab039| image:: _static/lab3-039.png
   :width: 800px
.. |lab040| image:: _static/lab3-040.png
   :width: 800px
.. |lab041| image:: _static/lab3-041.png
   :width: 800px
.. |lab042| image:: _static/lab3-042.png
   :width: 800px   
.. |lab043| image:: _static/lab3-043.png
   :width: 800px   
.. |lab044| image:: _static/lab3-044.png
   :width: 800px   
.. |lab045| image:: _static/lab3-045.png
   :width: 800px   
.. |lab046| image:: _static/lab3-046.png
   :width: 800px   
.. |lab047| image:: _static/lab3-047.png
   :width: 800px   
.. |lab048| image:: _static/lab3-048.png
   :width: 800px   
.. |lab049| image:: _static/lab3-049.png
   :width: 800px   
.. |lab050| image:: _static/lab3-050.png
   :width: 800px   
.. |lab051| image:: _static/lab3-051.png
   :width: 800px   
.. |lab052| image:: _static/lab3-052.png
   :width: 800px   
.. |lab053| image:: _static/lab3-053.png
   :width: 800px   
.. |lab054| image:: _static/lab3-054.png
   :width: 800px   
.. |lab055| image:: _static/lab3-055.png
   :width: 800px   
.. |lab056| image:: _static/lab3-056.png
   :width: 800px   
.. |lab057| image:: _static/lab3-057.png
   :width: 800px   
.. |lab058| image:: _static/lab3-058.png
   :width: 800px   
.. |lab059| image:: _static/lab3-059.png
   :width: 800px   
.. |lab060| image:: _static/lab3-060.png
   :width: 800px   
.. |lab061| image:: _static/lab3-061.png
   :width: 800px   
.. |lab062| image:: _static/lab3-062.png
   :width: 800px   
.. |lab063| image:: _static/lab3-063.png
   :width: 800px   
.. |lab064| image:: _static/lab3-064.png
   :width: 800px   
.. |lab065| image:: _static/lab3-065.png
   :width: 800px   
.. |lab066| image:: _static/lab3-066.png
   :width: 800px   
.. |lab067| image:: _static/lab3-067.png
   :width: 800px   
.. |labend| image:: _static/labend.png
   :width: 800px
      
