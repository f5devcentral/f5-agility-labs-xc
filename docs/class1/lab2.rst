Lab 2: Deploying an AWS VPC Site
================================

In the previous lab you learned how to protect a resource that is already on the Public Internet.

In this next lab we will look at two additional topologies of how you can use a "AppMesh" node
to secure traffic that is going to an endpoint that is not directly exposed to the Internet.

F5 Distributed Cloud AWS VPC Site
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In additional to using the F5 Distributed Cloud WAF from an F5 Regional Edge / PoP location
you can also deploy a "AppMesh" node that enables you to access networks that
are not directly connected to the Internet and/or enforce WAF policies locally 
within the local network.

When we deploy AppMesh outside of a Regional Edge we refer to these locations as
"Customer Edge".  In the following exercise we will review what the process is to
deploy a Customer Edge.  In our existing lab environment we have already deployed 
a shared F5 Distributed Cloud AWS VPC Site.

Once an AppMesh node has been deployed into a Customer Edge it helps provide two
additional topologies for F5 Distributed Cloud WAF protection.

#. Enabling F5 Distributed Cloud to protect a resource from the Regional Edge (additional DDoS protection)
   that is not directly attached to the internet.
#. Allow F5 Distributed Cloud to provide WAF protection for "internal" and/or "local"

Exercise 1: Introduction to F5 Distributed Cloud AWS VPC Site
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Start in F5 Distributed Cloud Console and find the "AWS VPC Sites" menu item. 

   From the top left "Select service" and look under "All Services"->"Cloud and Edge Sites"

   Click on "AWS VPC Sites"

   .. image:: ../_static/menu-cloud-edge-sites.png

#. Find the "student-awsnet" site

   In this lab environment we have already deployed a shared AWS VPC Site that we will 
   use in this lab.  Click on the "student-awsnet"

   You will be able to observe several metrics about the health of the site.

   In this deployment an AppMesh node has been deployed into an existing VPC in our
   shared AWS lab environment.

#. Browse back to "AWS VPC Sites" 

   AppMesh nodes can also be deployed into VMWare and KVM environments as well through
   a site registration process. 

Exercise 2 (Optional): F5 F5 Distributed Cloud Simulator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

During this lab we will not deploy a new AWS VPC Site.  If you would like to learn 
more about deploying an AWS VPC Site via F5 Distributed Cloud you may want to try using the 
following F5 F5 Distributed Cloud Simulator:

-https://simulator.f5.com/s/cloud2cloud_via_sites_brownfield

You can emulate the steps that were used to create the F5 Distributed Cloud VPC Site in the lab environment by starting
with the "3. Connect AWS VPC Site" https://simulator.f5.com/s/cloud2cloud_via_sites_brownfield/nav/aws/005/0

Clicking on the "Next" button in the top right will allow you to see similar steps that were used to create the site.

.. image:: ../_static/F5 Distributed Cloud-simulator-vpc-site.png
   :width: 50%

Video Walkthrough 
~~~~~~~~~~~~~~~~~
Optional Video you can watch if you get stuck

.. raw:: html
   
   <iframe width="560" height="315" src="https://www.youtube.com/embed/s-BHH0Qayfc?start=244" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>