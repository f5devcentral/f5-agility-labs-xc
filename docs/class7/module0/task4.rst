Task 4 – Configure VS Code Server
================================

In this task, you will access the browser-based VS Code Server and configure the **Cline extension** to use Gemini.  
This step prepares your development environment for AI-assisted coding used throughout the rest of the lab.

The goal here is simple: **make sure your coding environment works before you start coding**.

Visual Studio Code Server Access
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Access the VS Code Server from the Jump Host.

   In your UDF deployment, locate the **Jump Host** tile and click **Access**.

   |code-server-access-1|

2. Launch the VS Code Server.

   Click **VSCODE** to open the VS Code Server interface.

   |code-server-access|

3. Authenticate to VS Code Server.

   A new browser tab will open with the VS Code Server password prompt.  
   Enter the following password:

   - **Password:** @ppW0rld2026!

   |code-server-access-password|

4. Confirm access to the VS Code Server workspace.

   After authentication, you should see the VS Code Server landing page.

   - The **Explorer** (left panel) should show the workspace **MODULE1-SANDBOX**
   - The **Copilot / chat panel** may be open on the right—this can be safely closed

   |code-server-landing|

   .. note::
      *You may see browser pop-ups requesting permission to access text or images on the clipboard.*  
      *Click **Allow**—this is required for copy/paste and image-based prompts.*

   |chrome-pop-ups|

   *What to notice:*
   - VS Code runs entirely in your browser.
   - A workspace is already open and ready to use.
   - You did not need to install anything locally.

   *What happened behind the scenes:*
   - VS Code Server is running on the Jump Host.
   - Your workspace is pre-mounted and persistent.
   - Extensions and settings are preloaded for the lab.

Configure VS Code Cline Extension
---------------------------------

The Cline extension enables AI-assisted coding using Gemini.  
In this step, you will connect Cline to the preconfigured Gemini backend.

5. Open the Cline extension.

   In VS Code, locate the **Cline** icon on the left activity bar and click it.

   |cline-icon|

6. Choose to bring your own API key.

   In the Cline extension setup screen, select **Bring my own API key**, then click **Continue**.

   |cline-config-1|

7. Configure the Gemini provider.

   In the **Configure the provider** screen, enter the following values:

   - **API Provider:** GCP Vertex AI
   - **Google Cloud Project ID:** f5-gcs-4261-sales-appworld2026
   - **Google Cloud Region:** global
   - **Model:** ``gemini-3-flash-preview``

   Click **Continue** to proceed.

   |cline-config-2|

8. Close the Cline configuration popup.

   Once configuration is complete, close the popup window.

   |cline-config-3|

   *What to notice:*
   - No API keys are pasted manually.
   - The provider and model are explicitly defined.
   - Cline is now ready to interact with Gemini.

   *What happened behind the scenes:*
   - Cline is authenticated against Vertex AI.
   - Requests are routed through the lab’s preconfigured GCP project.
   - Model selection is enforced for consistency across attendees.

Validate Gemini Connectivity
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

9. Test the connection to Gemini.

   In the Cline chat window:

   - Make sure **Plan** mode is selected (not **Act**)
   - Enter the following prompt:

   .. code-block:: text

      Hi Gemini!! Welcome to AppWorld 2026!! We are going to have fun vibe coding !!

   |gemini-hello-prompt|

10. Verify the response from Gemini.

    If everything is configured correctly, you should receive a response similar to the one shown below.

    |gemini-hello-response|

    *What to notice:*
    - Gemini responds immediately.
    - The interaction happens inside VS Code.
    - No code changes occur in Plan mode.

    *What happened behind the scenes:*
    - The prompt was sent to Gemini via Vertex AI.
    - Cline received and rendered the response.
    - Your environment is now ready for AI-assisted development.

Wrap-Up
~~~~~~~

At this point, you have:

- Accessed the VS Code Server
- Verified workspace readiness
- Configured the Cline extension
- Confirmed connectivity to Gemini

Your development environment is now fully prepared for **vibe coding**.

Next, you will begin using Cline to generate and modify application code—putting the **Code. Secure. Repeat.** workflow into action.

.. |code-server-access-1| image:: ../images/module0/code-server-access-1.png
   :width: 400px
.. |code-server-access| image:: ../images/module0/code-server-access.png
   :width: 400px
.. |code-server-access-password| image:: ../images/module0/code-server-access-password.png
   :width: 400px
.. |code-server-landing| image:: ../images/module0/code-server-landing.png
   :width: 800px
.. |chrome-pop-ups| image:: ../images/module0/chrome-pop-ups.png
   :width: 400px
.. |cline-icon| image:: ../images/module0/cline-icon.png
   :width: 40px
.. |cline-config-1| image:: ../images/module0/cline-config-1.png
   :width: 800px
.. |cline-config-2| image:: ../images/module0/cline-config-2.png
   :width: 400px
.. |cline-config-3| image:: ../images/module0/cline-config-3.png
   :width: 400px
.. |gemini-hello-prompt| image:: ../images/module0/gemini-hello-prompt.png
   :width: 400px
.. |gemini-hello-response| image:: ../images/module0/gemini-hello-response.png
   :width: 400px