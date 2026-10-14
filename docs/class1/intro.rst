Introduction: Accessing F5 Distributed Cloud Console
=======================================================

Welcome to this F5 Distributed Cloud Lab. The following tasks will guide you through the initial
access requirements for the associated lab environment. Lab attendees should have received an
invitation email to the lab environment based on the submitted registration email. Please check
email and spam folders if it has not been received. If you have not received an email, please
contact a member of the lab team.

F5 Distributed Cloud Console, where this lab will be conducted, is a SaaS control-plane for
services that provides a UI and API for managing network, security, and compute services. The F5
Distributed Cloud Console can manage "sites" in existing on-premises data centers and sites in
AWS, Azure, and GCP cloud environments.

Course/Lab Invitation
~~~~~~~~~~~~~~~~~~~~~

Course/Lab Attendees will receive an email similar to the graphic displayed in this section.
The email will come from courses@notify.udf.f5.com.

As attendees may be registered for several labs/courses, ensure the correctly identified course
is selected. Use either the first or second link position (indicated by arrows) based on
the attendee's F5 UDF (Unified Demo Framework) Account Status.

#. **New UDF Users**
#. **Returning UDF Users going directly to Course**

|intro001|

Accessing UDF (F5 Unified Demo Framework)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following will guide attendees through the initial Lab environment access within F5 UDF.
Following the instructions from the Course/Lab invitation above, attendees will be prompted
to login at https://udf.f5.com. Click **Invited Users**.

|intro002a|

.. note::
   *The steps for new UDF Users or the steps for resetting UDF User account passwords are*
   *not shown. Please contact a member of the lab team if further assistance is needed.*

Attendees are redirected to **F5 Customer Identity**. Enter your registration email address
and click **Continue**, then enter your password and continue to sign in. If you are already signed
in to F5 Customer Identity, this step is skipped.

|intro002|

|intro003|

.. note::
   *Depending on your account, you may be prompted to set up or complete multi-factor*
   *authentication (MFA). Follow the on-screen instructions.*

If you used the course link from the invitation email, you are taken directly to the course
**Lobby**. Otherwise, attendees will be presented their scheduled course sessions on the UDF
dashboard. Locate the course/lab with the appropriate **Date**, **Time** and **Name** and then
click **LAUNCH**.

|intro004|

From the course **Lobby**, click the **Join** button.

|intro005|

The Lab environment window will now be displayed on the **Documentation** tab. Click on the
**Deployment** tab in the horizontal navigation links. Locate and observe the state of the
**Client** system.

|intro006|

In approximately 5-7 minutes the associated **yellow gear** starting icon will change to a
**green arrow** (running) icon and attendees will proceed to the next section of steps.

.. note::
   *Your specific lab environment may vary from the graphics shown below. The* **Client**
   *will, however, be consistent.*

|intro007|

|intro008|

Accessing F5 Distributed Cloud
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Following the state change of the **Client System** to a **green arrow** (running) icon,
attendees will receive a second email. This email will come from no-reply@cloud.f5.com.
Click **Accept invitation** within the email.

.. note::
   *This link should be accessed in the same browser session as UDF was accessed for a*
   *seamless experience.*

.. warning::
   *Attendees should not attempt access to the F5 Distributed Cloud tenant prior to receiving*
   *the email. Lab permissions may need to be re-applied.*

|intro010|

The tenant login page will be presented. Under **If you are a user in this tenant:**, click
**Sign In with oidc** (do not use **Log In as Tenant Owner**).

|intro011|

Since you are already signed in to UDF with **F5 Customer Identity**, single sign-on (SSO)
should log you in to the tenant automatically. If you are prompted to sign in, enter the same
email address and password used for UDF.

The first time you log in, the **Terms of Service and Privacy Policy** will display; check the
box and then click **Accept and Agree**.

.. note::
   *This screen is only shown on your first login. Guidance tooltips or notices may also*
   *appear; attendees can safely close them in order to begin the lab.*

|intro014|

On first login, a **What's New in F5 Distributed Cloud** window and an announcement banner
at the top of the page may be displayed. Click **Close** on the What's New window and
**Remind Me Later** (or the **X**) on the banner.

|intro016|

Attendees will now be presented the **Home** page of the F5 Distributed Cloud Console
(**Welcome to Distributed Cloud**) with the workspaces, features and services available.

|intro015|

Optionally, you can review your account preferences by clicking the **Account** icon in the
top right of the screen and then clicking **Account Settings**. This opens
**Administration > Personal Management > My Account**, where you can:

