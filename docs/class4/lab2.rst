Lab 6: API Protection & Rate Limiting
=================================

F5® Distributed API Discovery & Protection provides key security functionality to visualize, understand, 
deliver and secure APIs. This lab's tasks will walk through the configuration steps and note additional
configurations available.

* **API Discovery**: Provided via machine-based learning processes, enables visualization of the API Framework,
  assesses use of end-points, discovers new end-points based on flows, identifies use of sensitive information,   
  and enables swagger file export.

* **API Protection**: Encompasses a set of definitions and controls to protect and secure the functions, use and 
  endpoints of the delivered API's framework. 


Task 3: Attaching API Protection to Load Balancer Object 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Discovery & Protection feature on the 
previously built Load Balancer object delivering the targeted application/API.

+----------------------------------------------------------------------------------------------+
| 1. In the left-hand navigation of the **Web App & API Protection** service, click on **Load**|
|                                                                                              |
|    **Balancers** under the **Manage** section.                                               |
+----------------------------------------------------------------------------------------------+
| |lab001|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. In the resulting **Load Balancers** window, click on the three dots **...** in the        |
|                                                                                              |
|    **Action** column, and the select **Manage Configuration**.                               |
+----------------------------------------------------------------------------------------------+
| |lab002|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. Click **Edit Configuration** in the top-right corner.                                     |
+----------------------------------------------------------------------------------------------+
| |lab003|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. In the updated **API Discovery** section, click the drop-down arrow next to **Learn**     |
|                                                                                              |
|    **from Traffic with Redirect Response** and then select **Enable Learning from Redirect** |
|                                                                                              |
|    *Traffic**.                                                                               |
+----------------------------------------------------------------------------------------------+
| |lab004|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. In the **API Protection Rules** section, click the **Configure** link.                   |
+----------------------------------------------------------------------------------------------+
| |lab005|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. In the resulting **API Protection Rules** window, click **Configure** in the **API**     |
|                                                                                              |
|     **Endpoints** section.                                                                   |
+----------------------------------------------------------------------------------------------+
| |lab006|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. Click **Add Item** in the **API Endpoints** window.                                      |
+----------------------------------------------------------------------------------------------+
| |lab007|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. In the resulting window, input **block-endpoint** in the **Name** field of the           |
|                                                                                              |
|     **Metadata** section.                                                                    |
|                                                                                              |
| 9. In the **Action** area, click the drop-down arrow indicated and select **Deny**.         |
+----------------------------------------------------------------------------------------------+
| |lab008|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. In the **API Endpoint** section, click on the **API Endpoint** input field as indicated. |
|                                                                                              |
| 11. Select the **See Suggestions** link.                                                     |
+----------------------------------------------------------------------------------------------+
| |lab009|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. Select **/v2/user** from the available options provided.                                 |
|                                                                                              |
| .. note::                                                                                    |
|    *The endpoints available are provided via the spec you previously imported and defined*   |
|                                                                                              |
| 13. In the **HTTP Methods** area, click in the **Method List** input field.                  |
+----------------------------------------------------------------------------------------------+
| |lab010|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 14. Select **Any** from the available methods provided.                                      |
|                                                                                              |
| .. note::                                                                                    |
|    *Multiple methods can be selected if needed*                                              |
+----------------------------------------------------------------------------------------------+
| |lab011|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 15. Review the configuration and click, the **Apply** button.                                |
+----------------------------------------------------------------------------------------------+
| |lab012|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 16. Review the API Endpoint deny rule and click, the **Apply** button.                       |
+----------------------------------------------------------------------------------------------+
| |lab013|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 17. Note that API Protection Rules are configure for the API Endpoints and click, the        |
|                                                                                              |
|     **Apply** button.                                                                        |
+----------------------------------------------------------------------------------------------+
| |lab014|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 4: Attach API Rate Limiting to Load Balancer Object 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Rate Limiting feature on the 
previously built Load Balancer object delivering the targeted application/API.

