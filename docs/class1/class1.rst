F5 Distributed Cloud 101 - WAF/WAAP Configuration
=================================================

F5 Distributed Cloud Web Application and API Protection delivers comprehensive application security anywhere with flexibility in architecture, routing, and policy enforcement across public/private clouds, on-premises data centers, and edge sites, with centralized visibility and management via a SaaS-based console.

**Objective**

This document provides instructions on how to create an Application Firewall, also known as a Web Application Firewall (WAF), and deploy it on a load balancer. The WAF consists of technology that will allow/block and requests/responses. To learn more about a WAF, see `App Firewall <https://docs.cloud.f5.com/docs/ves-concepts/security#application-firewall>`_

Using the instructions provided in these labs, create a WAF policy with default or custom attack types, enable threat campaigns, define bot protection settings, and attach that WAF to an HTTP load balancer to protect the app that load balancer serves. These instructions also include information on how to control responses from origin servers.

.. toctree::
   :glob:

   lab*

**Resources**

* Intro: https://www.f5.com/cloud/products/distributed-cloud-waf
* How to: https://docs.cloud.f5.com/docs/how-to/app-security/web-app-firewall
* Reference Architecture: https://clouddocs.f5.com/f5xc-reference-architectures/SaaS-WAF/
* Simulator: https://simulator.f5.com/s/waap
* Signature ID Lookup: https://clouddocs.f5.com/cloud-services/latest/f5-cloud-services-Essential.App.Protect-Details.html 

..  youtube:: NgkDAmq_rak
    :width: 800
    :height: 440