* Click **Manage Notification Preferences** to choose which events you are notified about.
* Under **Advanced Configuration Fields Visibility**, click **Enable Auto-Expand Advanced**
  to automatically expand all advanced configuration fields when creating a new object
  (for example, an HTTP Load Balancer).

Neither setting is required for this lab; the lab steps indicate when a section needs to
be expanded.

.. note::
   *For the purposes of this lab, permissions have been restricted to lab operations, so*
   *some menus will be locked or not visible.*

|intro050|

|intro051|

Namespaces, which provide an environment for isolating configured applications or
enforcing role-based access controls, are leveraged within the F5 Distributed Cloud
Console. For the purposes of this lab, each lab attendee is assigned a unique
**namespace** when the lab is launched. This namespace will be used for all tasks
performed through the course of this lab.

From the **Home** page, click the **Web App & API Protection** workspace tile. If you are
already in another workspace, click **Select Workspace** at the top of the left-hand
navigation and choose **Web App & API Protection**.

The workspace opens in a shared namespace (for example *api-service-discovery*), which is
**not** your lab namespace. The selected namespace is shown at the top of the left-hand
navigation, under the workspace name (labelled **Namespace**). Click it to open the namespace
selector; under **Application Namespaces**, select your assigned **<adjective-animal>**
namespace.

.. note::
   *Use the namespace with the* **<adjective-animal>** *name format, not* **system** *or*
   **api-service-discovery**.

|intro053|

Your namespace is now displayed at the top of the left-hand navigation. It also appears in
the browser URL, between */namespaces/* and the next path segment, for example
**…/namespaces/<your-namespace>/overview/…**. Note this namespace as it will be used
throughout the lab tasks that follow.

.. note::
   *Administratively, there are other ways to find namespaces. Due to access and permission*
   *restrictions for this particular lab, those menus are not available.*

|intro052|

Preparation
-----------

Before starting the course, update your namespace to dynamically update the guide.

.. note:: You may have had a namespace from a previous lab, please update it with the new one.
.. warning:: Guide pages might need to be refreshed to get updated namespace to render.

.. raw:: html

   <div style="margin: 1em 0; padding: 1em; border: 0px solid #ccc;">
     <label for="namespaceInput">Enter your namespace:</label>
     <input id="namespaceInput" type="text" placeholder="e.g. rascally-rabbit" />
     <button onclick="setNamespace()">Save</button>
   </div>

   <p><strong>Current namespace:</strong> <span id="currentNamespace">&lt;namespace&gt;</span></p>

.. note:: Guide pages might need to be refreshed to get updated namespace to render.

**Beginning of Lab:**  You are now ready to begin the lab, Enjoy! Ask questions as needed.

|labbgn|

.. |intro001| image:: _static/intro-01.png
   :width: 800px
.. |intro002a| image:: _static/2026-intro-udf-landing.png
   :width: 800px
.. |intro002| image:: _static/2026-intro-udf-login.png
   :width: 800px
.. |intro003| image:: _static/2026-intro-udf-password.png
   :width: 800px
.. |intro004| image:: _static/2026-intro-udf-dashboard.png
   :width: 800px
.. |intro005| image:: _static/2026-intro-udf-lobby.png
   :width: 800px
.. |intro006| image:: _static/2026-intro-udf-documentation.png
   :width: 800px
.. |intro007| image:: _static/2026-intro-udf-deployment-starting.png
   :width: 800px
.. |intro008| image:: _static/2026-intro-udf-deployment-running.png
   :width: 800px
.. |intro010| image:: _static/intro-10.png
   :width: 800px
.. |intro011| image:: _static/2026-intro-xc-login.png
   :width: 800px
.. |intro014| image:: _static/2026-intro-xc-terms.png
   :width: 800px
.. |intro015| image:: _static/2026-intro-xc-home.png
   :width: 800px
.. |intro050| image:: _static/2026-intro-xc-account-menu.png
   :width: 800px
.. |intro051| image:: _static/2026-intro-xc-my-account.png
   :width: 800px
.. |intro052| image:: _static/2026-intro-xc-namespace.png
   :width: 800px
.. |intro016| image:: _static/2026-intro-xc-whats-new.png
   :width: 800px
.. |intro053| image:: _static/2026-intro-xc-namespace-select.png
   :width: 800px
.. |labbgn| image:: _static/labbgn.png
   :width: 800px

