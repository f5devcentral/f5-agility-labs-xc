Lab 2: API Protection & Rate Limiting
=====================================

Lab 2 you will enable API Protection and Rate Limiting on select Endpoint.

This lab's tasks will walk through the configuration steps and note additional configurations available.

**Expected Lab Time: 25 minutes**

Task 1: Attaching API Protection to Load Balancer Object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Protection feature on the
previously built Load Balancer object delivering the targeted API.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

   .. image:: _static/shared-002.png
      :width: 800px

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/shared-003.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/shared-004.png
      :width: 800px

#. In the **API Protection > API Protection Rules** section, click the **Configure** link.

   .. image:: _static/lab2-task1-004.png
      :width: 800px

#. In the resulting **API Protection Rules** window, click **Configure** in the
   **API Endpoints** section.

   .. image:: _static/lab2-task1-005.png
      :width: 800px

#. Click **Add Item** in the **API Endpoints** window.

   .. image:: _static/lab2-task1-006.png
      :width: 800px

#. In the resulting window, input **block-endpoint** in the **Name** field of the
   **Metadata** section.

#. In the **Action** area, click the drop-down arrow indicated and select **Deny**.

   .. image:: _static/lab2-task1-007.png
      :width: 800px

#. In the **API Endpoint** section, click on the **API Endpoint** input field as indicated.

#. Select the **See Suggestions** link.

   .. image:: _static/lab2-task1-008.png
      :width: 800px

#. Select **/api/CatLookup/GetAllCats** from the available options provided.

   .. note::
      *The available endpoints are provided by the swagger previously imported,
      or identified by API Discovery*

#. In the **HTTP Methods** area, click in the **Method List** input field.

   .. image:: _static/lab2-task1-009.png
      :width: 800px

#. Select **Any** from the available methods provided.

   .. note::
      *Multiple methods can be selected if needed*

   .. image:: _static/lab2-task1-010.png
      :width: 800px

#. Review the configuration and click, the **Apply** button.

   .. image:: _static/lab2-task1-011.png
      :width: 800px

#. Review the API Endpoint deny rule and click, the **Apply** button.

   .. image:: _static/lab2-task1-012.png
      :width: 800px

#. Note that API Protection Rules are configure for the API Endpoints and click, the
   **Apply** button.

   .. image:: _static/lab2-task1-013.png
      :width: 800px

#. Select **Other Settings** on the left then click on **Save and Exit**
   at the bottom right of window.

   .. image:: _static/lab2-task2-009.png
      :width: 800px

#. Using another browser tab, navigate to the the following URL to confirm
   access is denied.

   .. note::
      *Path/URI matching is case-sensitive. Make sure the exact case format is used as listed.
      Copy and paste the following Path/URI to ensure matching.*

   ``http://<namespace>.lab-sec.f5demos.com/api/CatLookup/GetAllCats``

   .. image:: _static/lab2-task1-014.png
      :width: 500px

#. Select **Security Dashboard** within the XC tab, scroll down and click on the
   **<namespace>-lb** load balancer name.

   .. image:: _static/shared-005.png
      :width: 800px

   .. image:: _static/shared-006.png
      :width: 800px

#. Click on **Security Analytics**, observe the event. Expand event details by clicking on the **right arrow**.
   Events with the response code of **403** will be present.

   .. note::
      *Change time to 1 hour, and make sure the page has been refreshed*

   .. image:: _static/lab2-task1-015.png
      :width: 800px

   .. note::
      *Detection information will be near the bottom of the event detail.
      api_sec_event will be listed with details regarding "api protection."*

Task 2: Attach API Rate Limiting to Load Balancer Object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Rate Limiting feature on the
previously built Load Balancer object delivering the targeted API.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

   .. image:: _static/shared-002.png
      :width: 800px

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/shared-003.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/shared-004.png
      :width: 800px

#. Using the left-hand navigation, click the **Common Security Controls** link.

   .. image:: _static/lab2-task2-001.png
      :width: 800px

#. Locate the **Rate Limiting** area of the **Common Security Controls** and use the
   drop-down to select **API Rate Limit**.

   .. image:: _static/lab2-task2-003.png
      :width: 800px

#. In the expanded menu under **Rate Limiting**, click **Configure** in the **API
   Endpoints** area.

#. In the resulting window **API Endpoints** window, click **Add Item**.

   .. image:: _static/lab2-task2-005.png
      :width: 800px

#. In the resulting configuration window, select **/api/DogLookup/GetAllDogs** for **API
   Endpoint** input.

#. Select **ANY** for **Method** input.

#. Under **Rate Limiter Values** set **Duration** to **Minute** and then click the **Apply** button.

   .. image:: _static/lab2-task2-006UPDATE.png
      :width: 800px

#. Review the API Endpoint rate limiting rule and click, the **Apply** button.

   .. image:: _static/lab2-task2-007.png
      :width: 800px

#. Note the updated configuration for API Rate limiting, Click **Other Settings** on the
   the left, navigation on the bottom right then click on **Save and Exit**

   .. image:: _static/lab2-task2-008.png
      :width: 800px

   .. image:: _static/lab2-task2-009.png
      :width: 800px

#. Using another browser tab, navigate to the the following URL to confirm
   rate limiting, by freshing your tab several times.

   .. note::
      *Path/URI matching is case-sensitive. Make sure the exact case format is used as listed.
      Copy and paste the following Path/URI to ensure matching.*

   ``http://<namespace>.lab-sec.f5demos.com/api/DogLookup/GetAllDogs``

   .. image:: _static/lab2-task2-010.png
      :width: 500px

#. Select **Security Dashboard** within the XC tab, scroll down and click on the
   **<namespace>.lab-sec.f5demos.com** load balancer name.

   .. image:: _static/shared-005.png
      :width: 800px

   .. image:: _static/shared-006.png
      :width: 800px

#. Click on **Security Analytics**, observe the event. Expand event details by clicking on the **right arrow**.
   Events with the response code of **429** will be present.

   .. note::
      *Change time to 1 hour, and make sure the page has been refreshed*

   .. image:: _static/lab2-task2-011.png
      :width: 800px

   .. note::
      *Detection information will be near the bottom of the event detail.
      api_sec_event will be listed with details regarding "rate limiting."*

This configuration highlights the elements needed to deploy API Discovery & Protection. This
configuration can also be fully deployed and managed via the F5 Distributed Cloud API.

**End of Lab 2:**  This concludes Lab 2. A Q&A session will begin shortly after conclusion of the overall lab.

.. image:: _static/labend.png
   :width: 800px
