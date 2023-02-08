Lab 1: Configuring and Deploying F5XC Application Traffic Insight
==================================================================

1. Login
-----------
Navigate to https://www.f5.com/cloud, select login at the top right and finally select your account type to login.

.. note::
   If you do not already have an F5 Distributed Cloud account, you can sign up for a free account
   by following the `sign up description <https://github.com/f5devcentral/f5-waap/blob/main/step-1-signup-deploy/voltConsole.rst>`_
   or just go directly to the sign up page https://console.ves.volterra.io/signup/usage_plan.

.. image:: _static/csd-login.png


2. Enable ATI
---------------

 Once you logged in, click on "Application Traffic Insight"

 .. image:: _static/ati-all-services.png

|

 Enable Application Traffic Insight (if it is not already enabled in the tenant).

 .. image:: _static/ati-enable-service.png

|

 Select the region closest to your protected application.

 .. image:: _static/ati-select-region.png

|

3. Download the BIGIP iApp from F5XC
-----------------------------------------

In the "Manage" section of the left-hand menu, click on "App Configuration" - "Add Application".

 .. image:: _static/ati-add-application.png


From the "App Application" slideout select "BIGIP iApp" and click **Next**.

 .. figure:: _static/ati-addapp-bigip.png

     Notice that there are other methods for injecting the ATI JS. These are out of scope for this lab.

From step 2 click the **Download Template** button. This will download F5_APG.zip; take note of where you download this file and open it.  This should extract **f5.apg.analytics.tmpl**.
 
From step 4 copy the JS tag.

 .. image:: _static/ati-addapp-iapp.png

|

4. Import the ATI iApp template:
------------------------------------

To access the BIG-IP, on the Class UDF screen, click the link for TMUI under the BIG-IP.  The username and password is **admin / f5DEMOS4u!**.

 .. image:: _static/agility-udf-ui_1.png

|

In your BIG-IP TMUI, go to **Local Traffic->iApps->Templates** and click the **Import...** button.

 .. image:: _static/ati-iapp-templates.png

|

In the Import screen, click **Choose File**. From the file window, find and select the "f5.apg.analytics.tmpl" file you downloaded and extracted in the previous step. Click **Upload**.  On the popup window, click **OK** to confirm you want to proceed with installing the template file on the BIGIP.

 .. figure:: _static/ati-iapp-templates.png

     Take note that there was already a template named "f5.apg_analytics" 
     that was pre-installed and ships with TMOS 16.1.
     The template you just uploaded is named "f5.apg.analytics" and has some 
     slight but important differences from the pre-installed template.

|

5. Run the ATI iApp template:
------------------------------------

 In your BIG-IP TMUI, go to **Local Traffic->iApps->Application Services->Applications** and click the **Create...** button.

 .. image:: _static/ati-iapp-create.png

 In the New Application Service window, select the "f5.apg.analytics" template from the Template dropdown.
 
 .. note::
     Ensure that you select the "f5.apg.analytics" template that you installed in the previous step.  This should be the first template listed.

 Complete the following fields:

 * Enter a name in the Name field.
 * In the JS Injection Configuration, paste the JS tag that you copied from the F5XC ATI dashboard.
 * In the Virtual Server Configuration, move the "Juice_Shop_VS" to the selected virtual servers but selecting it and clicking the "<<" button.

 .. note::
     If you no longer have the JS tag in your clipboard you can follow the directions in step 3 of this guide to copy the JS tag again.

 .. image:: _static/ati-iapp-configure.png

 Click **Finished**.

 The iApp will run and you will be taken to the "Components" screen of your newly deployed iApp.

|

6. Validate JavaScript injection
-----------------------------------

 On the UDF main page, under the BIG-IP, open the JuiceShop link

 .. image:: _static/agility-udf-ui_2.png
 
 Right-click anywhere on the JuiceShop webpage and select 'View Page Source'.
 On line 3 of the HTML code for this page, immediately following the opening ``<head>`` tag, you should see the ``<script>`` tag injected by the iApp.
 
 .. image:: _static/ati-js-pagesource.png

|

Next: |lab2|

.. |lab2| raw:: html

            <a href="./lab2.rst" target="_blank">Lab 2: Browsers, Automation Tools, and the ATI Dashboard</a>
