Lab 1: Policy Supervisor Overview
=================================

**Policy Supervisor** is an online unified configuration solution for security policies, built with the purposes of managing and converting configuration across multiple F5 Web App Firewall solutions.
It enables operators of F5 WAF technologies to easily convert policy files from *BIG-IP AWAF*, *F5 Distributed Cloud WAF*, and *NGINX NAP* formats. In the process **Policy Supervisor** generates and uses an intermediate
JSON-based common declarative format called CDP (*Common Declarative Policy*) for policy lifecycle management. After a policy is converted to CDP, it can then be deployed to any supported WAF Solution, which is referred to as a *Provider* in **Policy Supervisor** lingo.

Please refer to the Tutorial in the GitHub repo (https://github.com/f5devcentral/ps-convert) for currently supported *Provider* types.

**Policy Supervisor** provides a graphical interface for visual policy creation, editing and management for traditional SecOps personas.

Task 1: Login to Policy Supervisor and create a new provider
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will walk you through connecting **Policy Supervisor** to your *BIG-IP WAF*.

The first step is to create a *Provider*.

A *Provider* is a generic name used by **Policy Supervisor** to indicate an F5 Web App Firewall. The supported *Provider* types are: *F5 Distributed Cloud WAF*, *BIG-IP Advanced WAF* (AWAF), and *NGINX Application Protection* (NAP). Add and connect *providers* in **Policy Supervisor** to enable the deployment of your configuration policies across endpoints and load balancers for complete WAF protection.

When you add a BIG-IP instance as a *provider*, you must first set up an *agent* and associated secret on the private network to enable a secure connection between the BIG-IP instance and **Policy Supervisor**.

- The *agent* must be connected to the same private network where the *provider* is running to ensure a secure connection between **Policy Supervisor** and the *provider*.
- The *agent* machine must also have outbound Internet access for connectivity back to **Policy Supervisor**.
- The **Policy Supervisor** *Agent* is a Linux binary that is first installed on this machine/VM and is registered using a unique token generated in the **Policy Supervisor** UI for your **Policy Supervisor** *workspace* only.
- The *Agent* is used to create *Secrets*, which are stored in your environment only and are never transmitted outside of your network.
- These *secrets* are used to connect to your *BIG-IP AWAF* or *NGINX NAP* instance to execute various policy-related functions within a Docker container environment on that machine/VM.

.. prerequisites::
   *Installation of the* **Policy Supervisor Agent** *requires the following applications on your Linux machine/VM:*
     -Docker
     -wget

+---------------------------------------------------------------------------------------------------------------+
|                                                                                                               |
| 1. Login to https://policysupervisor.io by clicking on *Sign In with Azure AD*                                |
| [insert instructions for student's to retrieve their XC ephemeral login credentials]                          |
|                                                                                                               |
| |lab005|                                                                                                      |
|                                                                                                               |
| 2. On the *Overview > Providers* page, click **Add Provider**. If this is the first provider being added,     |
|    there are two **Add Provider** buttons on the screen.                                                      |
|                                                                                                               |
| |lab001|                                                                                                      |
|                                                                                                               |
| 3. In the *Add Providers* pane that appears, choose the **BIG-IP** option for the *Provider Type*             |
|    and below the *Select Agent* field, click on the **+ Add new agent** link.                                 |
|    The *Add Agent* pane slides out and a token is automatically-generated as a long text string.              |
|                                                                                                               |
| |lab002|                                                                                                      |
|                                                                                                               |
| 4. Copy and paste the value of the **Token** to a text file. *(You will need it later to install the agent.)* |
|                                                                                                               |
| |lab003|                                                                                                      |
|                                                                                                               |
| 6. Within the same *Add Agent* pane, click **agent-install** (step 1) to open the GitLab repository page.     |
|                                                                                                               |
| |lab004|                                                                                                      |
|                                                                                                               |
| 7. On this *gitlab.policysupervisor.io* page, **right-click** on the **agent-installer** file name to         |
| **Copy Link**. *This copied URL is required in the next task... it will look similar to this:*                |
|                                                                                                               |
|    **https ://gitlab.policysupervisor.io/wafps/agent-install/-/package_files/…/download**                     |
|                                                                                                               |
| .. note::                                                                                                     |
|     *The version of the agent-installer file is upgraded from time to time.*                                  |
|                                                                                                               |
+---------------------------------------------------------------------------------------------------------------+

Task 2: Install the Policy Supervisor Agent in your lab environment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Next, we will use the token and URL from task 1 above to install the Agent on your UDF virtual lab environment's *Superjumphost* Linux machine.
Your Linux machine is connected to the BIG-IP's management network and can communicate with Policy Supervisor across the Internet.

+---------------------------------------------------------------------------------------------------------------+
| 1. Go back to https://udf.f5.com and select the **WEB SHELL** access method for the Superjumphost machine.    |
|                                                                                                               |
| |lab006|                                                                                                      |
|                                                                                                               |
| 2. Set your working directory to /tmp with this linux command:                                                |
|    **cd /tmp**                                                                                                |
|                                                                                                               |
| 3. Use the URL copied at step 7 above to download the installer via the command line:                         |
|    **wget [...insert URL here...]**                                                                           |
|                                                                                                               |
| 4. After the download completes, rename the file with this linux command:                                     |
|    **mv download agent-installer**                                                                            |
|                                                                                                               |
+---------------------------------------------------------------------------------------------------------------+


Step-by-step instructions:
In UDF, select the "WEB SHELL" access method for the Superjumphost machine.
cd /tmp
Execute the following wget command on the command line to retrieve the policy supervisor agent software:
wget  https://gitlab.policysupervisor.io/wafps/agent-inst…….
Rename the downloaded package from download to agent-installer by using the following command:
mv download agent-installer
Next, give the installer package execution rights to enable it to run:
chmod +x ./agent-installer
Then, go ahead and run the agent installer by using the following command:
./agent-installer
Paste the token copied above when prompted.
Type "udf" when prompted for the agent name.
Wait for the agent registration to complete successfully.
Type "bigip" when prompted for the secret name.
Type "admin" when prompted for the username.
Type "Canada123!" when prompted for the password.
Press "Enter" when prompted for the ssh key path (we're not using one in this demo).
Press "Enter" when prompted to select an option (choose the default "Finish" option).
Go back to the policysupervisor.io web page and click "Done".
Select the "udf" option for on the dropdown list for "Agent".
The *Secrets* field is then displayed. From the *Secrets* drop-down list, choose the **bigip** secret you created above and click **Continue**.
Click "Continue".
Type "bigip1" for the "Provider Name".
Type "https://10.1.1.6" for the "Provider URL".
Click the "Test Connection" button.
Wait for the tests to complete successfully.
Click the "Add another Provider" button.
Select the "BIG-IP" optino for the provider type.
Select the "udf" option for on the dropdown list for "Agent".
Select the "bigip" option on the dropdown list for "Secret".
Click "Continue".
Type "bigip2" for the "Provider Name".
Type "https://10.1.1.7" for the "Provider URL".
Click the "Test Connection" button.
Wait for the tests to complete successfully.
Click the "Got to overview" link.
Click to select the "bigip1" provider.
Click "Ingest Policies".
Select the discovered policy (i.e., "My_ASM_Rapid_Deployment_Po…").
Click Continue.
Click Next.
Type "Ingest from bigip1" for the quired "commit message".
Click " Save & Ingest Policy".
Wait for the ingestion to complete successfully.
Click "Policies Overview".
Select the policy.
Click "Deploy".
Select the "bigip2" option from the "Provider" dropdown.
Type "Deploy to bigip2" in the commit message text box.
Click the "Conversion Summary" button.
Wait for the Conversion Summary screen to appear.
Click the "Save & Continue" button.
Click the "Continue Deployment" button.
Select the "service" Virtual server from the dropdown list.
Click the "Next button.
Click the "Deploy" button.

+---------------------------------------------------------------------------------------------------------------+
| 4. In the resulting window, enter **<namespace>-pool** in the **Name** field and click **Add Item** under     |
|                                                                                                               |
|    **Origin Servers**                                                                                         |
+---------------------------------------------------------------------------------------------------------------+
| |lab003|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **End of Lab 1:**  This concludes Lab 1.  In this lab you created an origin pool to connect to the            |
|                                                                                                               |
| application, you then created a load balancer and associated the origin pool to the load balancer.  This      |
|                                                                                                               |
| allowed the application to be advertised via the F5 Distributed Cloud Global Network.  The Distributed Cloud  |
|                                                                                                               |
| Console was then used to review telemetry data gathered for the application.  Next an Application Firewall    |
|                                                                                                               |
| policy was created and assigned to protect the application.  Finally a sample attack was run against the      |
|                                                                                                               |
| application and the security event data was reviewed within the Distributed Cloud Console.                    |
|                                                                                                               |
| A brief presentation will be shared prior to the beginning of Lab 2.                                          |
+---------------------------------------------------------------------------------------------------------------+
| |labend|                                                                                                      |
+---------------------------------------------------------------------------------------------------------------+

.. |lab001| image:: image9.png
   :width: 800px
.. |lab002| image:: image17.png
   :width: 800px
.. |lab003| image:: image18.png
   :width: 800px
.. |lab004| image:: image19.png
   :width: 800px
.. |lab005| image:: PSLoginWindow.png
   :width: 800px
