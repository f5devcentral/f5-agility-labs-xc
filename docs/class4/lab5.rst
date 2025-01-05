Lab 5: Rate Limiting
=====================================

add description

**Scenario**

An internal application at times gets stuck in a temporary loop, replaying requests again a
single endpoint. This impacts the performance of the endpoint for others clients, at times making
it unusable.  

Find a way to limit the number of requests the endpoint will accept from a given client
(source) within a window of time. 

**Expected Lab Time: ?? minutes**

Task 1: Simulate...
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Add Description

#. Add more steps.

   .. image:: _static/update_image.png
      :width: 800px


Task 2: Attach API Rate Limiting to Load Balancer Object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Rate Limiting feature on the
previously built Load Balancer object delivering the targeted API.

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

#. Using the left-hand navigation, click the **Common Security Controls** link.

   .. image:: _static/update_image.png
      :width: 800px

#. Locate the **Rate Limiting** area of the **Common Security Controls** and use the
   drop-down to select **API Rate Limit**.

   .. image:: _static/update_image.png
      :width: 800px

#. In the expanded menu under **Rate Limiting**, click **Configure** in the **API
   Endpoints** area.

#. In the resulting window **API Endpoints** window, click **Add Item**.

   .. image:: _static/update_image.png
      :width: 800px

#. In the resulting configuration window, update the following fields then click **Apply**.

   * **API Endpoint:**  ``/api/accountlookup/getchecking``
   * **Method List:** ``ANY``
   * **Threshold:** ``3``
   * **Duration:** ``Minute``

   .. note::
      *This will rate limit a client after making 3 requests within 1 minute.*

   .. image:: _static/update_image.png
      :width: 800px

#. Review the API Endpoint rate limiting rule and click, the **Apply** button.

   .. image:: _static/update_image.png
      :width: 800px

#. Note the updated configuration for API Rate limiting, Click **Other Settings** on the
   the left, navigation on the bottom right then click on **Save and Exit**

   .. image:: _static/update_image.png
      :width: 800px

   .. image:: _static/update_image.png
      :width: 800px

Task 3: Simulate...
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Add Description

#. Add more steps.

   .. image:: _static/update_image.png
      :width: 800px

**End of Lab**

.. image:: _static/update_image.png
   :width: 800px
