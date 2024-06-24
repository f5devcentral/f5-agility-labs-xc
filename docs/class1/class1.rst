F5 Distributed Cloud - Introduction to Deployment Models and Services
=========================================================================

Welcome
-------

In this lab, attendees will be introduced to the F5 Distributed Cloud Services platform.  Attendees will create proxy services for publishing and securing
applications that are served by both public and private endpoints. Attendees will also explore the ~~DNS~~, Observability, and CDN capabilities of the platform.

Objectives:
----------

- Gain an understanding of deploying proxy services to securely deliver an application with a public endpoint
- Gain an understanding of viewing telemetry data and utilizing it to tune WAAP policies
- Gain an understanding of how to deploy a site for providing connectivity to a private endpoint
- Gain an understanding of ~~DNS,~~ Observability, and CDN
- Gain an understanding of Multi-Cloud Networking (MCN) connectivity features (i.e. AWS, Azure, and Google)

Lab & Tasks:
------------

The next page (Introduction) will cover the lab environment, access, and lab variables. The lab will be using a shared AWS account where we have deployed the following resources:

- NGINX webserver that is exposed to the Public internet ("Public Endpoint")
- F5 Distributed Cloud site node that can be used to connect to AWS VPC (network)
- NGINX webserver that only has a private IP address with no external access

During the lab exercises we will explore different methods of protecting and exposing applications/webserver
that are included in the lab

.. toctree::
   :maxdepth: 2
   :caption: Labs:
   :glob:

   intro*
   lab*
   close*
