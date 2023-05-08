Introduction: Accessing F5 Distributed Cloud Console
====================================================

Welcome to this F5 Distributed Cloud Lab. The following tasks will guide you through the initial 
access requirements for this multi-part lab.  Lab attendees should have received an invitation 
email to the lab environment based on the submitted registration email.  Please check email and
spam folders if it has not been received.  If you have not received an email, please contact a 
member of the lab team.
 
F5 Distributed Cloud Console where this lab will be conducted, is a SaaS control-plane for 
services that provides a UI and API for managing network, security, and compute services. The F5
Distributed Cloud Console can manage "sites" in existing on-premises data centers and sites in
AWS, Azure, and GCP cloud environments.

Task 1: Lab Environment
~~~~~~~~~~~~~~~~~~~~~~~

+----------------------------------------------------------------------------------------------+
| The image below represents an overview of the lab environment. F5 Distributed Cloud Services |
|                                                                                              |
| will be configured as a SaaS Edge delivery and security service tier to a publicly hosted web|
|                                                                                              |
| application. Key elements lab attendees will interact with are as follows:                   |
|                                                                                              |
| * **F5 Distributed Cloud Console**                                                           |
| * **F5 Distributed Cloud Global Network / Application Delivery Network (ADN)**               |
| * **Publicly hosted application (Public Cloud)**                                             |
+----------------------------------------------------------------------------------------------+
| |intro001|                                                                                   |
+----------------------------------------------------------------------------------------------+

Task 2: F5 Distributed Cloud Console Login
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following will guide you through the initial Lab environment access within the 
F5 Distributed Cloud Console.  You should have received an email with an invitation to 
access a F5 Distributed Cloud Tenant. The email will come from **no-reply@volterramails.io**.

The name of the F5 Distributed Cloud tenant that we will be using is **f5-xc-lab-sec**
Additionally, the following are important elements of this lab and will be used throughout the 
lab tasks that follow.

* F5 Distributed Cloud Console: **https://f5-xc-lab-sec.console.ves.volterra.io/**
* Delegated Domain: **lab-sec.f5demos.com**

After following the invitation email's to **Update Password**, proceed to the first step below. 

+----------------------------------------------------------------------------------------------+
| 1. Please log into F5 Distributed Cloud Lab Tenant with your user ID (email) and password.   |
|                                                                                              |
|    **https://f5-xc-lab-sec.console.ves.volterra.io/**                                        |
|                                                                                              |
| 2. When you first login, accept the Lab tenant EULA. Click the check box and the click       |
|                                                                                              |
|    **Accept and Agree**.                                                                     |
|                                                                                              |
| 3. Select all persona roles and click **Next** to see all the various configuration options. |
|                                                                                              |
|    Personas can be changed anytime if desired.                                               |
|                                                                                              |
| 4. Click **Advanced** to expose more menu options and the **Get Started** to begin. You can  |
|                                                                                              |
|    change this setting after logging in as well.                                             |
|                                                                                              |
| 5. Several **Guidance ToolTips** will appear, you can safely close these out.                |
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
| 6. You can adjust your work domains and skill level (not required) by clicking on the        |
|                                                                                              |
|    **Account** icon in the top right of the screen and then clicking on **Account Settings**.|
|                                                                                              |
| 7. In the resulting window you can observe the **Work domains and skill level** section and  |
|                                                                                              |
|    other administrative functions.                                                           |
|                                                                                              |
| .. note::                                                                                    |
|    *For the purposes of this lab, permissions have been restricted to lab operations.  As a* |
|                                                                                              |
|    *some menus will be locked and not visible.*                                              |
+----------------------------------------------------------------------------------------------+
| |intro006|                                                                                   |
|                                                                                              |
| |intro007|                                                                                   |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. Namespaces, which provide an environment for isolating configured applications or         |
|                                                                                              |
|    enforcing role-based access controls, are leveraged within the F5 Distributed Cloud       |
|                                                                                              |
|    Console.  For the purposes of this lab, each lab attendee has been provided a unique      |
|                                                                                              |
|    **namespace** which you will defaulted to (in terms of GUI navigation) for all tasks      |
|                                                                                              |
|    performed through the course of this lab.                                                 |
|                                                                                              |
| 9. Click on the **Select Service** in the left-hand navigation. In the resulting fly out     |
|                                                                                              |
|    navigation, click **Load Balancers**.                                                     |
|                                                                                              |
| 10. In the **Load Balancers** configuration screen observe the URL. In the URI path, locate  |
|                                                                                              |
|     the **<adjective-animal>** namespace that you have been assigned. It will be located in  |
|                                                                                              |
|     the portion of the URI path between */namespaces/* and */sites/* as shown in this        |
|                                                                                              |
|     example **…/namespaces/<namespace>/sites/…**. Note the namespace as it will be used      |
|                                                                                              |
|     throughout the lab tasks that follow.                                                    |
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

+----------------------------------------------------------------------------------------------+
| **Beginning of Lab:**  You are now ready to begin the lab, Enjoy! Ask questions as needed.   |
+----------------------------------------------------------------------------------------------+
| |labbgn|                                                                                     |
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
.. |labbgn| image:: _static/labbgn.png
   :width: 800px
