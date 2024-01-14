Lab 1: API-First Console
========================

This lab will focus on demonstrating the API-First capabilities of the F5 Distribured Cloud
Console. Students will begin by creating an API token for authenticating to the API. Next,
students will explore the Distributed Cloud Developer Portal and utilize it to query live 
configuration. The lab concludes with using Postman to deploy an application.

For the tasks that follow, you should have already noted your individual **namespace**. If you
failed to note it, return to the **Introduction** section of this lab, follow the instructions
provided and note your **namespace** accordingly. The **Delegated Domain** and the F5
Distributed Cloud **Tenant** are listed below for your convenience as they will be the same for
all lab attendees.

* **Delegated Domain:** *.lab-app.f5demos.com*
* **F5 Distributed Cloud Tenant:** https://f5-xc-lab-app.console.ves.volterra.io

Following the tasks in the prior **Introduction** Section, you should now be able to access the
F5 Distributed Cloud Console, having set your Work Domain Roles and Skill levels. If you have
not done so already, please login to your tenant for this lab and proceed to Task 1.

Task 1: Review Developer Portal
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will allow you to create an API Token and query the Distributed Cloud API
utilizing the Developer Portal.  

+---------------------------------------------------------------------------------------------------------------+
| 1. Following the **Introduction** section  instructions, you should now be in the **Multi-Cloud App Connect** |
|                                                                                                               |
|    configuration window. If for some reason you are not in the **Multi-Cloud App Connect** window, use the    |
|                                                                                                               |
|    **Select Service** in the left-hand navigation, and click **Multi-Cloud App Connect** as shown in the      |
|                                                                                                               |
|    *Introduction section, Task 2, Step 9*.                                                                    |
+---------------------------------------------------------------------------------------------------------------+
| 2. In the top right corner of the Distributed Cloud Console click the **User Icon** dropdown and select       |
|                                                                                                               |
|    **Account Settings**.                                                                                      |
|                                                                                                               |
| |lab1-Account_Settings|                                                                                       |
+---------------------------------------------------------------------------------------------------------------+
| 3. In the resulting screen click **Credentials** under the Peronal Management Heading on the left.            |
|                                                                                                               |
| |lab1-Credentials|                                                                                            |
+---------------------------------------------------------------------------------------------------------------+
| 4. Click **Add Credentials**.                                                                                 |
|                                                                                                               |
| |lab1-Add_Credentials|                                                                                        |
+---------------------------------------------------------------------------------------------------------------+
| 5. Fill in the resulting form with the following values                                                       |
|                                                                                                               |
|    * **Credential Name ID:**  *<namespace>-api-token*                                                         |
|    * **Credential Type: Select:** *API Token*                                                                 |
|    * **Expiry Date: Select:** *<date two days in the future of today's date>*                                 |
|                                                                                                               |
| 6. Click **Generate**.                                                                                        |
|                                                                                                               |
| |lab1-Generate_API_Token|                                                                                     |
+---------------------------------------------------------------------------------------------------------------+
| 7. On the form that appears copy your API token and save it for use later.  Then click **Done**.              |
|                                                                                                               |
| |lab1-API_Token|                                                                                              |
|                                                                                                               |
| .. note::                                                                                                     |
|    *If you don't save your API token or you lose it, you will need to generate a new API token. After an API* |
|                                                                                                               |
|    *token is generated, it can not be retrieved again later.*                                                 |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 8. In the top right corner of the Distributed Cloud Console click the **Support** dropdown and select **API** |
|                                                                                                               |
|    **Documentation**.                                                                                         |
|                                                                                                               |
| |lab1-API_Documentation|                                                                                      |
|                                                                                                               |
| .. note::                                                                                                     |
|    *This takes you to the online documentation for the F5 Distributed Cloud Services API.  Here you can*      |
|                                                                                                               |
|    *review or download the API specification.*                                                                |
+---------------------------------------------------------------------------------------------------------------+
| 9. In the resulting screen click the **API Developer Portal** link in the top menu.                           |
|                                                                                                               |
| |lab1-API_Developer_Portal|                                                                                   |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 10. In the resulting window, enter **f5-xc-lab-app** in the **Please enter your domain** text field and click |
|                                                                                                               |
|     **Access portal.**                                                                                        |
|                                                                                                               |
| |lab1-Portal_Domain|                                                                                          |
+---------------------------------------------------------------------------------------------------------------+
| 11. In the resulting screen click the **Authorize** link in the top right corner.                             |
|                                                                                                               |
| |lab1-Portal_Authorize|                                                                                       |
+---------------------------------------------------------------------------------------------------------------+
| 12. In the form that appears, enter your API Token in the **Paste your API token** field and click            |
|                                                                                                               |
|     **Authorize**.                                                                                            |
|                                                                                                               |
| |lab1-Portal_Set_Token|                                                                                       |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 13. In the Dev Portal, scroll through the APIs on the left until you find **Namespace** and then click        |
|                                                                                                               |
|     **Namespace**.                                                                                            |
|                                                                                                               |
| |lab1-Portal_Namespace|                                                                                       |
+---------------------------------------------------------------------------------------------------------------+
| 14. Under the **default** section in schemes, scroll down through the **Namespace** APIs until you find       |
|                                                                                                               |
|     **GET /api/web/namespaces/{name}** and click the arrow to expand this API and then click **Try it out**.  |
|                                                                                                               |
| |lab1-Portal_Namespaces_Name|                                                                                 |
+---------------------------------------------------------------------------------------------------------------+
| 15. Enter your namespace name in the **namespace** field and then click **Execute**.                          |
|                                                                                                               |
| |lab1-Portal_Namespaces_Name_Execute|                                                                         |
+---------------------------------------------------------------------------------------------------------------+
| 16. Review the **Response body** data. You may have to scroll down slightly to show the **Response body** data|
|                                                                                                               |
|     depending on your screen resolution.                                                                      |
|                                                                                                               |
| |lab1-Portal_Namespaces_Name_JSON|                                                                            |
|                                                                                                               |
| .. note::                                                                                                     |
|    *The parameters you entered in the name field were used to execute the API query and limit the returned*   |
|                                                                                                               |
|    *values. Parameters can also be used when creating new objects.*                                           |
|                                                                                                               |
+---------------------------------------------------------------------------------------------------------------+

