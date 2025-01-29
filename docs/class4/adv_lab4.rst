Lab 4: Advanced Load Balancer WAF Object Creation
=====================================

Task 1: Create a WAF policy Object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will perform steps to create a WAF policy object, and apply this to your HTTP Load Balancer.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **App Firewall**
   under the **Manage** section.

   .. image:: _static/lab4-image004v2.png
      :width: 400px

#. In the resulting **App Firewall** window, click on **Add App Firewall** at the
   top left or middle of the window.

   .. image:: _static/lab4-image005v2.png
      :width: 400px

#. Within the App Firewall object, configure the following.  Values where **<namespace>** is required, use the name of your given namespace.

   * **Metadata:Name:**  ``<namespace>-waf``
   * **Enforcement Mode:** ``Blocking``

   Leave all other settings at default.  Click **Save and Exit** button.

   .. image:: _static/lab4-image006v2.png
      :width: 800px

Task 2: Attach WAF policy to your HTTP Load Balancer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will follow steps to attach a WAF policy to your Load Balancer.

#. In the left-hand navigation of the **Web App & API Protection** service under the **Manage** section, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

   .. image:: _static/lab4-image007.png
      :width: 400px

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/lab4-image008v2.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/lab4-image009.png
      :width: 400px

#. Using the left-hand navigation, click the **Web Application Firewall** link.

   .. image:: _static/lab4-image010v2.png
      :width: 400px

#. Under the **Web Application Firewall (WAF)** drop-down, Select **Enable**

   .. image:: _static/lab4-image011.png
      :width: 600px

#. Under the **Enable** menu drop-down, select your <namespace>-waf object you just created.

   .. image:: _static/lab4-image012v2.png
      :width: 600px

#. Scroll to the bottom of the HTTP Load Balancer configuration page, and select **Save and Exit** 

   .. image:: _static/lab4-image013.png
      :width: 400px

**End of Lab**

.. image:: _static/labend.png
   :width: 800px