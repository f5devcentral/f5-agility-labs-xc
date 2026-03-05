Lab 4: App Connect - Solving IP Overlap
========================================

**Objective:**

* Implement App Connect to overcome IP address overlap in AWS/Azure
* Provide private and secure connectivity between all sites
* Configure Service Policy to only permit specific HTTP methods
* Review network security events in the F5 Distributed Cloud Console

ACME Corp needs to establish connectivity between AWS and Azure workloads that have overlapping IP 
addresses. Using App Connect, you will create internal load balancers that act as Software-Defined 
Proxies to enable secure communication between these environments.

.. note::
   App Connect uses CE Nodes as Software-Defined Proxies (Layer 7) to solve IP overlap challenges, 
   unlike Network Connect which uses Software-Defined Routers (Layer 3/4).

|lab001|

Prerequisite
------------

.. note::
   You really should have completed Lab 3 at this point, if not, then I don't know what you have been doing this whole time 🙃 

Task 1: Understanding the Lab Environment
------------------------------------------

**Narrative:**

Now that the globally available frontend has been deployed, you need to configure backend 
connectivity between AWS and Azure. Since these environments have overlapping IP addresses, 
you will use App Connect proxies instead of Network Connect routing.

**Lab Environment Overview:**

* AWS and Azure workloads both use **10.0.5.253** (IP overlap)
* App Connect will use CE Nodes as proxies to overcome IP overlap
* Internal load balancers will provide secure connectivity
* Service Policies will enforce allowed traffic

|lab002|

**Your goal is to create internal load balancers that enable secure communication between 
overlapping IP environments.**

Task 2: Create Backend VIP to Azure
------------------------------------

You will now create an internal HTTP load balancer on your Data Center CE that connects to the 
Azure workload.

1. Navigate to **Multi-Cloud App Connect >> Manage >> Load Balancers >> HTTP Load Balancers**.

2. Click **Add HTTP Load Balancer**.

3. Configure the load balancer:

   ================================  ========================================
   Variable                          Value
   ================================  ========================================
   Name                              <your-namespace>-backend-vip-to-azure
   Domains                           <your-namespace>-backend-vip-to-azure.lab-mcn.f5demos.com
   Load Balancer Type                HTTP
   Automatically Manage DNS Records  **Unchecked**
   HTTP Port                         80
   ================================  ========================================

   |lab003|

**Configure Origin Pools:**

4. Under **Origin Pools**, click **Add Item**.

5. Select your Azure pool: **<your-namespace>-azure-pool**

6. Click **Apply**.

   |lab004|

**Configure VIP Advertisement:**

7. Scroll all the way down to **Other Settings** section.

8. Under **VIP Advertisement**, click the dropdown and select **Custom**.

   |lab005|

   .. important::
      Unlike the previous lab where we used the default **Internet** (Regional Edges), this time 
      we will advertise the VIP on your Data Center CE to create an internal load balancer.

9. Click **Configure**.

   |lab006|

10. Click **Add Item**.

11. Configure the advertisement:

    ================================  ========================================
    Variable                          Value
    ================================  ========================================
    Select Where to Advertise         Site
    Site Network                      Outside Network
    Site Reference                    system/<your-namespace>-site
    TCP Listen Port Choice            TCP Listen Port
    TCP Listen Port                   80
    ================================  ========================================

    |lab007|

12. Click **Apply**, **Apply**, and then **Add HTTP Load Balancer**.

Task 3: Test Internal Load Balancer
------------------------------------

Now let's test the internal load balancer you just created.

13. From your UDF environment, click on **Access >> Web Shell** on the Ubuntu Client.

14. Test without domain name:

    **curl --head 10.1.1.5**

    |lab008|

    You will receive a **404 Not Found** error.

    .. tip::
       HTTP load balancers in F5 Distributed Cloud enforce domain name matching. Without the 
       correct domain in the request, the load balancer will not respond.

15. Test with domain name resolution:

    **curl --head http://<your-namespace>-backend-vip-to-azure.lab-mcn.f5demos.com --resolve <your-namespace>-backend-vip-to-azure.lab-mcn.f5demos.com:80:10.1.1.5**



16. You should now receive a **200 OK** response!

    |lab010|

17. To see the full HTML response, run the command without the **--head** flag:

    **curl http://<your-namespace>-backend-vip-to-azure.lab-mcn.f5demos.com --resolve <your-namespace>-backend-vip-to-azure.lab-mcn.f5demos.com:80:10.1.1.5**

    |lab011|

Task 4: Create Origin Pool for AWS Diagnostic Tool
---------------------------------------------------