Task 2: Create A Proxy Configuration Using Postman
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will create Health Check, an Origin Pool and Http Load Balancer utilizing Postman to post 
JSON definitions to the Distributed Cloud API. For this task you will be using a Windows 10 client that is part 
of the UDF deployment. The Windows 10 client has Postman pre-installed to save time in the lab.  To install and 
utilize postman outside of the lab visit https://www.postman.com/downloads/.

An RDP client is recommended to access the Windows 10 client.  Current versions of Microsoft Windows should 
include an RDP client pre-installed.  If you are using an operating system other than Windows, below are 
documentation and download links for installing an RDP client.

+-------------------+-------------------------------------------------------------------------------------------+
| Operating System  | Documentation and Download Link                                                           | 
+===================+===========================================================================================+
| macOS             | `Remote Desktop Mac`_                                                                     |
+-------------------+-------------------------------------------------------------------------------------------+
| iOS/iPadOS        | `Remote Desktop iOS`_                                                                     |
+-------------------+-------------------------------------------------------------------------------------------+
| Android/Chrome OS | `Remote Desktop Android`_                                                                 |
+-------------------+-------------------------------------------------------------------------------------------+
| Linux             | `Remote Desktop Linux`_                                                                   |
+-------------------+-------------------------------------------------------------------------------------------+

If you are unable to install an RDP client or cannot connect via RDP to the Windows 10 host, you can use the 
WebRDP jump host within the UDF environment to access the Windows 10 client via a web browser. Here are 
instructions for connecting to the Windows 10 client via RDPClient_. Here are instructions for connecting to the
Windows 10 client via WebRDP_.

The username and password for the Windows 10 host are:
+-----------+------------+
| Username  | Password   | 
+===========+============+
| labuser   | F5L@bUser! |
+-----------+------------+

