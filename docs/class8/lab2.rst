Lab 2: Operationalize Security Configurations
============================================================================================

The following lab tasks will guide you through using Postman to modify an existinga HTTP Load Balancer deployment
to apply a Web Application Firewall configuration and Service Policy configuration. This lab demonstrates the use
of the PUT method to modify an existing object in Distributed Cloud.

**Expected Lab Time: 20 minutes**

Task 1: Create and Attach WAAP Policy  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task you will use Postman to create an Application Firewall policy with the default settings. Postman 
will then be used to attach the Application Firewall to the HTTP Load Balancer created in Lab 1. 

This lab will begin back in the Windows 10 client deployed as part of the UDF.

+---------------------------------------------------------------------------------------------------------------+
| 1. Return to **Postman**, in the workspace pane expand **Appworld - XC Automation** if it isn't already,      |
|                                                                                                               |
|    click on **Create App Firewall**, click on **Body**, and review the raw JSON content.                      |
|                                                                                                               |
| 2. Click **Send** to POST the JSON to the Distributed Cloud API.                                              |
|                                                                                                               |
| 3. Review the results in the **Body** section of Postman. You should see a 200 OK response code.              |
+---------------------------------------------------------------------------------------------------------------+
| |lab2-Postman_AppFW_Body|                                                                                     |
|                                                                                                               |
| |lab2-Postman_AppFW_Send|                                                                                     |
|                                                                                                               |
| |lab2-Postman_AppFW_Results|                                                                                  |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 4. From **Postman**, in the workspace pane click on **Add App FW to HTTP Load Balancer**, click on **Body**,  |
|                                                                                                               |
|    and review the raw JSON content.                                                                           |
|                                                                                                               |
| 5. Click **Send** to PUT the JSON to the Distributed Cloud API.                                               |
|                                                                                                               |
| 6. Review the results in the **Body** section of Postman. You should see a 200 OK response code.              |
|                                                                                                               |
| .. note::                                                                                                     |
|    *Since you are modifying an existing object, you use the PUT method here instead of the POST method.*      |
+---------------------------------------------------------------------------------------------------------------+
| |lab2-Postman_LB_AppFW_Body|                                                                                  |
|                                                                                                               |
| |lab2-Postman_LB_AppFW_Send|                                                                                  |
|                                                                                                               |
| |lab2-Postman_LB_AppFW_Results|                                                                               |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 7. From the Windows 10 client deployed as part of the UDF, open Chrome.                                       |
|                                                                                                               |
| 8. Click on the **XC Console** bookmark to be taken to the XC Console login.                                  |
|                                                                                                               |
| 9. Enter your e-mail address in the **Email** form and password in the **Password** form and click **Sign**   |
|                                                                                                               |
|    **In**.                                                                                                    |
+---------------------------------------------------------------------------------------------------------------+
| |lab1-Chrome|                                                                                                 |
|                                                                                                               |
| |lab1-XC_Bookmark|                                                                                            |
|                                                                                                               |
| |lab1-XC_Signin|                                                                                              |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 10. Within the Distributed Cloud dashboard select the **Multi-Cloud App Connect** tile.                       |
|                                                                                                               |
| 11. In the resulting screen, expand the **Manage** menu and click **Load Balancers** and then select          |
|                                                                                                               |
|     *HTTP Load Balancers**.                                                                                   |
|                                                                                                               |
| 12. From the HTTP Load Balancers page, locate the HTTP Load Balancer that you created via Postman.  Click the |
|                                                                                                               |
|     **ellipsis** under **Actions** and select **Manage Configuration**.                                       |
|                                                                                                               |
| 13. From the resulting screen, review the HTTP Load Balancer configuration data and then click **JSON**.      |
|                                                                                                               |
| 14. Review the resulting JSON data.  The **app_firewall** section matches JSON from the body section of       |
|                                                                                                               |
|     Postman PUT that added the Web Application Firewall to the HTTP Load Balancer.                            |
|                                                                                                               |
| .. note::                                                                                                     |
|    *There may be slight variations in the JSON because you don't need to post default values when calling the*|
|                                                                                                               |
|    *API. If you want to automate a task in Distributed Cloud but are unsure of the required JSON, you can*    |
|                                                                                                               |
|    *configure a test object via the GUI and then use this JSON tab to get the corresponding JSON config.*     |
+---------------------------------------------------------------------------------------------------------------+
| |lab1-XC_App_Connect|                                                                                         |
|                                                                                                               |
| |lab1-XC_LB|                                                                                                  |
|                                                                                                               |
| |lab1-XC_LB_Manage|                                                                                           |
|                                                                                                               |
| |lab1-XC_LB_JSON|                                                                                             |
|                                                                                                               |
| |lab2-XC_LB_AppFW_JSON_Data|                                                                                  |
+---------------------------------------------------------------------------------------------------------------+

