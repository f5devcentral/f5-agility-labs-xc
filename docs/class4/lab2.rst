Lab 2: API Inventory - Shadow
=============================

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

Task 1 : Enabling API Inventory
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Inventory feature on the
previously built Load Balancer.

.. note ::

   Refer to `Lab 2 Advanced <adv_lab2.html>`_ for additional step on how to download and upload a swagger 
   file and create a API Definition using the newly created OpenAPI file.

#. As review, an **API Definition** has already been created with an uploaded API File for your convenience. 
   The swagger file doesn't include the **customerlookup/getbyheroname** endpoint.

   .. image:: _static/lab2-swagger-example.png
      :width: 800px

   .. note ::

      The swagger in this use is akind to an endpoint allow list.

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
   pre-created API Definition **shared/api-lab-def**.

   .. image:: _static/lab2-lb-def-select-shared.png
      :width: 800px

#. Under **Validation**, select **API Inventory** from drop-down then click on
   **View Configuration**

   .. image:: _static/lab2-lb-def-validation-shared.png
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

Task 5: Simulate access to a Shadow API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/shared-swagger-intro.png
      :width: 800px

#. In the Demo Bank API app, navigate to the /api/customerlookup/getbyheroname endpoint, expand it, and click Try it out.

   .. image:: _static/lab2-swagger-try.png
      :width: 800px

#. Enter 'Iron Man' in the "heroname" field.. Click Execute.

   .. image:: _static/lab2-swagger-execute.png
      :width: 800px

#. Review the response body. 

   .. image:: _static/lab2-swagger-response-403.png
      :width: 800px

   .. note ::

      You should now be blocked from accessing the 'getbyheroname' API endpoint, as it is a shadow API—an undocumented and unapproved endpoint.

**End of Lab**

.. image:: _static/labend.png
   :width: 800px