Lab 3: Utilize Automation to Audit XC Configurations
====================================================

The following lab tasks will guide you through using automation to audit deployed configurations within
Distributed Cloud.  Terraform will be utilized to deploy multiple HTTP Load balancers so that their 
configurations can be compared against a desired configuration state. A custom python API backend with a 
web front end will then be utilized to compare the HTTP Load balancer states.

**Expected Lab Time: 30 minutes**

Task 1: Deploy multiple HTTP load balanceres with Terraform  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task, you will create a **tfvars** file to specify environment variables unique to your environment.
This **tfvars** file is slightly more advanced than the file used in **Lab 2**.  This **tfvars** file utilizes a
list object to specify mulitple key value pairs for each load balancer you want to create.  The list object is 
utilized within a **for** expression within the Terraform **resource** to loop through each item in the list.
This allows Terraform to create multiple objects using a single resource definition.  After the **tfvars** file
is created, you will **intialize**, **plan**, and **apply** your Terraform configuration to create multiple HTTP 
load balancers within your namespace. 

+---------------------------------------------------------------------------------------------------------------+
| **Create a tfvars File for Specifying Environment Specific Variables**                                        |
+===============================================================================================================+
| 1. If you aren't already in the **Visual Studio Code** browser tab, select that tab.  If you closed the tab   |
|                                                                                                               |
|    you can re-open **Visual Studio Code** by opening your UDF deployment and clicking  on the **VS CODE**     |
|                                                                                                               |
|    Access method under the **Client** system.                                                                 |
+---------------------------------------------------------------------------------------------------------------+
| 2. From the **EXPLORER** panel within Visual Studio Code, right click the **MultipleLB** folder, and then     |
|                                                                                                               |
|    select new file. Enter the name **terraform.tfvars** for the new file that is created and press enter.     |
|                                                                                                               |
| |lab3-Terraform_Tfvars|                                                                                       |
|                                                                                                               |
| .. note::                                                                                                     |
|    *Make sure you are right clicking on the MultipLB folder.  We want to create this terraform.tfvars file    |     
|    *within that directory so it only applies to the configuration within that same directory.*                |
+---------------------------------------------------------------------------------------------------------------+
| 3. This will open the **terraform.tfvars** file in the right panel of Visual Studio Code, enter the following |
|                                                                                                               |
|    values into the file:                                                                                      |
|                                                                                                               |
| .. code-block:: bash                                                                                          |
|                                                                                                               |
|    api_p12     = "../credentials/xc-api-cert.p12"                                                             |
|    tenant_name = "f5-xc-lab-app"                                                                              |
|    namespace   = "<namespace>"                                                                                |
|    loadbalancers = [                                                                                          |
|      {                                                                                                        |
|         advertise_public = false                                                                              |
|         dns_managed      = false                                                                              |
|         hostname         = "lb1"                                                                              |
|         name             = "lb1"                                                                              |
|         port             = 80                                                                                 |
|         waf_name         = "waf1"                                                                             |
|      },                                                                                                       |
|      {                                                                                                        |
|         advertise_public = false                                                                              |
|         dns_managed      = false                                                                              |
|         hostname         = "lb2"                                                                              |
|         name             = "lb2"                                                                              |
|         port             = 80                                                                                 |
|         waf_name         = "waf1"                                                                             |
|      },                                                                                                       |
|      {                                                                                                        |
|         advertise_public = false                                                                              |
|         dns_managed      = false                                                                              |
|         hostname         = "lb3"                                                                              |
|         name             = "lb3"                                                                              |
|         port             = 80                                                                                 |
|         waf_name         = "waf1"                                                                             |
|      }                                                                                                        |
|    ]                                                                                                          |
|                                                                                                               |
| |lab3-Terraform_Tfvars_Values|                                                                                |
|                                                                                                               |
| .. note::                                                                                                     |
|    *Replace <namespace> with your assigned namespace. You need to wrap the namespace in "". If your assigned* |     
|    *namespace is brave-collie, enter: namespace = "brave-collie"*                                             |
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
| 1. From the Visual Studio Code Explorer panel, click **main.tf**, to open the Terraform configuration.        |
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
| This concludes Lab 2. In this lab, you learned how to set up Terraform to authenticate to the F5 Distributed  |
|                                                                                                               |
| Cloud API with an API Certificate. You then created a **tfvars** file to customize the deployment to match    |
|                                                                                                               |
| your environment. After that, you used Terraform to deploy an HTTP Health Check, Origin Pool, and HTTP Load   |
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