Task 2: Create and Service Policy  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task you will use Postman to create a Service Policy that only allows specific contries to access your 
application. Postman will then be used to attach the Service Policy to the HTTP Load Balancer created in Lab 1. 

+---------------------------------------------------------------------------------------------------------------+
| 1. Return to **Postman**, in the workspace pane expand **Appworld - XC Automation** if it isn't already,      |
|                                                                                                               |
|    click on **Create Service Policy**, click on **Body**, and review the raw JSON content.                    |
|                                                                                                               |
| 2. Click **Send** to POST the JSON to the Distributed Cloud API.                                              |
|                                                                                                               |
| 3. Review the results in the **Body** section of Postman. You should see a 200 OK response code.              |
+---------------------------------------------------------------------------------------------------------------+
| |lab2-Postman_SP_Body|                                                                                        |
|                                                                                                               |
| |lab2-Postman_SP_Send|                                                                                        |
|                                                                                                               |
| |lab2-Postman_SP_Results|                                                                                     |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 4. From **Postman**, in the workspace pane click on **Add Service Policy to HTTP Load Balancer**, click on    |
|                                                                                                               |
|    **Body**, and review the raw JSON content.                                                                 |
|                                                                                                               |
| 5. Click **Send** to PUT the JSON to the Distributed Cloud API.                                               |
|                                                                                                               |
| 6. Review the results in the **Body** section of Postman. You should see a 200 OK response code.              |
|                                                                                                               |
| .. note::                                                                                                     |
|    *Since you are modifying an existing object, you use the PUT method here instead of the POST method.*      |
+---------------------------------------------------------------------------------------------------------------+
| |lab2-Postman_LB_SP_Body|                                                                                     |
|                                                                                                               |
| |lab2-Postman_LB_SP_Send|                                                                                     |
|                                                                                                               |
| |lab2-Postman_LB_SP_Results|                                                                                  |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 7. From the Windows 10 client deployed as part of the UDF, open Chrome.                                       |
|                                                                                                               |
| 8. Click on the **XC Console** bookmark to be taken to the XC Console login.                                  |
|                                                                                                               |
| 9. Enter your e-mail address in the **Email** form and password in the **Password** form and click **Sign**   |
|                                                                                                               |
|    **In**.                                                                                                    |
+---------------------------------------------------------------------------------------------------------------+
| |lab1-Chrome|                                                                                                 |
|                                                                                                               |
| |lab1-XC_Bookmark|                                                                                            |
|                                                                                                               |
| |lab1-XC_Signin|                                                                                              |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 10. Within the Distributed Cloud dashboard select the **Multi-Cloud App Connect** tile.                       |
|                                                                                                               |
| 11. In the resulting screen, expand the **Manage** menu and click **Load Balancers** and then select          |
|                                                                                                               |
|     *HTTP Load Balancers**.                                                                                   |
|                                                                                                               |
| 12. From the HTTP Load Balancers page, locate the HTTP Load Balancer that you created via Postman.  Click the |
|                                                                                                               |
|     **ellipsis** under **Actions** and select **Manage Configuration**.                                       |
|                                                                                                               |
| 13. From the resulting screen, review the HTTP Load Balancer configuration data and then click **JSON**.      |
|                                                                                                               |
| 14. Review the resulting JSON data.  The **app_firewall** section matches JSON from the body section of       |
|                                                                                                               |
|     Postman PUT that added the Web Application Firewall to the HTTP Load Balancer.                            |
|                                                                                                               |
| .. note::                                                                                                     |
|    *There may be slight variations in the JSON because you don't need to post default values when calling the*|
|                                                                                                               |
|    *API. If you want to automate a task in Distributed Cloud but are unsure of the required JSON, you can*    |
|                                                                                                               |
|    *configure a test object via the GUI and then use this JSON tab to get the corresponding JSON config.*     |
+---------------------------------------------------------------------------------------------------------------+
| |lab1-XC_App_Connect|                                                                                         |
|                                                                                                               |
| |lab1-XC_LB|                                                                                                  |
|                                                                                                               |
| |lab1-XC_LB_Manage|                                                                                           |
|                                                                                                               |
| |lab1-XC_LB_JSON|                                                                                             |
|                                                                                                               |
| |lab2-XC_LB_SP_JSON_Data|                                                                                     |
+---------------------------------------------------------------------------------------------------------------+

