Lab 1: API Discovery
=========================================================================================

.. warning :: If you are using multiple labs in one course, understand that some steps below
   may be redundant depending on labs deployed. To gain full benefits from this lab, please
   delete any objects created in your prior lab and continue with this lab as all necessary
   objects will be recreated.

The following labs focus on the deployment and securing of an existing hosted API using F5
Distributed Cloud Platform and Services. This lab will be deployed in a SaaS only configuration
with no on-premises (public or private cloud) elements.  All configurations will be made via
the F5 Distributed Cloud Console and within the F5 Distributed Cloud Global Network services architecture.

For the tasks that follow, you should have already noted your individual **namespace**. If you
failed to note it, return to the **Introduction** section of this lab, follow the instructions
provided and note your **namespace** accordingly. The **Delegated Domain** and the F5 Distributed Cloud
**Tenant** are listed below for your convenience as they will be the same for all lab attendees.

* **Delegated Domain:** *.lab-sec.f5demos.com*
* **F5 Distributed Cloud Tenant:** https://f5-xc-lab-sec.console.ves.volterra.io

Following the tasks in the prior **Introduction** Section, you should now be able to access the
F5 Distributed Cloud Console, having set your Work Domain Roles and Skill levels. If you have not
done so already, please login to your tenant for this lab and proceed to Task 1.

Lab 1 you will create a Application Load Balancer, Import and apply an API Definition,
and enable Discovery.

**Expected Lab Time: 25 minutes**

Task 1: Configure Load Balancer and Origin Pool
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will allow you to deploy and advertise a globally available API.  These
steps will define an application, register its DNS and assign a target as an origin.

#. In the left top click the F5 ball and navigate to the **Web App & API Protection** Tile.

   .. image:: _static/shared-001.png
      :width: 800px

#. In the left-hand navigation expand **Manage** and click **Load Balancers > HTTP Load**
   **Balancers**

#. In the resulting screen click the **Add HTTP Load Balancer** in the graphic as shown.

   .. image:: _static/shared-002.png
      :width: 800px

   .. image:: _static/lab1-task1-002.png
      :width: 800px

   .. note::
      *You have defaulted to your specific namespace as that is the only namespace to which you
      have administrative access.*

#. Using the left-hand navigation and in the sections as shown, enter the following
   data. Values where **<namespace>** is required, use the name of your given namespace.

   * **Metadata:Name ID:**  ``<namespace>-lb``
   * **Basic Configuration: List of Domains:** ``<namespace>.lab-sec.f5demos.com``
   * **Basic Configuration: Select Type of Load Balancer:** ``HTTP``
   * **Basic Configuration: Automatically Manage DNS Records:** ``(Check the checkbox)``
   * **Basic Configuration: HTTP Port:** ``80``

   .. image:: _static/lab1-task1-003.png
      :width: 800px

#. In the current window's left-hand navigation, click **Origins**. In the adjacent
   **Origins** section, under **Origin Pools**, click **Add Item**.

   .. image:: _static/lab1-task1-004.png
      :width: 800px

#. In the resulting window, use the drop down as shown and click **Add Item**.

   .. image:: _static/lab1-task1-005.png
      :width: 800px

#. In the resulting window, enter **<namespace>-pool** in the **Name** field and click
   **Add Item** under **Origin Servers** as shown.

   .. image:: _static/lab1-task1-006.png
      :width: 800px

#. In the resulting window, **Public DNS Name of Origin Server** should be selected for
   **Select Type of Origin Server**.

#. In the **DNS Name** field enter the following hostname:
   **petapi.lab-sec.f5demos.com** and then click **Apply**

   .. image:: _static/lab1-task1-007.png
      :width: 800px

#. After returning to the prior window, make sure **Port:** within the **Origin Servers**
   section, under **Origin Server Port** is configured for **80**.

#. Leave all other values as shown while scrolling to the bottom and click, **Continue**.

#. After returning to the next window and confirming the content, click **Apply**.

   .. image:: _static/lab1-task1-008.png
      :width: 800px

   .. image:: _static/lab1-task1-009.png
      :width: 800px

   .. image:: _static/lab1-task1-010.png
      :width: 800px

#. After returning to the HTTP Load Balancer window, select **Other Settings** on the left
   then click on **Save and Exit** at the bottom right of window.

   .. image:: _static/lab1-task1-011.png
      :width: 800px

#. Using another browser tab, navigate to the the following URL to confirm the Load Balancer
   has been configured properly.

   ``http://<namespace>.lab-sec.f5demos.com/api/CatLookup/GetAllCats``

   .. image:: _static/lab1-task1-012.png
      :width: 800px

Task 2: Swagger File Import & Version Control
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will import swagger files into the F5 Distributed Cloud tenant and explore
version control features.

#. For the next series of steps, to download the JSON/OpenAPI spec file **app-api-v1.json**
   to your local desktop or workspace.

   http://petapi.lab-sec.f5demos.com/lab/app-api-v1.json

   .. note::
      *Depending on browser, you may need to copy content and save as **app-api-v1.json***