**Narrative Update:**

ACME Corp has an urgent requirement: the AWS frontend needs to connect to the Azure frontend 
privately over port 80. To test this, you will use a diagnostic tool running on the AWS workload.

18. Navigate to **Multi-Cloud App Connect >> Manage >> Load Balancers >> Origin Pools**.

19. Click **Add Origin Pool**.

20. Configure the origin pool:

    ================================  ========================================
    Variable                          Value
    ================================  ========================================
    Name                              <your-namespace>-awstool-pool
    Origin Server Port                8080
    ================================  ========================================

**Configure Origin Servers:**

21. Under **Origin Servers**, click **Add Item**.

22. Configure the origin server:

    ================================  ========================================
    Variable                          Value
    ================================  ========================================
    Select Type of Origin Server      IP address of Origin Server on given Sites
    IP                                10.0.5.253
    Site or Virtual Site              Site
    Site                              system/appworld-aws
    Select Network on the site        Outside Network
    ================================  ========================================

23. Click **Apply** and then **Add Origin Pool**.

    |lab012|

Task 5: Create HTTP Load Balancer for Diagnostic Tool
------------------------------------------------------

24. Navigate to **Manage >> Load Balancers >> HTTP Load Balancers**.

25. Click **Add HTTP Load Balancer**.

26. Configure the load balancer:

    ================================  ========================================
    Variable                          Value
    ================================  ========================================
    Name                              <your-namespace>-awstool
    Domains                           <your-namespace>-awstool.lab-mcn.f5demos.com
    Load Balancer Type                HTTP
    Automatically Manage DNS Records  **Checked** (Important!)
    HTTP Port                         80
    ================================  ========================================

27. Under **Origin Pools**, click **Add Item**.

28. Select **<your-namespace>-awstool-pool** and click **Apply**.

    |lab013|

29. Click **Add HTTP Load Balancer**.

30. Open a new browser tab and navigate to:

    **http://<your-namespace>-awstool.lab-mcn.f5demos.com**

    |lab014|

    .. note::
       If you cannot access the tool site, please see a lab assistant.

Task 6: Create AWS to Azure Load Balancer
------------------------------------------

Now you'll create an internal load balancer in AWS that connects to Azure.

31. Navigate to **Manage >> Load Balancers >> HTTP Load Balancers**.

32. Click **Add HTTP Load Balancer**.

33. Configure the load balancer:

    ================================  ========================================
    Variable                          Value
    ================================  ========================================
    Name                              <your-namespace>-aws-to-azure-lb
    Domains                           <your-namespace>-aws-to-azure-lb.lab-mcn.f5demos.com
    Load Balancer Type                HTTP
    Automatically Manage DNS Records  **Unchecked**
    HTTP Port                         80
    ================================  ========================================

34. Under **Origin Pools**, click **Add Item**.

35. Select **<your-namespace>-azure-pool** and click **Apply**.

**Configure VIP Advertisement:**

36. Scroll all the way down to **VIP Advertisement** and select **Custom**.

37. Click **Configure**.

38. Click **Add Item**.

39. Configure the advertisement:

    ================================  ========================================
    Variable                          Value
    ================================  ========================================
    Select Where to Advertise         Site
    Site Network                      Inside
    Site Reference                    system/appworld-aws
    TCP Listen Port Choice            TCP Listen Port
    TCP Listen Port                   80
    ================================  ========================================

    |lab015|

    .. note::
       The AWS CE node has two interfaces (Inside/Outside). We're advertising on the Inside 
       interface to create an internal load balancer.

40. Click **Apply**, **Apply**, and then **Save and Exit**.

41. Verify you now have 4 HTTP load balancers for your namespace.

    |lab016|

Task 7: Test AWS to Azure Connectivity
---------------------------------------

Let's test the connectivity between AWS and Azure through the internal load balancer.

42. First, verify the inside interface IP of the AWS CE node.

43. Navigate to **Multi-Cloud Network Connect >> Manage >> Site Management >> AWS VPC Sites**.

44. Click on **appworld-aws**.

45. Navigate to the **Infrastructure** tab and note the inside interface IP address.

    |lab017|

    .. note::
       In this example, the inside interface IP is *10.0.5.5*. Your IP may differ.

46. Go to the diagnostic tool: **http://<your-namespace>-awstool.lab-mcn.f5demos.com**

47. Click **Run Command** and paste the following:

    **curl http://<your-namespace>-aws-to-azure-lb.lab-mcn.f5demos.com --resolve <your-namespace>-aws-to-azure-lb.lab-mcn.f5demos.com:80:10.0.5.16**

    |lab018|

    You should see a successful response!