Task 3: Delete the Objects Created with Postman
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task you will use Postman to delete the HTTP Load Balancer, Service Policy, App Firewall, Origin Pool, 
and Health Check.  This demonstrates how to use Postman to delete objects when they are no longer needed, and
cleans up the environment in prepation for Lab3.

+---------------------------------------------------------------------------------------------------------------+
| 1. Return to **Postman**, in the workspace pane expand **Appworld - XC Automation** if it isn't already,      |
|                                                                                                               |
|    click on **Delete HTTP Load Balancer**, click on **Send**.                                                 |
|                                                                                                               |
| 2. Review the results in the **Body** section of Postman. You should see a 200 OK response code.              |
+---------------------------------------------------------------------------------------------------------------+
| |lab2-Postman_LB_Delete_Send|                                                                                 |
|                                                                                                               |
| |lab2-Postman_LB_Delete_Results|                                                                              |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 3. From **Postman**, in the workspace pane click on **Delete Service Policy** and click **Send**.             |
|                                                                                                               |
| 4. Review the results in the **Body** section of Postman. You should see a 200 OK response code.              |
+---------------------------------------------------------------------------------------------------------------+
| |lab2-Postman_SP_Delete_Send|                                                                                 |
|                                                                                                               |
| |lab2-Postman_SP_Delete_Results|                                                                              |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 5. From **Postman**, in the workspace pane click on **Delete App Firewall** and click **Send**.               |
|                                                                                                               |
| 6. Review the results in the **Body** section of Postman. You should see a 200 OK response code.              |
+---------------------------------------------------------------------------------------------------------------+
| |lab2-Postman_AppFW_Delete_Send|                                                                              |
|                                                                                                               |
| |lab2-Postman_AppFW_Delete_Results|                                                                           |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 7. From **Postman**, in the workspace pane click on **Delete Origin Pool** and click **Send**.                |
|                                                                                                               |
| 8. Review the results in the **Body** section of Postman. You should see a 200 OK response code.              |
+---------------------------------------------------------------------------------------------------------------+
| |lab2-Postman_Pool_Delete_Send|                                                                               |
|                                                                                                               |
| |lab2-Postman_Pool_Delete_Results|                                                                            |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 9. From **Postman**, in the workspace pane click on **Delete Health Check** and click **Send**.               |
|                                                                                                               |
| 10. Review the results in the **Body** section of Postman. You should see a 200 OK response code.             |
+---------------------------------------------------------------------------------------------------------------+
| |lab2-Postman_HC_Delete_Send|                                                                                 |
|                                                                                                               |
| |lab2-Postman_HC_Delete_Results|                                                                              |
+---------------------------------------------------------------------------------------------------------------+

