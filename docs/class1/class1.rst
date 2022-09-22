F5 Distributed Cloud 101 - WAF/WAAP Deployment Models 
=====================================================

`Last updated: 2022-06-09 5:00 PM ET

F5 Distributed Cloud's SaaS Web Application Firewall (WAF) can help you mitigate application threats 
with an updated WAF engine that inherits the shared  capabilities of F5 BIG-IP Advanced WAF, 
and NGINX App Protect. During this hands-on lab you will learn about the following: 

- F5 Distributed Cloud Platform for providing edge WAF and DDoS protection  
- Updates to F5 Distributed Cloud WAF engine that is powered by F5’s WAF engine  
- Hands-on lab deploying F5 Distributed Cloud WAF   
- Protecting existing Public IP resource via F5’s Distributed Cloud WAF    
- Deploying F5 Distributed Cloud WAF into a cloud provider network (AWS) to protect internal Private IP resources


Lab & Tasks:
~~~~~~~~~~~~

The next page (Introduction) will cover the lab environment, access, and lab variables. The lab will be using a shared AWS account where we have deployed the following resources:

- NGINX webserver that is exposed to the Public internet ("Public Endpoint")
- F5 AppMesh node that can be used to connect to AWS VPC (network)
- NGINX webserver that only has a private IP address with no external access

During the lab exercises we will explore different methods of protecting and exposing applications/webserver
that are included in the lab

.. toctree::
   :maxdepth: 2
   :numbered:
   :caption: Labs:
   :glob:
   
   intro*
   lab*
   close*
