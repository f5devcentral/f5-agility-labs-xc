Lab 2: Load Balancer Routes
===========================

The following lab tasks will guide you through using the Distributed Cloud Console to configure routes within a HTTP Load Balancer. 
Students will start by creating a route to steer traffic based on a specified HTTP header contained within the client request.  Header
based routing is often used for blue-green testing.  Blue-green testing is a release strategy that uses two independent deployments (Blue
and Green) for real world testing of software updates and application enhancements.  

Next, students will apply a Web Application Firewall (WAF) policy at the route level. Applying a WAF policy at the route level allows 
security teams to apply more prescriptive WAF policies to the different components of the web application.  For example, you may 
want to apply additional WAF rules for the logon portion of the application.

The last task within this lab is to deploy routes to modify application responses in transit. This task demonstrates Distributed Cloud's
ability to modify Requests and/or Responses.  This can be used to add/remove headers used by the backend application, rewrite path
prefixes and modify cookies.

**Expected Lab Time: 25 minutes**

Task 1: Deploy a Header Route to Steer Traffic for Canary Testing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task, you will create a header route that directs traffic to different origin pools based off a specified HTTP header. This configuration
can be useful for Canary testing. Traffic matching a specified header will be directed to a specified origin pool, while all other traffic will be
directed default origin pool for the load balancer.