+---------------------------------------------------------------------------------------------------------------+
| 1. From the Windows 10 client deployed as part of the UDF, open Postman.                                      |
|                                                                                                               |
| |lab1-Postman|                                                                                                |
+---------------------------------------------------------------------------------------------------------------+
| 2. Click on **Environments** on the left side of Postman and then select **Appworld - XC Automation**.        |
|                                                                                                               |
| 3. Fill in the variables with the corresponding values for your lab environment and then click **Save**.      |
|                                                                                                               |
|    * **api-token:**  *<api-token>*                                                                            |
|    * **tenant:**  *f5-xc-lab-app*                                                                             |
|    * **namespace:**  *<namespace>*                                                                            |
|                                                                                                               |
| |lab1-Postman_Variables|                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 4. Select **Collections** from the left side of Postman and then expand **Appworld - XC Automation** and      |
|                                                                                                               |
|    select **Get My Namespace** and click **Send**.                                                            |
|                                                                                                               |
| |lab1-Postman_Namespace|                                                                                      |
+---------------------------------------------------------------------------------------------------------------+
| 5. Review the results in the **Body** section of Postman. You should see a 200 OK response code and the name  |
|                                                                                                               |
|    of you namespace should appear in the **metadata**. These results should match the results from Task 1     |
|                                                                                                               |
|    step 16.                                                                                                   |
|                                                                                                               |
| |lab1-Postman_Namespace_Results|                                                                              |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 6. Select **Create Health Check** under the Appworld - XC Automation collection and select **Body**.          |
|                                                                                                               |
| 7. Review the JSON in the **Body** section. This data is what is sent to the Distributed Cloud API to create  |
|                                                                                                               |
|    a new Health Check.                                                                                        |
|                                                                                                               |
| |lab1-Postman_HC_Body|                                                                                        |
+---------------------------------------------------------------------------------------------------------------+
| 8. Click **Send** to create the Health Check.                                                                 |
|                                                                                                               |
| |lab1-Postman_HC_Send|                                                                                        |
+---------------------------------------------------------------------------------------------------------------+
| 9. Review the results in the **Body** section of Postman. You should see a 200 OK response code.              |
|                                                                                                               |
| |lab1-Postman_HC_Results|                                                                                     |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 10. Select **Create Origin Pool** under the Appworld - XC Automation collection and select **Body**.          |
|                                                                                                               |
| 11. Review the JSON in the **Body** section. This data is what is sent to the Distributed Cloud API to create |
|                                                                                                               |
|     a new Origin Pool.                                                                                        |
|                                                                                                               |
| |lab1-Postman_Pool_Body|                                                                                      |
+---------------------------------------------------------------------------------------------------------------+
| 12. Click **Send** to create the Origin Pool.                                                                 |
|                                                                                                               |
| |lab1-Postman_Pool_Send|                                                                                      |
+---------------------------------------------------------------------------------------------------------------+
| 13. Review the results in the **Body** section of Postman. You should see a 200 OK response code.             |
|                                                                                                               |
| |lab1-Postman_Pool_Results|                                                                                   |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 14. Select **Create HTTP Load Balancer** under the Appworld - XC Automation collection and select **Body**.   |
|                                                                                                               |
| 15. Review the JSON in the **Body** section. This data is what is sent to the Distributed Cloud API to create |
|                                                                                                               |
|     a new HTTP Load Balancer.                                                                                 |
|                                                                                                               |
| |lab1-Postman_LB_Body|                                                                                        |
+---------------------------------------------------------------------------------------------------------------+
| 16. Click **Send** to create the HTTP Load Balancer.                                                          |
|                                                                                                               |
| |lab1-Postman_LB_Send|                                                                                        |
+---------------------------------------------------------------------------------------------------------------+
| 17. Review the results in the **Body** section of Postman. You should see a 200 OK response code.             |
|                                                                                                               |
| |lab1-Postman_LB_Results|                                                                                     |
+---------------------------------------------------------------------------------------------------------------+

Task 3: Review & Test Proxy Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will review the configuations created using Postman in the Distributed Cloud Console.  The
configuration will then be tested utilizing a web browser to access the web appliaction.

