Lab 2: Load Balancer Routes
===========================

The following lab tasks will guide you through using the Distributed Cloud Console to configure routes within a HTTP Load Balancer. 
Students will start by creating a route to steer traffic based on a specified HTTP header containded within the client request.  Header
based routing is often used for blue-green testing.  Blue-green testing is a release strategy that uses two independent deployments (Blue
and Green) for real world testing of software updates and application enhancements.  

Next, students will apply a Web Application Firewall (WAF) policy at the route level. Applying a WAF policy at the route level allows 
security teams to apply more prescriptive WAF policies to the different components of the web application.  For example, you may 
want to apply additional WAF rules for the logon portion of the application.

The last task within this lab is to deploy routes to modify application responses in transit.

**Expected Lab Time: 20 minutes**

Task 1: Deploy a Header Route to Steer Traffic for Canary Testing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task, you will create a header route that directs traffic to different origin pools based off a specified HTTP header. This configuration
can be useful for Canary testing. Traffic matching a specified heard will be directed to a specified origin pool, while all other traffic will be
directed default origin pool for the load balancer.

+------------------------------------------------------------------------------------------------------------------------------------+
| **Configure a Header Route**                                                                                                       |
+====================================================================================================================================+
| 1. If you are not still logged into the Distributed Cloud Console, logon at:                                                       |
|                                                                                                                                    |
|    https://f5-xc-lab-app.console.ves.volterra.io/                                                                                  |
+------------------------------------------------------------------------------------------------------------------------------------+
| 2. If you are at the home landing page, select the **Web App & API Protection** tile.                                              |
|    |Web-App-Tile|                                                                                                                  |
|                                                                                                                                    |
|    If you are already in a workspace you can get to the **Web APP & API Protection** workspace from the top navigation bar,  by    |
|                                                                                                                                    |
|    selecting the **Web App & API Protection** workspace from the dropdown menu.                                                    |
|    |Web-App-Dropdown|                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 3. In the navigation sidebar on the left, expand **Manage**, expand **Load Balancers**, and select **HTTP Load Balancers**.        |
|    |Manage-HTTP-LB|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 4. Locate your HTTP Load Balancer in the list and click the ellipsis (three dots) under the **Actions** column. Select **Manage**  |
|                                                                                                                                    |
|    **Configuration**.  Your Load Balancer for this lab is named <name-space>-routing-https-lb.                                     |
|    |Manage-LB-Config|                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 5. In the Load Balancer Configuration page, click **Edit Configuration** in the top right.                                         |
|    |Edit-LB-Config|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 6. In the Load Balancer Edit Configuration page, scroll to the **Routes** section or click **Routes** in the left menu to jump to  |
|                                                                                                                                    |
|    the routes section.                                                                                                             |
|    |Routes-Section|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 7. Click **Configure** in the Routes configuration section.                                                                        |
|    |Routes-Config|                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 8. Click **Add Item** to add a route.                                                                                              |
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
|     |Header-Match|                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 11. You should now be back in the route add form that you started filling out in Step 9. In the Origin Pools section, click **Add**|
|                                                                                                                                    |
|     **Item**                                                                                                                       |
|     |Origin-Add|                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------+
| 12. In the Origin Pool with Weight and Priority form, add the green origin pool for your name-space.  The origin pool should be    |
|                                                                                                                                    |
|     named <name-space>/<name-space>-green-pool.                                                                                    |
|                                                                                                                                    |
|     Click **Apply**                                                                                                                |
|     |Green-Pool|                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------+
| 13. Click **Apply** to save the route                                                                                              |
|     |Route-Apply|                                                                                                                  |
+------------------------------------------------------------------------------------------------------------------------------------+
| 14. Click **Apply to apply the routes to the LB.                                                                                   |
|     |Routes-Apply|                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 15. Click **Save HTTP Load Balancer** to save the LB config.                                                                       |
|     |LB-Save|                                                                                                                      |
+------------------------------------------------------------------------------------------------------------------------------------+
|  **Test and Verify:**                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 16. Go back to your UDF Web Browser tab.  Find the **student jump host** component and excpand ACCESS and select FIREFOX.          |
+------------------------------------------------------------------------------------------------------------------------------------+
| 17. This will open Firefox running inside a browser window.  In the Firefox location bar, enter your LB domin name.  The name      |
|                                                                                                                                    |
|     format is https://<name-space>.lab-app.f5demos.com                                                                             |
|     |Blue-App|                                                                                                                     |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *Notice that you are receiving the Blue version of the application*                                                             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 18. To test routing via HTTP headers, a browser extension has been installed to modify the request headers.  Click the Header      |
|                                                                                                                                    |
|     Editor icon.                                                                                                                   |
|     |Header-Editor|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 19. Click the Manage icon.                                                                                                         |
|     |Header-Manage|                                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 20. Expand the **Green** Rule list and move the slider to enable the Green rule.  This rule adds a request header named            |
|                                                                                                                                    |
|     X-App-Version with a value of green to any request going to a domain that ends in lab-app.f5demos.com.                         |
|     |Green-Rule|                                                                                                                   |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *To view the rule click the magnifying glass icon*                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 21. Go back to the Firefox browser tab that has the Blue application in it.  Click the refresh button in Firefox to reload the web |
|                                                                                                                                    |
|     page.  You should now see the Green version of the application.                                                                |
|     |Refresh|                                                                                                                      |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *Make sure you are clicking the refresh button for the Firefox browser and not the parent browser that the Firefox browser is*  |
|    *running in.*                                                                                                                   |
+------------------------------------------------------------------------------------------------------------------------------------+