+------------------------------------------------------------------------------------------------------------------------------------+
| **Configure a Header Route**                                                                                                       |
+====================================================================================================================================+
| 1. If you are not still logged into the Distributed Cloud Console, logon at:                                                       |
|                                                                                                                                    |
|    https://f5-xc-lab-app.console.ves.volterra.io/                                                                                  |
+------------------------------------------------------------------------------------------------------------------------------------+
| 2. If you are at the home landing page, select the **Web App & API Protection** tile.                                              |
|                                                                                                                                    |
|    |Web-App-Tile|                                                                                                                  |
|                                                                                                                                    |
|    If you are already in a workspace you can get to the **Web APP & API Protection** workspace from the top navigation bar,  by    |
|                                                                                                                                    |
|    selecting the **Web App & API Protection** workspace from the dropdown menu.                                                    |
|                                                                                                                                    |
|    |Web-App-Dropdown|                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 3. In the navigation sidebar on the left, expand **Manage**, expand **Load Balancers**, and select **HTTP Load Balancers**.        |
|                                                                                                                                    |
|    |Manage-HTTP-LB|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 4. Locate your HTTP Load Balancer in the list and click the ellipsis (three dots) under the **Actions** column. Select **Manage**  |
|                                                                                                                                    |
|    **Configuration**.  Your Load Balancer for this lab is named <name-space>-routing-https-lb.                                     |
|                                                                                                                                    |
|    |Manage-LB-Config|                                                                                                              |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *If you don't see a HTTP Load Balancer, make sure you are in the correct namespace.*                                            |
+------------------------------------------------------------------------------------------------------------------------------------+
| 5. In the Load Balancer Configuration page, click **Edit Configuration** in the top right.                                         |
|                                                                                                                                    |
|    |Edit-LB-Config|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 6. In the Load Balancer Edit Configuration page, scroll to the **Routes** section or click **Routes** in the left menu to jump to  |
|                                                                                                                                    |
|    the routes section.                                                                                                             |
|                                                                                                                                    |
|    |Routes-Section|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 7. Click **Configure** in the Routes configuration section.                                                                        |
|                                                                                                                                    |
|    |Routes-Config|                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 8. Click **Add Item** to add a route.                                                                                              |
|                                                                                                                                    |
|    |Route-Add|                                                                                                                     |
+------------------------------------------------------------------------------------------------------------------------------------+
| 9. In the resulting form, configure the route policy:                                                                              |
|                                                                                                                                    |
|    - Route Type: **Simple Route**                                                                                                  |
|       - HTTP Method: **ANY**                                                                                                       |
|                                                                                                                                    |
|       - Path Match: **Prefix**                                                                                                     |
|                                                                                                                                    |
|         - Prefix: **/**                                                                                                            |
|                                                                                                                                    |
|       - Headers                                                                                                                    |
|                                                                                                                                    |
|          - Click **Add Item**                                                                                                      |
|                                                                                                                                    |
|    |Header-Add|                                                                                                                    |
+------------------------------------------------------------------------------------------------------------------------------------+
| 10. In the Header to Match Form, fill in the following values:                                                                     |
|                                                                                                                                    |
|     - Name: **X-App-Version**                                                                                                      |
|                                                                                                                                    |
|     - Value: **Exact**                                                                                                             |
|                                                                                                                                    |
|       - Exact: **green**                                                                                                           |
|                                                                                                                                    |
|     Click **Apply**                                                                                                                |
|                                                                                                                                    |
|     |Header-Match|                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 11. You should now be back in the route add form that you started filling out in Step 9. In the Origin Pools section, click **Add**|
|                                                                                                                                    |
|     **Item**                                                                                                                       |
|                                                                                                                                    |
|     |Origin-Add|                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------+
| 12. In the Origin Pool with Weight and Priority form, add the green origin pool for your name-space.  The origin pool should be    |
|                                                                                                                                    |
|     named <name-space>/<name-space>-green-pool.                                                                                    |
|                                                                                                                                    |
|     Click **Apply**                                                                                                                |
|                                                                                                                                    |
|     |Green-Pool|                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------+
| 13. Click **Apply** to save the route                                                                                              |
|                                                                                                                                    |
|     |Route-Apply|                                                                                                                  |
+------------------------------------------------------------------------------------------------------------------------------------+
| 14. Click **Apply** to apply the routes to the LB.                                                                                 |
|                                                                                                                                    |
|     |Routes-Apply|                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 15. Click **Save HTTP Load Balancer** to save the LB config.                                                                       |
|                                                                                                                                    |
|     |LB-Save|                                                                                                                      |
+------------------------------------------------------------------------------------------------------------------------------------+
|  **Test and Verify:**                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 16. Go back to your UDF Web Browser tab.  Find the **student jump host** component and expand ACCESS and select FIREFOX.           |
+------------------------------------------------------------------------------------------------------------------------------------+
| 17. This will open Firefox running inside a browser window.  In the Firefox location bar, enter your LB domin name.  The name      |
|                                                                                                                                    |
|     format is https://<your-namespace>.lab-app.f5demos.com/                                                                        |
|                                                                                                                                    |
|     |Blue-App|                                                                                                                     |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *Notice that you are receiving the Blue version of the application*                                                             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 18. To test routing via HTTP headers, a browser extension has been installed to modify the request headers.  Click the Header      |
|                                                                                                                                    |
|     Editor icon.                                                                                                                   |
|                                                                                                                                    |
|     |Header-Editor|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 19. Click the Manage icon.                                                                                                         |
|                                                                                                                                    |
|     |Header-Manage|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 20. Expand the **Green** Rule list and move the slider to enable the Green rule.  This rule adds a request header named            |
|                                                                                                                                    |
|     X-App-Version with a value of green to any request going to a domain that ends in lab-app.f5demos.com.                         |
|                                                                                                                                    |
|     |Green-Rule|                                                                                                                   |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *To view the rule click the magnifying glass icon.*                                                                             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 21. Go back to the Firefox browser tab that has the Blue application in it.  Click the refresh button in Firefox to reload the web |
|                                                                                                                                    |
|     page.  You should now see the Green version of the application.                                                                |
|                                                                                                                                    |
|     |Refresh|                                                                                                                      |
|                                                                                                                                    |
|     |Green-App|                                                                                                                    |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *Make sure you are clicking the refresh button for the Firefox browser and not the parent browser that the Firefox browser is*  |
|    *running in.*                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------+
| **Cleanup - Disable the Header Rule**                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 22. In the Firefox menu bar, click on the Header-Editor icon.                                                                      |
|                                                                                                                                    |
| |Header-Editor|                                                                                                                    |
+------------------------------------------------------------------------------------------------------------------------------------+
| 23. Click the Manage icon.                                                                                                         |
|                                                                                                                                    |
|     |Header-Manage|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 24. Expand the **Green** Rule list and move the slider to enable the Green rule.  This rule adds a request header named            |
|                                                                                                                                    |
|     X-App-Version with a value of green to any request going to a domain that ends in lab-app.f5demos.com.                         |
|                                                                                                                                    |
|     |Green-Rule-Disable|                                                                                                           |
+------------------------------------------------------------------------------------------------------------------------------------+


Task 2: Deploy and apply WAF policy at the route level
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This task will guide you through creating and applying a route policy for an F5 Distributed Cloud Load Balancer that makes routing decisions based
on the URL path and also attaches a Web Application Firewall (WAF) policy to the route. This configuration can be useful if you have certain URL 
paths that require additional protection. For example a path that could contain customer data.

+------------------------------------------------------------------------------------------------------------------------------------+
| **Configure a Path Route and Attach a WAF Policy**                                                                                 |
+====================================================================================================================================+
| 1. Open the Distibruted Cloud Console.                                                                                             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 2. If you are not already in the **Web App & API Protection** workspace, from the top navigation bar, select the **Web App & API** |
|                                                                                                                                    |
|    **Protection** workspace.                                                                                                       |
|                                                                                                                                    |
|    |Web-App-Dropdown|                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 3. In the navigation sidebar on the left, expand **Manage**, expand **Load Balancers**, and select **HTTP Load Balancers**.        |
|                                                                                                                                    |
|    |Manage-HTTP-LB|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 4. Locate your HTTP Load Balancer in the list and click the ellipsis (three dots) under the **Actions** column. Select **Manage**  |
|                                                                                                                                    |
|    **Configuration**.  Your Load Balancer for this lab is named <your-namespace>-routing-https-lb.                                 |
|                                                                                                                                    |
|    |Manage-LB-Config|                                                                                                              |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *If you don't see a HTTP Load Balancer, make sure you are in the correct namespace.*                                            |
+------------------------------------------------------------------------------------------------------------------------------------+
| 5. In the Load Balancer Configuration page, click **Edit Configuration** in the top right.                                         |
|                                                                                                                                    |
|    |Edit-LB-Config|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 6. In the Load Balancer Edit Configuration page, scroll to the **Routes** section or click **Routes** in the left menu to jump to  |
|                                                                                                                                    |
|    the routes section.                                                                                                             |
|                                                                                                                                    |
|    |Routes-Section|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 7. Click **Configure** in the Routes configuration section.                                                                        |
|                                                                                                                                    |
|    |Routes-Edit-Config|                                                                                                            |
+------------------------------------------------------------------------------------------------------------------------------------+
| 8. Click **Add Item** to add a route.                                                                                              |
|                                                                                                                                    |
|    |Route-Add2|                                                                                                                    |
+------------------------------------------------------------------------------------------------------------------------------------+
| 9. In the resulting form, configure the route policy:                                                                              |
|                                                                                                                                    |
|    - Route Type: **Simple Route**                                                                                                  |
|       - HTTP Method: **ANY**                                                                                                       |
|                                                                                                                                    |
|       - Path Match: **Prefix**                                                                                                     |
|                                                                                                                                    |
|         - Prefix: **/login**                                                                                                       |
|                                                                                                                                    |
|       - Origin Pools                                                                                                               |
|                                                                                                                                    |
|          - Click **Add Item**                                                                                                      |
|                                                                                                                                    |
|    |Login-Prefix|                                                                                                                  |
+------------------------------------------------------------------------------------------------------------------------------------+
| 10. In the Origin Pool with Weight and Priority form, add the green origin pool for your-namespace.  The origin pool should be     |
|                                                                                                                                    |
|     named <your-namespace>/<your-namespace>-green-pool.                                                                            |
|                                                                                                                                    |
|     Click **Apply**                                                                                                                |
|                                                                                                                                    |
|     |Green-Pool|                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------+
| 11. Back at the route add form scroll down to the bottom of the form and click **Configure** in the Advanced Options section.      |
|                                                                                                                                    |
|     |Advanced-Options|                                                                                                             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 12. On the resulting form find the Request/Response Manipulation section.  Select **Enable Prefix Rewrite** from the Enable Rewrite|
|                                                                                                                                    |
|     dropdown.  In the Enable Prefix Rewrite field enter **/**.                                                                     |
|                                                                                                                                    |
|     |Rewrite|                                                                                                                      |
+------------------------------------------------------------------------------------------------------------------------------------+
| 13. Scroll down to the Security section and select **App Firewall** from the Web Application Firewall (WAF) dropdown.  Select      |
|                                                                                                                                    |
|     **shared/app-block** from the App Firewall dropdown. Then click **Apply**.                                                     |
|                                                                                                                                    |
|     |WAF|                                                                                                                          |
+------------------------------------------------------------------------------------------------------------------------------------+
| 14. Click **Apply**.                                                                                                               |
|                                                                                                                                    |
|     |Apply-WAF-Route|                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 15. Click **Apply**.                                                                                                               |
|                                                                                                                                    |
|     |Routes-Apply2|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 16. Click **Save HTTP Load Balancer** to save the LB config.                                                                       |
|                                                                                                                                    |
|     |LB-Save|                                                                                                                      |
+------------------------------------------------------------------------------------------------------------------------------------+
| **Test and Verify:**                                                                                                               |
+------------------------------------------------------------------------------------------------------------------------------------+
| 17. Go back to your FIREFOX instance that is running within a browser.                                                             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 18. In the Firefox location bar, enter your LB domin name.  The name format is https://<your-namespace>.lab-app.f5demos.com/.  You |
|                                                                                                                                    |
|     should see the blue version of the application.                                                                                |
|                                                                                                                                    |
|     |Blue-App|                                                                                                                     |
+------------------------------------------------------------------------------------------------------------------------------------+
| 19. To test routing via HTTP path, add **/login** to the URL.  If everything worked correctly you should now see the green version |
|                                                                                                                                    |
|     of the application. The full URL should be https://<your-namespace>.lab-app.f5demos.com/login.                                 |
|                                                                                                                                    |
|     |Green-App-Login|                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 20. Verify the WAF policy was applied by adding **?cmd=cat /etc/passwd** to end of the URL.  The full URL should look like:        |
|                                                                                                                                    |
|     https://<your-namespace>.lab-app.f5demos.com/login/?cmd=cat /etc/passwd. When you hit enter you should now see a page saying   |
|                                                                                                                                    |
|     The requested URL was rejected along with a support ID.                                                                        |
|                                                                                                                                    |
|     |WAF-Block|                                                                                                                    |
+------------------------------------------------------------------------------------------------------------------------------------+
| 21. Refresh your browser a few times.  This will generate additional WAF logs that we will be using in lab 3.                      |
+------------------------------------------------------------------------------------------------------------------------------------+
| 22. After you have refreshed the browser a few times, copy the support ID from the current Request Rejected page in FIREFOX.       |
|                                                                                                                                    |
|     |Support-ID|                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------+
| 23. Open your Distributed Cloud Management Console.  Click on the AI Assistant icon in the top right corner.                       |
|                                                                                                                                    |
|     |AI-Assistant|                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 24. At the prompt enter: Explain security event <Support-ID>.  Replacing <Support-ID> with the support ID you copied from the      |
|                                                                                                                                    |
|     Request Rejected page.                                                                                                         |
|                                                                                                                                    |
|     |Explain-Event|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 25. The AI Assistant will provide a detailed analysis for the specified Support-ID.                                                |
|                                                                                                                                    |
|     |Event-Analysis|                                                                                                               |
+------------------------------------------------------------------------------------------------------------------------------------+