+---------------------------------------------------------------------------------------------------------------+
| 1. From the Windows 10 client deployed as part of the UDF, open Chrome.                                       |
|                                                                                                               |
| |lab1-Chrome|                                                                                                 |
+---------------------------------------------------------------------------------------------------------------+
| 2. Click on the **XC Console** bookmark to be taken to the XC Console login.                                  |
|                                                                                                               |
| |lab1-XC_Bookmark|                                                                                            |
+---------------------------------------------------------------------------------------------------------------+
| 3. Enter your e-mail address in the **Email** form and password in the **Password** form and click **Sign**   |
|                                                                                                               |
|    **In**.                                                                                                    |
|                                                                                                               |
| |lab1-XC_Signin|                                                                                              |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 4. Within the Distributed Cloud dashboard select the **Multi-Cloud App Connect** tile.                        |
|                                                                                                               |
| |lab1-XC_App_Connect|                                                                                         |
+---------------------------------------------------------------------------------------------------------------+
| 5. In the resulting screen, expand the **Manage** menu and click **Load Balancers** and then select           |
|                                                                                                               |
|    *Health Checks**.                                                                                          |
|                                                                                                               |
| |lab1-XC_HC|                                                                                                  |
+---------------------------------------------------------------------------------------------------------------+
| 6. From the Health Checks page, locate the Health Check that you created via Postman.  Click the **ellipsis** |
|                                                                                                               |
|    under **Actions** and select **Manage Configuration**.                                                     |
|                                                                                                               |
| |lab1-XC_HC_Manage|                                                                                           |
+---------------------------------------------------------------------------------------------------------------+
| 7. From the resulting screen, review the Health Check configuration data and then click **JSON**.             |
|                                                                                                               |
| |lab1-XC_HC_JSON|                                                                                             |
+---------------------------------------------------------------------------------------------------------------+
| 8. Review the resulting JSON data.  This JSON matches JSON from the body section of Postman request that      |
|                                                                                                               |
|    created the Health Check.                                                                                  |
|                                                                                                               |
| |lab1-XC_HC_JSON_Data|                                                                                        |
|                                                                                                               |
| .. note::                                                                                                     |
|    *There may be slight variations in the JSON because you don't need to post default values when calling the*|
|                                                                                                               |
|    *API. If you want to automate a task in Distributed Cloud but are unsure of the required JSON, you can*    |
|                                                                                                               |
|    *configure a test object via the GUI and then use this JSON tab to get the corresponding JSON config.*     |
+---------------------------------------------------------------------------------------------------------------+
| 9. Click **Cancel and Exit** to close out the Health Check configuration.                                     |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 10. Under the Multi-Cloud App Connect Manage menu, select **Load Balancers** and then click on **Origin**     |
|                                                                                                               |
|     **Pools**.                                                                                                |
|                                                                                                               |
| |lab1-XC_Pool|                                                                                                |
+---------------------------------------------------------------------------------------------------------------+
| 11. From the Origin Pools page, locate the Origin Pool that you created via Postman.  Click the **ellipsis**  |
|                                                                                                               |
|     under **Actions** and select **Manage Configuration**.                                                    |
|                                                                                                               |
| |lab1-XC_Pool_Manage|                                                                                         |
+---------------------------------------------------------------------------------------------------------------+
| 12. From the resulting screen, review the Origin Pool configuration data and then click **JSON**.             |
|                                                                                                               |
| |lab1-XC_Pool_JSON|                                                                                           |
+---------------------------------------------------------------------------------------------------------------+
| 13. Review the resulting JSON data.  This JSON matches JSON from the body section of Postman request that     |
|                                                                                                               |
|     created the Origin Pool.                                                                                  |
|                                                                                                               |
| |lab1-XC_Pool_JSON_Data|                                                                                      |
|                                                                                                               |
| .. note::                                                                                                     |
|    *There may be slight variations in the JSON because you don't need to post default values when calling the*|
|                                                                                                               |
|    *API. If you want to automate a task in Distributed Cloud but are unsure of the required JSON, you can*    |
|                                                                                                               |
|    *configure a test object via the GUI and then use this JSON tab to get the corresponding JSON config.*     |
+---------------------------------------------------------------------------------------------------------------+
| 14. Click **Cancel and Exit** to close out the Origin Pool configuration.                                     |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 15. Under the Multi-Cloud App Connect Manage menu, select **Load Balancers** and then click on **HTTP**       |
|                                                                                                               |
|     **Load Balancers**.                                                                                       |
|                                                                                                               |
| |lab1-XC_LB|                                                                                                  |
+---------------------------------------------------------------------------------------------------------------+
| 16. From the HTTP Load Balancers page, locate the HTTP Load Balancer that you created via Postman.  Click the |
|                                                                                                               |
|     **ellipsis** under **Actions** and select **Manage Configuration**.                                       |
|                                                                                                               |
| |lab1-XC_LB_Manage|                                                                                           |
+---------------------------------------------------------------------------------------------------------------+
| 17. From the resulting screen, review the HTTP Load Balancer configuration data and then click **JSON**.      |
|                                                                                                               |
| |lab1-XC_LB_JSON|                                                                                             |
+---------------------------------------------------------------------------------------------------------------+
| 18. Review the resulting JSON data.  This JSON matches JSON from the body section of Postman request that     |
|                                                                                                               |
|     created the HTTP Load Balancer.                                                                           |
|                                                                                                               |
| |lab1-XC_LB_JSON_Data|                                                                                        |
|                                                                                                               |
| .. note::                                                                                                     |
|    *There may be slight variations in the JSON because you don't need to post default values when calling the*|
|                                                                                                               |
|    *API. If you want to automate a task in Distributed Cloud but are unsure of the required JSON, you can*    |
|                                                                                                               |
|    *configure a test object via the GUI and then use this JSON tab to get the corresponding JSON config.*     |
+---------------------------------------------------------------------------------------------------------------+
| 19. Click **Cancel and Exit** to close out the Load Balancer configuration.                                   |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 20. Open a new tab in your Chrome browser and enter the following URL                                         |
|                                                                                                               |
|     **http://<namespace>-demoshop.lab-app.f5demos.com**                                                       |
|                                                                                                               |
| |lab1-Demoshop|                                                                                               |
|                                                                                                               |
| .. note::                                                                                                     |
|    *This illustrates that you are able to configure the delivery of an application via the Distributed Cloud* |
|                                                                                                               |
|    *API utilizing Postman.*                                                                                   |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **End of Lab 1:**  This concludes Lab 1. In this lab you learned about the Distributed Cloud Developer Portal |
|                                                                                                               |
| and how it can help you test API calls. You then expanded upon that knowledge and utilized Postman to deploy  |
|                                                                                                               |
| a Health Check, Origin Pool, and HTTP Load Balancer. Next, you verified the configuration that was pushed to  |
|                                                                                                               |
| the Distributed Console. Finally, you verified the application you published was available from a web browser.|
|                                                                                                               |
| A brief presentation will be shared prior to the beginning of Lab 2.                                          |
|                                                                                                               |
| |labend|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