48. Test again with the **--head** flag:

    **curl --head http://<your-namespace>-aws-to-azure-lb.lab-mcn.f5demos.com --resolve <your-namespace>-aws-to-azure-lb.lab-mcn.f5demos.com:80:10.0.5.16**

    |lab019|

    .. tip::
       You now have full proxy connectivity between IP-overlapped AWS and Azure resources over 
       a private encrypted tunnel!

Lab Summary
-----------

**What You've Learned:**

* How App Connect solves IP overlap challenges using Software-Defined Proxies
* How to create internal load balancers with custom VIP advertisement
* How to use domain name enforcement in HTTP load balancers
* How to configure Service Policies to enforce HTTP methods
* How to apply Service Policies to load balancers
* How to review request logs and verify policy enforcement

**Key Takeaways:**

* **App Connect uses proxies** (Layer 7) to solve IP overlap that Network Connect cannot handle
* **Internal load balancers** are created by advertising VIPs on specific CE sites
* **Domain name enforcement** is built into HTTP load balancers for security
* **Service Policies** provide granular control over allowed traffic
* **Default deny** architecture ensures only explicitly allowed traffic is permitted
* **Request logs** provide detailed visibility into policy enforcement

**Your Environment:**

You now have App Connect proxies providing secure connectivity:

* **Data Center to Azure:** Internal load balancer on your UDF CE
* **AWS to Azure:** Internal load balancer on AWS CE
* **Diagnostic Tool:** Globally available tool for testing
* **Service Policy:** Enforcing read-only access (GET only) from AWS to Azure

With this architecture, you've overcome IP overlap challenges while maintaining security and 
control over application traffic.

.. important::
   You have successfully completed all ACME Corp requirements using F5 Distributed Cloud 
   Network Connect and App Connect!

**End of Lab 4**

.. |lab001| image:: ../images/temp/lab4/lab4bizreq1.png
   :width: 800px
.. |lab002| image:: ../images/temp/lab4/lab4goal.png
   :width: 800px
.. |lab003| image:: ../images/temp/lab4/lab4pic3.png
   :width: 800px
.. |lab004| image:: ../images/temp/lab4/backendvip.png
   :width: 800px
.. |lab005| image:: ../images/temp/lab4/custom.png
   :width: 800px
.. |lab006| image:: ../images/temp/lab4/configure.png
   :width: 800px
.. |lab007| image:: ../images/temp/lab4/azint.png
   :width: 800px
.. |lab008| image:: ../images/temp/lab4/curlerror.png
   :width: 800px
.. |lab009| image:: ../images/temp/lab4/domains.png
   :width: 800px
.. |lab010| image:: ../images/temp/lab4/domains.png
   :width: 800px
.. |lab011| image:: ../images/temp/lab4/curltest.png
   :width: 800px
.. |lab012| image:: ../images/temp/lab4/toolpool.png
   :width: 800px
.. |lab013| image:: ../images/temp/lab4/toollb.png
   :width: 800px
.. |lab014| image:: ../images/temp/lab4/contool.png
   :width: 800px
.. |lab015| image:: ../images/temp/lab4/advervip.png
   :width: 800px
.. |lab016| image:: ../images/temp/lab4/4lbs.png
   :width: 800px
.. |lab017| image:: ../images/temp/lab4/student-awsnet.png
   :width: 800px
.. |lab018| image:: ../images/temp/lab4/success.png
   :width: 800px
.. |lab019| image:: ../images/temp/lab4/head.png
   :width: 800px
.. |lab020| image:: ../images/temp/lab4/prefix.png
   :width: 800px
.. |lab021| image:: ../images/temp/lab4/spget.png
   :width: 800px
.. |lab022| image:: ../images/temp/lab4/sp1.png
   :width: 800px
.. |lab023| image:: ../images/temp/lab4/sp2.png
   :width: 800px
.. |lab024| image:: ../images/temp/lab4/lbsp.png
   :width: 800px
.. |lab025| image:: ../images/temp/lab4/success.png
   :width: 800px
.. |lab026| image:: ../images/temp/lab4/forbid.png
   :width: 800px
.. |lab027| image:: ../images/temp/lab4/awstoazure.png
   :width: 800px
.. |lab028| image:: ../images/temp/lab4/requesttab.png
   :width: 800px
.. |lab029| image:: ../images/temp/lab4/perfmon.png
   :width: 800px
.. |lab030| image:: ../images/temp/lab4/403.png
   :width: 800px
.. |lab031| image:: ../images/temp/lab4/200.png
   :width: 800px