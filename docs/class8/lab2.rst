Lab 2: Leveraging Terraform
===========================

The following lab tasks will guide you through using Terraform to deploy and secure a Web based application.  
Students will start by creating an authentication certificate within Distributed Cloud. Terraform will be 
configured to utilize the certificate for authenticating the API calls.  Next, a Tfvars file is created to 
customize the deployment to match the student's environment. Terraform will then be used to deploy an HTTP 
Health Check, Origin Pool, and HTTP Load Balancer. Students will then modify and apply the Terraform 
configuration to add a Web Application Firewall to their existing HTTP Load Balancer. 

**Expected Lab Time: 20 minutes**

Task 1: Deploy a Web Application with Terraform  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task, you will create an API Certificate for Terraform to authneticate to the Distributed Cloud API.  Next, 
you will create a Tfvars file to specify environment variables unique to your environment.  After the Tfvars file is 
created, you will intialize Terraform and then deploy an HTTP Health Check, Origin Pool, and HTTP Load Balancer. 

+---------------------------------------------------------------------------------------------------------------+
| **Clone the appworld-f5xc-automation repo**                                                                   |
+===============================================================================================================+
| 1. Access VSCode server that is part of your UDF deployment.                                                  |
+---------------------------------------------------------------------------------------------------------------+
| 2. From the VS Code Menu bar select **Terminal** and then **New Terminal**.                                   |
|                                                                                                               |
| |lab2-Clone_Terminal|                                                                                         |
+---------------------------------------------------------------------------------------------------------------+
| 3. In the resulting terminal window at the bottom of VSCode enter                                             |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    git clone https://github.com/f5devcentral/appworld-f5xc-automation                                         |
|                                                                                                               |
| |lab2-Clone_Repo|                                                                                             |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **Create API Certificate from the Distributed Cloud Console**                                                 |
+===============================================================================================================+
| 1. If you don't still have the Distributed Cloud Console open in a browser, access the Console at:            |
|                                                                                                               |
|    Console <https://https://f5-xc-lab-app.console.ves.volterra.io/>                                           |
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
| 5. Fill in the resulting form with the following values:                                                      |
|                                                                                                               |
|    * **Credential Name ID:**  *<namespace>-api-cert*                                                          |
|    * **Credential Type: Select:** *API Certificate*                                                           |
|    * **Password:** *<some_password>*                                                                          |
|    * **Confirm Password:** *<some_password>*                                                                  |
|    * **Expiry Date: Select:** *<date two days in the future of today's date>*                                 |
|                                                                                                               |
| 6. Click **Download**.                                                                                        |
|                                                                                                               |
| |lab2-Terraform_Download_API_Cert|                                                                            |
|                                                                                                               |
| .. note::                                                                                                     |
|    *Use a password that you will remember for the certificate, if you don't remember your API cert password,* |
|    *you will need to generate a new API cert.*                                                                |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **Configure Terraform to Authenticate to Distributed Cloud**                                                  |
+===============================================================================================================+
| 1. Go back to the VS Code server in your browser and expand the **appworld-f5xc-automation** folder and then  |
|                                                                                                               |
|    expand the **Terraform** folder.                                                                           |
|                                                                                                               |
| |lab2-Terraform_Auth_Folders|                                                                                 |
+---------------------------------------------------------------------------------------------------------------+
| 2. Right click the **Terraform** folder and select new folder.  Type **credentials** in to name the folder.   |
|                                                                                                               |
| |lab2-Terraform_Auth_Folders_New|                                                                             |
+---------------------------------------------------------------------------------------------------------------+
| 3. Copy the certificate you downloaded by dragging it to the **credentials** folder you just created.         |
+---------------------------------------------------------------------------------------------------------------+
| 4. Right click the certificate in VSCode and select **Rename**.  Change the name of the file to               |
|                                                                                                               |
|    **xc-api-cert.p12**                                                                                        |
|                                                                                                               |
| |lab2-Terraform_Auth_Folders_Cert|                                                                            |
+---------------------------------------------------------------------------------------------------------------+
| 5. Set an environment variable for the API certificate password by running the following command in the       |
|                                                                                                               |
|    VSCode terminal window:                                                                                    |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    export VES_P12_PASSWORD="<some_password>"                                                                  |
|                                                                                                               |
| |lab2-Terraform_Auth_Env|                                                                                     |
|                                                                                                               |
| .. note::                                                                                                     |
|    *Replace <some_password> with the password you entered when creating the API certificate.  You need to*    |
|    *the password in "".  So if your password is password export VES_P12_PASSWORD="password".*                 |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **Create a tfvars File for Specifying Environment Specific Variables**                                        |
+===============================================================================================================+
| 1. From the **EXPLORER** frame, right click the **Terraform** folder, and then select new file. Enter the     |
|                                                                                                               |
|    name **terraform.tfvars** for the new file that is created and press enter.                                | 
|                                                                                                               |
| |lab2-Terraform_Tfvars|                                                                                       |
+---------------------------------------------------------------------------------------------------------------+
| 2. This will open the **terraform.tfvars** file in the right frame of Visual Studio Code, enter the following |
|                                                                                                               |
|    values into the file:                                                                                      |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    api_p12     = "./credentials/xc-api-cert.p12"                                                              |
|    tenant_name = "f5-xc-lab-app"                                                                              |
|    namespace   = "<namespace>"                                                                                |
|                                                                                                               |
| |lab2-Terraform_Tfvars_Values|                                                                                |
|                                                                                                               |
| .. note::                                                                                                     |
|    *Replace <namespace> with your assigned namespace.*                                                        |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **Initialize, Plan, and Apply Your Terraform Code**                                                           |
+===============================================================================================================+
| 1. In the Terminal at the bottom of Visual Studio Code, change directory into the Terraform folder.:          |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    cd appworld-f5xc-automation/Terraform                                                                      |
|                                                                                                               |
| |lab2-Terraform_Deploy_Directory|                                                                             |
+---------------------------------------------------------------------------------------------------------------+
| 2. In the Terminal at the bottom of Visual Studio Code, run the following command to initialize the Terraform |
|                                                                                                               |
|    environment:                                                                                               |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    terraform init                                                                                             |
|                                                                                                               |
| |lab2-Terraform_Deploy_Init|                                                                                  |
+---------------------------------------------------------------------------------------------------------------+
| 3. Review the Init Results. You should see a **Terraform has been successfully initialized!** message.        |
|                                                                                                               |
|    **DO NOT PROCEED AND ASK A LAB ASSISTANT FOR HELP IF YOU DON'T SEE THE SUCCESSFULLY INITIALIZED MESSAGE.** |
|                                                                                                               |
| |lab2-Terraform_Deploy_Init_Success|                                                                          |
+---------------------------------------------------------------------------------------------------------------+
| 4. In the Terminal, enter the following command and press Enter:                                              |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    terraform plan                                                                                             |
|                                                                                                               |
| |lab2-Terraform_Deploy_Plan|                                                                                  |
+---------------------------------------------------------------------------------------------------------------+
| 5. Review the Plan results. This shows what Terraform is planning to create.                                  |
|                                                                                                               |
| |lab2-Terraform_Deploy_Plan_Results|                                                                          |
+---------------------------------------------------------------------------------------------------------------+
| 6. In the Terminal, enter the following command and press Enter:                                              |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    terraform apply                                                                                            |
|                                                                                                               |
| |lab2-Terraform_Deploy_Apply|                                                                                 |
+---------------------------------------------------------------------------------------------------------------+
| 7. When prompted **Do you want to perform these actions?**, type **yes** and press Enter.                     |
|                                                                                                               |
| |lab2-Terraform_Deploy_Apply_Yes|                                                                             |
+---------------------------------------------------------------------------------------------------------------+
| 8. Review the Apply results. This shows what Terraform created.                                               |
|                                                                                                               |
| |lab2-Terraform_Deploy_Apply_Results|                                                                         |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **Verify the Demo Shop App is Accessible Via a Web Browser**                                                  |
+===============================================================================================================+
| 1. Open a new tab in your Chrome browser and enter the following URL                                          |
|                                                                                                               |
|    **http://<namespace>-demoshop.lab-app.f5demos.com**                                                        |
|                                                                                                               |
| .. note::                                                                                                     |
|    *This illustrates that you are able to configure the delivery of an application via the Distributed Cloud* |
|    *API utilizing Terraform.*                                                                                 |
+---------------------------------------------------------------------------------------------------------------+
| |lab1-Demoshop|                                                                                               |
+---------------------------------------------------------------------------------------------------------------+

