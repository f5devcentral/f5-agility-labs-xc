Introduction: Accessing Lab Resources
=====================================

Welcome to this F5 Distributed Cloud Lab. The following tasks will guide you through the initial 
access requirements for this multi-part lab.  Lab attendees should have received an invitation 
email to the lab environment. Please check the email address used for course registration and its
associated spam folders to see if the invitation email has been received.  If you have not received
an email, please contact a member of the lab team.
 
The F5 Distributed Cloud Console, where a majority of all lab tasks will be conducted, is a SaaS
based control-plane for services which provides a GUI and API for managing network, security, and
compute services. The F5 Distributed Cloud Console can manage deployable software known as "Customer 
Edge (CE) node configured in "sites" in existing on-premises, private data centers and/or sites 
within AWS, Azure, and GCP public cloud environments. The following labs will demonstrate concepts
and use cases using CE's in the scenarios presented in this lab.

Task 1: Lab Environment
~~~~~~~~~~~~~~~~~~~~~~~

+----------------------------------------------------------------------------------------------+
| The image below represents an overview of the lab environment. F5 Distributed Cloud Services |
|                                                                                              |
| will be configured as a SaaS Edge delivery and security service tier to a publicly hosted web|
|                                                                                              |
| application. The key elements lab attendees will interact with are as follows:               |
|                                                                                              |
| * **F5 Distributed Cloud Console**                                                           |
| * **F5 Distributed Cloud Global Network / Application Delivery Network (ADN)**               |
| * **Publicly hosted application (Public Cloud)**                                             |
+----------------------------------------------------------------------------------------------+
| |intro001|                                                                                   |
+----------------------------------------------------------------------------------------------+

Task 2: F5 Distributed Cloud Console Login
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following will guide you through the initial Lab environment access within the F5 Distributed
Cloud Console.  After joining the course, lab will ask you to monitor your course to insure all 
componets are running (are green).  Once all components are runnning you should receive an email
with an invitation to access a F5 Distributed Cloud Tenant. The email will come from 
**no-reply@volterramails.io**. Access will be accomplised through the OKTA SSO login option.

|intro010|

.. NOTE:: The graphic above shows the running state (all greean) your UDF environment should be in before proceeding to F5 Dsitributed Cloud Console login.
   
The name of the F5 Distributed Cloud tenant that we will be using for this lab is **f5-xc-lab-mcn**
Additionally, the following are key configuration elements for this lab and will be used
throughout the lab tasks that follow.

* F5 Distributed Cloud Console: https://f5-xc-lab-mcn.console.ves.volterra.io/
* Delegated Domain: **lab-mcn.f5demos.com**

+----------------------------------------------------------------------------------------------+
| 1. Once all components of your lab blueprint are running, please log into the F5 Distributed |
|                                                                                              |
|    Cloud Lab Tenant and the OKTA SSO (Single Sign On) option.                                |
|                                                                                              |
|    https://f5-xc-lab-mcn.console.ves.volterra.io/                                            |
|                                                                                              |
| 2. You will be presented with the console login screen. Click "Sign in with Okta" to proceed.|
|                                                                                              |
| |intro011|                                                                                   |
+----------------------------------------------------------------------------------------------+


+----------------------------------------------------------------------------------------------+
| 3. When you first login, accept the Lab tenant EULA. Click the check box and then click      |
|                                                                                              |
|    **Accept and Agree**.                                                                     |
|                                                                                              |
| 4. Select all work domain roles and click **Next** to see various configuration options.     |
|                                                                                              |
|    Roles can be changed any time later if desired.                                           |
|                                                                                              |
| 5. Click the **Advanced** skill level to expose more menu options and then click **Get**     |
|                                                                                              |
|    **Started** to begin. You can change this setting after logging in as well.               |
|                                                                                              |
| 6. Several **Guidance ToolTips** will appear, you can safely close these as they appear.     |
+----------------------------------------------------------------------------------------------+
| |intro002|                                                                                   |
|                                                                                              |
| |intro003|                                                                                   |
|                                                                                              |
| |intro004|                                                                                   |
|                                                                                              |
| |intro005|                                                                                   |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. You can adjust your work domains and skill level (not required) by clicking on the        |
|                                                                                              |
|    **Account** icon in the top right of the screen and then clicking on **Account Settings**.|
|                                                                                              |
| 8. In the resulting window you can observe the **Work domains and skill level** section and  |
|                                                                                              |
|    other administrative functions.                                                           |
|                                                                                              |
| .. note::                                                                                    |
|    *For the purposes of this lab, permissions have been restricted to lab operations.  As a* |
|                                                                                              |
|    *result some menus will be locked and not visible.*                                       |
+----------------------------------------------------------------------------------------------+
| |intro006|                                                                                   |
|                                                                                              |
| |intro007|                                                                                   |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. **Namespaces**, which provide an environment for isolating configured applications or     |
|                                                                                              |
|    enforcing role-based access controls, are leveraged within the F5 Distributed Cloud       |
|                                                                                              |
|    Console.  For the purposes of this lab, each lab attendee has been provided a unique      |
|                                                                                              |
|    **namespace** which you will be defaulted to (in terms of GUI navigation) for all tasks   |
|                                                                                              |
|    performed through the course of this lab.                                                 |
|                                                                                              |
| 10. Click on the **Select Service** in the left-hand navigation. In the resulting fly out    |
|                                                                                              |
|    navigation, click **Web App & API Protection**.                                           |
|                                                                                              |
| 11. In the **Web App & API Protection** configuration screen observe the left navigation     |
|                                                                                              |
|     panel. Under the **Web App & API Protection**, note the **<adjective-animal>** namespace |
|                                                                                              |
|     that you have been assigned. Note the namespace as it will be used throughout the lab    |
|                                                                                              |
|     tasks that follow.                                                                       |
|                                                                                              |
| .. note::                                                                                    |
|    *Administratively, there are other ways to find namespaces. Due to access and permission* |
|                                                                                              |
|    *restrictions for this particular lab, those menus are not available.*                    |
+----------------------------------------------------------------------------------------------+
| |intro008|                                                                                   |
|                                                                                              |
| |intro009|                                                                                   |
+----------------------------------------------------------------------------------------------+

.. |intro001| image:: _static/intro-001.png
   :width: 800px
.. |intro002| image:: _static/intro-002.png
   :width: 800px
.. |intro003| image:: _static/intro-003.png
   :width: 800px
.. |intro004| image:: _static/intro-004.png
   :width: 800px
.. |intro005| image:: _static/intro-005.png
   :width: 800px
.. |intro006| image:: _static/intro-006.png
   :width: 800px
.. |intro007| image:: _static/intro-007.png
   :width: 800px
.. |intro008| image:: _static/intro-008.png
   :width: 800px
.. |intro009| image:: _static/intro-009.png
   :width: 800px
.. |intro010| image:: _static/intro-010.png
   :width: 800px
.. |intro011| image:: _static/intro-011.png
   :width: 800px   