.. |lab1-Account_Settings| image:: _static/lab1-Account_Settings.png
   :width: 800px
.. |lab1-Credentials| image:: _static/lab1-Credentials.png
   :width: 800px
.. |lab1-Add_Credentials| image:: _static/lab1-Add_Credentials.png
   :width: 800px
.. |lab1-Generate_API_Token| image:: _static/lab1-Generate_API_Token.png
   :width: 800px
.. |lab1-API_Token| image:: _static/lab1-API_Token.png
   :width: 800px
.. |lab1-API_Documentation| image:: _static/lab1-API_Documentation.png
   :width: 800px
.. |lab1-API_Developer_Portal| image:: _static/lab1-API_Developer_Portal.png
   :width: 800px
.. |lab1-Portal_Domain| image:: _static/lab1-Portal_Domain.png
   :width: 800px
.. |lab1-Portal_Authorize| image:: _static/lab1-Portal_Authorize.png
   :width: 800px
.. |lab1-Portal_Set_Token| image:: _static/lab1-Portal_Set_Token.png
   :width: 800px
.. |lab1-Portal_Namespace| image:: _static/lab1-Portal_Namespace.png
   :width: 800px
.. |lab1-Portal_Namespaces_Name| image:: _static/lab1-Portal_Namespaces_Name.png
   :width: 800px
