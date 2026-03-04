Lab 3: Globally Available Frontend with App Connect
====================================================

**Objective:**

* Understand F5 Distributed Cloud App Connect and Regional Edges
* Create origin pools for AWS and Azure workloads
* Configure an HTTP load balancer for global application delivery
* Test failover between origin pools
* Review performance monitoring and analytics

ACME Corp needs a globally available frontend that can load balance between AWS and Azure workloads,
with AWS as the preferred destination. The Azure workload is private (no public IP) and both
environments will be exposed through F5 Distributed Cloud Regional Edges.

.. note::
   App Connect uses CE Nodes and Regional Edges as Software-Defined Proxies (Layer 7), unlike
   Network Connect which uses them as Software-Defined Routers (Layer 3/4).

|lab001|

Prerequisite
------------

.. note::
   You should already be logged into your lab's Distributed Cloud Tenant and have completed Lab 1 and Lab 2.

Task 1: Understanding App Connect
----------------------------------

**What is App Connect?**

App Connect provides application-level (Layer 7) connectivity using load balancers and proxies:

* **Software-Defined Proxies:** CE Nodes and Regional Edges act as application proxies
* **Default Deny Architecture:** Only configured ports and domains accept traffic
* **IP Overlap Solution:** Workloads can have overlapping IP addresses across sites
* **Global Load Balancing:** Regional Edges provide globally distributed application delivery
* **Enhanced Security:** Full proxy security, visibility, and analytics for client traffic

**Key Concepts:**

* **Origin Pool:** A group of backend servers (origin servers) for an application
* **Origin Server:** The actual backend application server (can be public DNS or private IP)
* **HTTP Load Balancer:** Distributes traffic across origin pools using Regional Edges
* **Health Checks:** Monitors to verify origin server availability
* **Regional Edges (RE):** F5's globally distributed points of presence for application delivery

Task 2: Navigate to Multi-Cloud App Connect
--------------------------------------------

1. From the F5 Distributed Cloud Console homepage, select **Multi-Cloud App Connect**.

   |lab002|

2. On the left-hand side, switch to your namespace by selecting **<your-namespace>** from the dropdown.

   |lab003|

3. Navigate to **Manage >> Load Balancers >> Origin Pools**.

   |lab004|

Task 3: Create AWS Origin Pool
-------------------------------

You will now create an origin pool for the AWS workload using a public DNS name.

4. Click **Add Origin Pool**.

5. Configure the AWS origin pool:

   ================================  ========================================
   Variable                          Value
   ================================  ========================================
   Name                              <your-namespace>-aws-pool
   ================================  ========================================

**Configure Origin Servers:**

6. Under **Origin Servers**, click **Add Item**.

   |lab005|

7. Keep the default **Public DNS Name of Origin Server**.

8. Enter DNS name: **public.lab.f5demos.com** then click **Apply**.

   |lab006|

9. Change the **Origin Server Port** to **80**.

   |lab007|

**Configure Health Checks:**

10. Under **Health Checks**, click **Add Item** in the Health Check object dropdown.

    |lab008|

11. Click **Add Item** to add the health check.

    |lab009|

    Configure the health check:

    ================================  ========================================
    Variable                          Value
    ================================  ========================================
    Name                              <your-namespace>-http-health-check
    ================================  ========================================

12. Leave all other settings as default and click **Add Health Check**.

    |lab010|

13. Verify your AWS origin pool configuration matches the expected settings.

    |lab011|

14. Click **Save Origin Pool**.

Task 4: Create Azure Origin Pool
---------------------------------

You will now create an origin pool for the Azure workload using a private IP address.

15. Click **Add Origin Pool**.

    |lab012|

16. Configure the Azure origin pool:

    ================================  ========================================
    Variable                          Value
    ================================  ========================================
    Name                              <your-namespace>-azure-pool
    ================================  ========================================

**Configure Origin Servers:**

17. Under **Origin Servers**, click **Add Item**.

    |lab013|

18. In the **Select Type of Origin Server** dropdown, choose **IP address of Origin Server on given Sites**.

19. Configure the origin server, then click **Apply**:

    ================================  ========================================
    Variable                          Value
    ================================  ========================================
    IP                                10.0.3.253
    Site or Virtual Site              Site
    Site                              system/appworld-azure
    Select Network on the site        Inside Network
    ================================  ========================================

    |lab014|

    .. note::
       The IP address 10.0.3.253 is the same as in earlier labs. This demonstrates how App Connect
       handles IP overlap between sites.