Task 3: Deploy routes to modify application responses in transit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This task guides you through configuring a route for an F5 Distributed Cloud Load Balancer that makes routing decisions based on the URL path and
adds a response header. This configuration can be used to set or remove headers that are utilized by the backend application.

+------------------------------------------------------------------------------------------------------------------------------------+
| **Configure a Path Route and Adds a Response Header**                                                                              |
+====================================================================================================================================+
| 1. Open the Disributed Cloud Console.                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 2. If you are not already in the **Web App & API Protection** workspace, from the top navigation bar, select the **Web App & API** |
|                                                                                                                                    |
|    **Protection** workspace.                                                                                                       |
|                                                                                                                                    |
|    |Web-App-Dropdown|                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 3. In the navigation sidebar on the left, expand **Manage**, expand **Load Balancers**, and select **HTTP Load Balancers**.        |
|                                                                                                                                    |
|    |Manage-HTTP-LB|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 4. Locate your HTTP Load Balancer in the list and click the ellipsis (three dots) under the **Actions** column. Select **Manage**  |
|                                                                                                                                    |
|    **Configuration**.  Your Load Balancer for this lab is named <your-namespace>-routing-https-lb.                                 |
|                                                                                                                                    |
|    |Manage-LB-Config|                                                                                                              |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *If you don't see a HTTP Load Balancer, make sure you are in the correct namespace.*                                            |
+------------------------------------------------------------------------------------------------------------------------------------+
| 5. In the Load Balancer Configuration page, click **Edit Configuration** in the top right.                                         |
|                                                                                                                                    |
|    |Edit-LB-Config|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 6. In the Load Balancer Edit Configuration page, scroll to the **Routes** section or click **Routes** in the left menu to jump to  |
|                                                                                                                                    |
|    the routes section.                                                                                                             |
|                                                                                                                                    |
|    |Routes-Section|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 7. Click **Edit Configuration** in the Routes configuration section.                                                               |
|                                                                                                                                    |
|    |Routes-Edit-Config|                                                                                                            |
+------------------------------------------------------------------------------------------------------------------------------------+
| 8. Find the path route we just added in Task 2 and click the ellipsis (three dots) under the **Actions** column. Select **Edit**   |
|                                                                                                                                    |
|    |Edit-Path|                                                                                                                     |
+------------------------------------------------------------------------------------------------------------------------------------+
| 9. Scroll to the Advanced Options section and click **Edit Configuration**.                                                        |
|                                                                                                                                    |
|    |Advanced-Edit|                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 10. In the resulting form, scroll to the Add Response Headers section and click **Add Item**.                                      |
|                                                                                                                                    |
|     |Add-Response|                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 11. In the Headers to Add form, add the following:                                                                                 |
|                                                                                                                                    |
|     - Name: XC-Namespace                                                                                                           |
|                                                                                                                                    |
|     - Value or Secret: Value                                                                                                       |
|                                                                                                                                    |
|        - Value: $[namespace]                                                                                                       |
|                                                                                                                                    |
|     Click **Apply**                                                                                                                |
|                                                                                                                                    |
|     |Response-Header|                                                                                                              |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *XC has predefined header variables that you can use to insert dynamic content.* `XC-Header-Variables`_.                        |
+------------------------------------------------------------------------------------------------------------------------------------+
| 12. Click **Apply**.                                                                                                               |
|                                                                                                                                    |
|     |Advanced-Apply|                                                                                                               |
+------------------------------------------------------------------------------------------------------------------------------------+
| 13. Click **Apply**.                                                                                                               |
|                                                                                                                                    |
|     |Apply-WAF-Route|                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 14. Click **Apply**.                                                                                                               |
|                                                                                                                                    |
|     |Routes-Apply2|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 15. Click **Save HTTP Load Balancer** to save the LB config.                                                                       |
|                                                                                                                                    |
|     |LB-Save|                                                                                                                      |
+------------------------------------------------------------------------------------------------------------------------------------+
| **Test and Verify:**                                                                                                               |
+------------------------------------------------------------------------------------------------------------------------------------+
| 16. Go back to your FIREFOX instance that is running within a browser.                                                             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 17. In the Firefox location bar, enter your LB domin name.  The name format is https://<your-namespace>.lab-app.f5demos.com/login. |
|                                                                                                                                    |
|     You should see the green version of the application.                                                                           |
|                                                                                                                                    |
|     |Green-App-Login|                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 17. Click the three horizontal lines in the Firefox bar to open the application menu and then click **More tools**.                |
|                                                                                                                                    |
|     |More-Tools|                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------+
| 18. Click **Web Developer Tools**                                                                                                  |
|                                                                                                                                    |
|     |Web-Dev|                                                                                                                      |
+------------------------------------------------------------------------------------------------------------------------------------+
| 19. Click the **Network** tab and then click the **Reload** icon.                                                                  |
|                                                                                                                                    |
|     |Network-Reload|                                                                                                               |
+------------------------------------------------------------------------------------------------------------------------------------+
| 20. Click on the GET request for the login file and then select **Headers** from the right tabs.  Scroll through the Response      |
|                                                                                                                                    |
|     Headers until you see the xc-namespace header.  Notice that the value matches your namespace.                                  |
|                                                                                                                                    |
|     |Firefox-Header|                                                                                                               |
+------------------------------------------------------------------------------------------------------------------------------------+


