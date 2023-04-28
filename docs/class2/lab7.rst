Lab 7: API Discovery & Protection 
=================================

F5® Distributed API Discovery & Protection provides key security functionality to visualize, understand, 
deliver and secure APIs. This lab's tasks will walk through the configuration steps and note additional
configurations available.

* **API Discovery**: Provided via machine-based learning processes, enables visualization of the API Framework,
  assesses use of end-points, discovers new end-points based on flows, identifies use of sensitive information,   
  and enables swagger file export.

* **API Protection**: Encompasses a set of definitions and controls to protect and secure the functions, use and 
  endpoints of the delivered API's framework. 

Task 1: Swagger File Import & Version Control
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will import swagger files into the F5 Distributed Cloud tenant and explore 
version control features.

+----------------------------------------------------------------------------------------------+
| 1. In the left top click the F5 ball and navigate to the **Web App & API Protection** Tile.  |
+----------------------------------------------------------------------------------------------+
| |lab001|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. In the left-hand navigation, click on **Files** under the **Manage** section.             |
|                                                                                              |
| 3. Click **Add Swagger File** in the main window area as shown. Alternatively, the link near |
|                                                                                              |
|    the top of the window can also be used.                                                   |
+----------------------------------------------------------------------------------------------+
| |lab002|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. In the resulting **New Swagger File** window, input **app-api** for the **Name** under    |
|                                                                                              |
|    the **Metadata** section.                                                                 |
|                                                                                              |
| 5. For the next step, use the following link, 'app-api-file-v1'_. to download the            |
|                                                                                              |
|    JSON/OpenAPI spec file **app-api-v1.json** to your local desktop or workspace.            |
|                                                                                              |
| 6. In the **Upload Swagger File** section, click the **Upload File** button. Select the file |
|                                                                                              |
|    downloaded in Step 5 above and click **Save**.                                            |
+----------------------------------------------------------------------------------------------+
| |lab003|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. Observe that the file **app-api-v1.json**  is present and the click **Save and Exit**     |
+----------------------------------------------------------------------------------------------+
| |lab004|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. In the resulting **Swagger Files** window, you will see the upload file with additional   |
|                                                                                              |
|    metadata. Click the three dots **...** in the **Action** column.                          |
|                                                                                              |
| .. note::                                                                                    |
|    *You will also see a dialogue box, in the bottom left of your screen indicating the file* |
|                                                                                              |
|    *has been successfully added.*                                                            |
+----------------------------------------------------------------------------------------------+
| |lab005|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. The **Edit Swagger File** window will be shown.                                           |
|                                                                                              |
| 10. For the next step, use the following link, 'app-api-file-v2'_. to download the           |
|                                                                                              |
|     JSON/OpenAPI spec file **app-api-v2.json** to your local desktop or workspace.           |
|                                                                                              |
| .. note::                                                                                    |
|    *This is a modified version (v2) of the JSON/OpenAPI spec file you previously downloaded* |
|                                                                                              |
| 11. In the **Upload Swagger File** section, click the **Upload File** button. Select the file|
|                                                                                              |
|     downloaded in Step 10 above and click **Save**.                                          |
+----------------------------------------------------------------------------------------------+
| |lab006|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. In the resulting **Swagger Files** window, you will see the upload file with additional  |
|                                                                                              |
|     metadata seen previously.                                                                |
|                                                                                              |
| 13. Note now that there are **2** versions available of the **app-api** file.  Click the     |
|                                                                                              |
|     **2** in the **Versions** column.                                                        |
+----------------------------------------------------------------------------------------------+
| |lab007|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 14. In the resulting window, observe there are now two versions of the **app-api** spec file.|
|                                                                                              |
| .. note::                                                                                    |
|    *This is a API File update process can also be performed through the F5 Distributed Cloud*|
|                                                                                              |
|    *API framework.                                                                           |
|                                                                                              |
| 15. Click **X** in the top-right corner and proceed to the next task.                        |
+----------------------------------------------------------------------------------------------+
| |lab008|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 2: Swagger Definition
~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will establish the Swagger Definition which serves as an object

pointer to imported swagger files you just uploaded.

