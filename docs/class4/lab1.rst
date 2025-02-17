Lab 1: Load Balancer and Origin
===============================

.. warning :: If you are using multiple labs in one course, understand that some steps below
   may be redundant depending on labs deployed. To gain full benefits from this lab, please
   delete any objects created in your prior lab and continue with this lab as all necessary
   objects will be recreated.

The following labs focus on the deployment and securing of an existing hosted API using F5
Distributed Cloud Platform and Services. This lab will be deployed in a SaaS only configuration
with no on-premises (public or private cloud) elements.  All configurations will be made via
the F5 Distributed Cloud Console and within the F5 Distributed Cloud Global Network services architecture.

For the tasks that follow, you should have already noted your individual **namespace**. If you
failed to note it, return to the **Introduction** section of this lab, follow the instructions
provided and note your **namespace** accordingly. The **Delegated Domain** and the F5 Distributed Cloud
**Tenant** are listed below for your convenience as they will be the same for all lab attendees.

* **Delegated Domain:** *.lab-sec.f5demos.com*
* **F5 Distributed Cloud Tenant:** https://f5-xc-lab-sec.console.ves.volterra.io

Following the tasks in the prior **Introduction** Section, you should now be able to access the
F5 Distributed Cloud Console, having set your Work Domain Roles and Skill levels. If you have not
done so already, please login to your tenant for this lab and proceed to Task 1.

In this lab you will review an already created Application (API) Load Balancer and Origin Pool with Malicious User Detection enabled.

**Expected Lab Time: 8 minutes**

.. note ::

   This lab reviews a pre-build Load Balancer and Origin Pool. Refer to `Lab 1 Advanced <adv_lab1.html>`_ for additional steps on how to create a Load Balancer and Origin Pool.

Task 1: Review Load Balancer and Origin Pool
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps are a review of a Load Balancer and Origin Pool aready configured within your namespace. 
This Load Balancer will be used throughout the course.

#. In the left top click the F5 ball and navigate to the **Web App & API Protection** Tile.

   .. image:: _static/shared-001.png
      :width: 600px

#. Click on the arrow to the right of **Namespace**, select your namespace from the list.

   .. image:: _static/shared-002.png
      :width: 400px

#. A HTTP Load Balancer and attached Origin Pool has already been created with the following configuration.

   ========================== ==========================
   **Load Balancer**          **Configuration**
   -------------------------- --------------------------
   Name                       <namespace>-lb
   Domains                    <namespace>.lab-sec.f5demos.com
   Type                       HTTP
   Manage DNS                 Enabled
   Port                       80
   Advertisement              Internet
   ========================== ==========================

   ========================== ==========================
   **Origin Pool**            **Configuration**
   -------------------------- --------------------------
   Name                       <namespace>-pool
   Type                       Public DNS
   Name/IP                    demobankapi.lab-sec.f5demos.com
   Port                       80
   ========================== ==========================

#. [**Optional Review Steps : 4-7**] Within your namespace, mouse over HTTP Load Balancers > click on HTTP Load Balancers.
   Review what's in orange, then click on the three dots under **Action**, click on **Manage Configuration** within the dropdown.

   .. image:: _static/lab1-task1-101.png
      :width: 800px

#. Review domain, port, etc... in orange, click on **Origin Pool**.

   .. image:: _static/lab1-task1-102.png
      :width: 800px

#. Click on **Edit Configuation** to navigate to the **Origin Pool** configuration.

   .. image:: _static/lab1-task1-103.png
      :width: 600px

#. Review the type, DNS name and port in orange. Click **Cancel and Exit** to close out the configuration.

   .. image:: _static/lab1-task1-104.png
      :width: 800px

#. The load balancer's **VIP Advertisement** is **Internet** which allows for public consumption through the F5 Distributed Cloud
   Application Delivery Network via a Regional Edge.

   .. image:: _static/lab1-task1-105.png
      :width: 600px

#. **Malicious User Detection** is also Enabled on the load balancer which will be reviewed in a later lab.
   
   .. image:: _static/lab1-task1-106.png
      :width: 500px

Task 2: Validate Load Balancer 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Using another browser tab, navigate to the the following URL to confirm the Load Balancer
   has been configured properly.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/shared-swagger-intro.png
      :width: 800px

**End of Lab**

.. image:: _static/labend.png
   :width: 800px