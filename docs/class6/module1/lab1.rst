Lab 1: Building an XC Node (CE)
==================================

**Objective:**

* Get familiar with the UDF Lab Environment. 

* Review the Customer Edge (CE) Node to within the UDF Data Center.

* Explore and become familiar with the Distributed Cloud Console.

**Narrative:** 

After consulting with your trusty F5 Solutions Engineer, you decide to setup F5 Distributed Cloud, Network Connect. This will allow for privately routed network connectivity between two disparate networks. 
You also found out that you can use the F5 Distributed Cloud, Enhanced Firewall to provide network security between Sites. 
We already did a Customer Edge (CE) Node deployment in the ACME AWS VPC, which only took a few moments. 

Now, Lab 1 starts right after you have downloaded the CE Node OVA and deployed into your Data Center's local hypervisor (VMWARE, KVM or Promox etc.). For the purposes of accelerating the lab, the UDF CE node has been deployed and we will be reviewing it as a part of this lab.

.. NOTE:: Your Data Center environment in these labs is the F5 UDF platform, which uses KVM as it's underlying virtualization technology. The OVA has already been imported for you. We also have hardware and container deployment options for Production XC Nodes. 

|lab001|

**Prerequisite**
------------------

.. NOTE:: You should aleady be logged into your lab's Ditributed CLoud Tenant.  If not, review the course introduction to review the SSO process. The steps that follow will be executed in the tenant.

.. warning:: If you are expirencing SSOing into the Distributed Cloud Tenant, please alert one of the Lab Assistants. 

**Reviewing the Customer Edge (CE) Node**
-----------------------------------------

As noted previously, your Customer Edge (CE) node in the UDF environment has already been provisioned for you. In the steps that follow we will review its various configurations and their purpose.

Navigate to the **Home** screen and click on the **Multi-Cloud Network Connect** workspace. 

|lab002|
 
Entering the **Multi-Cloud Network Connect** workspace, you wil be presented with the overview dashbaord.  This view provides general overview to all Customer Edge (CE) deployments.

There are various aspects of the Dashboard which you can review.  We will be coming back to this screen frequently so several of the key aspects will be reviewed throughout the course of the lab.

|lab003|

Using the left-hand naigation,  find and expand the **Manage** section, click on **Site Management** and then click on **Secure Mesh Sites v2**

|lab004|

There will be several SMSv2 sites deployed in the list. Your CE will be names following the **<adjective-animal>** pnuemonic indentified for your in the introduction. Use the **Search** to filter the list then click on the hyperlinked site.

|lab005|



.. raw:: html <span style="color:red">THIS LAB GUIDE iS CURRENTLY BEING EDITTED FROM THIS POINT FORWARD.  MORE UPDATES SHOULD OCCUR 2/22</span>



**Setting up the Customer Edge**
----------------------------------

**CLI Site Setup**
----------------------
 
In your browser, you should have a tab open to the UDF course. Under Systems -> Client, click on **Access >> Web Shell**

|lab011|

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

|lab012|

At the **>>>** type the word **configure** and then enter. 

|lab013|

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

|lab014|

We will now go accept the Customer Edge registration in Distributed Cloud console. Proceed to **Registering the Customer Edge**.

**Registering the Customer Edge**
----------------------------------

Go back to the Distributed Cloud console.  If the session timed out, you will need to log back into the console using the following URL or refreshing your browser:

https://f5-xc-lab-mcn.console.ves.volterra.io/

From the **Select service** menu, click on **Multi-Cloud Network Connect**.

On the side menu go down to **Manage >> Site Management >> Registrations.**

|lab015|

The Customer Edge node you configured from the previous step should appear on this list, if not give it a couple moments and refresh the screen by clicking the **Refresh button** at the top right-hand corner.  

|lab016|

.. Tip:: This process can take a few minutes for the node to register with Distributed Cloud. 

Once the Node appears in the Registration list, accept the registration by clicking on the blue check mark.

**Click the blue check mark** to accept the registration. 

