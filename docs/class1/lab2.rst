Lab: Deploying an AWS VPC Site
================================

In the previous lab you learned how to protect a resource that is already on the Public Internet.

In this lab we will look at two additional topologies where you can use an AppMesh node
to protect a resource that is not directly exposed to the Internet.

F5 Distributed Cloud AWS VPC Site
---------------------------------

In addition to protecting resources using F5 Distributed Cloud WAF enforcement at an F5 Regional Edge (RE),
you can also deploy an AppMesh node that can protect resources that are not directly connected to the Internet.  

When we deploy an AppMesh node, we refer to these locations as a Customer Edge (CE).  
In this exercise, we will review the process to deploy a Customer Edge (CE).  
In our existing lab environment, we have already deployed an AppMesh node to establish a CE in our AWS VPC.
We have also already created a shared F5 Distributed Cloud AWS VPC Site within the Distributed Cloud Console.

Once an AppMesh node has been deployed as a Customer Edge (CE), it unlocks two additional topologies.

#. Client -> RE -> CE -> Protected resource  

Leveraging F5 Distributed Cloud REs to provide WAF and other services upstream, 
then proxying the clean traffic to the protected resource via the CE.

#. Client -> CE -> Protected resource  

In this scenario, the CE advertises the services directly.  While this topology sacrifices some functionality such as 
volumetric DDoS protection and anycast availability from the Distributed Cloud global network, there are some use cases where it can be beneficial.  
One such example is when clients and protected resources are both local to each other without having to traverse the Internet.

Upon CE deployment, two encrypted tunnels are automatically setup between the CE and the two closest REs.  These redundant tunnels provide
high availability in the unlikely event of an outage at a specific RE within the Distributed Cloud global network.

In the event of an Internet outage at a CE site, local survivability can continue to provide data plane services locally for a period of time.  
During this time, control plane services are suspended and will resume upon Internet connection reestablishment.

While a single AppMesh node CE may be adequate for non-production environments, a high-availability cluster of at least 3 AppMesh nodes 
is highly recommended at each CE site for production.

Exercise 1: Introduction to F5 Distributed Cloud AWS VPC Site
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Start in F5 Distributed Cloud Console and find the "AWS VPC Sites" menu item. 

   From the top left "Select service" and look under "All Services"->"Multi-Cloud Network Connect"

   .. image:: _static/menu_multi_cloud_network_connect.png
      :width: 50% 
      
#. Go to Manage > Site Management > AWS VPC Sites

   .. image:: _static/menu_aws_vpcsites.png
      :width: 50% 

#. Find the "student-awsnet" site

   In this lab environment we have already deployed a shared AWS VPC Site that we will 
   use in this lab.  Click on "student-awsnet".

   .. image:: _static/student-awsnet-link.png
      :width: 75% 

   You will be able to observe several metrics about the health of the site.  
   Spend a few minutes navigating the tabs at the top of the screen, to the right of the "Dashboard" tab.     

   .. image:: _static/student-awsnet-site-metrics.png
      :width: 75% 


   NOTE:  The health shown is specific to the CE site and the performance data shown 
   is an aggregate of all applications whose data is passing through this CE.

Exercise 2 (Optional): F5 F5 Distributed Cloud Simulator
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Since the AWS site in this lab was pre-built for you, you may want to simulate the process using the F5 Distributed Cloud Simulator.

https://simulator.f5.com/s/cloud2cloud_via_sites_brownfield/nav/aws/005/0

Clicking on the "Next" button in the top right will allow you to see similar steps that were used to create the site.

.. image:: _static/f5xc-simulator-vpc-site.png
   :width: 75%

Exercise 3 (Optional): Video walkthrough
^^^^^^^^^^^^^^^^^

NOTE:  The terms Distributed Cloud and AppMesh reflect the updated branding launched in 2022.  
Prior to that, the term Volterra was used for the platform and the term VoltMesh was used for the node.

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/s-BHH0Qayfc?start=244" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