+------------------------------------------------------------------------------------------------------------------------------------+
| **End of Lab 2**                                                                                                                   |
+====================================================================================================================================+
| This concludes Lab 2. In this lab, you learned how to:                                                                             |
|                                                                                                                                    |
| - Configure a HTTP Load Balancer to route traffic based on HTTP header values. This configuration can be useful for canary testing.|
|                                                                                                                                    |
| - Configure a HTTP Load Balancer to apply WAF policy based on URL path. This configuration can be used to apply different security |
|                                                                                                                                    |
|   measures based on URL path.                                                                                                      |
|                                                                                                                                    |
| - Configure a HTTP Load Balancer route to manipulate request or response parameters. This configuration can be used to apply or    |
|                                                                                                                                    |
|   remove values that are utilized by the backend application or infrastructure.                                                    |
+------------------------------------------------------------------------------------------------------------------------------------+
| |labend|                                                                                                                           |
+------------------------------------------------------------------------------------------------------------------------------------+


.. |Web-App-Tile| image:: _static/Web-App-Tile.png
   :width: 800px
.. |Web-App-Dropdown| image:: _static/Web-App-Dropdown.png
   :width: 800px
.. |Manage-HTTP-LB| image:: _static/Manage-HTTP-LB.png
   :width: 800px