#. In the left top click the F5 ball and navigate to the **Web App & API Protection** Tile.

   .. image:: _static/shared-001.png
      :width: 800px

#. In the left-hand navigation, click on **Files** under the **Manage** section.

#. Click **Add OpenAPI File** in the main window area as shown. Alternatively, the link near
   the top of the window can also be used.

   .. note::
      *If you receive an error when clicking on "Add OpenAPI File" located at the center
      of the window, click "Add OpenAPI File" at the top of the same window.*

   .. image:: _static/lab1-task2-002.UPDATE.png
      :width: 800px

#. In the resulting **New OpenAPI File** window, input **app-api** for the **Name** under
   the **Metadata** section.

#. In the **Upload OpenAPI File** section, click the **Upload File** button. Select the file
   downloaded in Step 1 above and click **Open**.

   .. image:: _static/lab1-task2-003.png
      :width: 800px

#. Observe that the file **app-api-v1**  is present and the click **Save and Exit**

   .. image:: _static/lab1-task2-004.png
      :width: 800px

#. In the resulting **OpenAPI Files** window, you will see the upload file with additional
   metadata.

   .. note::
      *You will also see a dialogue box, in the bottom left of your screen indicating the file*
      has been successfully added.*

   .. image:: _static/lab1-task2-005.png
      :width: 800px

Task 3: API Definition
~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will establish the API Definition which serves as an object
pointer to imported OpenAPI files you just uploaded.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **API**
   **Management** under the **Manage** section and then click **API Definition**.

   .. image:: _static/lab1-task3-001.png
      :width: 800px

#. In the resulting **API Definition** window, click **Add API Definition** in the main
   window area as shown.

   .. image:: _static/lab1-task3-002.png
      :width: 800px

#. In the resulting **New API Definition** window, input **app-api-spec**
   for the **Name** under the **Metadata** section.

#. In the **OpenAPI Specs** section, click **Add Item** box in the
   **OpenAPI Specs** column.

#. Select the version 1 of the previously uploaded OpenAPI spec file. It will be in the
   format **<namespace>/app-api/v1-<current-date>**.

#. Once selected, click **Save and Exit** in the bottom-right corner.

   .. image:: _static/lab1-task3-003.png
      :width: 800px

Task 4: Enabling API Inventory and Discovery
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Inventory and Discovery feature on the
previously built Load Balancer object delivering the targeted API.

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/shared-003.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/shared-004.png
      :width: 800px

#. Click **API Protection** in the left-hand navigation.

#. In the **API Protection** section, click the drop-down arrow next to **API Definition**
   and select **Enable**.

   .. image:: _static/lab1-task4-004.png
      :width: 800px

#. In the second **API Definition** section, click the drop-down arrow and select the
   previously created API Definition **<namespace>/app-api-spec**.

   .. image:: _static/lab1-task4-005.png
      :width: 800px

#. Under **Validation**, select **API Inventory** from drop-down then click on
   **View Configuration**

   .. image:: _static/lab1-task4-006.png
      :width: 800px

#. Within **API Inventory validation**, update **Request Validation Endforcement Type** to
   **Block**. Click on **Apply** bottom right.

   .. image:: _static/lab1-task4-006a.png
      :width: 800px

#. In the **API Protection** section, click the drop-down arrow next to **API Discovery**
   and select **Enable**.

   .. image:: _static/lab1-task4-007.png
      :width: 800px

#. Select **Other Settings** on the left then click on **Save and Exit**
   at the bottom right of window.

   .. image:: _static/lab1-task4-008.png
      :width: 800px

#. Using another browser tab, navigate to the the following URL to confirm
   cat details.

   ``http://<namespace>.lab-sec.f5demos.com/api/CatLookup/GetByAge?age=5``

   .. image:: _static/lab1-task4-009.png
      :width: 400px

#. Using the same tab, update the URI parameter from **age=5** to **age=five**
   and confirm the request has been blocked.

   .. note::
      *Path/URI matching is case-sensitive. Make sure the exact case format is used as listed.
      Copy and paste the following Path/URI to ensure matching.*

   ``http://<namespace>.lab-sec.f5demos.com/api/CatLookup/GetByAge?age=five``

   .. image:: _static/lab1-task4-010.png
      :width: 600px

   .. note::
      *This request was blocked due to the uploaded swagger defining the
      parameter type as "integer" for this endpoint.*

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

   .. image:: _static/lab1-task4-011.png
      :width: 800px

   .. note::
      *Detection information will be near the bottom of the event detail.
      api_sec_event will be listed with the following detail,
      "Request Query Parameter Violation, an invalid integer".*

**End of Lab 1:**  This concludes Lab 1, feel free to review and test the configuration.
A brief presentation and demo will be shared prior to the beginning of Lab 2.

.. image:: _static/labend.png
   :width: 800px
