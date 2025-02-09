Lab 3: Zero Day Exploit Response with Rate Limiting and Custom Service Policies
===============================================================================

**Objective:**

* Protect against a Zero Day Exploit using Rate Limiting

* Build Custom Service Policies

**Narrative:** 

You've been called into an all-hands war room conference call.  There is a zero-day exploit specifically
targeting ACME Corp's application.  The attacks are coming from multiple IP addresses so a simple IP shun 
will not be effective.  The attacks are compomising the application as valid users are getting poor performance
as your application infrastructure is being overloaded.  ACME Corp's security response team has identified 
that the zero-day can be mitigated by blocking curl agents and creating a custom web vulnerability signature.  

After reviewing the data, you've decided to leverage Rate Limiting and Service Policies to help ACME Corp
restore service to users and stop the attack.


**Expected Lab Time: 30 minutes**


Task 1: Establishing a Baseline
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will access a test website/webpage to experience access without a Rate Limiting Policy
engaged.  This will demonstrate that any user can request data from the application without limits.  

#. In your web browser, enable Developer Tools and browse to the ACME Corp application.  
   Chrome is shown in this example (F12)  

   **http://<namespace>.lab-sec.f5demos.com/ratelimit.php**  

#. Refresh the page multiple times and notice you do not receive any errors nor blocked messages.  
   The browser's developer tool will display multiple HTTP 200 OK messages.  Let's change that behavior.

   |lab000|

Task 2: Creating a Rate Limiting Policy 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will add a Rate Limiting Policy to the application Load Balancer previously created.
Rate Limiting can be used to implement a variety of L7 security controls; assisting in L7 DDoS, 
protecting heavy URLs (service process impactful) or mitigating impacts to other controlled endpoints.  
This will help alleviate the strain on the application infrastructure by limiting the number of requests
each client can make.