.. Note::  If you DO NOT see a blue check mark, it's likely your browser width is NOT wide enough.  Simply increase the width of the browser and you should see the blue checkmark to approve the registration.

Once you have clicked the checkmark, the console will bring up the Registration Acceptance menu which shows all the settings of the Customer Edge node.  Note the parameters you’ve entered from the previous exercise are populated into the appropriate fields. 

.. Important:: Look at the Cluster Size parameter and notice this is set to 1.  In this lab, we will only deploy a single-node-cluster and thus leave this setting as 1.  In a production environment, the best practice is to deploy a 3-node-cluster minimum.  In that case, the Cluster Size parameter would be set to 3 so an appropriately sized cluster can be formed.

**Leave the cluster size set to 1**

|lab017|

Scroll down to Site to Site Tunnel Type and click on the drop down arrow

|lab018|

This setting determines the VPN connectivity protocols used between the Customer Edge and the Regional Edges. The XC Node will automatically bring up redundant tunnels to two different RE's. 
These tunnels are self-healing and can fallback when using the configuration setting of IPSEC and SSL.
Select **IPSEC and SSL** from the list.  

|lab019|

Click **Save and Exit**. 

Once the registration completes, you can see the cluster in the “Other Registrations” tab and the current state will be ADMITTED.

|lab020|

The Customer Edge Node Admin portal will also reflect some changes in its status, although the node still requires some additional configuration.
From the menu on the left click on **Infrastructure/Sites** and observe your Nodes (animal-name). Hint: You may have to hit **Refresh**  in the upper right corner. 

|lab021|

You should see the CE you just deployed on this list go through several phases of provisioning and you can observe the  **Site Admin State, Health Score, and Software Version and OS version.**
You may also observe the Health score going up and down as services are spun up and restarted. 

.. Note:: This step takes about 10 -15 minutes to complete and will finish up while we start our presentation and lecture. 

The end result should look something like the following screen where the node is green at 100 percent health and has the latest software version. 

.. Important:: Do not move on to Lab 2 until the CE is fully provisioned and **Online**. 

|lab022|

Sanity Check
-------------
**This is what you just deployed.**

|lab023|

**We hope you enjoyed this lab!**

**End of Lab 1**

.. |lab001| image:: ../images/lab1intro.png
   :width: 800px
.. |lab002| image:: ../images/mcn-home.png
   :width: 800px
.. |lab003| image:: ../images/mcn-dash1.png 
   :width: 800px
.. |lab004| image:: ../images/mcn-dash2.png 
   :width: 800px
.. |lab005| image:: ../images/mcn-dash3.png 
   :width: 800px
.. |lab006| image:: ../images/findnamespace.png 
   :width: 800px
.. |lab007| image:: ../images/namespace1replacement.png
   :width: 800px
.. |lab008| image:: ../images/sitetoke.png 
   :width: 800px
.. |lab009| image:: ../images/sitetokensscreen.png
   :width: 800px
.. |lab010| image:: ../images/copytoke.png 
   :width: 800px
.. |lab011| image:: ../images/cli-01a.png
   :width: 800px
.. |lab012| image:: ../images/cli-02a.png 
   :width: 800px
.. |lab013| image:: ../images/cli-04.png 
   :width: 800px
.. |lab014| image:: ../images/cli-05.png 
   :width: 800px
.. |lab015| image:: ../images/sitemgt.png 
   :width: 800px
.. |lab016| image:: ../images/sitereg.png
   :width: 800px
.. |lab017| image:: ../images/clustersize.png
   :width: 800px
.. |lab018| image:: ../images/s2sarrow.png
   :width: 800px
.. |lab019| image:: ../images/iporssl.png
   :width: 800px
.. |lab020| image:: ../images/otherregs.png
   :width: 800px
.. |lab021| image:: ../images/provisioning.png
   :width: 800px
.. |lab022| image:: ../images/prov2.png
   :width: 800px
.. |lab023| image:: ../images/lab1fini.png
   :width: 800px