.. |lab1-Portal_Namespaces_Name_Execute| image:: _static/lab1-Portal_Namespaces_Name_Execute.png
   :width: 800px
.. |lab1-Portal_Namespaces_Name_JSON| image:: _static/lab1-Portal_Namespaces_Name_JSON.png
   :width: 800px
.. |lab1-Postman| image:: _static/lab1-Postman.png
   :width: 800px
.. |lab1-Postman_Variables| image:: _static/lab1-Postman_Variables.png
   :width: 800px
.. |lab1-Postman_Namespace| image:: _static/lab1-Postman_Namespace.png
   :width: 800px
.. |lab1-Postman_Namespace_Results| image:: _static/lab1-Postman_Namespace_Results.png
   :width: 800px
.. |lab1-Postman_HC_Body| image:: _static/lab1-Postman_HC_Body.png
   :width: 800px
.. |lab1-Postman_HC_Send| image:: _static/lab1-Postman_HC_Send.png
   :width: 800px
.. |lab1-Postman_HC_Results| image:: _static/lab1-Postman_HC_Results.png
   :width: 800px
.. |lab1-Postman_Pool_Body| image:: _static/lab1-Postman_Pool_Body.png
   :width: 800px
.. |lab1-Postman_Pool_Send| image:: _static/lab1-Postman_Pool_Send.png
   :width: 800px
.. |lab1-Postman_Pool_Results| image:: _static/lab1-Postman_Pool_Results.png
   :width: 800px
.. |lab1-Postman_LB_Body| image:: _static/lab1-Postman_LB_Body.png
   :width: 800px
.. |lab1-Postman_LB_Send| image:: _static/lab1-Postman_LB_Send.png
   :width: 800px
.. |lab1-Postman_LB_Results| image:: _static/lab1-Postman_LB_Results.png
   :width: 800px
.. |lab1-Chrome| image:: _static/lab1-Chrome.png
   :width: 800px
.. |lab1-XC_Bookmark| image:: _static/lab1-XC_Bookmark.png
   :width: 800px
.. |lab1-XC_Signin| image:: _static/lab1-XC_Signin.png
   :width: 800px
.. |lab1-XC_App_Connect| image:: _static/lab1-XC_App_Connect.png
   :width: 800px
.. |lab1-XC_HC| image:: _static/lab1-XC_HC.png
   :width: 800px
.. |lab1-XC_HC_Manage| image:: _static/lab1-XC_HC_Manage.png
   :width: 800px
.. |lab1-XC_HC_JSON| image:: _static/lab1-XC_HC_JSON.png
   :width: 800px
.. |lab1-XC_HC_JSON_Data| image:: _static/lab1-XC_HC_JSON_Data.png
   :width: 800px
.. |lab1-XC_Pool| image:: _static/lab1-XC_Pool.png
   :width: 800px
.. |lab1-XC_Pool_Manage| image:: _static/lab1-XC_Pool_Manage.png
   :width: 800px
.. |lab1-XC_Pool_JSON| image:: _static/lab1-XC_Pool_JSON.png
   :width: 800px
.. |lab1-XC_Pool_JSON_Data| image:: _static/lab1-XC_Pool_JSON_Data.png
   :width: 800px
.. |lab1-XC_LB| image:: _static/lab1-XC_LB.png
   :width: 800px
.. |lab1-XC_LB_Manage| image:: _static/lab1-XC_LB_Manage.png
   :width: 800px
.. |lab1-XC_LB_JSON| image:: _static/lab1-XC_LB_JSON.png
   :width: 800px
.. |lab1-XC_LB_JSON_Data| image:: _static/lab1-XC_LB_JSON_Data.png
   :width: 800px
.. |lab1-Demoshop| image:: _static/lab1-Demoshop.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px

.. _Remote Desktop Mac: https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac/
.. _Remote Desktop iOS: https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-ios/
.. _Remote Desktop Android: https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-android/
.. _Remote Desktop Linux: https://remmina.org/ 
.. _RDPClient:  /docs/class8/rdpclient.rst
.. _WebRDP: /docs/class8/webrdp.rst
