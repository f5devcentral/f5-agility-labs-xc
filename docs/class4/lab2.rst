Lab 2: API Protection & Rate Limiting
=================================

F5® Distributed API Protection provides key security functionality to secure APIs. 
This lab's tasks will walk through the configuration steps and note additional configurations available.

**API Protection**: Encompasses a set of definitions and controls to protect and secure the functions, use and 
endpoints of the delivered API's framework. 

Task 1: Attaching API Protection to Load Balancer Object 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Discovery & Protection feature on the 
previously built Load Balancer object delivering the targeted application/API.

+----------------------------------------------------------------------------------------------+
| 1. In the left-hand navigation of the **Web App & API Protection** service, click on **Load**|
|                                                                                              |
|    **Balancers** under the **Manage** section.                                               |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-001|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. In the resulting **Load Balancers** window, click on the three dots **...** in the        |
|                                                                                              |
|    **Action** column, and the select **Manage Configuration**.                               |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-002|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. Click **Edit Configuration** in the top-right corner.                                     |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-003|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. In the **API Protection Rules** section, click the **Configure** link.                    |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-004|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. In the resulting **API Protection Rules** window, click **Configure** in the **API**      |
|                                                                                              |
|     **Endpoints** section.                                                                   |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-005|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. Click **Add Item** in the **API Endpoints** window.                                       |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-006|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. In the resulting window, input **block-endpoint** in the **Name** field of the            |
|                                                                                              |
|     **Metadata** section.                                                                    |
|                                                                                              |
| 9. In the **Action** area, click the drop-down arrow indicated and select **Deny**.          |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-007|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. In the **API Endpoint** section, click on the **API Endpoint** input field as indicated. |
|                                                                                              |
| 11. Select the **See Suggestions** link.                                                     |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-008|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. Select **/v2/user** from the available options provided.                                 |
|                                                                                              |
| .. note::                                                                                    |
|    *The endpoints available are provided via the spec you previously imported and defined*   |
|                                                                                              |
| 13. In the **HTTP Methods** area, click in the **Method List** input field.                  |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-009|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 14. Select **Any** from the available methods provided.                                      |
|                                                                                              |
| .. note::                                                                                    |
|    *Multiple methods can be selected if needed*                                              |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-010|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 15. Review the configuration and click, the **Apply** button.                                |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-011|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 16. Review the API Endpoint deny rule and click, the **Apply** button.                       |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-012|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 17. Note that API Protection Rules are configure for the API Endpoints and click, the        |
|                                                                                              |
|     **Apply** button.                                                                        |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-013|                                                                             |
+----------------------------------------------------------------------------------------------+

Task 2: Attach API Rate Limiting to Load Balancer Object 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task's series of steps you will enable the API Rate Limiting feature on the 
previously built Load Balancer object delivering the targeted application/API.

+----------------------------------------------------------------------------------------------+
| 1. Using the left-hand navigation, click the **Common Security Controls** link.              |
+----------------------------------------------------------------------------------------------+
| |lab2-task2-001|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. Locate the **Rate Limiting** area of the **Common Security Controls** and use the         |
|                                                                                              |
|    drop-down to select **API Rate Limit**.                                                   |
+----------------------------------------------------------------------------------------------+
| |lab2-task2-002|                                                                             |
|                                                                                              |
| |lab2-task2-003|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. In the expanded menu under **Rate Limiting**, click **Configure** in the **API**          |
|                                                                                              |
|    **Endpoints** area.                                                                       |
+----------------------------------------------------------------------------------------------+
| |lab2-task2-004|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. In the resulting window **API Endpoints** window, click **Add Item**.                     |
+----------------------------------------------------------------------------------------------+
| |lab2-task2-005|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. In the resulting configuration window, select **/v2/store/order/{orderId}** for **API**   |
|                                                                                              |
|    **Endpoint** input.                                                                       |
|                                                                                              |
| 6. Select **ANY** for **Method** input and then click the **Apply** button.                  |
+----------------------------------------------------------------------------------------------+
| |lab2-task2-006|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. Review the API Endpoint rate limiting rule and click, the **Apply** button.               |
+----------------------------------------------------------------------------------------------+
| |lab2-task2-007|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. Note the updated configuration for API Rate limiting, Click **Other Settings** in  the    |
|                                                                                              |
|    the left-hand navigation.                                                                 |
+----------------------------------------------------------------------------------------------+
| |lab2-task2-008|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. Once at the bottom of the HTTP Load Balancer configuration and click the **Apply** button.|
+----------------------------------------------------------------------------------------------+
| |lab2-task2-009|                                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| This configuration highlights the elements needed to deploy API Discovery & Protection. This |
|                                                                                              |
| configuration can also be fully deployed and managed via the F5 Distributed Cloud API.       |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **End of Lab 2:**  This concludes Lab 2.                                                     |
|                                                                                              |
| A Q&A session will begin shortly after conclusion of the overall lab.                        |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. |lab2-task1-001| image:: _static/lab2-task1-001.png
   :width: 800px
.. |lab2-task1-002| image:: _static/lab2-task1-002.png
   :width: 800px
.. |lab2-task1-003| image:: _static/lab2-task1-003.png
   :width: 800px
.. |lab2-task1-004| image:: _static/lab2-task1-004.png
   :width: 800px
.. |lab2-task1-005| image:: _static/lab2-task1-005.png
   :width: 800px
.. |lab2-task1-006| image:: _static/lab2-task1-006.png
   :width: 800px
.. |lab2-task1-007| image:: _static/lab2-task1-007.png
   :width: 800px
.. |lab2-task1-008| image:: _static/lab2-task1-008.png
   :width: 800px
.. |lab2-task1-009| image:: _static/lab2-task1-009.png
   :width: 800px
.. |lab2-task1-010| image:: _static/lab2-task1-010.png
   :width: 800px
.. |lab2-task1-011| image:: _static/lab2-task1-011.png
   :width: 800px
.. |lab2-task1-012| image:: _static/lab2-task1-012.png
   :width: 800px
.. |lab2-task1-013| image:: _static/lab2-task1-013.png
   :width: 800px
.. |lab2-task2-001| image:: _static/lab2-task2-001.png
   :width: 800px
.. |lab2-task2-002| image:: _static/lab2-task2-002.png
   :width: 800px
.. |lab2-task2-003| image:: _static/lab2-task2-003.png
   :width: 800px
.. |lab2-task2-004| image:: _static/lab2-task2-004.png
   :width: 800px
.. |lab2-task2-005| image:: _static/lab2-task2-005.png
   :width: 800px
.. |lab2-task2-006| image:: _static/lab2-task2-006.png
   :width: 800px
.. |lab2-task2-007| image:: _static/lab2-task2-007.png
   :width: 800px
.. |lab2-task2-008| image:: _static/lab2-task2-008.png
   :width: 800px
.. |lab2-task2-009| image:: _static/lab2-task2-009png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
