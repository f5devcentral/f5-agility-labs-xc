Lab 1: Building an XC Node (CE)
==================================

**Objective:**

* Get familiar with the UDF Lab Environment. 

* Deploy an XC Node to define the Customer Edge at the UDF Data Center.

* Explore and become familiar with the Distributed Cloud Console.

**Narrative:** 

After consulting with your trusty F5 Solutions Engineer, you decide to setup F5 Distributed Cloud, Network Connect. This will allow for privately routed network connectivity between two disparate networks. 
You also found out that you can use the F5 Distributed Cloud, Enhanced Firewall to provide network security between Sites. 
We already did a push-button deployment of the AWS XC Node to define the Customer Edge in the ACME VPC, which only took a few moments. 

Now, Lab 1 starts right after you have loaded the downloadable XC Node OVA on to your Data Center's local hypervisor (VMWARE or KVM). 

.. NOTE:: Your Data Center environment in these labs is the F5 UDF platform, which uses KVM as it's underlying virtualization technology. The OVA has already been imported for you. We also have hardware and container deployment options for Production XC Nodes. 

|

.. image:: ../images/lab1intro.png

|

**Prerequisite**
------------------

.. NOTE:: You should have received an email from F5 Distributed Cloud User Management <no-reply@cloud.f5.com> with the content as follows:

|

.. image:: ../images/updatepasswd.png

|
 
If you have not already, please click on **Update Password**, and change your credentials. Ensure you adhere to the password strength restrictions and make a mental note of these credentials as you will need them several times throughout the labs today. 

Once you've set your new password (make sure to include 1 upper, 1 lower and 1 special character), you will be asked to "Log In" and then presented with the following screen:

|

.. image:: ../images/tenantlogin.png 

|

In the domain field, enter: **f5-xc-lab-mcn**, click **Next** and sign in with your email address and password you've just set, and proceed to accepting the Terms and Conditions. 


.. warning:: If you have not received the email to change your credentials or ran into problems changing your credentials, please stop and get help from one of the Lab Assistants. 


**Logging into the XC Console**
---------------------------------


After accepting the Terms of Service and Privacy Policy, you will need to select your "Persona". 

Enter your persona as **"NetOps"** and click **next**. 

Enter your level as **"Intermediate"** and then click **Get Started**.  

Your persona will highlight workflows within F5 Distributed Cloud.
You will be able to access all services, but making use of personas can focus your view on particular tasks that are relevant to your role.

You can change these settings at any time. 

Click on **"Account Settings"** by expanding the **"Account"** icon in the top right of the screen and clicking on **"Account Settings".**  
In the resulting window you can observe the **Work domains and skill level** section and other administrative functions.
   
.. note:: **For the purposes of this lab, permissions have been restricted to lab operations. Some menus/functions will be locked and/or not visible.**

|

.. image:: ../images/intro1.png 

|

**For informational purposes only:**

|

.. image:: ../images/intro2.png 

|

**Find your Namespace**
---------------------------------


Namespaces, which provide an environment for isolating configured applications or enforcing role-based access controls, are leveraged
within the F5 Distributed Cloud Console. For the purposes of this lab, each lab attendee has been pre-assigned a unique **namespace**.

From the **Select service** menu, click on **Web App & API Protection**. 

|

.. image:: ../images/findnamespace.png 

|