20. Change the **Origin Server Port** to **80**.

**Configure Health Checks:**

21. Under **Health Checks**, click the **Select Item** dropdown.

22. Choose the health check you created earlier: **<your-namespace>-http-health-check**, then click **Save Origin Pool**.

    |lab015|

Task 5: Create HTTP Load Balancer
----------------------------------

Now you'll create an HTTP load balancer that uses F5 Regional Edges as the global frontend.

23. Navigate to **Manage >> Load Balancers >> HTTP Load Balancers**.

    |lab016|

24. Click **Add HTTP Load Balancer**.

    |lab017|

25. Configure the load balancer:

    ================================  ========================================
    Variable                          Value
    ================================  ========================================
    Name                              <your-namespace>-frontend
    Domains                           <your-namespace>-frontend.lab-mcn.f5demos.com
    Load Balancer Type                HTTP
    Automatically Manage DNS Records  **Checked**
    HTTP Port                         80
    ================================  ========================================

    |lab018|

**Configure Origin Pools:**

26. Under **Origin Pools**, click **Add Item**.

27. Select your AWS pool: **<your-namespace>-aws-pool**

    |lab019|

28. Leave **Priority** at **1** (default - highest priority) then click **Apply**.

29. Click **Add Item** again.

    |lab020|

30. Select your Azure pool: **<your-namespace>-azure-pool**

    |lab021|

31. Change **Priority** to **0** (lowest priority - this makes Azure the backup), then click **Apply**.

    |lab022|

    .. note::
       Priority value of **1** is highest priority. Priority value of **0** is lowest priority.
       This configuration makes AWS the preferred destination and Azure the failover destination.

32. Verify your HTTP load balancer configuration then click **Add HTTP Load Balancer**.

    |lab023|

33. Verify your HTTP load balancer appears in the list.

    |lab024|

Task 6: Test the Load Balancer
-------------------------------

Now let's test your globally available frontend.

34. Open a **Command Prompt** or **Terminal** on your local machine.

35. Run the following command:

    **nslookup <your-namespace>-frontend.lab-mcn.f5demos.com**

    Note the IP address returned.

    |lab025|

    .. note::
       This may take a few moments to become resolvable depending on your local DNS configuration.

36. Open a new browser tab and navigate to:

    **http://<your-namespace>-frontend.lab-mcn.f5demos.com**

37. You should see the AWS frontend (green page).

    |lab026|

38. Hard refresh your browser several times by pressing:

    * **Windows/Linux (Chrome, Edge, Firefox):** Ctrl + Shift + R or Ctrl + F5 or Shift + Click Refresh
    * **macOS (Chrome, Firefox):** Cmd + Shift + R

39. Verify you consistently see the AWS page.

    .. tip::
       You should NOT see a blue page (Azure) since AWS is the higher priority pool.

Task 7: Test Failover to Azure
-------------------------------

Let's simulate an AWS failure to test failover to the Azure pool.

40. Navigate to **Manage >> Load Balancers >> Origin Pools**.

41. Click the three dots under **Actions** for **<your-namespace>-aws-pool**.

42. Select **Manage Configuration**.

    |lab027|

43. Click **Edit Configuration** in the top right.

    |lab028|

44. Scroll to the bottom of the **TLS** section, click the dropdown and select **Enable**.

    |lab029|

45. Click **Save Origin Pool**.

    .. important::
       Enabling TLS will cause the health check to fail because the AWS server doesn't expect
       TLS. This simulates an AWS workload failure.

46. Wait approximately 30-60 seconds for the health check to fail.

47. Go back to your browser tab and refresh:

    * **Windows/Linux (Chrome, Edge, Firefox):** Ctrl + Shift + R or Ctrl + F5 or Shift + Click Refresh
    * **macOS (Chrome, Firefox):** Cmd + Shift + R

48. You should now see the Azure frontend (blue page).

    |lab030|

    .. tip::
       The load balancer automatically failed over to the Azure pool when AWS became unhealthy.

Task 8: Restore AWS Pool
-------------------------

Let's bring the AWS pool back online.

