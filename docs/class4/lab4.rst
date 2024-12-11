Lab 4: Web Application Firewall (WAF)
=====================================

In this lab you will create and attach a Web Application Firewall to your Load Balancer.

This lab's tasks will walk through the configuration steps and note additional
configurations available.

**Scenario**

The “send” endpoint for the Message Service has a finding indicating it is susceptible
to dynamic attacks like Cross Site Scripting. This allows a script to be rendered within
the message window which is visible by the Customer Service team.

Find a way to protect the endpoint and over all API from dynamic attacks. 

**Expected Lab Time: ?? minutes**

Task 1: Simulate Cross Site Scripting Attack (XXS) without Web Application Firewall
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will follow steps simulating an attack againt an unprotected endpoint.

#. Using another browser tab, navigate to the the following URL.

``http://<namespace>.lab-sec.f5demos.com/swagger``

#. Within the Swagger page navigate and expand the messageservice/send endpoint, and click
   **Try is out**.

   .. image:: _static/update_image.png
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

#. Review the response, notice how the included **<script>** was accepted and included in 
   the reponse body.

   .. image:: _static/update_image.png
      :width: 800px

   .. note::
      *If this endpoint was consumed by a actual ticket management system, the "<script>"
      could have been rendered in the user's browswer.*

#. Click on the Distributed Cloud tab within your browser.

Task 2: Create a WAF policy Object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will follow steps to create a WAF policy object.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **App Firewall**
   under the **Manage** section.

   .. image:: _static/update_image.png
      :width: 800px

#. In the resulting **App Firewall** window, click on **Add App Firewall** at the
   top left or middle of the window.

   .. image:: _static/update_image.png
      :width: 800px

#. Add more steps.

   .. image:: _static/update_image.png
      :width: 800px

Task 3: Attach WAF policy to API Load Balancer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will follow steps to attach a WAF policy to your Load Balancer.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

   .. image:: _static/update_image.png
      :width: 800px

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/update_image.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/update_image.png
      :width: 800px

#. Using the left-hand navigation, click the **Web Application Firewall** link.

   .. image:: _static/update_image.png
      :width: 800px

#. Add more steps.

   .. image:: _static/update_image.png
      :width: 800px

Task 4: Simulate Cross Site Scripting Attack (XXS) with Web Application Firewall
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will follow steps simulating an attack againt a protected endpoint.

#. Using another browser tab, navigate to the the following URL.

``http://<namespace>.lab-sec.f5demos.com/swagger``

#. Within the Swagger page navigate and expand the messageservice/send endpoint, and click
   **Try is out**.

   .. image:: _static/update_image.png
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

#. Review the response, notice how a block message was presented within the response.

   .. image:: _static/update_image.png
      :width: 800px

#. Click on the Distributed Cloud tab within your browser.

**End of Lab**

.. image:: _static/update_image.png
   :width: 800px
