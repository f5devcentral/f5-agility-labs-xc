Lab 3: API Protection
=====================================

**Scenario**

A Social Security Number (SSN) has been detected within the response body of the "getbydob"
endpoint. This is a misconfiguration in the API, which isn’t approved for this Data Type based
on its Data Classification. 

Take action to block usage of the "getbydob" endpoint until misconfiguration is resolved. 

**Expected Lab Time: 20 minutes**

Task 1: Simulate Access to Sensitive Data via getbydob Endpoint
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/lab2-task1-001.png
      :width: 800px

#. In the Demo Bank API app, navigate to the /api/customerlookup/getbydob endpoint, expand it, and click Try it out.

   .. image:: _static/lab3-task1-001.png
      :width: 800px

#. Enter '05/29/1970' in the DOB field.

   .. image:: _static/lab3-task1-002.png
      :width: 800px

#. Click Execute.

   .. image:: _static/lab3-task1-003.png
      :width: 800px

#. Review the response body. It returns customer information for the Date of Birth '05/29/1970' and also includes the SSN.

   .. image:: _static/lab3-task1-004.png
      :width: 800px

#. In the next steps, we will fix this misconfiguration by blocking access to the "getbydob" endpoint. 

Task 2: Attaching API Protection to Load Balancer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Protection feature on the
previously built Load Balancer object delivering the targeted API.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

   .. image:: _static/lab3-task2-001.png
      :width: 800px

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/lab3-task2-002.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/lab3-task2-003.png
      :width: 800px

#. In the **API Protection > API Protection Rules** section, click the **Configure** link.

   .. image:: _static/lab3-task2-004.png
      :width: 800px

#. In the resulting **API Protection Rules** window, click **Configure** in the
   **API Endpoints** section.

   .. image:: _static/lab3-task2-005.png
      :width: 800px

#. Click **Add Item** in the **API Endpoints** window.

   .. image:: _static/lab3-task2-006.png
      :width: 800px

#. In the resulting window, input **block-endpoint** in the **Name** field of the
   **Metadata** section.

#. In the **Action** area, click the drop-down arrow indicated and select **Deny**.

   .. image:: _static/lab3-task2-007.png
      :width: 800px

#. In the **API Endpoint** section, click on the **API Endpoint** input field as indicated.

#. Select the **See Suggestions** link.

   .. image:: _static/lab3-task2-008.png
      :width: 800px

#. Select **/api/customerlookup/getbydob** from the available options provided.

   .. image:: _static/lab3-task2-009.png
      :width: 800px

   .. note::
      *The available endpoints are provided by the swagger previously imported,
      or identified by API Discovery*

#. In the **HTTP Methods** area, click in the **Method List** input field.

   .. image:: _static/lab3-task2-010.png
      :width: 800px

#. Select **Any** from the available methods provided.

   .. note::
      *Multiple methods can be selected if needed*

   .. image:: _static/lab3-task2-011.png
      :width: 800px

#. Review the configuration and click, the **Apply** button.

   .. image:: _static/lab3-task2-012.png
      :width: 800px

#. Review the API Endpoint deny rule and click, the **Apply** button.

   .. image:: _static/lab3-task2-013.png
      :width: 800px

#. Note that API Protection Rules are configure for the API Endpoints and click, the
   **Apply** button.

   .. image:: _static/lab3-task2-014.png
      :width: 800px

#. Select **Other Settings** on the left then click on **Save and Exit**
   at the bottom right of window.

   .. image:: _static/lab3-task2-015.png
      :width: 800px

Task 3: Simulate...
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Add Description

#. Add more steps.

   .. image:: _static/update_image.png
      :width: 800px

**End of Lab**

.. image:: _static/labend.png
   :width: 800px