49. Navigate back to **Manage >> Load Balancers >> Origin Pools**.

50. Click the three dots under **Actions** for **<your-namespace>-aws-pool**, select **Manage Configuration**.

    |lab031|

51. Click **Edit Configuration**.

    |lab032|

52. Scroll to **TLS** and select **Disable**, then click **Save Origin Pool**.

    |lab033|

53. Wait approximately 30-60 seconds for the health check to pass.

54. Go back to your browser tab and refresh:

    * **Windows/Linux (Chrome, Edge, Firefox):** Ctrl + Shift + R or Ctrl + F5 or Shift + Click Refresh
    * **macOS (Chrome, Firefox):** Cmd + Shift + R

    .. note::
       If you receive a 503 error, wait a moment and refresh again.

55. You should see the AWS frontend (green page) again.

    |lab034|

Task 9: Review Performance Monitoring
--------------------------------------

Now let's explore the analytics and monitoring capabilities.

56. Navigate to **Multi-Cloud App Connect >> Overview >> Performance**.

57. Scroll to the bottom and under **Load Balancers**, click on **<your-namespace>-frontend**.

    |lab035|

58. You will see the Performance Monitoring **Dashboard**.

    .. tip::
       If you don't see recent traffic, adjust the time-frame selector in the top right.

    |lab036|

59. Review the **Application Health** score. It's not 100% due to the AWS pool being
    offline during testing.

    |lab037|

60. Notice the **End-to-End Latency** metrics showing request performance.

61. Click the **Metrics** tab.

    |lab038|

62. Click the **Health Percent** metric on the right side.

    |lab039|

63. Click on the block when the application health was degraded.

    |lab040|

64. Verify that Azure was serving requests during the AWS failure.

    |lab041|

Task 10: Review Traffic Analytics
----------------------------------

65. Click the **Origin Servers** tab in the top menu and change the time-frame to **1 hour**.

    |lab042|

66. At the bottom left, change the setting to **50 items per page**.

    |lab043|

    **Question:** Why are there so many Origin Servers for the AWS workload?

    **Answer:** The AWS pool uses a public DNS name (FQDN). Each Regional Edge is a proxy to
    the public IP, so each Regional Edge must independently verify availability from its
    perspective.

Task 11: Review Request Logs
-----------------------------

67. Click the **Requests** tab in the top menu and change the time-frame to **1 hour**.

    |lab044|

68. Change the setting to **50 items per page**.

    |lab045|

69. Choose any request in the log and click the **expand** arrow next to the timestamp.

70. Review the detailed request information including **end-to-end analytics**.

    |lab046|

71. Click **JSON** to view the request log in JSON format.

    |lab047|

    .. tip::
       The request log captures comprehensive information about every request, providing deep
       visibility into application traffic.

Lab Summary
-----------

**What You've Learned:**

* How to navigate the Multi-Cloud App Connect workspace
* The difference between Network Connect (L3/4 routing) and App Connect (L7 proxy)
* How to create origin pools for public and private workloads
* How to configure HTTP load balancers with priority-based failover
* How to test application failover between origin pools
* How to use performance monitoring and analytics dashboards
* How Regional Edges provide global application delivery

**Key Takeaways:**

* **App Connect uses proxies** at Layer 7 instead of routers at Layer 3/4
* **Origin pools** can use public DNS names or private IPs on specific sites
* **Priority settings** control active/standby failover behavior (1 = highest, 0 = lowest)
* **Regional Edges** provide globally distributed application delivery
* **Health checks** automatically detect and react to backend failures
* **Rich analytics** provide end-to-end visibility into application performance

**Your Environment:**

You now have a globally available frontend load balancer:

* **Frontend:** F5 Regional Edges serving **<your-namespace>-frontend.lab-mcn.f5demos.com**
* **Primary Backend:** AWS public workload (Priority 1)
* **Backup Backend:** Azure private workload (Priority 0)

In the next lab, you'll leverage App Connect for site-to-site connectivity to solve IP overlap
challenges.

.. important::
   Your HTTP load balancer must be working correctly before proceeding to Lab 4.

**End of Lab 3**

.. |lab001| image:: ../images/temp/lab3/lab3pic0.png
   :width: 800px
.. |lab002| image:: ../images/temp/lab3/lab3pic1.png
   :width: 800px