+----------------------------------------------------------------------------------------------+
| 1. Return to the **Web App & API Protection** configuration window. In the left-hand         |
|                                                                                              |
|    navigation, expand **Manage** and click **Load Balancers > HTTP Load Balancers**.         |
|                                                                                              |
| 2. Use the **Action Dots** and click **Manage Configuration**                                |
|                                                                                              |
| 3. Click **Edit Configuration** in the top right-hand corner.                                |
+----------------------------------------------------------------------------------------------+
| |lab001|                                                                                     |
|                                                                                              |
| |lab002|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. Click **Common Security Controls** in the left-hand navigation & locate **Rate Limiting**.|
|                                                                                              |
| 5. Click the dropdown for **Rate Limiting** and select **Custom Rate Limiting Parameters**.  |
+----------------------------------------------------------------------------------------------+
| |lab003|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. In the expanded **Custom Rate Limiting Parameters** click the **View Configuration** Link.|
+----------------------------------------------------------------------------------------------+
| |lab004|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. In the resulting **Rate Limit Configuration** window, in the **Request Rate Limiter**     |
|                                                                                              |
|    section set the following values as shown:                                                |
|                                                                                              |
|    * **Number:** 2                                                                           |
|    * **Per Period:** Minute                                                                  |
|    * **Burst Multiplier:** 1                                                                 |
|                                                                                              |
| 8. Click the drop-down for **Rate Limiter Policies** and select **Rate Limiter Policies**.   |
+----------------------------------------------------------------------------------------------+
| |lab005|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. In the new row for **Rate Limiter Policies**, click the dropdown an then select **Add**   |
|                                                                                              |
|    **Item** from the list as shown.                                                          |
+----------------------------------------------------------------------------------------------+
| |lab006|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. In the **Rate Limiter Policy** window, enter **rate-limit** in the **Name** field in     |
|                                                                                              |
|     **Metadata** section and then click **Configure** within the **Rules** section.          |
|                                                                                              |
| 11. In the resulting **Rules** window, click **Add Item**.                                   |
+----------------------------------------------------------------------------------------------+
| |lab007|                                                                                     |
|                                                                                              |
| |lab008|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. In the **Rate Limiter Policy** window within the **Metadata** section input              |
|                                                                                              |
|     **rate-limit-auth** into the **Name** field.                                             |
|                                                                                              |
| 13. Using the **Actions** drop-down select, **Apply Rate Limiter**.                          |
|                                                                                              |
| 14. In the left-hand navigation, click on **Request Match**.                                 |
+----------------------------------------------------------------------------------------------+
| |lab009|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 15. In the **Request Match** section and select the **Configure** link in the **HTTP Method**|
|                                                                                              |
|     section as shown.                                                                        |
|                                                                                              |
| 16. In the resulting **HTTP Method** window under **Method List**, select **POST** then      |
|                                                                                              |
|     click **Apply**.                                                                         |
+----------------------------------------------------------------------------------------------+
| |lab010|                                                                                     |
|                                                                                              |
| |lab011|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 17. Observe that **HTTP Method** now appears **Configured**.                                 |
|                                                                                              |
| 18. Further down in the **Request Match** section, select the **Configure** link in the      |
|                                                                                              |
|     **HTTP Path** section as shown.                                                          |
|                                                                                              |
| 19. Observe the various Path definition options, click **Add Item** in the **Prefix Values** |
|                                                                                              |
|     section the input **/auth.php** as shown and then click **Apply**.                       |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab012|                                                                                     |
|                                                                                              |
| |lab013|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 20. Observe that **HTTP Path** now also appears **Configured**. Click **Apply** on the       |
|                                                                                              |
|     **Rate Limiter Policy** window.                                                          |
|                                                                                              |
| 21. Observe the rate limit rule just created and click **Add Item** to build another rule.   |
+----------------------------------------------------------------------------------------------+
| |lab014|                                                                                     |
|                                                                                              |
| |lab015|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 22. In the **Rate Limiter Policy** window within the **Metadata** section input              |
|                                                                                              |
|     **rate-limit-page** into the **Name** field.                                             |
|                                                                                              |
| 23. Using the **Actions** drop-down select, **Apply Rate Limiter**.                          |
|                                                                                              |
| 24. In the left-hand navigation, click on **Request Match**.                                 |
+----------------------------------------------------------------------------------------------+
| |lab016|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 25. In the **Request Match** section and select the **Configure** link in the **HTTP Method**|
|                                                                                              |
|     section as shown.                                                                        |
|                                                                                              |
| 26. In the resulting **HTTP Method** window under **Method List**, select **GET** then       |
|                                                                                              |
|     click **Apply**.                                                                         |
+----------------------------------------------------------------------------------------------+
| |lab017|                                                                                     |
|                                                                                              |
| |lab018|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 27. Observe that **HTTP Method** now appears **Configured**.                                 |
|                                                                                              |
| 28. Further down in the **Request Match** section, select the **Configure** link in the      |
|                                                                                              |
|     **HTTP Path** section as shown.                                                          |
|                                                                                              |
| 29. Observe the various Path definition options, click **Add Item** in the **Prefix Values** |
|                                                                                              |
|     section the input **/ratelimit.php** as shown and then click **Apply**.                  |
+----------------------------------------------------------------------------------------------+
| |lab019|                                                                                     |
|                                                                                              |
| |lab020|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 30. Observe that **HTTP Path** now also appears **Configured**. Click **Apply** on the       |
|                                                                                              |
|     **Rate Limiter Policy** window.                                                          |
|                                                                                              |
| 31. Observe the added rate limit rule and click **Add Item** to build another rule.          |
+----------------------------------------------------------------------------------------------+
| |lab021|                                                                                     |
|                                                                                              |
| |lab022|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 32. In the **Rate Limiter Policy** window within the **Metadata** section input              |
|                                                                                              |
|     **bypass** into the **Name** field.                                                      |
|                                                                                              |
| 33. Using the **Actions** drop-down, select **Bypass Rate Limiter**.                         |
|                                                                                              |
| 34. In the left-hand navigation, click on **Request Match**.                                 |
+----------------------------------------------------------------------------------------------+
| |lab023|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 35. In the **Request Match** section, select the **Configure** link in the **HTTP Method**   |
|                                                                                              |
|     section as shown.                                                                        |
|                                                                                              |
| 36. In the resulting **HTTP Method** window under **Method List**, select **ANY** then       |
|                                                                                              |
|     click **Apply**.                                                                         |
+----------------------------------------------------------------------------------------------+
| |lab024|                                                                                     |
|                                                                                              |
| |lab025|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 37. Observe that **HTTP Method** now appears **Configured**.                                 |
|                                                                                              |
| 38. Further down in the **Request Match** section, select the **Configure** link in the      |
|                                                                                              |
|     **HTTP Path** section as shown.                                                          |
|                                                                                              |
| 39. Observe the various Path definition options, click **Add Item** in the **Prefix Values** |
|                                                                                              |
|     section the input **/** as shown and then click **Apply**.                               |
+----------------------------------------------------------------------------------------------+
| |lab026|                                                                                     |
|                                                                                              |
| |lab027|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 40. Observe that **HTTP Path** now also appears **Configured**. Click **Apply** on the       |
|                                                                                              |
|     **Rate Limiter Policy** window.                                                          |
|                                                                                              |
| 41. Observe the three created rate limit rules and click **Apply**.                          |
+----------------------------------------------------------------------------------------------+
| |lab028|                                                                                     |
|                                                                                              |
| |lab029|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 42. Observe that rules are now **Configured**. Complete the custom **Rate Limiter Policy** by|
|                                                                                              |
|     clicking **Continue**.                                                                   |
+----------------------------------------------------------------------------------------------+
| |lab030|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 43. Observe the **Request Rate Limiter** options for number of requests, the Per Period      |
|                                                                                              |
|     interval and the Burst Multiplier.                                                       |
|                                                                                              |
| 44. Also observe that IPs can be allowed without Rate Limiting policies being applied        |
|                                                                                              |
| 45. Click **Apply** to add the **Rate Limit Configuration** to the application Load Balancer.|
|                                                                                              |
| .. note::                                                                                    |
|                                                                                              |
|    *Although only one policy is being added, multiple Rate Limit policies can be attached.*  |
+----------------------------------------------------------------------------------------------+
| |lab031|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 46. Observe that the **Custom Rate Limiting Parameters** now show **Configured** and then    |
|                                                                                              |
|     click on **Other Settings** in the left-hand navigation.                                 |
|                                                                                              |
| 47. Once at the bottom of the **HTTP Load Balancer** configuration, click **Save and Exit**. |
+----------------------------------------------------------------------------------------------+
| |lab032|                                                                                     |
|                                                                                              |
| |lab033|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 3: Testing Rate Limiting
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now we will retest access to our website and see if our experience has indeed changed.

+----------------------------------------------------------------------------------------------+
| 1. In your local web browser access the following link, replacing namespace with your own:   |
|                                                                                              |
|    **http://<namespace>.lab-sec.f5demos.com/ratelimit.php**                                  |
|                                                                                              |
| 2. Refresh the page multiple times and quickly... did you experience a different result?     |
|                                                                                              |
|    Rate Limited responses receive **429** response codes and block pages as shown in the     |
|                                                                                              |
|    image below.                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab034|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. Rate Limited requests can also be seen in **Security Events** as Service Policy blocks.   |
|                                                                                              |
| 4. Review your Security Events by navigating back to the Security Dashboard to see the 429   |
|                                                                                              |
|    blocks.                                                                                   |
|                                                                                              |
| .. note::                                                                                    |
|                                                                                              |
|    *Review the Lab 1 to find Security Events. You can copy you support ID to search with!*   |
+----------------------------------------------------------------------------------------------+
| |lab035|                                                                                     |
|                                                                                              |
| |lab036|                                                                                     |
+----------------------------------------------------------------------------------------------+


Narrative Check
-----------------
You have now configured rate limiting on the ACME Corp application.  This will slow down the attackers
from making multiple requests to your application.  Let's focus on building that custom policy to 
close the vulnerability that the attackers are using.

Task 4: Create, assign and test a Custom Service Policy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task you will add a Custom Policy and assign it to your Load Balancer. Custom Service 
Policies provide the flexibility to build **Positive** or **Negative** security models and custom
rules or controls.

This Custom Service Policy will be focused on limiting CURL access as logs are indicating that 
the attackers are using CURL to access the application.  The Custom policy will also focus on protecting
a specific page of the application that is vulnerable to close the Zero Day exploit.

+----------------------------------------------------------------------------------------------+
| 1. Before beginning this task, re-evaluate your access from your client to the following:    |
|                                                                                              |
|    * **Browser**: http://<namespace>.lab-sec.f5demos.com/index.php?page=header               |
|    * **cURL**: http://<namespace>.lab-sec.f5demos.com/                                       |
|    * **cURL**: http://<namespace>.lab-sec.f5demos.com/index.php?page=header                  |
|                                                                                              |
|    The expectation is that all are successful based on the current Service Policies.         |
| .. note::                                                                                    |
|    *cURL is supported on Windows, Mac & Linux platforms*.                                    |
+----------------------------------------------------------------------------------------------+
| |lab038|                                                                                     |
|                                                                                              |
| |lab039|                                                                                     |
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
| |lab040|                                                                                     |
|                                                                                              |
| |lab041|                                                                                     |
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
| |lab042|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. In the **Rules** window, click **Add Item**.                                              |
|                                                                                              |
| 8. In the **Metadata** section **Name** field input **curl-deny** and toggle the             |
|                                                                                              |
|    **Show Advanced Fields** to see extra configuration options in **Action** section.        |
|                                                                                              |
| 9. In the **Action** section, select **Deny** for the **Action** and then in the left-hand   |
|                                                                                              |
|    navigation click **Request Match**.                                                       |
+----------------------------------------------------------------------------------------------+
| |lab043|                                                                                     |
|                                                                                              |
| |lab044|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. In the **HTTP Method** section, use the **Method List** dropdown to select **GET**.      |
|                                                                                              |
| 11. In the **HTTP Headers** section click **Add Item**.                                      |
+----------------------------------------------------------------------------------------------+
| |lab045|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. In the **Header Matcher** window, input **user-agent** for **Header Name** as shown.     |
|                                                                                              |
| 13. Click **Add Item** under the **Regex Values** area and input **(?i)^.*curl.*$** then     |
|                                                                                              |
|     click **Apply**                                                                          |
+----------------------------------------------------------------------------------------------+
| |lab046|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 14. Scroll down to the bottom of the **Rule Configuration** and click **Apply**.             |
+----------------------------------------------------------------------------------------------+
| |lab047|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 15. In the **custom-deny** Service Policy Rule window, click **Add Item** to add another rule|
|                                                                                              |
| .. note::                                                                                    |
|    *Multiple Rules can be added to a single Service Policy*.                                 |
+----------------------------------------------------------------------------------------------+
| |lab048|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 16. In the **Metadata** section **Name** field input **header-page-deny** and then click     |
|                                                                                              |
|     **Request Match** in the left-hand navigation.                                           |
+----------------------------------------------------------------------------------------------+
| |lab049|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 17. In the **Request Match** section under **HTTP Methods**, add **GET** to the method list. |
|                                                                                              |
| 18. In the **HTTP Path** area, click the **Configure** link.                                 |
+----------------------------------------------------------------------------------------------+
| |lab050|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 19. Click **Add Item** in **Prefix Values** area and in the input field type "/index.php"    |
|                                                                                              |
|     and then click **Apply**.                                                                |
+----------------------------------------------------------------------------------------------+
| |lab051|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 20. Observe that the **HTTP Path** is now **Configured**.                                    |
|                                                                                              |
| 21. In section **HTTP Query Parameters** click **Add Item**                                  |
+----------------------------------------------------------------------------------------------+
| |lab052|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 22. In **Query Parameter Matcher** window, in the **Query Parameter Name** field, enter      |
|                                                                                              |
|     **page**.                                                                                |
|                                                                                              |
| 23. In **Match Options** section, ensure **Match Values** is selected and then click **Add** |
|                                                                                              |
|     **Item** in the area with **Exact Values** as shown.                                     |
|                                                                                              |
| 24. Input **header** into the **Exact Values** input field as shown and then click **Apply**.|
+----------------------------------------------------------------------------------------------+
| |lab053|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 25. Observe that the **HTTP Query Parameters** has the value we configured and scroll to the |
|                                                                                              |
|     bottom of the rule configuration and click **Apply**                                     |
+----------------------------------------------------------------------------------------------+
| |lab054|                                                                                     |
|                                                                                              |
| |lab055|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 26. Observe that both configured rules are present and then click **Apply**.                 |
|                                                                                              |
| .. note::                                                                                    |
|    *Rules within the Service Policy can placed in order as needed*.                          |
+----------------------------------------------------------------------------------------------+
| |lab056|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 27. Observe that the Custom Rule is now configured for **custom-deny** Service Policy and    |
|                                                                                              |
|     click **Apply**.                                                                         |
+----------------------------------------------------------------------------------------------+
| |lab057|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 28. The **custom-deny** Service Policy is now listed among all Service Policies and has a    |
|                                                                                              |
|     **Rule Count** of **2**.                                                                 |
|                                                                                              |
| .. note::                                                                                    |
|    *This window also show the Service Policy "Hits" when validating usage*.                  |
+----------------------------------------------------------------------------------------------+
| |lab058|                                                                                     |
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
| |lab059|                                                                                     |
|                                                                                              |
| |lab060|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 31. Click **Common Security Controls** in the left-hand navigation.                          |
|                                                                                              |
| 32. From the **Service Policies** section, click **Edit Configuration**.                     |
+----------------------------------------------------------------------------------------------+
| |lab061|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 33. Observe the order of the previously created Service Policies (geo-filter,allowed-ip) and |
|                                                                                              |
|     click **Add Item**.  Use the drop-down as shown and select **<namespace>/custom-deny**   |
|                                                                                              |
|     from the available Service Policy list.                                                  |
|                                                                                              |
| 34. Click the six squares icon to drag **<namespace>/custom-deny** into the second position  |
|                                                                                              |
|     in policy order as shown then click **Apply**.                                           |
+----------------------------------------------------------------------------------------------+
| |lab062|                                                                                     |
|                                                                                              |
| |lab063|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 35. Observe the configured state on Services Polices then click **Other Settings** or scroll |
|                                                                                              |
|     to the bottom of the HTTP Load Balancer configuration and click **Save & Exit**.         |
+----------------------------------------------------------------------------------------------+
| |lab064|                                                                                     |
|                                                                                              |
| |lab065|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 36. Time to reassess your access. Now test the following from your client:                   |
|                                                                                              |
|    * **Browser**: http://<namespace>.lab-sec.f5demos.com/index.php?page=header               |
|    * **cURL**: http://<namespace>.lab-sec.f5demos.com/                                       |
|    * **cURL**: http://<namespace>.lab-sec.f5demos.com/index.php?page=header                  |
|                                                                                              |
| 37. What where your results?  Copy the support id for further investigation in the next task |
+----------------------------------------------------------------------------------------------+
| |lab066|                                                                                     |
+----------------------------------------------------------------------------------------------+

Service Policies provide a powerful framework to implement both positive and negative security models
and you matching criteria from client requests (headers, parameters, paths, request body payload) to 
effectively control the access to protected applications and APIs.





+----------------------------------------------------------------------------------------------+
| **End of Lab 3:**  This concludes Lab 3, feel free to review and test the configuration.     |
|                                                                                              |
| A Q&A session will begin shortly to conclude the overall lab.                                |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. |lab000| image:: _static/lab3-000.png
   :width: 800px
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
.. |labend| image:: _static/labend.png
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
.. |lab068| image:: _static/lab3-068.png
   :width: 800px   
.. |lab069| image:: _static/lab3-069.png
   :width: 800px   
.. |lab070| image:: _static/lab3-070.png
   :width: 800px  
.. |lab071| image:: _static/lab3-071.png
   :width: 800px    
.. |lab072| image:: _static/lab3-072.png
   :width: 800px    
.. |lab073| image:: _static/lab3-073.png
   :width: 800px   
.. |lab074| image:: _static/lab3-074.png
   :width: 800px   
.. |lab075| image:: _static/lab3-075.png
   :width: 800px   
.. |lab076| image:: _static/lab3-076.png
   :width: 800px   
.. |lab077| image:: _static/lab3-077.png
   :width: 800px   
.. |lab078| image:: _static/lab3-078.png
   :width: 800px   
.. |labend| image:: _static/labend.png
   :width: 800px
      
