Lab 5: Rate Limiting
=====================================

**Scenario**

An internal application at times gets stuck in a temporary loop, replaying requests many times against a
single endpoint. This impacts the performance of the endpoint for others clients, at times making
the API unusable.

Find a way to limit the number of requests the endpoint will accept from a given client
(source) within a window of time. 

**Expected Lab Time: 10 minutes**

Task 1: Simulate Unmitigated Excessive Requests against API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Currently, our Banking Application does not implement, or enforce, rate-limiting to a specific endpoint.

In this task, you will follow steps to send multiple requests witin 1 minute to the /getallcustomers endpoint.

#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/shared-swagger-intro.png
      :width: 800px

#. Within the Swagger page, navigate and expand the customerlookup/getallcustomers endpoint, and click
   **Try it out**.

   .. image:: _static/lab4-image015.png
      :width: 800px


#. Click the **Execute** button, and observe the Response Body (200 OK):

   .. image:: _static/lab4-image016.png
      :width: 800px

#. Click the **Execute** button 10 times within 1 minute, and observe the Response Body; each 
   request should be allowed.

   .. image:: _static/lab4-image017.png
      :width: 800px



Task 2: Attach API Rate-Limiting to HTTP Load Balancer Object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps, you will enable the API Rate-Limiting feature on the
previously built HTTP Load Balancer object delivering the targeted API.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/shared-103.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/shared-104.png
      :width: 800px

#. Using the left-hand navigation, click the **Common Security Controls** link.

   .. image:: _static/lab4-image021.png
      :width: 300px

#. Locate the **Rate Limiting** area of the **Common Security Controls** and use the
   drop-down to select **API Rate Limit**.

   .. image:: _static/lab4-image022.png
      :width: 800px

#. In the expanded menu under **API Rate Limit**, click **View Configuration**

   .. image:: _static/lab4-image023.png
      :width: 400px

#. In the resulting window, under **API Endpoints**, click **Configure**.

   .. image:: _static/lab4-image024.png
      :width: 400px

#. In the resulting window, use the drop-down under **API Endpoint**, and click **See Suggestions**.

   .. image:: _static/lab4-image055.png
      :width: 800px

#. In the suggestion results, use the drop-down and select the **/getallcustomers** endpoint.

   .. image:: _static/lab4-image026.png
      :width: 500px

#. In the resulting configuration window, update the following fields then click **Apply**.

   * **Method List:** ``ANY``
   * **Threshold:** ``10``
   * **Duration:** ``Minute``

   .. note::
      *This will rate limit a client after making 10 requests within 1 minute.*

   .. image:: _static/lab4-image027.png
      :width: 800px

#. Review the API Endpoint rate limiting rule and click, the **Apply** button.

   .. image:: _static/lab4-image028.png
      :width: 800px

#. Click **Apply** at the API Rate Limit page.

   .. image:: _static/lab4-image029.png
      :width: 800px      

#. Note the updated configuration for API Rate limiting, Click **Other Settings** on the
   the left, navigation on the bottom right then click on **Save and Exit**

   .. image:: _static/lab4-image030.png
      :width: 800px

Task 3: Simulate Mitigated Excessive Requests against API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will send more than 10 requests within a Minute

#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/shared-swagger-intro.png
      :width: 800px

#. Within the Swagger page, navigate and expand the customerlookup/getallcustomers endpoint, and click
   **Try it out**.

   .. image:: _static/lab4-image015.png
      :width: 800px

#. Click the **Execute** button more than 10 times within 1 minutes, and observe the Response Body; each request, through the 10th, should be allowed/accepted.  
   Observe the Response Body once you exceed this threshold.

   .. image:: _static/lab4-image031.png
      :width: 800px

**End of Lab**

.. image:: _static/labend.png
   :width: 800px