Task 2: Create & Attach WAF Policy 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task, you will modify your Terraform configuration to create and apply an Application Firewall policy with
the default settings. Since Terraform tracks state, the apply command is used to modify the required existing 
objects within Distributed Cloud.

+---------------------------------------------------------------------------------------------------------------+
| **Edit Your Terraform Code to Create an Application Firewall and Add It to the Load Balancer**                |
+===============================================================================================================+
| 1. From the Visual Studio Code Explorer frame, click **main.tf**, to open the Terraform configuration.        |
|                                                                                                               |
| |lab2-Terraform_AppFw|                                                                                        |
+---------------------------------------------------------------------------------------------------------------+
| 2. Scroll down to the bottom of the configuration and paste in the following lines to create the Web          |
|                                                                                                               |
|    Application Firewall policy.                                                                               |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    # Create WAF Policy                                                                                        |
|    resource "volterra_app_firewall" "waf" {                                                                   |
|      name = "${var.namespace}-appfw"                                                                          |
|      namespace = var.namespace                                                                                |
|      allow_all_response_codes = true                                                                          |
|      default_anonymization = true                                                                             |
|      use_default_blocking_page = true                                                                         |
|      default_bot_setting = true                                                                               |
|      default_detection_settings = true                                                                        |
|      blocking = true                                                                                          |
|    }                                                                                                          |
|                                                                                                               |
| |lab2-Terraform_AppFw_Create|                                                                                 |
+---------------------------------------------------------------------------------------------------------------+
| 3. Locate the **Create Load Balancer** configuration within **main.tf** and replace the **disable_waf = true**|
|                                                                                                               |
|    line with the following configuration:                                                                     |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    # WAF Config                                                                                               |
|    app_firewall {                                                                                             |
|      name = volterra_app_firewall.waf.name                                                                    |
|      namespace = var.namespace                                                                                |
|    }                                                                                                          |
|                                                                                                               |
| |lab2-Terraform_AppFw_LB|                                                                                     |
|                                                                                                               |
| .. note::                                                                                                     |
|    *The WAF Config should be indented two spaces under the Load Balancer configuration to maintain nesting*   |
|    *style conventions.*                                                                                       |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **Plan and Apply Your New Terraform Code to Create an Application Firewall and Associate It to Your LB**      |
+===============================================================================================================+
| 1. In the Terminal, enter the following command and press Enter:                                              |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    terraform plan                                                                                             |
|                                                                                                               |
| |lab2-Terraform_AppFw_Plan|                                                                                   |
+---------------------------------------------------------------------------------------------------------------+
| 2. Review the Plan results. This shows what Terraform is planning to create.                                  |
|                                                                                                               |
| |lab2-Terraform_AppFw_Plan_Results|                                                                           |
+---------------------------------------------------------------------------------------------------------------+
| 3. In the Terminal, enter the following command and press Enter:                                              |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    terraform apply                                                                                            |
|                                                                                                               |
| |lab2-Terraform_AppFw_Apply|                                                                                  |
+---------------------------------------------------------------------------------------------------------------+
| 4. When prompted **Do you want to perform these actions?**, type **yes** and press Enter.                     |
|                                                                                                               |
| |lab2-Terraform_AppFw_Apply_Yes|                                                                              |
+---------------------------------------------------------------------------------------------------------------+
| 5. Review the Apply results. This shows what Terraform created.                                               |
|                                                                                                               |
| |lab2-Terraform_AppFw_Apply_Results|                                                                          |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **Verify the Application Firewall was Created and Applied Within the Distributed Cloud Console**              |
+===============================================================================================================+
| 1. Switch back to your Browser that is connected to the Distributed Cloud Console.                            |
+---------------------------------------------------------------------------------------------------------------+
| 2. If you are not already in Web App & API Protection, select **Web App & API Protection** from the **Select**|
|                                                                                                               |
|    **Workspace** drowpown.                                                                                    |
|                                                                                                               |
| |lab2-Terraform_Console_Web|                                                                                  |
+---------------------------------------------------------------------------------------------------------------+
| 3. In the resulting screen, expand the **Manage** menu and click **Load Balancers** and then select           |
|                                                                                                               |
|    **HTTP Load Balancers**.                                                                                   |
|                                                                                                               |
| |lab2-Terraform_Console_Manage_LBs|                                                                           |
+---------------------------------------------------------------------------------------------------------------+
| 4. From the HTTP Load Balancers page, locate the HTTP Load Balancer that you created via Terraform.  Click    |
|                                                                                                               |
|    the **ellipsis** under **Actions** and select **Manage Configuration**.                                    |
|                                                                                                               |
| |lab2-Terraform_Console_Manage_LB_Manage|                                                                     |
+---------------------------------------------------------------------------------------------------------------+
| 5. From the resulting screen, select **Web Application Firewall** under the HTTP Load Balancer frame to jump  |
|                                                                                                               |
|    to the **Web Application Firewall** configuration section.                                                 |
|                                                                                                               |
| |lab2-Terraform_Console_Manage_LB_WebAppFw|                                                                   |
+---------------------------------------------------------------------------------------------------------------+
| 6. Notice that the Web Application Firewall is now Enabled and the policy you created using Terraform is      |
|                                                                                                               |
|    applied.                                                                                                   |
|                                                                                                               |
| |lab2-Terraform_Console_Manage_LB_WebAppFw_Enable|                                                            |
+---------------------------------------------------------------------------------------------------------------+
| 7. Click **Cancel and Exit** to close out of the HTTP Load Balancer configuration.                            |
|                                                                                                               |
| |lab2-Terraform_Console_Manage_LB_Cancel|                                                                     |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **End of Lab 2**                                                                                              |
+===============================================================================================================+
| This concludes Lab 2. In this lab, you learned how to setup Terraform to authenticate to to Distributed Cloud |
|                                                                                                               |
| utilizing an API Certificate. You then created a Tfvars file to customize the deployment to match your        |
|                                                                                                               |
| environment. After that, you used Terraform to deploy an HTTP Health Check, Origin Pool, and HTTP Load        |
|                                                                                                               |
| Balancer. The Terraform configuration was then modified to create a Web Application Firewall policy and apply |
|                                                                                                               |
| it to the HTTP Load Balancer.                                                                                 |
+---------------------------------------------------------------------------------------------------------------+
| |labend|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

