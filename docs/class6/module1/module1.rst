Module 1: Multi-Cloud Network Connect with Segments
====================================================

**Module Overview**

This module introduces you to F5 Distributed Cloud Multi-Cloud Network Connect and the fundamental 
concepts of network segmentation. You will explore pre-deployed Customer Edge (CE) nodes and learn 
how to create isolated network segments that provide secure, controlled connectivity across 
distributed environments.

By the end of this module, you will understand how to leverage network segments and segment 
connectors to establish Layer 3/4 connectivity between on-premises data centers and public cloud 
environments while maintaining security boundaries.

**Module Objectives**

* Navigate and explore the F5 Distributed Cloud Console
* Review deployed Customer Edge (CE) node architecture and configuration
* Understand network segments and their default isolation characteristics
* Create and manage network segments for different environments
* Configure segment connectors to enable controlled communication between isolated segments
* Implement Enhanced Firewall policies for granular traffic control
* Verify connectivity and routing between segments

**Key Concepts**

* **Customer Edge (CE) Nodes:** Customer Edge nodes extend the F5 Distributed Cloud fabric into your infrastructure,
whether on-premises or in public cloud environments. These nodes establish secure, self-healing tunnels to F5 Regional
Edges, enabling global connectivity and traffic management.

* **Network Segments:** Network segments are isolated Layer 3 network domains that provide "ships in the night" isolation 
by default. Traffic cannot flow between segments without explicit configuration, ensuring strong security boundaries
between different environments (e.g., production, development, shared services).

* **Segment Connectors:** Segment connectors selectively enable communication between isolated network segments. They come 
in two types:

  * **Direct Connector:** Enables bidirectional communication with route exchange in both directions
  * **SNAT Connector:** Enables unidirectional communication with source NAT from source to destination

* **Enhanced Firewall Policies:** Enhanced Firewall policies provide granular security controls that can be applied to segment 
connectors, allowing you to enforce zero-trust access between segments and limit traffic to only authorized protocols and ports.

**Module Labs**

* **Lab 1: Exploring Your Pre-Configured Customer Edge (CE) Node**

  In this lab, you will:

  * Navigate the Multi-Cloud Network Connect workspace
  * Locate and review your assigned Customer Edge node
  * Verify CE node health and connectivity status
  * Understand the CE deployment process and architecture
  * Review network topology across multiple cloud environments

* **Lab 2: Configuring Network Connect with Segments (L3/L4 Routing Firewall)**

  In this lab, you will:

  * Create network segments for isolated network domains
  * Attach segments to Customer Edge site interfaces
  * Test connectivity before and after segment connector creation
  * Create segment connectors to enable controlled communication
  * Verify routing information and route exchange
  * Configure Enhanced Firewall policies for traffic control
  * Apply security policies to segment connectors

**Lab Environment**

Your lab environment includes:

* **On-Premises:** UDF Data Center with Ubuntu Server (simulating backend infrastructure)
* **AWS Cloud:** Pre-deployed frontend workload with Customer Edge node
* **Azure Cloud:** Additional cloud environment for multi-cloud scenarios
* **F5 Distributed Cloud Console:** SaaS-based management interface
* **F5 Regional Edges:** Global network infrastructure providing connectivity

All Customer Edge nodes have been pre-deployed and registered, allowing you to focus on 
understanding the architecture and configuring network connectivity.

**Prerequisites**

.. note::
   Before starting this module, you should have:
   
   * Completed the Introduction: Accessing Lab Resources
   * Logged into the F5 Distributed Cloud Console
   * Identified your unique namespace (<adjective-animal> format)
   * Verified your UDF environment is running

**Expected Duration**

* **Lab 1:** 15-20 minutes
* **Lab 2:** 30-40 minutes
* **Total Module Time:** 45-60 minutes

**Learning Outcomes**

Upon completing this module, you will be able to:

* Navigate the F5 Distributed Cloud Console with confidence
* Understand Customer Edge node architecture and deployment
* Explain the concept of network segments and default isolation
* Create and manage network segments across distributed environments
* Configure segment connectors to enable controlled connectivity
* Implement and apply Enhanced Firewall policies for security
* Verify routing and connectivity between isolated network segments
* Troubleshoot connectivity issues using Console tools

**Next Steps**

After completing Module 1, you will proceed to Module 2: App Connect, where you will learn 
about Layer 7 application-level connectivity, solving IP overlap challenges, and implementing 
advanced application routing and security policies.

.. important::
   Ensure all labs in Module 1 are completed successfully before proceeding to Module 2.

**Let's get started with Lab 1!**

.. toctree::
   :maxdepth: 1
   :glob:

   lab*

.. |mod001| image:: ../images/netconnect.png
   :width: 800px
.. |mod002| image:: ../images/labs.png
   :width: 800px