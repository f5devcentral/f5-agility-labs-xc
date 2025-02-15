Lab 3: API Protection
=====================================

**Scenario**

A Social Security Number (SSN) has been detected within the response body of the "getbydob"
endpoint. This is a misconfiguration, as the API is not approved to handle this data type based on its Data Classification. 

Take action to block usage of the "getbydob" endpoint until misconfiguration is resolved.

**Expected Lab Time: 10 minutes**

Task 1: Simulate Allowed Access to Sensitive Data API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/shared-swagger-intro.png
      :width: 800px

#. In the Demo Bank API app, navigate to the /api/customerlookup/getbydob endpoint, expand it, and click **Try it out**.

   .. image:: _static/lab3-swagger-try.png
      :width: 800px

#. Enter '1970/05/29' in the DOB field, click **Execute**.

   .. image:: _static/lab3-swagger-execute.png
      :width: 800px

#. Review the response body, and the SSN within the response.

   .. image:: _static/lab3-swagger-response.png
      :width: 800px

   .. note ::

      A SSN in the response doesn't match the Data Classification for this API.

Task 2: Enabled API Protection
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Protection feature on the
previously built Load Balancer object delivering the targeted API.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/shared-103.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/shared-104.png
      :width: 800px

#. In the **API Protection > API Protection Rules** section, click the **Configure** link.

   .. image:: _static/lab3-api-protection-config.png
      :width: 800px

#. In the resulting **API Protection Rules** window, click **Configure** in the
   **API Endpoints** section.

   .. image:: _static/lab3-api-endpoints-config.png
      :width: 800px

#. Click **Add Item** in the **API Endpoints** window.

   .. image:: _static/lab3-api-endpoints-add.png
      :width: 800px

#. In the resulting window, update the the required fields with the following information, click **Apply**.

   * **Name:**  ``block-endpoint``
   * **Action:** ``Deny``
   * **API Endpoint:** ``/api/customerlookup/getbydob``
   * **Method List:** ``ANY``

   .. image:: _static/lab3-api-endpoints-apply.png
      :width: 800px

   .. note::

      The available endpoints are provided by the swagger previously imported,
      or identified by API Discovery. More than one Method can be selected for an endpoint.

#. Review the API Endpoint deny rule and click, the **Apply** button.

   .. image:: _static/lab3-api-endpoints-review.png
      :width: 800px

#. Note that API Protection Rules are configure for the API Endpoints and click, the
   **Apply** button.

   .. image:: _static/lab3-api-protection-apply.png
      :width: 800px

#. Select **Other Settings** on the left then click on **Save and Exit**
   at the bottom right of window.

   .. image:: _static/shared-lb-save.png
      :width: 800px

Task 3: Simulate Blocked Access to Sensitive Data API
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Using another browser tab, navigate to the the following URL.

   ``http://<namespace>.lab-sec.f5demos.com/swagger``

   .. image:: _static/shared-swagger-intro.png
      :width: 800px

#. In the Demo Bank API app, navigate to the /api/customerlookup/getbydob endpoint, expand it, and click **Try it out**.

   .. image:: _static/lab3-swagger-try.png
      :width: 800px

#. Enter '1970/05/29' in the DOB field, click **Execute**.

   .. image:: _static/lab3-swagger-execute.png
      :width: 800px

#. Review the response body. 

   .. image:: _static/lab3-swagger-response-403.png
      :width: 800px

   .. note ::

      You should now be blocked from accessing the 'getbydob' endpoint, preventing access to sensitive data such as the SSN.

**End of Lab**

.. image:: _static/labend.png
   :width: 800px