+----------------------------------------------------------------------------------------------+
| 1. In the left-hand navigation of the **Web App & API Protection** service, click on **API** |
|                                                                                              |
|    **Management** under the **Manage** section and then click **API Definition**.            |
+----------------------------------------------------------------------------------------------+
| |lab009|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. In the resulting **API Definition** window, click **Add API Definition** in the main      |
|                                                                                              |
|    window area as shown.                                                                     |
+----------------------------------------------------------------------------------------------+
| |lab010|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. In the resulting **New API Definition** window, input **app-api-spec** for the **Name**   |
|                                                                                              |
|    under the **Metadata** section.                                                           |
|                                                                                              |
| 4. In the **Swagger Specs** section, click the **Arrow** in the **Select Item** box in the   |
|                                                                                              |
|    **Swagger Specs** column.                                                                 |
|                                                                                              |
| 5. Select the version 2 of the previously uploaded swagger spec file. It will be in the      |
|                                                                                              |
|    format **<adjective-animal>/app-api/v2-<current-date>**.                                  |
|                                                                                              |
| 6. Once selected, click **Save and Exit** in the bottom-right corner.                        |
+----------------------------------------------------------------------------------------------+
| |lab011|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 3: Attaching API Discovery & Protection to Load Balancer Object 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Discovery & Protection feature on the 
previously built Load Balancer object delivering the targeted application/API.

+----------------------------------------------------------------------------------------------+
| 1. In the left-hand navigation of the **Web App & API Protection** service, click on **Load**|
|                                                                                              |
|    **Balancers** under the **Manage** section.                                               |
+----------------------------------------------------------------------------------------------+
| |lab012|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. In the resulting **Load Balancers** window, click on the three dots **...** in the        |
|                                                                                              |
|    **Action** column, and the select **Manage Configuration**.                               |
+----------------------------------------------------------------------------------------------+
| |lab013|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. Click **Edit Configuration** in the top-right corner.                                     |
+----------------------------------------------------------------------------------------------+
| |lab014|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. Click **API Protection** in the left-hand navigation.                                     |
|                                                                                              |
| 5. In the **API Protection** section, click the drop-down arrow next to **API Definition**   |
|                                                                                              |
|    and select **Enable**.                                                                    |
+----------------------------------------------------------------------------------------------+
| |lab015|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. In the updated **Use API Definition** section, click the drop-down arrow and select the   |
|                                                                                              |
| 7. previously created API Definition **<adjective-animal>/app-api-spec**.                    |
+----------------------------------------------------------------------------------------------+
| |lab016|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. In the **API Protection** section, click the drop-down arrow next to **API Discovery**    |
|                                                                                              |
|    and select **Enable**.                                                                    |
+----------------------------------------------------------------------------------------------+
| |lab017|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. In the updated **API Discovery** section, click the drop-down arrow next to **Learn**     |
|                                                                                              |
|    **from Traffic with Redirect Response** and then select **Enable Learning from Redirect** |
|                                                                                              |
|    *Traffic**.                                                                               |
+----------------------------------------------------------------------------------------------+
| |lab018|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. In the **API Protection Rules** section, click the **Configure** link.                   |
+----------------------------------------------------------------------------------------------+
| |lab019|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 11. In the resulting **API Protection Rules** window, click **Configure** in the **API**     |
|                                                                                              |
|     **Endpoints** section.                                                                   |
+----------------------------------------------------------------------------------------------+
| |lab020|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. Click **Add Item** in the **API Endpoints** window.                                      |
+----------------------------------------------------------------------------------------------+
| |lab021|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 13. In the resulting window, input **block-endpoint** in the **Name** field of the           |
|                                                                                              |
|     **Metadata** section.                                                                    |
|                                                                                              |
| 14. In the **Action** area, click the drop-down arrow indicated and select **Deny**.         |
+----------------------------------------------------------------------------------------------+
| |lab022|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 15. In the **API Endpoint** section, click on the **API Endpoint** input field as indicated. |
|                                                                                              |
| 16. Select the **See Suggestions** link.                                                     |
+----------------------------------------------------------------------------------------------+
| |lab023|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 17. Select **/v2/user** from the available options provided.                                 |
|                                                                                              |
| .. note::                                                                                    |
|    *The endpoints available are provided via the spec you previously imported and defined*   |
|                                                                                              |
| 18. In the **HTTP Methods** area, click in the **Method List** input field.                  |
+----------------------------------------------------------------------------------------------+
| |lab024|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 19. Select **Any** from the available methods provided.                                      |
|                                                                                              |
| .. note::                                                                                    |
|    *Multiple methods can be selected if needed*                                              |
+----------------------------------------------------------------------------------------------+
| |lab025|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 20. Review the configuration and click, the **Apply** button.                                |
+----------------------------------------------------------------------------------------------+
| |lab026|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 21. Review the API Endpoint deny rule and click, the **Apply** button.                       |
+----------------------------------------------------------------------------------------------+
| |lab027|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 22. Note that API Protection Rules are configure for the API Endpoints and click, the        |
|                                                                                              |
|     **Apply** button.                                                                        |
+----------------------------------------------------------------------------------------------+
| |lab028|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 4: Attach API Rate Limiting to Load Balancer Object 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Rate Limiting feature on the 
previously built Load Balancer object delivering the targeted application/API.

