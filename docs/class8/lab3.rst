Lab 3: Leveraging Terraform
===========================

The following lab tasks will guide you through using Terraform to deploy and secure a Web based application.  
Students will start by creating an authentication certificate within Distributed Cloud that Terraform utilizes
for authenticating the API calls.  Next a Tfvars file is created to customize the deployment to match the 
students environment. Terraform will then be used to deploy a HTTP Health Check, Origin Pool, and HTTP Load 
Balancer. Students will then modify and apply the Terraform configuration to add a Web Application Firewall 
and Service Policy to their existing HTTP Load Balancer.

**Expected Lab Time: 20 minutes**

Task 1: Deploy a Web Application with Terraform  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task you will create an API Certificate for Terraform to authneticate to the Distributed Cloud API.  Next 
you will create a Tfvars file to specify variable values unique to your environment.  After the Tfvars file is 
created, you will intialize Terraform and then deploy an HTTP Health Check, Origin Pool, and HTTP Load Balancer. 

This lab will begin back in the Windows 10 client deployed as part of the UDF.

+---------------------------------------------------------------------------------------------------------------+
| 1. From the Windows 10 client deployed as part of the UDF, open Chrome.                                       |
|                                                                                                               |
| 2. Click on the **XC Console** bookmark to be taken to the XC Console login.                                  |
|                                                                                                               |
| 3. Enter your e-mail address in the **Email** form and password in the **Password** form and click **Sign**   |
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
| 4. In the top right corner of the Distributed Cloud Console click the **User Icon** dropdown and select       |
|                                                                                                               |
|    **Account Settings**.                                                                                      |
|                                                                                                               |
| 5. In the resulting screen click **Credentials** under the Peronal Management Heading on the left.            |
|                                                                                                               |
| 6. Click **Add Credentials**.                                                                                 |
|                                                                                                               |
| 7. Fill in the resulting form with the following values                                                       |
|                                                                                                               |
|    * **Credential Name ID:**  *<namespace>-api-cert*                                                          |
|    * **Credential Type: Select:** *API Certificate*                                                           |
|    * **Password:** *<some_password>*                                                                          |
|    * **Confirm Password:** *<some_password>*                                                                  |
|    * **Expiry Date: Select:** *<date two day in the future of today's date>*                                  |
|                                                                                                               |
| 8. Click **Download**.                                                                                        |
|                                                                                                               |
| .. note::                                                                                                     |
|    *Use a password that you will remember for the certificate, if you don't remember your API cert password,  |
|                                                                                                               |
|    *you will need to generate a new API cert.*                                                                |
+---------------------------------------------------------------------------------------------------------------+
| |lab1-Account_Settings|                                                                                       |
|                                                                                                               |
| |lab1-Credentials|                                                                                            |
|                                                                                                               |
| |lab1-Add_Credentials|                                                                                        |
|                                                                                                               |
| |lab3-Terraform_Download_API_Cert|                                                                            |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 9. Minimize the Chrome Browaser and double click the **Command Prompt** icon on the Windows 10 desktop.       |
|                                                                                                               |
| 10. Copy the certificate you downloaded to the labuser home folder using the command:                         |
|                                                                                                               |
| .. code-block::                                                                                               |
|   copy c:\Users\labuser\Downloads\f5-xc-lab-app.console.ves.volterra.io.api-creds.p12                         |
|   c:\Users\labuser\xc-api-cert.p12                                                                            |
|                                                                                                               |
| 11. Enter your e-mail address in the **Email** form and password in the **Password** form and click **Sign**  |
|                                                                                                               |
|    **In**.                                                                                                    |
+---------------------------------------------------------------------------------------------------------------+
| |lab3-Terraform_Cmd_Prompt|                                                                                   |
|                                                                                                               |
| |lab1-XC_Bookmark|                                                                                            |
|                                                                                                               |
| |lab1-XC_Signin|                                                                                              |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 1. Double click the **Visual Studio Code** icon on the desktop to launch **Visual Studio Code**.              |
|                                                                                                               |
| 2. When Visual Studio Code launches, click **File** and then **Open Folder...**.                              |
|                                                                                                               |
| 3. In the resulting window, paste **C:\Users\labuser\appworld-f5xc-automation\Terraform** into the location   |
|                                                                                                               |
|    bar, click the arrow to open that location, and then click **Select Folder**.                              |
+---------------------------------------------------------------------------------------------------------------+
| |lab3-Terraform_VSC|                                                                                          |
|                                                                                                               |
| |lab3-Terraform_VSC_Folder|                                                                                   |
|                                                                                                               |
| |lab3-Terraform_VSC_Folder_Select|                                                                            |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 4. From the EXPLORER frame, click the new file icon next to the TERRAFORM folder, and then enter the name     |
|                                                                                                               |
|    **terraform.tfvars** for the new file that is created and press **Enter**.                                 |
|                                                                                                               |
| 5. This will open the **terraform.tfvars file in the right frame of Visual Studio Code, enter the following   |
|                                                                                                               |
|    values into the file                                                                                       |
|                                                                                                               |
|    api_cert    = "/somepath/f5xc.cert"                                                                        |
|    api_key     = "/somepath/f5xc.key"                                                                         |
|    tenant_name = "f5-xc-lab-app"                                                                              |
|    namespace   = "<namespace>"                                                                                |
|                                                                                                               |
| 6. Click **File** and **Save** to save the changes you made to the file.                                      |
+---------------------------------------------------------------------------------------------------------------+
| |lab3-Terraform_VSC_tfvars|                                                                                   |
|                                                                                                               |
| |lab3-Terraform_VSC_tfvars_values|                                                                            |
|                                                                                                               |
| |lab3-Terraform_VSC_tfvars_save|                                                                              |
+---------------------------------------------------------------------------------------------------------------+