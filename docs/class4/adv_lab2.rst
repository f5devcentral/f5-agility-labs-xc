Lab 2: Advanced API Inventory - Shadow
======================================

**Scenario**

A fast-growing digital banking startup, frequently deploys updates to its banking application 
without thorough review. 

This practice often results in:

* Exposed Sensitive API Endpoints
* Regulatory Risks

To address these issues, the company must:

* Discover APIs: Identify all live endpoints.
* Enforce Policies: Restrict exposure to approved endpoints only.

The goal is to ensure secure, compliant, and efficient API management for the banking application.

**Expected Lab Time: 20 minutes**

Task 1: Simulate Allowed Access to a Shadow API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/shared-swagger-intro.png
      :width: 800px

#. In the Demo Bank API app, navigate to the **/api/customerlookup/getbyheroname** endpoint, expand it, and click **Try it out**.

   .. image:: _static/lab2-swagger-try.png
      :width: 800px

   .. note ::

      The 'getbyheroname' is a shadow API endpoint that is not approved for use. 
      A shadow API refers to an undocumented or unintended API endpoint that exists alongside officially supported APIs, often posing security or operational risks due to lack of visibility or management.


#. Enter 'Iron Man' in the "heroname" field.. Click **Execute**.

   .. image:: _static/lab2-swagger-execute.png
      :width: 800px

#. Review the response body. It returns the customer information.

   .. image:: _static/lab2-swagger-response.png
      :width: 800px

   .. note ::

      In the next steps, we will address this issue by blocking access to the shadow API endpoints. 

Task 2: OpenAPI File Import
~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will download and upload a swagger file.

#. Open a new broswer tab and navigiate to the following URL. Download the **demobank-api-v1.json** as a file,
   note the saved location.

   http://demobankapi.lab-sec.f5demos.com/lab/demobank-api-v1.json

   .. note::

      *Depending on browser, you may need to copy content and save as **demobank-api-v1.json. "Pretty-print" will need to be checked within Chrome.*

#. Review the downloaded swagger. You will notice the **customerlookup/getbyheroname** is not present.

   .. image:: _static/lab2-swagger-example.png
      :width: 800px

   .. note ::

      The swagger in this use is akind to an endpoint allow list.

#. Click the left top click the F5 ball and navigate to the **Web App & API Protection** Tile in your browser.

   .. image:: _static/lab2-task2-001.png
      :width: 800px

#. Under Manage, mouse over **File** and click on **OpenAPI Files** from the slide out.


   .. image:: _static/lab2-openapi-files.png
      :width: 800px

#. Click on **Add OpenAPI File** top left of the OpenAPI Files page.

   .. image:: _static/lab2-openapi-add.png
      :width: 800px
   

#. In the resulting OpenAPI File window, input **demobank-api-swagger** for the Name then click **Upload File**.

   .. image:: _static/lab2-openapi-upload.png
      :width: 600px

#. Navigate to the previously downloaded **demobank-api-v1.json** file, select and click on **Open**

   .. image:: _static/lab2-openapi-open.png
      :width: 700px

#. Observe that the file **demobank-api-v1**  is present and the click **Save and Exit**

   .. image:: _static/lab2-openapi-save.png
      :width: 800px


#. In the resulting OpenAPI File window, you will see the upload file with additional
   metadata.

   .. image:: _static/lab2-openapi-review.png
      :width: 800px

   .. note::
      *You will also see a dialogue box, in the bottom left of your screen indicating the file*
      has been successfully added.*

Task 3: API Definition
~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will create a API Definition using the created OpenAPI object.

#. In the left-hand navigation of the **Web App & API Protection** service under **Manage**, mouse over **API Management** and click on **API Definition** from the slide out.

   .. image:: _static/lab2-def-apidef.png
      :width: 700px

#. In the resulting **API Definition** window, click **Add API Definition** in the main
   window area as shown.

   .. image:: _static/lab2-def-add.png
      :width: 650px

#. In the resulting **New API Definition** window, input **demobank-api-def**
   for the **Name** under the **Metadata** section.

#. In the **OpenAPI Specification Files** section, click **Add Item**.


   .. image:: _static/lab2-def-additem.png
      :width: 800px

#. Select the version 1 of the previously uploaded OpenAPI spec file. It will be in the
   format **<namespace>/demobank-api/v1-<current-date>**.

   .. image:: _static/lab2-def-select.png
      :width: 800px

#. Once selected, click **Save and Exit** in the bottom-right corner.

   .. image:: _static/lab2-def-save.png
      :width: 800px

Task 4: Enabling API Inventory
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Inventory and Discovery feature on the
previously built Load Balancer.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/shared-103.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/shared-104.png
      :width: 800px

#. Click **API Protection** in the left-hand navigation.

#. In the **API Protection** section, click the drop-down arrow next to **API Definition**
   and select **Enable**.

   .. image:: _static/lab2-lb-def-enable.png
      :width: 800px

#. In the second **API Definition** section, click the drop-down arrow and select the
   pre-created API Definition **<namespace>/demobank-api-def**.

   .. image:: _static/lab2-lb-def-select.png
      :width: 800px

#. Under **Validation**, select **API Inventory** from drop-down then click on
   **View Configuration**

   .. image:: _static/lab2-lb-def-validation.png
      :width: 800px

   .. image:: _static/lab2-lb-def-validation-config.png
      :width: 800px

#. Within **API Inventory validation**, under **Fall Through Mode** update the drop-down
   to **Custom**.

   .. image:: _static/lab2-lb-def-validation-fall-through.png
      :width: 800px

#. Within **Custom Fall Through Rule List** , click on **Configure**.

   .. image:: _static/lab2-lb-def-validation-fall-through-config.png
      :width: 800px

#. In the **Custom Fall Through Rule List** section, click on **Add item**.

   .. image:: _static/lab2-lb-def-fall-through-add.png
      :width: 800px

#. Update the fields with the below detail, click on **Apply**.

   * **Name:**  ``fall-through``
   * **Action:** ``Block``
   * **Type:** ``Base Path``
   * **Base Path:** ``/api``

   .. image:: _static/lab2-lb-def-fall-through-apply.png
      :width: 800px

#. Review the **Custom Fall Through Rule List**, click **Apply**.

   .. image:: _static/lab2-lb-def-fall-through-review.png
      :width: 800px

#. Review the **API Inventory validation**, click **Apply**.

   .. image:: _static/lab2-lb-def-validation-apply.png
      :width: 800px

#. Select **Other Settings** on the left then click on **Save and Exit**
   at the bottom right of window.

   .. image:: _static/shared-lb-save.png
      :width: 800px

Task 5: Simulate Blocked Access to a Shadow API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/shared-swagger-intro.png
      :width: 800px

#. In the Demo Bank API app, navigate to the **/api/customerlookup/getbyheroname** endpoint, expand it, and click **Try it out**.

   .. image:: _static/lab2-swagger-try.png
      :width: 800px

#. Enter 'Iron Man' in the "heroname" field.. Click **Execute**.

   .. image:: _static/lab2-swagger-execute.png
      :width: 800px

#. Review the response body. 

   .. image:: _static/lab2-swagger-response-403.png
      :width: 800px

   .. note ::

      You should now be blocked from accessing the 'getbyheroname' API endpoint, as it is a shadow API, an undocumented and unapproved endpoint.

**End of Lab**

.. image:: _static/labend.png
   :width: 800px
