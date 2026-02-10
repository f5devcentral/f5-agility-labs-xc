Task 1 - Deploy F5 AI-generated Application
===========================================

In this task, you will review the pre-created F5 AI-generated application, introduce a security policy using *policy-as-code*, and commit your changes to GitLab.  
This commit intentionally triggers the CI/CD pipeline so you can observe how security controls influence whether an application is deployed.

For the best experience, keep **VS Code Server** and **GitLab (opened using Firefox)** visible side by side.

Access the GitLab Repository
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Log in to GitLab Community Edition using Firefox.

   If you are not already logged in:

   - From your deployment, locate the **Jump Host** tile and click **Access**
   - Click **FIREFOX**

   |module2-firefox-access|

   - Click the GitLab bookmark in Firefox

   When prompted, enter the following credentials:

   - **Username:** student
   - **Password:** @ppW0rld2026!

   |module2-gitlab-login|

2. Open the Module 2 project.

   - In the left navigation menu, click **Projects**
   - Select **appworld2026 / module2-app**

   |module2-gitlab-student-dashboard|

   |module2-gitlab-student-project-1|

   *What you’re seeing:*  
   This repository contains the AI-generated application source code **and** the CI/CD pipeline definitions used throughout Module 2.

   |module2-gitlab-student-project-2|

Open the Module 2 Workspace in VS Code
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Open the Module 2 workspace folder in VS Code Server.

   - In VS Code, click **File** → **Open Folder**

   |module2-open-module2-workspace-1|

   - Select the folder named ``module2-app``

   |module2-open-module2-workspace-2|

   - Close any open code assistant or AI popups.

   |close-vscode-agent-more|

   *What you’re seeing:*  
   This local workspace mirrors the GitLab repository. Any changes you make here can be committed and pushed to trigger the pipeline.

Create the Security Policy File
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

4. Create a new file named ``security-controls.yaml`` in the Module 2 workspace.

   This file represents **policy-as-code**.  
   Without it, the CI/CD pipeline will fail during the ``policy_gate`` stage.

   *Why this matters:*  
   This is the first enforcement point in the DevSecOps workflow. If an application does not meet minimum security requirements, it will not be deployed.

   - Click the **New File** (+) icon in the Explorer panel

   |module2-vscode-cretate-security-control-1|

   - Name the file ``security-controls.yaml``

   |module2-vscode-cretate-security-control-2|

5. Add the initial security policy.

   Copy and paste the following content into ``security-controls.yaml``:

   .. code-block:: yaml

      controls:
         waf:
            enabled: false
         api_discovery:
            enabled: false
         bot_advanced:
            enabled: false
         rate_limiting:
            enabled: false

   |module2-vscode-cretate-security-control-3|

   *What this does:*  
   You are explicitly declaring which runtime security controls should be enabled.  
   At this point, **everything is disabled on purpose**.

Commit and Trigger the Pipeline (First Run)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

6. Commit and push the new policy file to GitLab.

   - Click the **Source Control** icon in VS Code

   |module2-vscode-cretate-security-control-4-source-control|

   - Click the checkmark icon to commit
   - Use the commit message: **Commit Module 2 Task1 Run 1**

   |module2-vscode-cretate-security-control-4-commit|

   If prompted for credentials:

   - **Username:** student
   - **Password:** glpat-U7a042D1cs3JdOgTuRKvD286MQp1OjQH.01.0w14lnkqb

   |module2-vscode-cretate-security-control-git-username|

   .. note::
      This password is a GitLab Personal Access Token.  
      VS Code Server will cache it so you won’t need to re-enter it later.

      

   - If a warning appears, click **Always**

   - If a warning appears about staged changes, click **Always** and then sync again.

   |module2-vscode-cretate-security-control-4-commit-warning|
   
   - Click **Sync Changes**
   
   |module2-vscode-cretate-security-control-4-sync|

   - If a warning appears about pull and push commits, click **OK**.

   |module2-vscode-cretate-security-control-4-sync-warning|

Observe the Pipeline Failure
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Watch the CI/CD pipeline start in GitLab.

   Navigate to:

   ::

      GitLab → Projects → appworld2026 / module2-app → Build → Pipelines

   The pipeline includes the following stages:

   - ``policy_gate`` – Validates ``security-controls.yaml``
   - ``test`` – Runs automated SAST checks
   - ``build`` – Builds and pushes the container image
   - ``deploy`` – Deploys infrastructure and security controls using Terraform

2. Observe the pipeline failure.

   The pipeline will fail at the ``policy_gate`` stage.

   |module2-gitlab-pipeline-1-failed|

   Click **Failed** to view details

   |module2-gitlab-pipeline-1-failed-details|

   Open the **policy_gate** job. Double-click to view logs.

   |module2-gitlab-pipeline-1-failed-details-job|

   *What happened:*  
   The pipeline enforces a minimum requirement: **WAF must be enabled**.  
   Since it was set to ``false``, deployment was blocked.

   This is intentional—and your first real DevSecOps enforcement moment.