.. |lab003| image:: ../images/temp/lab3/lab3pic2.png
   :width: 800px
.. |lab004| image:: ../images/temp/lab3/lab3pic3.png
   :width: 800px
.. |lab005| image:: ../images/temp/lab3/lab3pic4.png
   :width: 800px
.. |lab006| image:: ../images/temp/lab3/lab3pic5.png
   :width: 800px
.. |lab007| image:: ../images/temp/lab3/lab3pic6.png
   :width: 800px
.. |lab008| image:: ../images/temp/lab3/lab3pic7.png
   :width: 800px
.. |lab009| image:: ../images/temp/lab3/lab3pic8.png
   :width: 800px
.. |lab010| image:: ../images/temp/lab3/lab3pic9.png
   :width: 800px
.. |lab011| image:: ../images/temp/lab3/lab3pic10.png
   :width: 800px
.. |lab012| image:: ../images/temp/lab3/lab3pic11.png
   :width: 800px
.. |lab013| image:: ../images/temp/lab3/lab3pic12.png
   :width: 800px
.. |lab014| image:: ../images/temp/lab3/lab3pic13.png
   :width: 800px
.. |lab015| image:: ../images/temp/lab3/lab3pic14.png
   :width: 800px
.. |lab016| image:: ../images/temp/lab3/lab3pic15.png
   :width: 800px
.. |lab017| image:: ../images/temp/lab3/lab3pic16.png
   :width: 800px
.. |lab018| image:: ../images/temp/lab3/lab3pic17.png
   :width: 800px
.. |lab019| image:: ../images/temp/lab3/lab3pic18.png
   :width: 800px
.. |lab020| image:: ../images/temp/lab3/lab3pic19.png
   :width: 800px
.. |lab021| image:: ../images/temp/lab3/lab3pic20.png
   :width: 800px
.. |lab022| image:: ../images/temp/lab3/lab3pic21.png
   :width: 800px
.. |lab023| image:: ../images/temp/lab3/lab3pic22.png
   :width: 800px
.. |lab024| image:: ../images/temp/lab3/lab3pic23.png
   :width: 800px
.. |lab025| image:: ../images/temp/lab3/lab3pic24.png
   :width: 800px
.. |lab026| image:: ../images/temp/lab3/lab3pic25.png
   :width: 800px
.. |lab027| image:: ../images/temp/lab3/lab3pic26.png
   :width: 800px
.. |lab028| image:: ../images/temp/lab3/lab3pic27.png
   :width: 800px
.. |lab029| image:: ../images/temp/lab3/lab3pic28.png
   :width: 800px
.. |lab030| image:: ../images/temp/lab3/lab3pic29.png
   :width: 800px
.. |lab031| image:: ../images/temp/lab3/lab3pic30.png
   :width: 800px
.. |lab032| image:: ../images/temp/lab3/lab3pic31.png
   :width: 800px
.. |lab033| image:: ../images/temp/lab3/lab3pic32.png
   :width: 800px
.. |lab034| image:: ../images/temp/lab3/lab3pic33.png
   :width: 800px
.. |lab035| image:: ../images/temp/lab3/lab3pic34.png
   :width: 800px
.. |lab036| image:: ../images/temp/lab3/lab3pic35.png
   :width: 800px
.. |lab037| image:: ../images/temp/lab3/lab3pic36.png
   :width: 800px
.. |lab038| image:: ../images/temp/lab3/lab3pic37.png
   :width: 800px
.. |lab039| image:: ../images/temp/lab3/lab3pic38.png
   :width: 800px
.. |lab040| image:: ../images/temp/lab3/lab3pic39.png
   :width: 800px
.. |lab041| image:: ../images/temp/lab3/lab3pic40.png
   :width: 800px
.. |lab042| image:: ../images/temp/lab3/lab3pic41.png
   :width: 800px
.. |lab043| image:: ../images/temp/lab3/lab3pic42.png
   :width: 800px
.. |lab044| image:: ../images/temp/lab3/lab3pic43.png
   :width: 800px
.. |lab045| image:: ../images/temp/lab3/lab3pic44.png
   :width: 800px
.. |lab046| image:: ../images/temp/lab3/lab3pic45.png
   :width: 800px
.. |lab047| image:: ../images/temp/lab3/lab3pic46.png
   :width: 800px