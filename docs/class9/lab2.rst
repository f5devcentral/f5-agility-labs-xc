Lab 2: Managing F5 Distributed Cloud WAF with **Policy Supervisor**
===================================================================

**Policy Supervisor** is an online unified configuration solution for security policies, built with the purposes of managing and converting configuration across multiple F5 Web App Firewall solutions.
It enables operators of F5 WAF technologies to easily convert policy files from *BIG-IP AWAF*, *F5 Distributed Cloud WAF*, and *NGINX NAP* formats. In the process **Policy Supervisor** generates and uses an intermediate
JSON-based common declarative format called CDP (*Common Declarative Policy*) for policy lifecycle management. After a policy is converted to CDP, it can then be deployed to any supported WAF Solution, which is referred to as a *Provider* in **Policy Supervisor** lingo.

Please refer to the Tutorial in the GitHub repo (https://github.com/f5devcentral/ps-convert) for currently supported *Provider* types.

**Policy Supervisor** provides a graphical interface for visual policy creation, editing and management for traditional SecOps personas.

Task 1: Obtain an authentication token for your F5 Distributed Cloud tenant
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A valid F5 Distributed Cloud authentication token before it can be added as a provider.

1- Browse to your Distributed Cloud console at **https://f5-xc-lab-mcn.console.ves.volterra.io/**
and sign in to the **f5-xc-lab-mcn** domain using the ephemeral account credentials, as described
in the introduction section of this lab guide.

+----------------------------------------------+
| .. image:: _static/tenantlogin2.png          |
|    :width: 800px                             |
+----------------------------------------------+

2- Click **Sign In**

+----------------------------------------------+
| .. image:: _static/intro-006.png             |
|    :width: 800px                             |
+----------------------------------------------+

3- Click your profile icon at the top right corner of the page and select **Account Settings**.

+----------------------------------------------+
| .. image:: _static/XCToken.png               |
|    :width: 800px                             |
+----------------------------------------------+

4- Find and click on **Credentials** under the *Personal Management* section on the left side of the page.

+----------------------------------------------+
| .. image:: _static/XCToken2.png              |
|    :width: 800px                             |
+----------------------------------------------+

5- Find and click on **Add Credentials**, fill in the fields as shown in the picture above and click **Generate**

+----------------------------------------------+
| .. image:: _static/XCToken3.png              |
|    :width: 800px                             |
+----------------------------------------------+

6- Click **Copy** and save the token's value to a text file or notepad now. The token is required for the next task.

7- Click **Done**

Task 2: Create a new **Policy Supervisor** *Provider*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1- Browse to the **Policy Supervisor** *Providers* page and login (login instructions can be found in the introduction section of this lab guide).

+----------------------------------------------+
| .. image:: _static/PSProviderList.png        |
|    :width: 800px                             |
+----------------------------------------------+

2- Click **Add provider** 

+----------------------------------------------+
| .. image:: _static/PSXCProvider1.png         |
|    :width: 800px                             |
+----------------------------------------------+

3- Select **Distributed Cloud** for the *Provider Type* and click **+ Add secret**

+----------------------------------------------+
| .. image:: _static/PSXCProvider2.png         |
|    :width: 800px                             |
+----------------------------------------------+

4- Enter a name, paste the value of the Distributed Cloud token obtained in Task 1 above, and click **Create**

+----------------------------------------------+
| .. image:: _static/PSXCProvider3.png         |
|    :width: 800px                             |
+----------------------------------------------+

5- Select this newly created secret and click **Continue**

+----------------------------------------------+
| .. image:: _static/PSXCProvider4.png         |
|    :width: 800px                             |
+----------------------------------------------+

6- Enter a name for this provider (*for example:* **Distributed Cloud**), type or paste the URL for your Distributed Cloud domain/tenant (for the ephemeral credentails automatically created for this lab: **https://f5-xc-lab-mcn.console.ves.volterra.io**), and click **Test Connection**

+----------------------------------------------+
| .. image:: _static/PSXCProvider5.png         |
|    :width: 800px                             |
+----------------------------------------------+

7- Wait for the test to complete. Click **Go to overview** to return to the Providers Overview page.

Task 3: Deploy an existing WAF policy to an existing *F5 Distributed Cloud Load Balancer*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

With a Distribured Cloud Provider configured, **Policy Supervisor** can now deploy WAF policies to any 
pre-existing **HTTP Load Balancer** in the corresponding Distributed Cloud tenant.

.. note:: 
   Creating a  Distributed Cloud *HTTP Load Balancer* is out of scope for this lab and
   the ephemeral accounts that are created in Distributed Clound for students of this lab
   do not have sufficient priviliges/rights to carry out the following steps.
   The steps below are therefore provided here for demonstration purposes only.

The steps to deploy a WAF policy to Distribured Cloud are almost the same as described in *Lab 1* for the BIG-IP WAF.

1- In **Policy Supervisor**, browse to the **Policies** page.

+----------------------------------------------+
| .. image:: _static/PSDeploy1.png             |
|    :width: 800px                             |
+----------------------------------------------+
+----------------------------------------------+
| .. image:: _static/PSDeploy2.png             |
|    :width: 800px                             |
+----------------------------------------------+

2- Locate and click on the **Deploy** button for the policy you wish to deploy.

+----------------------------------------------+
| .. image:: _static/PSXCDeploy3.png           |
|    :width: 800px                             |
+----------------------------------------------+

3- Select the **Distribured Cloud** *Provider* configured in the previous task, enter the required note in the text box, and click **Conversion Summary**.
Notice that you can select multiple *Providers* if you wish to *simultaneously* deploy this WAF policy to different platforms.

+----------------------------------------------+
| .. image:: _static/PSXCDeploy4.png           |
|    :width: 800px                             |
+----------------------------------------------+

4- Wait for the conversion process to complete and click **Save & Continue** and click **Continue Deployment**.

+----------------------------------------------+
| .. image:: _static/PSXCDeploy5.png           |
|    :width: 800px                             |
+----------------------------------------------+

5- Select the Distributed Cloud **Load Balancer** where the policy is to be deployed/attached.
This *HTTP Load Balancer* must be pre-configured and available in the corresponding tenant.

Task 4: Confirm that the WAF policy was deployed as expected
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1- Browse back to your Distributed Cloud tenant and find the *HTTP Load Balancer* you select in the previous task.

2- Confirm that the WAF security policy is attached as expected.
