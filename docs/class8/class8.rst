F5 Distributed Cloud: Automating Build & Operations
===================================================================

Welcome
-------

This lab explores F5 Distributed Cloud's (XC) API-first framework and the automation of operational controls. The following
key concepts will be covered:​
- Leveraging the Developer Portal
- Leveraging Terraform
- Standardizing and Operationalizing delivery controls
- Standardizing and Operationalizing security controls
- Audit and Standard compliance

Outcomes:
-----------

- Understanding of API-first framework
- Practical use cases to automate and walk away with
- Operationalizing (day-to-day controls) configuration management


Lab & Tasks:
------------

The next page (Introduction) will cover the lab environment, access, and lab variables. The lab utilizes the Distributed Cloud
SaaS Console, Visual Studio Code, and Terraform to demonostrate: 

- Automated Creation of HTTP Health Checks
- Automated Creation of Cloud Origin Pools
- Automated Creation of Cloud HTTP Load Balancer
- Automated Creation and Deployment of Cloud Web Application Firewalls
- Automated Creation and Deployment of Cloud Service Policies
- Automated Audits of Deployed Configurations 

During the lab exercises we will explore different methods of protecting and exposing applications/webservers
that are included in the lab.

A Git Repository of the configurations used in this lab is available at https://github.com/f5devcentral/appworld-f5xc-automation

.. toctree::
   :maxdepth: 2
   :caption: Labs:
   :glob:

   intro*
   lab*
   close*