Fix the Policy and Re-run the Pipeline
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Update the security policy to enable WAF.

   Modify ``security-controls.yaml`` so it looks like this:

   .. code-block:: yaml

      controls:
         waf:
            enabled: true
         api_discovery:
            enabled: false
         bot_advanced:
            enabled: false
         rate_limiting:
            enabled: false

2. Save the file, commit, and push again.

   - Commit message: **Commit Module 2 Task1 Run 2**
   - Push the changes to GitLab
   - Go back to the pipeline view in GitLab. Notice a new pipeline will automatically start.

   |module2-gitlab-pipeline-2-running|

   This time, the pipeline should pass the ``policy_gate`` stage and proceed to build and deploy the application with the WAF enabled.
   
   |module2-gitlab-pipeline-2-running-details|

3. Confirm the pipeline succeeds.

   As the pipeline progresses, all stages should complete successfully.

   |module2-gitlab-pipeline-2-running-details-success|

   *What this means:*  
    - The application image was built and pushed
    - A vK8s workload was provisioned
    - An HTTPS Load Balancer and WAF were deployed
    - Runtime security is now active

Access the Application
~~~~~~~~~~~~~~~~~~~~~~

12. Open the deployed application.

    In a new browser tab, navigate to:

    ::

       https://<NAMESPACE>-lb.lab-app.f5demos.com

    |module2-app-home-page|

    You should see the F5 AI-generated application running behind the F5 Distributed Cloud WAF.

Wrap-Up
~~~~~~~

You have successfully:

- Introduced security policy using code
- Triggered and observed CI/CD enforcement
- Fixed a failed deployment by meeting security requirements
- Deployed a protected application without manual infrastructure changes

In the next task, you will explore the deployed F5XC configuration and intentionally generate security events to see these controls in action.


.. |module2-open-module2-workspace-1| image:: ../images/module2/module2-open-module2-workspace-1.png
   :width: 400px
.. |module2-open-module2-workspace-2| image:: ../images/module2/module2-open-module2-workspace-2.png
   :width: 400px
.. |close-vscode-agent-more| image:: ../images/module2/close-vscode-agent-more.png
   :width: 200px
.. |module2-firefox-access| image:: ../images/module2/module2-firefox-access.png
   :width: 400px
.. |module2-gitlab-login| image:: ../images/module2/module2-gitlab-login.png
   :width: 400px
.. |module2-gitlab-student-dashboard| image:: ../images/module2/module2-gitlab-student-dashboard.png
   :width: 800px
.. |module2-gitlab-student-project-1| image:: ../images/module2/module2-gitlab-student-project-1.png
   :width: 800px
.. |module2-gitlab-student-project-2| image:: ../images/module2/module2-gitlab-student-project-2.png
   :width: 800px
.. |module2-vscode-cretate-security-control-1| image:: ../images/module2/module2-vscode-cretate-security-control-1.png
   :width: 400px
.. |module2-vscode-cretate-security-control-2| image:: ../images/module2/module2-vscode-cretate-security-control-2.png
   :width: 400px
.. |module2-vscode-cretate-security-control-3| image:: ../images/module2/module2-vscode-cretate-security-control-3.png
   :width: 400px
.. |module2-vscode-cretate-security-control-4-source-control| image:: ../images/module2/module2-vscode-cretate-security-control-4-source-control.png
   :width: 200px
.. |module2-vscode-cretate-security-control-git-username| image:: ../images/module2/module2-vscode-cretate-security-control-git-username.png
   :width: 400px
.. |module2-vscode-cretate-security-control-4-commit| image:: ../images/module2/module2-vscode-cretate-security-control-4-commit.png
   :width: 400px
.. |module2-vscode-cretate-security-control-4-commit-warning| image:: ../images/module2/module2-vscode-cretate-security-control-4-commit-warning.png
   :width: 400px
.. |module2-vscode-cretate-security-control-4-sync| image:: ../images/module2/module2-vscode-cretate-security-control-4-sync.png
   :width: 400px
.. |module2-vscode-cretate-security-control-4-sync-warning| image:: ../images/module2/module2-vscode-cretate-security-control-4-sync-warning.png
   :width: 400px
.. |module2-app-home-page| image:: ../images/module2/module2-app-home-page.png
   :width: 800px
.. |module2-gitlab-pipeline-1-failed| image:: ../images/module2/module2-gitlab-pipeline-1-failed.png
   :width: 800px
.. |module2-gitlab-pipeline-1-failed-details| image:: ../images/module2/module2-gitlab-pipeline-1-failed-details.png
   :width: 800px
.. |module2-gitlab-pipeline-1-failed-details-job| image:: ../images/module2/module2-gitlab-pipeline-1-failed-details-job.png
   :width: 800px
.. |module2-gitlab-pipeline-2-running| image:: ../images/module2/module2-gitlab-pipeline-2-running.png
   :width: 800px
.. |module2-gitlab-pipeline-2-running-details| image:: ../images/module2/module2-gitlab-pipeline-2-running-details.png
   :width: 800px
.. |module2-gitlab-pipeline-2-running-details-success| image:: ../images/module2/module2-gitlab-pipeline-2-running-details-success .png
   :width: 800px
