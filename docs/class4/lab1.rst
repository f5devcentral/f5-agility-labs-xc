Lab 1: Load Balancer and Origin
=========================================================================================

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

In this lab you will create a Application Load Balancer, attach and Origin Pool and enabled Malisddius User Detection.

**Expected Lab Time: 10 minutes**

Task 1: Configure Load Balancer and Origin Pool
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will allow you to deploy and advertise a globally available API.  These
steps will define an application, register its DNS and assign a target as an origin.

#. In the left top click the F5 ball and navigate to the **Web App & API Protection** Tile.

   .. image:: _static/shared-001.png
      :width: 800px

#. Click on the arrow to the right of **Namespace**, select your namespace from the list.

   .. image:: _static/shared-001a.png
      :width: 800px

#. In the left-hand navigation expand **Manage** and click **Load Balancers > HTTP Load**
   **Balancers**

#. In the resulting screen click the **Add HTTP Load Balancer** in the graphic as shown.

   .. image:: _static/shared-003.png
      :width: 800px

   .. image:: _static/lab1-task1-002.png
      :width: 800px

   .. note::
      *You have defaulted to your specific namespace as that is the only namespace to which you
      have administrative access.*

#. Using the left-hand navigation and in the sections as shown, enter the following
   data. Values where **<namespace>** is required, use the name of your given namespace.

   * **Metadata:Name ID:**  ``<namespace>-lb``
   * **Basic Configuration: List of Domains:** ``<namespace>.lab-sec.f5demos.com``
   * **Basic Configuration: Select Type of Load Balancer:** ``HTTP``
   * **Basic Configuration: Automatically Manage DNS Records:** ``(Check the checkbox)``
   * **Basic Configuration: HTTP Port:** ``80``

   .. image:: _static/lab1-task1-003.png
      :width: 800px

#. In the current window's left-hand navigation, click **Origins**. In the adjacent
   **Origins** section, under **Origin Pools**, click **Add Item**.

   .. image:: _static/lab1-task1-004.png
      :width: 800px

#. In the resulting window, use the drop down as shown and click **Add Item**.

   .. image:: _static/lab1-task1-005.png
      :width: 800px

#. In the resulting window, enter **<namespace>-pool** in the **Name** field and click
   **Add Item** under **Origin Servers** as shown.

   .. image:: _static/lab1-task1-006.png
      :width: 800px

#. In the resulting window, **Public DNS Name of Origin Server** should be selected for
   **Select Type of Origin Server**.

#. In the **DNS Name** field enter the following hostname:
   **demobankapi.lab-sec.f5demos.com** and then click **Apply**

   .. image:: _static/lab1-task1-007.png
      :width: 800px

#. After returning to the prior window, make sure **Port:** within the **Origin Servers**
   section, under **Origin Server Port** is configured for **80**.

#. Leave all other values as shown while scrolling to the bottom and click, **Continue**.

#. After returning to the next window and confirming the content, click **Apply**.

   .. image:: _static/lab1-task1-008.png
      :width: 800px

   .. image:: _static/lab1-task1-009.png
      :width: 800px

   .. image:: _static/lab1-task1-010.png
      :width: 800px

#. After returning to the HTTP Load Balancer window, select **Common Security Controls** on the left,
   find **Malicious User Detection** and select **Enable** from the drop-down.

   .. image:: _static/lab1-task1-011.png
      :width: 800px

   .. note::
      *This will be used in a later lab.*

#. Scroll to the bottom of the window, click on **Save and Exit**.

   .. image:: _static/lab1-task1-014.png
      :width: 800px

#. Using another browser tab, navigate to the the following URL to confirm the Load Balancer
   has been configured properly.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/lab1-task1-013.png
      :width: 800px

**End of Lab**

.. image:: _static/labend.png
   :width: 800px