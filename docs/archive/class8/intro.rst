Introduction: Accessing F5 Distributed Cloud Console
====================================================

Welcome to this F5 Distributed Cloud Lab. The following tasks will guide you through the initial 
access requirements for the associated lab environment.  Lab attendees should have received an 
invitation email to the lab environment based on the submitted registration email.  Please check 
email and spam folders if it has not been received.  If you have not received an email, please 
contact a member of the lab team.
 
F5 Distributed Cloud Console, where this lab will be conducted, is a SaaS control-plane for 
services that provides a UI and API for managing network, security, and compute services. The F5
Distributed Cloud Console can manage "sites" in existing on-premises data centers and sites in
AWS, Azure, and GCP cloud environments.


Course/Lab Invitation
~~~~~~~~~~~~~~~~~~~~~

+----------------------------------------------------------------------------------------------+
| Course/Lab Attendees will receive an email similar to the graphic displayed in this section. |
| The email will come from courses@notify.udf.f5.com.                                          |
|                                                                                              |
| As attendees maybe registered for several lab/courses, ensure the corrcetly identified course|
| is selected.  Use either the first or second link position (indicated by arrows) based on    |
| the attendee's F5 UDF (Unified Demo Framework) Account Status.                               |
|                                                                                              |
| # **New UDF Users**                                                                          |
| # **Returning UDF Users going directly to Course**                                           |
|                                                                                              |
| .. note::                                                                                    |
|    *Note The steps for new UDF Users or the steps for resetting UDF User account passwords*  |
|    *are not shown. Please contact a member of the lab team if further assistance is needed.* |
+----------------------------------------------------------------------------------------------+
| |intro001|                                                                                   |
+----------------------------------------------------------------------------------------------+

Accessing UDF (F5 Unified Demo Framework)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+----------------------------------------------------------------------------------------------+
| The following will guide attendees through the initial Lab environment access within F5 UDF. |
| Following the instructions from the Course/Lab invitation above, attendees will be prompted  |
| to login at  https://udf.f5.com                                                              |
|                                                                                              |
| .. note::                                                                                    |
|    *Note The steps for new UDF Users or the steps for resetting UDF User account passwords*  |
|    *are not shown. Please contact a member of the lab team if further assistance is needed.* |
+----------------------------------------------------------------------------------------------+
| |intro002|                                                                                   |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| Attendees will be prompted to enter their UDF account, password and complete MFA as shown.   |
| MFA must be completed by either selecting **Send Push** or **Enter Code**.                   |
|                                                                                              |
| .. note::                                                                                    |
|    *MFA process will very based on the MFA integration selected for the UDF Account. OKTA*   |
|    *Verify is shown.*                                                                        |
+----------------------------------------------------------------------------------------------+
| |intro003|                                                                                   |
|                                                                                              |
| |intro004|                                                                                   |
|                                                                                              |
| |intro005|                                                                                   |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| Attendees will then be presented their scheduled course sessions. Locate the course/lab with |
| the appropriate **Date**, **Time** and **Name** and then click **Launch**.                   |
+----------------------------------------------------------------------------------------------+
| |intro006|                                                                                   |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| Once redirected to the selected Course/Lab, click the **Join** button.                       |
+----------------------------------------------------------------------------------------------+
| |intro007|                                                                                   |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| The Lab environment window will now be displayed.  Click on the **Documentation** tab in the |
| horizontal navigation links.  Locate and observe the state of **Client** system.             |
|                                                                                              |
| In approximately 5-7 minutes the associated **yellow gear** starting icon will change to a   |
| **green arrow** (running) icon and attendees will proceed to the next section of steps.      |
|                                                                                              |
| .. note::                                                                                    |
|    *Your specific lab environment may vary from the graphics shown below. The **Client***    |
|    *will, however, be consistent.*                                                           |
+----------------------------------------------------------------------------------------------+
| |intro008|                                                                                   |
|                                                                                              |
| |intro009|                                                                                   |
+----------------------------------------------------------------------------------------------+

