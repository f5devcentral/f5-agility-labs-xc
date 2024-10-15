F5 Distributed Cloud: Automating Build & Operations
===================================================================

Welcome
-------

In this hands-on lab environment, attendees will explore the use of the F5 Distributed Cloud API to review, 
build and maintain deployed configurations. During the lab, attendees will be performing API calls to automate
various aspects of standard F5 Distributed Cloud operations from basic building blocks to automating security 
configurations and controls. Adjacent automation tools will also be explored.

Objectives:
-----------

- Gain a deeper understanding of key F5 Distributed Cloud API frameworks and controls.
- Gain an understanding of the F5 Distributed Cloud API-first framework.
- Establish basic operational tasks for object management.
- Explore Terraform Provider for F5 Distributed Cloud


Lab & Tasks:
------------

The next page (Introduction) will cover the lab environment, access, and lab variables. The lab will be using a 
Windows 10 client with Postman and Terraform pre-installed to demonostatre how to automate the deployment of: 

- F5 Distributed Cloud HTTP Health Check
- F5 Distributed Cloud Origin Pool
- F5 Distributed Cloud HTTP Load Balancer
- F5 Distributed Cloud Web Application Firewall
- F5 Distributed Cloud Service Policy

During the lab exercises we will explore different methods of protecting and exposing applications/webserver
that are included in the lab.

A Git Repository of the configurations used in this lab is available at https://github.com/f5devcentral/appworld-f5xc-automation

.. toctree::
   :maxdepth: 2
   :caption: Labs:
   :glob:

   intro*
   lab*
   close*
