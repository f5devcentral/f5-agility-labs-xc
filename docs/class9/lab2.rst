Lab 2: Load Balancer Routes
===========================

The following lab tasks will guide you through using the Distributed Cloud Console to configure routes within a HTTP Load Balancer. 
Students will start by creating a route to steer traffic based on a specified HTTP header containded within the client request.  Next, students
will apply a WAF policy at the route level. The last task within this lab is to deploy routes to modify application responses in transit.

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
| 2. From the top navigation bar, select the **Web App & API Protection** workspace.                                                 |
+------------------------------------------------------------------------------------------------------------------------------------+
| 3. In the navigation sidebar on the left, expand **Manage** and click **Load Balancers**.                                          |
+------------------------------------------------------------------------------------------------------------------------------------+
| 4. Locate your HTTP Load Balancer in the list and click the ellipsis (three dots) under the **Actions** column. Select **Manage**  |
|                                                                                                                                    |
|    **Configuration**.                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 5. In the Load Balancer configuration page, scroll to the **Route Configuration** section.                                         |
+------------------------------------------------------------------------------------------------------------------------------------+
| 6. Click **Add Route Policy**.                                                                                                     |
+------------------------------------------------------------------------------------------------------------------------------------+
| 7. In the resulting form, configure the route policy:                                                                              |
|                                                                                                                                    |
|    - **Match Condition**:                                                                                                          |
|       - Select **HTTP Header** as the match type.                                                                                  |
|                                                                                                                                    |
|       - Enter the header name (e.g., `X-App-Version`).                                                                             |
|                                                                                                                                    |
|       - Specify the value the header should match (e.g., `v1`).                                                                    |
|                                                                                                                                    |
|    - **Action**:                                                                                                                   |
|                                                                                                                                    |
|       - Choose **Forward** as the action.                                                                                          |
|                                                                                                                                    |
|       - Select the backend pool or origin associated with this route.                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 8. Click **Apply** to save the route policy configuration.                                                                         |
+------------------------------------------------------------------------------------------------------------------------------------+
|  **Test and Verify:**                                                                                                              |
+------------------------------------------------------------------------------------------------------------------------------------+
| 9. Use `curl` to send HTTP requests to your Load Balancer endpoint with the relevant HTTP header defined in the route policy:      |
|                                                                                                                                    |
| .. code-block:: bash                                                                                                               |
|                                                                                                                                    |
|    curl http://your-load-balancer-url.com                                                                                          |
|    curl -H "X-App-Version: v1" http://your-load-balancer-url.com                                                                   |
|                                                                                                                                    |
| .. note::                                                                                                                          |
|    *Notice the different responses that are received based on if the header value is set in the curl command*                      |
|    *with the -H option.*                                                                                                           |
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


.. |labend| image:: _static/labend.png
   :width: 800px