Accessing F5 Distributed Cloud
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+----------------------------------------------------------------------------------------------+
| Following the state change of the **Client System** to a **green arrow** (running) icon,     |
| attendees will receive a second email as shown below.  Click the **Accept invitation**       |
| button.                                                                                      |
|                                                                                              |
| .. note::                                                                                    |
|    *Alternatively, attendees can also access the F5 Distributed Cloud Tenant directly via*   |
|    *https://f5-xc-lab-app.console.ves.volterra.io/*                                          |
+----------------------------------------------------------------------------------------------+
| |intro010|                                                                                   |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| The initial logon prompt will be presented.  Click **Sign on with Okta** to proceed.  SSO    |
| will process and onboarding to the tenant will proceed.                                      |
+----------------------------------------------------------------------------------------------+
| |intro011|                                                                                   |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| Next the **Terms of Service and Privacy Policy** will display, check the box and then click  |
| **Accept and Agree**.                                                                        |
|                                                                                              |
| In the following screen, Select all persona roles and click **Next**. This allows attendees  |
| to see all the various configurations. Personas can be changed anytime later within the      |
| console if desired.                                                                          |
|                                                                                              |
| In the next screen, click **Advanced** to expose more menu options and then **Get Started**  |
| to begin. You can change this setting after logging in as well.                              |
|                                                                                              |
| .. note::                                                                                    |
|    *Several Guidance ToolTips or Notices may appear.  Attendees can safely close these out*  |
|    *in order to begin the lab.*                                                              |
+----------------------------------------------------------------------------------------------+
| |intro012|                                                                                   |
|                                                                                              |
| |intro013|                                                                                   |
|                                                                                              |
| |intro014|                                                                                   |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| Attendees will now be presented the Home page of the F5 Distributed Cloud Console with all   |
| the workspaces, features and services available.                                             |
+----------------------------------------------------------------------------------------------+
| |intro015|                                                                                   |
+----------------------------------------------------------------------------------------------+

Assigned Namespace
~~~~~~~~~~~~~~~~~~
+----------------------------------------------------------------------------------------------+
| Namespaces, which provide an environment for isolating configured applications or enforcing  |
| role-based access controls, are leveraged within the F5 Distributed Cloud Console. For the   |
| purposes of this lab, each lab attendee has been provided a unique namespace for all tasks   |
| performed through the course of this lab.  To determine your assigned namespace, click on the|
| account icon in the top left corner and select **Account Settings**.                         |
|                                                                                              |
| |intro-AccountSettings|                                                                      |
+----------------------------------------------------------------------------------------------+
| On the left hand menu, select **My Namespaces** under Personal Management.                   |
|                                                                                              |
| |intro-MyNamespaces|                                                                         |
+----------------------------------------------------------------------------------------------+
| Under My Namespaces, you should see two namespaces: system and your assigned namespace.      |
|                                                                                              |
| |intro-AssignedNamespace|                                                                    |
|                                                                                              |
| .. note::                                                                                    |
|    *Your assigned namespace should be composed of an adjective-animal.  In the example above*|
|    *the user assigned namespace is ready-skink.*                                             |
+----------------------------------------------------------------------------------------------+
| Save your assigned namespace somewhere convenient.  You will need to provide your assigned   |
| namespace in the following labs.                                                             |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **Beginning of Lab:**  You are now ready to begin the lab, Enjoy! Ask questions as needed.   |
+----------------------------------------------------------------------------------------------+
| |labbgn|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. |intro001| image:: _static/intro-01.png
   :width: 800px
.. |intro002| image:: _static/intro-02.png
   :width: 800px
.. |intro003| image:: _static/intro-03.png
   :width: 800px
.. |intro004| image:: _static/intro-04.png
   :width: 800px
.. |intro005| image:: _static/intro-05.png
   :width: 800px
.. |intro006| image:: _static/intro-06.png
   :width: 800px
.. |intro007| image:: _static/intro-07.png
   :width: 800px
.. |intro008| image:: _static/intro-08.png
   :width: 800px
.. |intro009| image:: _static/intro-09.png
   :width: 800px
.. |intro010| image:: _static/intro-10.png
   :width: 800px
.. |intro011| image:: _static/intro-11.png
   :width: 800px
.. |intro012| image:: _static/intro-12.png
   :width: 800px
.. |intro013| image:: _static/intro-13.png
   :width: 800px
.. |intro014| image:: _static/intro-14.png
   :width: 800px
.. |intro015| image:: _static/intro-15.png
   :width: 800px
.. |intro-AccountSettings| image:: _static/intro-AccountSettings.png
   :width: 800px
.. |intro-MyNamespaces| image:: _static/intro-MyNamespaces.png
   :width: 800px
.. |intro-AssignedNamespace| image:: _static/intro-AssignedNamespace.png
   :width: 800px
.. |labbgn| image:: _static/labbgn.png
   :width: 800px