.. |Manage-LB-Config| image:: _static/Manage-LB-Config.png
   :width: 800px   
.. |Edit-LB-Config| image:: _static/Edit-LB-Config.png
   :width: 800px
.. |Routes-Section| image:: _static/Routes-Section.png
   :width: 800px
.. |Routes-Config| image:: _static/Routes-Config.png
   :width: 800px
.. |Route-Add| image:: _static/Route-Add.png
   :width: 800px
.. |Header-Add| image:: _static/Header-Add.png
   :width: 800px
.. |Header-Match| image:: _static/Header-Match.png
   :width: 800px
.. |Origin-Add| image:: _static/Origin-Add.png
   :width: 800px
.. |Green-Pool| image:: _static/Green-Pool.png
   :width: 800px
.. |Route-Apply| image:: _static/Route-Apply.png
   :width: 800px
.. |Routes-Apply| image:: _static/Routes-Apply.png
   :width: 800px
.. |LB-Save| image:: _static/LB-Save.png
   :width: 800px
.. |Blue-App| image:: _static/Blue-App.png
   :width: 800px
.. |Header-Editor| image:: _static/Header-Editor.png
   :width: 800px
.. |Header-Manage| image:: _static/Header-Manage.png
   :width: 800px
.. |Green-Rule| image:: _static/Green-Rule.png
   :width: 800px