.. |lab2-Postman_AppFW_Body| image:: _static/lab2-Postman_AppFW_Body.png
   :width: 800px
.. |lab2-Postman_AppFW_Send| image:: _static/lab2-Postman_AppFW_Send.png
   :width: 800px
.. |lab2-Postman_AppFW_Results| image:: _static/lab2-Postman_AppFW_Results.png
   :width: 800px
.. |lab2-Postman_LB_AppFW_Body| image:: _static/lab2-Postman_LB_AppFW_Body.png
   :width: 800px
.. |lab2-Postman_LB_AppFW_Send| image:: _static/lab2-Postman_LB_AppFW_Send.png
   :width: 800px
.. |lab2-Postman_LB_AppFW_Results| image:: _static/lab2-Postman_LB_AppFW_Results.png
   :width: 800px
.. |lab1-Chrome| image:: _static/lab1-Chrome.png
   :width: 800px
.. |lab1-XC_Bookmark| image:: _static/lab1-XC_Bookmark.png
   :width: 800px
.. |lab1-XC_Signin| image:: _static/lab1-XC_Signin.png
   :width: 800px
.. |lab1-XC_App_Connect| image:: _static/lab1-XC_App_Connect.png
   :width: 800px
.. |lab1-XC_LB| image:: _static/lab1-XC_LB.png
   :width: 800px
.. |lab1-XC_LB_Manage| image:: _static/lab1-XC_LB_Manage.png
   :width: 800px
.. |lab1-XC_LB_JSON| image:: _static/lab1-XC_LB_JSON.png
   :width: 800px
.. |lab2-XC_LB_AppFW_JSON_Data| image:: _static/ab2-XC_LB_AppFW_JSON_Data.png
   :width: 800px
.. |lab2-Postman_SP_Body| image:: _static/lab2-Postman_SP_Body.png
   :width: 800px
.. |lab2-Postman_SP_Send| image:: _static/lab2-Postman_SP_Send.png
   :width: 800px
.. |lab2-Postman_SP_Results| image:: _static/lab2-Postman_SP_Results.png
   :width: 800px
.. |lab2-Postman_LB_SP_Body| image:: _static/lab2-Postman_LB_SP_Body.png
   :width: 800px
.. |lab2-Postman_LB_SP_Send| image:: _static/lab2-Postman_LB_SP_Send.png
   :width: 800px
.. |lab2-Postman_LB_SP_Results| image:: _static/lab2-Postman_LB_SP_Results.png
   :width: 800px
.. |lab2-XC_LB_SP_JSON_Data| image:: _static/lab2-XC_LB_SP_JSON_Data.png
   :width: 800px
.. |lab2-Postman_LB_Delete_Send| image:: _static/lab2-Postman_LB_Delete_Send.png
   :width: 800px
.. |lab2-Postman_LB_Delete_Results| image:: _static/lab2-Postman_LB_Delete_Results.png
   :width: 800px
.. |lab2-Postman_SP_Delete_Send| image:: _static/lab2-Postman_SP_Delete_Send.png
   :width: 800px
.. |lab2-Postman_SP_Delete_Results| image:: _static/lab2-Postman_SP_Delete_Results.png
   :width: 800px
.. |lab2-Postman_AppFW_Delete_Send| image:: _static/lab2-Postman_AppFW_Delete_Send.png
   :width: 800px
.. |lab2-Postman_AppFW_Delete_Results| image:: _static/lab2-Postman_AppFW_Delete_Results.png
   :width: 800px
.. |lab2-Postman_Pool_Delete_Send| image:: _static/lab2-Postman_Pool_Delete_Send.png
   :width: 800px
.. |lab2-Postman_Pool_Delete_Results| image:: _static/lab2-Postman_Pool_Delete_Results.png
   :width: 800px
.. |lab2-Postman_HC_Delete_Send| image:: _static/lab2-Postman_HC_Delete_Send.png
   :width: 800px
.. |lab2-Postman_HC_Delete_Results| image:: _static/lab2-Postman_HC_Delete_Results.png
   :width: 800px