+----------------------------------------------------------------------------------------------+
| 1. Using the left-hand navigation, click the **Common Security Controls** link.              |
+----------------------------------------------------------------------------------------------+
| |lab029|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. Locate the **Rate Limiting** area of the **Common Security Controls** aand use the        |
|                                                                                              |
|    drop-down to select **API Rate Limit**.                                                   |
+----------------------------------------------------------------------------------------------+
| |lab030|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. In the expanded menu under **Rate Limiting**, click **Configure** in the **API**          |
|                                                                                              |
|    **Endpoints** area.                                                                       |
+----------------------------------------------------------------------------------------------+
| |lab031|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. In the resulting window **API Endpoints** window, click **Add Item**.                     |
+----------------------------------------------------------------------------------------------+
| |lab032|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. In the resulting configuration window, select **/v2/store/order/{orderId}** for **API**   |
|                                                                                              |
|    **Endpoint** input.                                                                       |
|                                                                                              |
| 6. Select **ANY** for **Method** input and then click the **Apply** button.                  |
+----------------------------------------------------------------------------------------------+
| |lab033|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. Review the API Endpoint rate limiting rule and click, the **Apply** button.               |
+----------------------------------------------------------------------------------------------+
| |lab034|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. Note the updated configuration for API Rate limiting.                                     |
+----------------------------------------------------------------------------------------------+
| |lab035|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. Click **Other Settings** in the left-hand navigation to reach the bottom of the HTTP      |
|                                                                                              |
|    Load Balancer configuration and click the **Apply** button.                               |
+----------------------------------------------------------------------------------------------+
| |lab036|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| This configuration highlights the elements needed to deploy API Discovery & Protection. This |
|                                                                                              |
| configuration can also be fully deployed and managed via the F5 Distributed Cloud API.       |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **End of Lab 7:**  This concludes Lab 7.                                                     |
|                                                                                              |
| A Q&A session will begin shortly after conclusion of the overall lab.                        |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. _app-api-file-v1: https://github.com/f5devcentral/f5-agility-labs-xc/blob/agility2023/docs/class2/_static/app-api-v1.json
.. _app-api-file-v2: https://github.com/f5devcentral/f5-agility-labs-xc/blob/agility2023/docs/class2/_static/app-api-v2.json
.. |lab001| image:: _static/lab7-001.png
   :width: 800px
.. |lab002| image:: _static/lab7-002.png
   :width: 800px
.. |lab003| image:: _static/lab7-003.png
   :width: 800px
.. |lab004| image:: _static/lab7-004.png
   :width: 800px
.. |lab005| image:: _static/lab7-005.png
   :width: 800px
.. |lab006| image:: _static/lab7-006.png
   :width: 800px
.. |lab007| image:: _static/lab7-007.png
   :width: 800px
.. |lab008| image:: _static/lab7-008.png
   :width: 800px
.. |lab009| image:: _static/lab7-009.png
   :width: 800px
.. |lab010| image:: _static/lab7-010.png
   :width: 800px
.. |lab011| image:: _static/lab7-011.png
   :width: 800px
.. |lab012| image:: _static/lab7-012.png
   :width: 800px
.. |lab013| image:: _static/lab7-013.png
   :width: 800px
.. |lab014| image:: _static/lab7-014.png
   :width: 800px
.. |lab015| image:: _static/lab7-015.png
   :width: 800px
.. |lab016| image:: _static/lab7-016.png
   :width: 800px
.. |lab017| image:: _static/lab7-017.png
   :width: 800px
.. |lab018| image:: _static/lab7-018.png
   :width: 800px
.. |lab019| image:: _static/lab7-019.png
   :width: 800px
.. |lab020| image:: _static/lab7-020.png
   :width: 800px
.. |lab021| image:: _static/lab7-021.png
   :width: 800px
.. |lab022| image:: _static/lab7-022.png
   :width: 800px
.. |lab023| image:: _static/lab7-023.png
   :width: 800px
.. |lab024| image:: _static/lab7-024.png
   :width: 800px
.. |lab025| image:: _static/lab7-025.png
   :width: 800px
.. |lab026| image:: _static/lab7-026.png
   :width: 800px
.. |lab027| image:: _static/lab7-027.png
   :width: 800px
.. |lab028| image:: _static/lab7-028.png
   :width: 800px
.. |lab029| image:: _static/lab7-029.png
   :width: 800px
.. |lab030| image:: _static/lab7-030.png
   :width: 800px
.. |lab031| image:: _static/lab7-031.png
   :width: 800px
.. |lab032| image:: _static/lab7-032.png
   :width: 800px
.. |lab033| image:: _static/lab7-033.png
   :width: 800px
.. |lab034| image:: _static/lab7-034.png
   :width: 800px
.. |lab035| image:: _static/lab7-035.png
   :width: 800px
.. |lab036| image:: _static/lab7-036.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