.. |Refresh| image:: _static/Refresh.png
   :width: 800px
.. |Green-App| image:: _static/Green-App.png
   :width: 800px
.. |Green-Rule-Disable| image:: _static/Green-Rule-Disable.png
   :width: 800px
.. |Route-Add2| image:: _static/Route-Add2.png
   :width: 800px
.. |Login-Prefix| image:: _static/Login-Prefix.png
   :width: 800px
.. |Advanced-Options| image:: _static/Advanced-Options.png
   :width: 800px
.. |Rewrite| image:: _static/Rewrite.png
   :width: 800px
.. |WAF| image:: _static/WAF.png
   :width: 800px
.. |Apply-WAF-Route| image:: _static/Apply-WAF-Route.png
   :width: 800px
.. |Routes-Apply2| image:: _static/Routes-Apply2.png
   :width: 800px
.. |Green-App-Login| image:: _static/Green-App-Login.png
   :width: 800px
.. |WAF-Block| image:: _static/WAF-Block.png
   :width: 800px
.. |Support-ID| image:: _static/Support-ID.png
   :width: 800px
.. |AI-Assistant| image:: _static/AI-Assistant.png
   :width: 800px
.. |Explain-Event| image:: _static/Explain-Event.png
   :width: 800px
.. |Event-Analysis| image:: _static/Event-Analysis.png
   :width: 800px
.. |Routes-Edit-Config| image:: _static/Routes-Edit-Config.png
   :width: 800px
.. |Edit-Path| image:: _static/Edit-Path.png
   :width: 800px
.. |Advanced-Edit| image:: _static/Advanced-Edit.png
   :width: 800px
.. |Add-Response| image:: _static/Add-Response.png
   :width: 800px
.. |Response-Header| image:: _static/Response-Header.png
   :width: 800px
.. |Advanced-Apply| image:: _static/Advanced-Apply.png
   :width: 800px
.. |More-Tools| image:: _static/More-Tools.png
   :width: 800px
.. |Web-Dev| image:: _static/Web-Dev.png
   :width: 800px
.. |Network-Reload| image:: _static/Network-Reload.png
   :width: 800px
.. |Firefox-Header| image:: _static/Firefox-Header.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
.. _XC-Header-Variables: https://docs.cloud.f5.com/docs-v2/multi-cloud-app-connect/how-to/adv-security/configure-http-header-processing#predefined-header-variables