+----------------------------------------------------------------------------------------------+
| 1. Using the left-hand navigation, click the **Common Security Controls** link.              |
+----------------------------------------------------------------------------------------------+
| |lab015|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. Locate the **Rate Limiting** area of the **Common Security Controls** and use the         |
|                                                                                              |
|    drop-down to select **API Rate Limit**.                                                   |
+----------------------------------------------------------------------------------------------+
| |lab016|                                                                                     |
|                                                                                              |
| |lab017|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. In the expanded menu under **Rate Limiting**, click **Configure** in the **API**          |
|                                                                                              |
|    **Endpoints** area.                                                                       |
+----------------------------------------------------------------------------------------------+
| |lab018|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. In the resulting window **API Endpoints** window, click **Add Item**.                     |
+----------------------------------------------------------------------------------------------+
| |lab019|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. In the resulting configuration window, select **/v2/store/order/{orderId}** for **API**   |
|                                                                                              |
|    **Endpoint** input.                                                                       |
|                                                                                              |
| 6. Select **ANY** for **Method** input and then click the **Apply** button.                  |
+----------------------------------------------------------------------------------------------+
| |lab020|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. Review the API Endpoint rate limiting rule and click, the **Apply** button.               |
+----------------------------------------------------------------------------------------------+
| |lab021|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. Note the updated configuration for API Rate limiting, Click **Other Settings** in  the    |
|                                                                                              |
|    the left-hand navigation.                                                                 |
+----------------------------------------------------------------------------------------------+
| |lab022|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. Once at the bottom of the HTTP Load Balancer configuration and click the **Apply** button.|
+----------------------------------------------------------------------------------------------+
| |lab023|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| This configuration highlights the elements needed to deploy API Discovery & Protection. This |
|                                                                                              |
| configuration can also be fully deployed and managed via the F5 Distributed Cloud API.       |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **End of Lab 6:**  This concludes Lab 6.                                                     |
|                                                                                              |
| A Q&A session will begin shortly after conclusion of the overall lab.                        |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. _app-api-file-v1: http://demo-app.amer.myedgedemo.com/lab/app-api-v1.json
.. _app-api-file-v2: http://demo-app.amer.myedgedemo.com/lab/app-api-v2.json
.. |lab001| image:: _static/lab6-001.png
   :width: 800px
.. |lab002| image:: _static/lab6-002.png
   :width: 800px
.. |lab003| image:: _static/lab6-003.png
   :width: 800px
.. |lab004| image:: _static/lab6-003a.png
   :width: 800px
.. |lab005| image:: _static/lab6-004.png
   :width: 800px
.. |lab006| image:: _static/lab6-005.png
   :width: 800px
.. |lab007| image:: _static/lab6-006.png
   :width: 800px
.. |lab008| image:: _static/lab6-006a.png
   :width: 800px
.. |lab009| image:: _static/lab6-007.png
   :width: 800px
.. |lab010| image:: _static/lab6-008.png
   :width: 800px
.. |lab009| image:: _static/lab6-009.png
   :width: 800px
.. |lab010| image:: _static/lab6-010.png
   :width: 800px
.. |lab011| image:: _static/lab6-011.png
   :width: 800px
.. |lab012| image:: _static/lab6-012.png
   :width: 800px
.. |lab013| image:: _static/lab6-013.png
   :width: 800px
.. |lab014| image:: _static/lab6-014.png
   :width: 800px
.. |lab015| image:: _static/lab6-015.png
   :width: 800px
.. |lab016| image:: _static/lab6-016.png
   :width: 800px
.. |lab017| image:: _static/lab6-017.png
   :width: 800px
.. |lab018| image:: _static/lab6-018.png
   :width: 800px
.. |lab019| image:: _static/lab6-019.png
   :width: 800px
.. |lab020| image:: _static/lab6-020.png
   :width: 800px
.. |lab021| image:: _static/lab6-021.png
   :width: 800px
.. |lab022| image:: _static/lab6-022.png
   :width: 800px
.. |lab023| image:: _static/lab6-023.png
   :width: 800px
.. |lab024| image:: _static/lab6-024.png
   :width: 800px
.. |lab025| image:: _static/lab6-025.png
   :width: 800px
.. |lab026| image:: _static/lab6-026.png
   :width: 800px
.. |lab027| image:: _static/lab6-027.png
   :width: 800px
.. |lab028| image:: _static/lab6-028.png
   :width: 800px
.. |lab029| image:: _static/lab6-029.png
   :width: 800px
.. |lab030| image:: _static/lab6-030.png
   :width: 800px
.. |lab031| image:: _static/lab6-031.png
   :width: 800px
.. |lab032| image:: _static/lab6-032.png
   :width: 800px
.. |lab033| image:: _static/lab6-033.png
   :width: 800px
.. |lab034| image:: _static/lab6-034.png
   :width: 800px
.. |lab035| image:: _static/lab6-035.png
   :width: 800px
.. |lab036| image:: _static/lab6-036.png
   :width: 800px
.. |lab036| image:: _static/lab6-036.png
   :width: 800px
.. |lab037| image:: _static/lab6-037.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
