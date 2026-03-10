Module 2: Multi-Cloud App Connect
===================================

**Module Overview**

This module introduces you to F5 Distributed Cloud App Connect and the fundamental concepts of Layer 7 application delivery. You will transition from network-level routing to application-level proxies, learning how to deliver globally available applications and securely bridge environments with conflicting IP schemes.

By the end of this module, you will understand how to leverage Regional Edges and Customer Edge (CE) nodes as Software-Defined Proxies. You will configure origin pools, deploy HTTP load balancers with active/standby failover, overcome IP overlap between public clouds, and enforce granular security controls using Service Policies.

**Module Objectives**

* Understand F5 Distributed Cloud App Connect and Layer 7 proxy architecture
* Configure globally available frontends across multiple cloud environments
* Implement HTTP load balancing with priority-based failover
* Solve IP overlap challenges using internal load balancers
* Apply Service Policies for strict HTTP method enforcement
* Analyze performance monitoring, application health, and request logs

**Key Concepts**

* **App Connect:** Provides application-level (Layer 7) connectivity using Software-Defined Proxies on CE Nodes and Regional Edges, unlike Network Connect which relies on Layer 3/4 routing.
* **Origin Pools & Servers:** A group of backend application servers (origins) that can be targeted via public DNS names or private IP addresses across specific sites.
* **HTTP Load Balancers:** Distribute traffic across origin pools, enforcing domain names and supporting custom VIP advertisements for internal or external delivery.
* **IP Overlap Solution:** The use of Layer 7 proxies to seamlessly connect workloads that share the exact same IP address (e.g., 10.0.5.253) in different environments, without requiring complex NAT rules.
* **Service Policies:** Intrinsic default-deny security policies applied to load balancers that define allowed traffic, such as permitted HTTP methods (e.g., allowing GET, denying HEAD).
* **Regional Edges (RE):** F5's globally distributed points of presence that act as the primary frontend for global application delivery.

**Module Labs**

* **Lab 3: Globally Available Frontend with App Connect**

    In this lab, you will:
    
    * Navigate the App Connect workspace to create origin pools for public AWS and private Azure workloads. 
    * Configure an HTTP Load Balancer that establishes priority-based failover to ensure high availability.
    * Simulate an outage to observe the failover process. 
    * Explore the platform's rich performance monitoring and traffic analytics.

* **Lab 4: App Connect - Solving IP Overlap**

   In this lab, you will:

   * Leverage internal load balancers to securely connect AWS and Azure workloads that share overlapping IP addresses. 
   * Configure custom VIP advertisements on specific CE site interfaces
   * Enforce domain name matching.
   * Build a Service Policy to strictly restrict application traffic to read-only (GET) requests.

**Lab Environment**

Your lab environment includes:

* **On-Premises:** UDF Data Center with an Ubuntu Client (used for executing web shell tests)
* **AWS Cloud:** Primary workload (IP 10.0.5.253) with an active CE node and a pre-deployed diagnostic tool
* **Azure Cloud:** Secondary failover workload (IP 10.0.5.253 - overlapping) with an active CE node
* **F5 Distributed Cloud Console:** Your SaaS-based management and analytics interface
* **F5 Regional Edges:** The global network infrastructure serving your public frontend

**Prerequisites**

.. note::
   Before starting this module, you should have:

   * Successfully completed Module 1 (Lab 1 and Lab 2)
   * Logged into the F5 Distributed Cloud Console and selected your unique namespace
   * Verified that your UDF environment and CE nodes are healthy and active

**Expected Duration**

* **Lab 3:** 30-40 minutes
* **Lab 4:** 30-40 minutes
* **Total Module Time:** 60-80 minutes

**Learning Outcomes**

Upon completing this module, you will be able to:

* Architect globally distributed applications using F5 Regional Edges
* Differentiate the use cases between Layer 3/4 Network Connect and Layer 7 App Connect
* Design priority-based application failover between diverse cloud environments
* Resolve complex network challenges like IP overlap using application proxies
* Secure internal application traffic using Service Policies
* Troubleshoot and monitor application health using end-to-end request logs

**Next Steps**

After completing Module 2, you will have successfully finished the F5 Distributed Cloud: Policy Optimization in a Multicloud World Lab.

**Let's get started with Lab 3!**

.. toctree::
   :maxdepth: 1
   :glob:

   lab*