.. |lab2-Clone_Terminal| image:: _static/lab2-Clone_Terminal.png
   :width: 800px
.. |lab2-Clone_Repo| image:: _static/lab2-Clone_Repo.png
   :width: 800px
.. |lab1-Account_Settings| image:: _static/lab1-Account_Settings.png
   :width: 800px
.. |lab1-Credentials| image:: _static/lab1-Credentials.png
   :width: 800px
.. |lab1-Add_Credentials| image:: _static/lab1-Add_Credentials.png
   :width: 800px
.. |lab2-Terraform_Download_API_Cert| image:: _static/lab2-Terraform_Download_API_Cert.png
   :width: 800px
.. |lab2-Terraform_Auth_Folders| image:: _static/lab2-Terraform_Auth_Folders.png
   :width: 800px
.. |lab2-Terraform_Auth_Folders_New| image:: _static/lab2-Terraform_Auth_Folders_New.png
   :width: 800px
.. |lab2-Terraform_Auth_Folders_Cert| image:: _static/lab2-Terraform_Auth_Folders_Cert.png
   :width: 800px
.. |lab2-Terraform_Auth_Env| image:: _static/lab2-Terraform_Auth_Env.png
   :width: 800px
.. |lab2-Terraform_Tfvars| image:: _static/lab2-Terraform_Tfvars.png
   :width: 800px
