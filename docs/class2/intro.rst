Introduction to the Lab
====================================================

**Narrative:**

You are a **Network Security Engineer** at **ACME Corp** tasked with rapidly improving the security of the company's public-facing applications and APIs. ACME’s Application Team manages a mix of traditional web apps, modern microservices, and third-party SaaS integrations. Recently, a routine **web application vulnerability scan** revealed several serious issues in one of ACME’s customer-facing web applications – including multiple OWASP Top 10 findings. At the same time, ACME’s Risk and Compliance organization has mandated that a **Web Application Firewall (WAF)** be deployed across **all public-facing applications and APIs** within 30 days to address the rising threat landscape. This combination of a looming deadline and newly discovered vulnerabilities has put you in the hot seat to strengthen ACME’s security posture quickly and comprehensively.

Initially, you consider the traditional approach of deploying WAF appliances or cloud-native WAF services separately in each environment (on-premises data center, AWS, Azure, GCP). However, managing multiple WAF technologies in parallel would be time-consuming and complex, especially under a tight deadline. Fortunately, you recall seeing a post on LinkedIn about an F5 SaaS-based solution aimed at simplifying multi‑cloud application security. Given F5’s decades-long reputation as an application security leader, you decide to evaluate the **F5 Distributed Cloud Web Application and API Protection (WAAP)** platform – which brings unified **WAF, bot protection, and API security** as a service. This brings you to the lab environment you’re in today, ready to get first-hand experience with how F5’s Distributed Cloud services make WAAP **simple, quick to deploy, and effective.**

In this lab, you will not only deploy **WAF** and other security controls to protect a vulnerable web application, but also leverage F5’s **Web App Scanning** service to continuously assess the application’s security. By introducing a deliberately vulnerable application (the ACME Corp web app) and scanning it, you’ll identify its weaknesses upfront. You will then implement **layered security controls** using F5 Distributed Cloud – including a tailored WAF policy, **bot defense** against automated attacks, and **malicious user detection** to isolate bad actors. Once these protections are in place (Labs 1–3), you will run a follow-up **web application scan** (Lab 4) to see how the security posture has improved, with far fewer vulnerabilities now exposed. Finally, you’ll explore the platform’s **AI-assisted analytics** (Lab 5) to quickly summarize security events and verify that the implemented protections are actively defending the application. This end-to-end approach demonstrates how ACME Corp can **address known vulnerabilities and threats, verify the effectiveness of defenses through continuous scanning, and maintain ongoing visibility** into their application security – all through a unified F5 Distributed Cloud solution.

|intro000a|


Task 1: Lab Environment
~~~~~~~~~~~~~~~~~~~~~~~

The image below represents an overview of the lab environment. F5 Distributed
Cloud Services will be configured as a SaaS Edge delivery and security service
tier to a publicly hosted web application. The first application you will be protecting 
is deployed in Azure. The key elements you will interact with are as follows:

* F5 Distributed Cloud Console
* F5 Distributed Cloud Global Network / Application Delivery Network (ADN)
* Publicly hosted application (Azure Public Cloud)

|intro000b|



Task 2: Accessing F5 Distributed Cloud Console
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following tasks will guide you through the initial access requirements for the associated lab environment.  
Lab attendees should have received an invitation email to the lab environment based on the submitted 
registration email.  Please check email and spam folders if it has not been received.  If you have 
not received an email, please contact a member of the lab team.
 
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
| As attendees maybe registered for several lab/courses, ensure the correctly identified course|
| is selected.  Use either the first or second link position (indicated by arrows) based on    |
| the attendee's F5 UDF (Unified Demo Framework) Account Status.                               |
|                                                                                              |
| #. **New UDF Users**                                                                         |
| #. **Returning UDF Users going directly to Course**                                          |
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
|    *The steps for new UDF Users or the steps for resetting UDF User account passwords are*   |
|    *not shown. Please contact a member of the lab team if further assistance is needed.*     |
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
| attendees will receive a second email.  This email will come from no-reply@cloud.f5.com.     |
| Click the **Accept invitation** with in the email.                                           |
|                                                                                              |
| .. note::                                                                                    |
|    *This link should be accessed in the same browser session as UDF was accessed for*        |
|    *seamless experience.*                                                                    |
|                                                                                              |
| .. warning::                                                                                 |
|    *Attendess should not attempt access to F5 Distributed Cloud tenant prior to receiving*   |
|    *email. Lab permissions may need to be re-applied.*                                       |
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

+----------------------------------------------------------------------------------------------+
| **Beginning of Lab:**  You are now ready to begin the lab, Enjoy! Ask questions as needed.   |
+----------------------------------------------------------------------------------------------+
| |labbgn|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. |intro000a| image:: _static/intro-000a.png
   :width: 800px
.. |intro000b| image:: _static/intro-000b.png
   :width: 800px
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
.. |labbgn| image:: _static/labbgn.png
   :width: 800px

