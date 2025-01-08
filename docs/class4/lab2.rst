Lab 2: API Discovery
=====================================

**Scenario**

A fast-growing digital banking startup, frequently deploys updates to its banking application 
without thorough review. This practice often results in:

Exposed Sensitive API Endpoints
Regulatory Risks

To address these issues, the company must:

Discover APIs: Identify all live endpoints.
Enforce Policies: Restrict exposure to approved endpoints only.

The goal is to ensure secure, compliant, and efficient API management for the banking application.


**Expected Lab Time: 20 minutes**

Task 1: Simulate access to a Shadow API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/lab2-task1-001.png
      :width: 800px

#. In the Demo Bank API app, navigate to the /api/customerlookup/getbylastname endpoint, expand it, and click Try it
 out.

   .. image:: _static/lab2-task0-001.png
      :width: 800px

   The 'getbylastname' is a shadow API endpoint that is not approved for use.

   A shadow API refers to an undocumented or unintended API endpoint that exists alongside officially supported APIs, often posing security or operational risks due to lack of visibility or management.


#. Enter 'Stark' in the "lastname" field..

   .. image:: _static/lab2-task0-002.png
      :width: 800px

#. Click Execute.

   .. image:: _static/lab2-task0-003.png
      :width: 800px

#. Review the response body. It returns the customer information.

   .. image:: _static/lab2-task0-004.png
      :width: 800px
   #. In the next steps, we will address this issue by blocking access to the shadow API endpoints. 

Task 2: OpenAPI File Import
~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will import swagger files into the F5 Distributed Cloud tenant and explore
version control features.

#. For the next series of steps, to download the JSON/OpenAPI spec file **demobank-api-v1.json**
   to your local desktop or workspace.

   http://demobankapi.lab-sec.f5demos.com/lab/demobank-api-v1.json

   .. note::
      *Depending on browser, you may need to copy content and save as **demobank-api-v1.json***

#. In the left top click the F5 ball and navigate to the **Web App & API Protection** Tile.

   .. image:: _static/lab2-task2-001.png
      :width: 800px

#. In the left-hand navigation, click on **Files** then **OpenAPI Files** under the **Manage** section.

#. Click **Add OpenAPI File** located in the center of the window.

   .. image:: _static/lab2-task2-002.png
      :width: 800px

#. In the resulting **OpenAPI File** window, input **demobank-api** for the **Name** under
   the **Metadata** section.
   .. image:: _static/lab2-task2-003.png
      :width: 800px
#. In the **OpenAPI Upload** section, click the **Upload File** button. Select the file
   downloaded in Step 1 above and click **Open**.

   .. image:: _static/lab2-task2-004.png
      :width: 800px

#. Observe that the file **demobank-api-v1**  is present and the click **Save and Exit**

   .. image:: _static/lab2-task2-005.png
      :width: 800px

#. In the resulting **OpenAPI File** window, you will see the upload file with additional
   metadata.

   .. note::
      *You will also see a dialogue box, in the bottom left of your screen indicating the file*
      has been successfully added.*

   .. image:: _static/lab2-task2-006.png
      :width: 800px

Task 3: API Definition
~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will establish the Swagger Definition which serves as an object
pointer to imported swagger files you just uploaded.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **API**
   **Management** under the **Manage** section and then click **API Definition**.

   .. image:: _static/lab2-task3-001.png
      :width: 800px

#. In the resulting **API Definition** window, click **Add API Definition** in the main
   window area as shown.

   .. image:: _static/lab2-task3-002.png
      :width: 800px

#. In the resulting **New API Definition** window, input **demobank-api-spec**
   for the **Name** under the **Metadata** section.

#. In the **OpenAPI Specification Files** section, click **Add Item**.

#. Select the version 1 of the previously uploaded OpenAPI spec file. It will be in the
   format **<namespace>/demobank-api/v1-<current-date>**.

#. Once selected, click **Save and Exit** in the bottom-right corner.

   .. image:: _static/lab2-task3-003.png
      :width: 800px

Task 4: Enabling API Inventory
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Inventory and Discovery feature on the
previously built Load Balancer object delivering the targeted API.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/lab2-task4-001.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/lab2-task4-002.png
      :width: 800px

#. Click **API Protection** in the left-hand navigation.

#. In the **API Protection** section, click the drop-down arrow next to **API Definition**
   and select **Enable**.

   .. image:: _static/lab2-task4-003.png
      :width: 800px

#. In the second **API Definition** section, click the drop-down arrow and select the
   previously created API Definition **<namespace>/app-api-spec**.

   .. image:: _static/lab2-task4-004.png
      :width: 800px

#. Under **Validation**, select **API Inventory** from drop-down then click on
   **View Configuration**

   .. image:: _static/lab2-task4-005.png
      :width: 800px

#. Within **API Inventory validation**, under **Fall Through Mode** update the drop-down
   to **Custom** .

   .. image:: _static/lab2-task4-006.png
      :width: 800px

#. Within **Custom Fall Through Rule List** , click on **Configure**.

   .. image:: _static/lab2-task4-007.png
      :width: 800px

#. In the **Custom Fall Through Rule List** section, click on **Add item**.

   .. image:: _static/lab2-task4-008.png
      :width: 800px

#. Update the fields with the below detail, click on **Apply**.

   * **Name:**  ``<namespace>-shadow``
   * **Action:** ``Block``
   * **Type:** ``Base Path``
   * **Base Path:** ``/``

   .. image:: _static/lab2-task4-009.png
      :width: 800px

#. At the  **Custom Fall Through Rule List** and the **API Inventory validation** click **Apply**.

    .. image:: _static/lab2-task4-010.png
      :width: 800px


    .. image:: _static/lab2-task4-011.png
      :width: 800px
#. Select **Other Settings** on the left then click on **Save and Exit**
   at the bottom right of window.

   .. image:: _static/lab2-task4-012.png
      :width: 800px

Task 5: Simulate access to a Shadow API - you should now be blocked
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/lab2-task1-001.png
      :width: 800px

#. In the Demo Bank API app, navigate to the /api/customerlookup/getbylastname endpoint, expand it, and click Try it
 out.

   .. image:: _static/lab2-task0-001.png
      :width: 800px

   The 'getbylastname' is a shadow API endpoint that is not approved for use.

   A shadow API refers to an undocumented or unintended API endpoint that exists alongside officially supported APIs, often posing security or operational risks due to lack of visibility or management.
   

#. Enter 'Stark' in the "lastname" field..

   .. image:: _static/lab2-task0-002.png
      :width: 800px

#. Click Execute.

   .. image:: _static/lab2-task0-003.png
      :width: 800px

#. Review the response body. 

   .. image:: _static/lab2-task5-001.png
      :width: 800px

   You should now be blocked from accessing the 'getbylastname' endpoint, as it is a shadow API—an undocumented and unapproved endpoint.
**End of Lab**

.. image:: _static/labend.png
   :width: 800px