Task 2: Deploy and apply WAF policy at the route level
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This task will guide you through creating and applying a route policy for an F5 Distributed Cloud Load Balancer that makes routing decisions based
on the URL path and also attaches a Web Application Firewall (WAF) policy to the route. This configuration can be useful if you have certain URL 
path that require additional protection. For example a path that could contain customer data.

+------------------------------------------------------------------------------------------------------------------------------------+
| **Configure a Path Route and Attach a WAF Policy**                                                                                 |
+====================================================================================================================================+
| 1. Open the Distibruted Cloud Console.                                                                                             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 2. If you are not already in the **Web App & API Protection** workspace, from the top navigation bar, select the **Web App & API** |
|                                                                                                                                    |
|    ** Protection** workspace.                                                                                                      |
+------------------------------------------------------------------------------------------------------------------------------------+
| 3. Navigate to **Manage** > **Load Balancers** and select **HTTP Load Balancers**.                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 4. In the HTTP Load Balancers list, locate your load balancer and click the ellipsis (three dots) under the **Actions** column.    |
|                                                                                                                                    |
|    Select **Manage Configuration**.                                                                                                |
+------------------------------------------------------------------------------------------------------------------------------------+
| 5. In the Load Balancer configuration page, scroll to the **Route Configuration** section. Click **Add Route Policy**.             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 6. In the resulting form, configure the route policy:                                                                              |
|                                                                                                                                    |
|    - **Route Match**:                                                                                                              |
|                                                                                                                                    |
|       - Select **Path Prefix** as the match type.                                                                                  |
|                                                                                                                                    |
|       - Enter the desired path prefix (e.g., `/api/*`) that the route should match.                                                |
|                                                                                                                                    |
|     - **Action**:                                                                                                                  |
|                                                                                                                                    |
|       - Choose **Forward** as the action.                                                                                          |
|                                                                                                                                    |
|       - Select the backend pool or origin associated with this route.                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 7. Within the **Route Policy Configuration**, expand the **Web Application Firewall** section.                                     |
|                                                                                                                                    |
|   - Enable **WAF** and select the previously created WAF policy from the dropdown list.                                            |
+------------------------------------------------------------------------------------------------------------------------------------+
| 8. Click **Apply** to save your configuration changes to the route policy.                                                         |
+------------------------------------------------------------------------------------------------------------------------------------+
| **Test and Verify:**                                                                                                               |
+------------------------------------------------------------------------------------------------------------------------------------+
| 9. Send HTTP requests to your Load Balancer endpoint that match the configured path prefix.                                        |
|                                                                                                                                    |
| .. code-block:: bash                                                                                                               |
|                                                                                                                                    |
|    curl http://your-load-balancer-url.com                                                                                          |
|    curl -H "X-App-Version: v1" http://your-load-balancer-url.com                                                                   |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *Notice the different responses that are received based on if the header value is set in the curl command with the -H option.*  |
+------------------------------------------------------------------------------------------------------------------------------------+