In the **Web App & API Protection Security Dashboard** configuration screen **observe** the browser URL. In the URI path, locate the **<adjective-animal>** namespace that you have
been assigned. It will be located in the portion of the URI path between */namespaces/* and */overview/* as shown in this example: **…/namespaces/<namespace>/overview/**. Another 
way to find your namespace is by clicking system namespace, below you will see the application namepsace. Please access this namespaace by clicking on it. 
   
**Note your namespace as it will be used throughout the labs today.**

.. warning:: If you have problems locating your namespace, please see a lab assistant.

|

.. image:: ../images/namespace1replacement.png

|

.. note:: Administratively, there are other ways to find namespaces. Due to permission restrictions for this particular lab, those menus are not available.



**Site Token**
----------------

Soon, you will be configuring an XC Node in the F5 UDF Lab Environment (Data Center) that will need a way to authenticate to the Distributed Cloud Infrastructure and associate it with your tenant. For this, you will need a Site Token. 

If you are not already logged into the console, please do so now by opening the following URL in your browser: 

https://f5-xc-lab-mcn.console.ves.volterra.io/


From the **Select service** menu, click on **Multi-Cloud Network Connect**. 

|

.. image:: ../images/sitetoke.png 

|

On the side menu go down to **Manage**, then select **Site Management >> Site Tokens**
    
In the lab we have generated a Site Token for you to use named **student-ce-site**.  
In your production environment you will need to create your own Site Token to register your Customer Edge Node, which is literally two clicks and a name. Very simple! 

|

.. image:: ../images/sitetokensscreen.png

|

Copy the UID of the the **student-ce-site** token and paste it somewhere you can reference later (word, notepad etc).

|

.. image:: ../images/copytoke.png 

|

**Setting up the Customer Edge**
----------------------------------


**CLI Site Setup**
----------------------
 
In your browser, you should have a tab open to the UDF course. Under Systems -> Client, click on **Access >> Web Shell**

|

.. image:: ../images/cli-01a.png

|

This will redirect you to a new browser tab with a shell prompt on the Ubuntu system. From the shell prompt type in the following to SSH to the Customer Edge (CE) Node:

**ssh 10.1.1.5 -l admin**

This will get you connected to the CLI on the CE and prompt for authentication. Type in the default username/password:

Change the password as directed (lowercase, uppercase, number, min 8 characters is the requirement). Remember the new password should you need to log in again. 

==============================  =====
Variable                        Value
==============================  =====
Default Username:                **admin**
Default Password:                **Volterra123**
==============================  =====

|

.. image:: ../images/cli-02a.png 

|

At the **>>>** type the word **configure** and then enter. 

|

.. image:: ../images/cli-04.png 

|

Use the following response values to complete the prompts:

================================  ====================================================
Question                          Response Value
================================  ====================================================
What is your token?               Insert the Site Token UID you collected earlier
What is your site name?           Insert your unique namespace <verb-animal>
What is your hostname?            Insert your unique namespace <verb-animal> 
What is your latitude?            33.812
What is your longitude?           -117.91
What is your default fleet name?  Enter (This selects the default of **optional**)
Select your certified hardware?   Enter (This selects the default of **kvm-voltmesh**)
Select your primary outside NIC?  Enter (This selects the default of **eth0**)
================================  ==================================================== 

The response values will then be summarized. Confirm they are correct and type **y** for **yes**. If not, answer **n** and correct any values. 

|

.. image:: ../images/cli-05.png 

|

We will now go accept the Customer Edge registration in Distributed Cloud console. Proceed to **Registering the Customer Edge**.


**Registering the Customer Edge**
----------------------------------

Go back to the Distributed Cloud console.  If the session timed out, you will need to log back into the console using the following URL or refreshing your browser:

https://f5-xc-lab-mcn.console.ves.volterra.io/

From the **Select service** menu, click on **Multi-Cloud Network Connect**.

On the side menu go down to **Manage >> Site Management >> Registrations.**

|

.. image:: ../images/sitemgt.png 

|

The Customer Edge node you configured from the previous step should appear on this list, if not give it a couple moments and refresh the screen by clicking the **Refresh button** at the top right-hand corner.  

|

.. image:: ../images/sitereg.png

|

.. Tip:: This process can take a few minutes for the node to register with Distributed Cloud. 

Once the Node appears in the Registration list, accept the registration by clicking on the blue check mark.

**Click the blue check mark** to accept the registration. 

.. Note::  If you DO NOT see a blue check mark, it's likely your browser width is NOT wide enough.  Simply increase the width of the browser and you should see the blue checkmark to approve the registration.


Once you have clicked the checkmark, the console will bring up the Registration Acceptance menu which shows all the settings of the Customer Edge node.  Note the parameters you’ve entered from the previous exercise are populated into the appropriate fields. 

.. Important:: Look at the Cluster Size parameter and notice this is set to 1.  In this lab, we will only deploy a single-node-cluster and thus leave this setting as 1.  In a production environment, the best practice is to deploy a 3-node-cluster minimum.  In that case, the Cluster Size parameter would be set to 3 so an appropriately sized cluster can be formed.

**Leave the cluster size set to 1**

|

.. image:: ../images/clustersize.png

|

Scroll down to Site to Site Tunnel Type and click on the drop down arrow

|

.. image:: ../images/s2sarrow.png

|

This setting determines the VPN connectivity protocols used between the Customer Edge and the Regional Edges. The XC Node will automatically bring up redundant tunnels to two different RE's. 
These tunnels are self-healing and can fallback when using the configuration setting of IPSEC and SSL.
Select **IPSEC and SSL** from the list.  

|

.. image:: ../images/iporssl.png

|

Click **Save and Exit**. 


Once the registration completes, you can see the cluster in the “Other Registrations” tab and the current state will be ADMITTED.

|

.. image:: ../images/otherregs.png

|

The Customer Edge Node Admin portal will also reflect some changes in its status, although the node still requires some additional configuration.
From the menu on the left click on **Infrastructure/Sites** and observe your Nodes (animal-name). Hint: You may have to hit **Refresh**  in the upper right corner. 

|

.. image:: ../images/provisioning.png

|
|

You should see the CE you just deployed on this list go through several phases of provisioning and you can observe the  **Site Admin State, Health Score, and Software Version and OS version.**
You may also observe the Health score going up and down as services are spun up and restarted. 

.. Note:: This step takes about 10 -15 minutes to complete and will finish up while we start our presentation and lecture. 


The end result should look something like the following screen where the node is green at 100 percent health and has the latest software version. 

.. Important:: Do not move on to Lab 2 until the CE is fully provisioned and **Online**. 

|

.. image:: ../images/prov2.png

|

Sanity Check
-------------
**This is what you just deployed.**

|

.. image:: ../images/lab1fini.png

|

**We hope you enjoyed this lab!**

**End of Lab 1**
