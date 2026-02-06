Task 2 – Enable F5 Bot Protection on Login and Contact Pages
===========================================================

In this task, you will extend the application with user-facing pages and enable **Bot Defense** using policy-as-code.  
This demonstrates how CI/CD can enforce *behavioral protections*—not just vulnerability protections—without manual security configuration.

You will add new pages using AI-assisted coding, declare bot protection in code, and observe how GitLab automatically deploys the updated controls.

Extend the Application with User-Facing Pages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Open the Module 2 application workspace in VS Code Server.

   Ensure you are working in the ``module2-app`` folder and that the previous pipeline from Module 3 Task 1 completed successfully.

   *What to notice:*
   
   - You are modifying a **live, protected application** that already has WAF and API Discovery enabled.

2. Use the provided pre-canned prompt to generate a login page and contact page.

   Using the **Cline extension**, run the instructor-provided prompt to add:
   - A login page
   - A contact page

   *What happens automatically:*
   
   - Gemini generates new frontend templates and supporting logic.

3. Verify that the required template files were created.

   In the VS Code Explorer, confirm the following files exist:

   ::

      app/templates/login.html
      app/templates/contact.html

   *Why this matters:*
   
   - These pages represent high-risk bot interaction points.
   - The CI/CD pipeline **requires these files** when Bot Defense is enabled.
   - Missing files will cause the pipeline to fail.

Enable Bot Defense Using Policy-as-Code
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

4. Open the ``security-controls.yaml`` file.

   This is the same policy file used to enable WAF and API Discovery.

5. Enable Bot Defense in the security policy.

   Update the file so it looks like this:

   .. code-block:: yaml

      controls:
         waf:
            enabled: true
         api_discovery:
            enabled: true
         bot_advanced:
            enabled: true
         rate_limiting:
            enabled: false

   *What this does:*
   
   - You are declaring that Bot Defense must be enforced on the application and that required user-facing pages must exist.

Commit and Push the Changes
~~~~~~~~~~~~~~~~~~~~~~~~~~~

6. Save your changes and commit them to GitLab.

   Use the Source Control panel in VS Code Server and commit your changes with a message similar to:

   ::

      Commit Module 3 Task2 – Enable Bot Defense

7. Push the commit to GitLab.

   *What happens automatically:*
   
   - GitLab CI/CD detects the changes and starts a new pipeline run.

Observe the CI/CD Pipeline
~~~~~~~~~~~~~~~~~~~~~~~~~~

8. Navigate to the pipeline in GitLab.

   In Firefox, follow this path:

   ::

      GitLab → Projects → appworld2026 / module2-app → Build → Pipelines

9. Open the most recent pipeline run.

   *What to notice as it progresses:*
   
   - The ``policy_gate`` stage validates that Bot Defense is enabled **and** required templates exist.
   - The ``test`` stage runs as before.
   - The ``build`` stage creates a new image version (v1.2) and pushes it to the container registry.
   - The ``deploy`` stage applies updated F5XC configuration.

10. Confirm that all stages complete successfully.

   *What this means:*
   
   - Application image version v1.2 is running in vK8s.
   - Bot Defense is configured on the HTTPS Load Balancer.
   - Login and contact pages are now protected from automated abuse.

Review Bot Defense in F5 Distributed Cloud
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

11. Open the F5 Distributed Cloud console and navigate to your application.

   Locate the HTTPS Load Balancer associated with your namespace.

12. Review Bot Defense configuration and signals.

   *What to notice:*
   
   - Bot Defense is enabled for the application.
   - Login and contact pages are identified as protected endpoints.
   - Bot-related signals will now appear in Security Events as traffic is generated.

Wrap-Up
~~~~~~~

You have successfully:

- Added user-facing pages using AI-assisted coding
- Enabled Bot Defense through policy-as-code
- Triggered automated deployment via CI/CD
- Applied advanced runtime protection without manual configuration

In the next module, you will generate traffic and review Bot Defense and API security signals—continuing the **Code. Secure. Repeat.** workflow.