.. |lab2-Terraform_Tfvars_Values| image:: _static/lab2-Terraform_Tfvars_Values.png
   :width: 800px
.. |lab2-Terraform_Deploy_Directory| image:: _static/lab2-Terraform_Deploy_Directory.png
   :width: 800px
.. |lab2-Terraform_Deploy_Init| image:: _static/lab2-Terraform_Deploy_Init.png
   :width: 800px
.. |lab2-Terraform_Deploy_Init_Success| image:: _static/lab2-Terraform_Deploy_Init_Success.png
   :width: 800px
.. |lab2-Terraform_Deploy_Plan| image:: _static/lab2-Terraform_Deploy_Plan.png
   :width: 800px
.. |lab2-Terraform_Deploy_Plan_Results| image:: _static/lab2-Terraform_Deploy_Plan_Results.png
   :width: 800px
.. |lab2-Terraform_Deploy_Apply| image:: _static/lab2-Terraform_Deploy_Apply.png
   :width: 800px
.. |lab2-Terraform_Deploy_Apply_Yes| image:: _static/lab2-Terraform_Deploy_Apply_Yes.png
   :width: 800px
.. |lab2-Terraform_Deploy_Apply_Results| image:: _static/lab2-Terraform_Deploy_Apply_Results.png
   :width: 800px
