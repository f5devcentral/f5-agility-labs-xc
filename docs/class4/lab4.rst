Lab 4: Web Application Firewall (WAF)
=====================================

In this lab, you will create and attach a Web Application Firewall (WAF) to your HTTP Load Balancer.

This lab's tasks will walkthrough the configuration steps, and note additional
configurations available.

**Scenario**

The “send” API endpoint for the Message Service has a finding indicating it is susceptible
to dynamic attacks like Cross Site Scripting (XSS). This allows a script to be rendered within
the message window, which will be visible by the Customer Service team; this is not desirable.

Find a way to protect the endpoint, and overall all APIs, from dynamic attacks.

**Expected Lab Time: 25 minutes**

Task 1: Simulate Cross Site Scripting Attack (XXS) without Web Application Firewall (WAF):
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will follow steps simulating an attack against an unprotected endpoint.

#. Using another browser tab, navigate to the the following URL.

``http://<namespace>.lab-sec.f5demos.com/swagger``

#. Within the Swagger page navigate and expand the messageservice/send endpoint, and click
   **Try it out**.

   .. image:: _static/lab4-image001.png
      :width: 800px

#. Copy the following JSON, paste within the Request body. Click on **Execute**.

   .. code-block:: json
   
      {
         "firstName": "Hugo",
         "lastName": "Weaving",
         "phoneNumber": "(568) 190-1234",
         "email": "hugo.weaving@hydra.com",
         "message": "The revolution has started <script>alert('Hail Hydra');</script>"
      }

   .. image:: _static/lab4-image002.png
      :width: 800px

#. Review the Response, notice how the included **<script>** was accepted and included in 
   the Reponse Body.

   .. image:: _static/lab4-image003.png
      :width: 800px

   .. note::
      If this endpoint was consumed by an actual ticket management system, the "<script>"
      could have been rendered in the user's browser.

#. Now, return to your Distributed Cloud (XC) tab within your browser to perform the next Task.

Task 2: Create a WAF policy Object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will perform steps to create a WAF policy object, and apply this to your HTTP Load Balancer.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **App Firewall**
   under the **Manage** section.

   .. image:: _static/lab4-image004.png
      :width: 400px

#. In the resulting **App Firewall** window, click on **Add App Firewall** at the
   top left or middle of the window.

   .. image:: _static/lab4-image005.png
      :width: 400px

#. Within the App Firewall object, configure the following.  Values where **<namespace>** is required, use the name of your given namespace.

   * **Metadata:Name:**  ``<namespace>-waf``
   * **Enforcement Mode:** ``Blocking``

   Leave all other settings at default.  Click **Save and Exit** button.

   .. image:: _static/lab4-image006.png
      :width: 800px


Task 3: Attach WAF policy to API Load Balancer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will follow steps to attach a WAF policy to your Load Balancer.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

   .. image:: _static/lab4-image007.png
      :width: 400px

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/lab4-image008.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/lab4-image009.png
      :width: 400px

#. Using the left-hand navigation, click the **Web Application Firewall** link.

   .. image:: _static/lab4-image010.png
      :width: 400px

#. Under the **Web Application Firewall (WAF)** drop-down, Select **Enable**

   .. image:: _static/lab4-image011.png
      :width: 600px

#. Under the **Enable** menu drop-down, select your <namespace>-waf object you just created.

   .. image:: _static/lab4-image012.png
      :width: 600px

#. Scroll to the bottom of the HTTP Load Balancer configuration page, and select **Save and Exit** 

   .. image:: _static/lab4-image013.png
      :width: 400px

Task 4: Simulate Cross Site Scripting Attack (XXS) with Web Application Firewall
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will follow steps simulating an attack againt a protected endpoint.

#. Using another browser tab, navigate to the the following URL.

``http://<namespace>.lab-sec.f5demos.com/swagger``

#. Within the Swagger page navigate and expand the messageservice/send endpoint, and click
   **Try it out**.

   .. image:: _static/lab4-image001.png
      :width: 800px

#. Copy the following JSON, paste within the Request body. Click on **Execute**.

   .. code-block:: json
   
      {
         "firstName": "Hugo",
         "lastName": "Weaving",
         "phoneNumber": "(568) 190-1234",
         "email": "hugo.weaving@hydra.com",
         "message": "The revolution has started <script>alert('Hail Hydra');</script>"
      }

   .. image:: _static/lab4-image002.png
      :width: 800px

#. Review the Server Response; notice how a block message was presented within the Server Response body.

   .. image:: _static/lab4-image014.png
      :width: 800px

Task 5 [Optional]: Explore the Distributed Cloud Console to find this Security Event
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Using the Server Response body request ID, try and discover this Security Event within your Distributed Cloud Console.

#. How many signatures did this request trigger?

#. What signature sets did this request trigger?

#. Now, navigate back to the "Home" screen of your Distributed Cloud Console to prepare for the next lab.

**End of Lab**

.. image:: _static/labend.png
   :width: 800px