Task 3: Deploy routes to modify application responses in transit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This task guides you through configuring a route for an F5 Distributed Cloud Load Balancer that makes routing decisions based on the URL path, adds
a response header. This configuration can be used to set or remove headers that are utilized by the backend application.

+------------------------------------------------------------------------------------------------------------------------------------+
| **Configure a Path Route and Adds a Response Header**                                                                              |
+====================================================================================================================================+
| 1. Open the Distibruted Cloud Console.                                                                                             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 2. If you are not already in the **Web App & API Protection** workspace, from the top navigation bar, select the **Web App & API** |
|                                                                                                                                    |
|    **Protection** workspace.                                                                                                       |
+------------------------------------------------------------------------------------------------------------------------------------+
| 3. Navigate to **Manage** > **Load Balancers** and select **HTTP Load Balancers**.                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 4. In the HTTP Load Balancers list, locate your load balancer and click the ellipsis (three dots) under the **Actions** column.    |
|                                                                                                                                    |
|     Select **Manage Configuration**.                                                                                               |
+------------------------------------------------------------------------------------------------------------------------------------+
| 5. In the Load Balancer configuration page, scroll to the **Route Configuration** section. Click **Add Route Policy**.             |
+------------------------------------------------------------------------------------------------------------------------------------+
| 6. In the resulting form, configure the route policy:                                                                              |
|                                                                                                                                    |
|    - **Route Match**:                                                                                                              |
|                                                                                                                                    |
|       - Select **Path Prefix** as the match type.                                                                                  |
|                                                                                                                                    |
|       - Enter the desired path prefix (e.g., `/api/*`) that the route should match.                                                |
|                                                                                                                                    |
|    - **Action**:                                                                                                                   |
|                                                                                                                                    |
|       - Choose **Forward** as the action.                                                                                          |
|                                                                                                                                    |
|       - Select the backend pool or origin associated with this route.                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 7. Scroll to the **Response Modification** section under the route configuration. Click **Add Header** to add a response header.   |
+------------------------------------------------------------------------------------------------------------------------------------+
| 8. In the resulting form, configure the header addition:                                                                           |
|                                                                                                                                    |
|    - In the **Header Name** field, enter the name of the header (e.g., `X-Custom-Response`).                                       |
|                                                                                                                                    |
|    - In the **Header Value** field, enter the value for the header (e.g., `CustomResponseValue`).                                  |
+------------------------------------------------------------------------------------------------------------------------------------+
| 9. Click **Apply** to save the configuration.                                                                                      |
+------------------------------------------------------------------------------------------------------------------------------------+
| **Test and Verify:**                                                                                                               |
+------------------------------------------------------------------------------------------------------------------------------------+
| 10. Send HTTP requests to your Load Balancer endpoint that match the configured path prefix.                                       |
|                                                                                                                                    |
| .. code-block:: bash                                                                                                               |
|                                                                                                                                    |
|    curl http://your-load-balancer-url.com                                                                                          |
|    curl -H "X-App-Version: v1" http://your-load-balancer-url.com                                                                   |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *Notice the different responses that are received based on if the header value is set in the curl command*                      |
|    *with the -H option.                                                                                                            |
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
| - Configure a HTTP Load Balancer route to manipulare request or response parameters. This configuration can be used to apply or    |
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
.. |Routes-Add| image:: _static/Routes-Add.png
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
.. |Green-Rule| image:: _static/Green-Rule.png
   :width: 800px
.. |Refresh| image:: _static/Refresh.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px