.. |lab1-Demoshop| image:: _static/lab1-Demoshop.png
   :width: 800px
.. |lab2-Terraform_AppFw| image:: _static/lab2-Terraform_AppFw.png
   :width: 800px
.. |lab2-Terraform_AppFw_Create| image:: _static/lab2-Terraform_AppFw_Create.png
   :width: 800px
.. |lab2-Terraform_AppFw_LB| image:: _static/lab2-Terraform_AppFw_LB.png
   :width: 800px   
.. |lab2-Terraform_AppFw_Plan| image:: _static/lab2-Terraform_AppFw_Plan.png
   :width: 800px
.. |lab2-Terraform_AppFw_Plan_Results| image:: _static/lab2-Terraform_AppFw_Plan_Results.png
   :width: 800px
.. |lab2-Terraform_AppFw_Apply| image:: _static/lab2-Terraform_AppFw_Apply.png
   :width: 800px
.. |lab2-Terraform_AppFw_Apply_Yes| image:: _static/lab2-Terraform_AppFw_Apply_Yes.png
   :width: 800px
.. |lab2-Terraform_AppFw_Apply_Results| image:: _static/lab2-Terraform_AppFw_Apply_Results.png
   :width: 800px
.. |lab2-Terraform_Console_Web| image:: _static/lab2-Terraform_Console_Web.png
   :width: 800px
.. |lab2-Terraform_Console_Manage_LBs| image:: _static/lab2-Terraform_Console_Manage_LBs.png
   :width: 800px
.. |lab2-Terraform_Console_Manage_LB_Manage| image:: _static/lab2-Terraform_Console_Manage_LB_Manage.png
   :width: 800px
.. |lab2-Terraform_Console_Manage_LB_WebAppFw| image:: _static/lab2-Terraform_Console_Manage_LB_WebAppFw.png
   :width: 800px
.. |lab2-Terraform_Console_Manage_LB_WebAppFw_Enable| image:: _static/lab2-Terraform_Console_Manage_LB_WebAppFw_Enable.png
   :width: 800px
.. |lab2-Terraform_Console_Manage_LB_Cancel| image:: _static/lab2-Terraform_Console_Manage_LB_Cancel.png
   :width: 800px



.. |labend| image:: _static/labend.png
   :width: 800px