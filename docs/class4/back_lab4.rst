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

.. note ::

   This lab will use a pre-build shared WAF object. Refer to `Lab 4 Advanced <adv_lab4.html>`_ for additional steps on how to create a WAF object.

Task 1: Simulate a Unmitigated Attack against API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will follow steps simulating an attack against an unprotected endpoint.
The Distributed Cloud (XC) WAF object is pre-built for the next Task, but please review how to create this object via the Advanced Lab 4.

#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/shared-swagger-intro.png
      :width: 800px

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

Task 2: Attach WAF policy to HTTP Load Balancer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will follow steps to attach a WAF policy to your Load Balancer.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/shared-103.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/shared-104.png
      :width: 800px

#. Using the left-hand navigation, click the **Web Application Firewall** link.

   .. image:: _static/lab4-image010.png
      :width: 300px

#. Under the **Web Application Firewall (WAF)** drop-down, Select **Enable**

   .. image:: _static/lab4-image011.png
      :width: 550px

#. Under the **Enable** menu drop-down, select the shared WAF object **shared/api-lab-af**.

   .. image:: _static/lab4-image052.png
      :width: 600px

#. Click on **View Configuration** next to the attached WAF object.

   .. image:: _static/lab4-af-review.png
      :width: 700px

#. Review the WAF Policy configration, click **Back** at the bottom left of the page.

   .. image:: _static/lab4-af-back.png
      :width: 800px

.. note ::

   Suspicious and Good Bot is set to ignore to reduce false positives from request made in this lab via 'curl'.

#. Click **Other Settings** on the left navigation, then click **Save and Exit**

   .. image:: _static/lab4-image053.png
      :width: 800px

Task 3: Simulate a Mitigated Attack against API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will follow steps simulating an attack againt a protected endpoint.

#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/shared-swagger-intro.png
      :width: 800px

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

#. Now, click the **F5 ball** in the upper-left corner to navigate back to the "Home" screen of your Distributed Cloud Console to prepare for the next lab.

   .. image:: _static/shared-004.png
      :width: 400px

**End of Lab**

.. image:: _static/labend.png
   :width: 800px