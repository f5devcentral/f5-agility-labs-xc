Task 2 - Explore F5 AI-generated Application & Runtime Security
=================================================================

In this task, you will explore the F5 Distributed Cloud configuration that was deployed by the CI/CD pipeline, then generate traffic and intentionally trigger security events. The goal is to **see runtime protection in action**, not to break anything.

Explore the Deployed Application
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


1. Browse the application normally. Click around the application and load a few pages to generates **baseline traffic**.

   ::

      https://<NAMESPACE>-lb.lab-app.f5demos.com

   
Explore F5 Distributed Cloud Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Review the HTTPS Load Balancer configuration in F5 Distributed Cloud.

   In the F5 Distributed Cloud console, Click on the Web App & API Protection tile.

   |module3-f5xc-waap-tile|

   Under the "Manage" section, hover over "Load Balancers" and click "HTTP Load Balancers". You should see the LB object created for your application

   .. note::
      If you want to explore the HTTP LB configuration, click the "..." symbol under the Actions column and click "Manage configuration".

   |module2-f5xc-waap-lb-config|


2. Review the WAF policy attached to the application.

   On same Web App & API Protection page. Click on the "App Firewall"

   Open the WAF configuration associated with the HTTPS Load Balancer.

   Navigate to:

   .. note::
      If you want to explore your WAF policy, click the "..." symbol under the Actions column and click "View Configuration".

   |module2-f5xc-waap-lb-waf-config|


3. Review the vK8s workload on the Distributed App Section .

   To Return to the main F5XC home page, click the F5 logo. Then, Click on the "Distributed App" tile.

   |module2-f5xc-apps-tile|

   Navigate to the origin pool and inspect the associated vK8s workload.

   Navigate to:

   ::

      Distributed Apps → Applications → Virtual K8s → "Click on your vk8" → Dashboard

   |module2-f5xc-distapp-vk8-workload|

   *What you’re seeing:*

   - The origin points to a Kubernetes service.
   - The workload was created automatically by the CI/CD pipeline.
   - No manual deployment was required.


Generate Attack Traffic
~~~~~~~~~~~~~~~~~~~~~~~

1. Launch a simple injection attempt using your browser.

   Modify the application URL to include a basic script injection pattern:

   ::

      https://<NAMESPACE>-lb.lab-app.f5demos.com/<script>alert(1)</script>


2. Try a few additional variations.

   Optionally, test other simple patterns such as:
   
   - Encoded script tags
   - Suspicious query parameters
   - Invalid or unexpected URL paths

   Keep the tests lightweight—this lab focuses on visibility, not exploitation.

Review Security Events
~~~~~~~~~~~~~~~~~~~~~~

8. Open the security events view in F5 Distributed Cloud.

   In the F5 Distributed Cloud console, navigate to the **Security Events** section for your application.

   Navigate to:

   ::

      Web App & API Protection → Overview → Security

   Scroll all the way down and click in your load balancer to see events specific to your application.

   |module2-f5xc-waap-security-dashboard|

   *What you should see:*

   - The security dashboard is consolidated view of security events across all load balancers in the namespace.
   - There are also stats for threat intelligence, bot traffic, and other security metrics.

9. Inspect events specific to your application.

   Under "Security Analytics", review security events related to the attack traffic you generated.

   *What to look for:*

   - The reason the request was blocked.
   - Which security control triggered the action.
   - The level of context provided for each request.
   - Explore the "Explain with AI" feature to see how AI can enhance event details.

   |module2-f5xc-waap-security-lb-sec-events|

   Click on "Explain with AI".

   |module2-f5xc-waap-security-lb-sec-events-details|

   |module2-f5xc-waap-security-lb-sec-events-details-ai|

Wrap-Up
~~~~~~~

At this point, you have confirmed that:

- The application is live and reachable.
- Traffic flows through the F5 Distributed Cloud Load Balancer.
- WAF actively inspects and blocks malicious requests.
- Security events are visible immediately without additional tooling.
- AI can enhance security event details for faster investigation.

In the next module, you will expand the application and enable additional security controls—continuing the **Code. Secure. Repeat.** workflow.

   
.. |module2-f5xc-apps-tile| image:: ../images/module2/module2-f5xc-apps-tile.png
   :width: 800px
.. |module3-f5xc-waap-tile| image:: ../images/module3/module3-f5xc-waap-tile.png
   :width: 800px
.. |module2-f5xc-waap-lb-config| image:: ../images/module2/module2-f5xc-waap-lb-config.png
   :width: 800px
.. |module2-f5xc-waap-lb-origin-config| image:: ../images/module2/module2-f5xc-waap-lb-origin-config.png
   :width: 800px
.. |module2-f5xc-waap-lb-waf-config| image:: ../images/module2/module2-f5xc-waap-lb-waf-config.png
   :width: 800px
.. |module2-f5xc-waap-security-dashboard| image:: ../images/module2/module2-f5xc-waap-security-dashboard.png
   :width: 800px
.. |module2-f5xc-waap-security-lb-sec-events| image:: ../images/module2/module2-f5xc-waap-security-lb-sec-events.png
   :width: 800px
.. |module2-f5xc-waap-security-lb-sec-events-details| image:: ../images/module2/module2-f5xc-waap-security-lb-sec-events-details.png
   :width: 800px
.. |module2-f5xc-waap-security-lb-sec-events-details-ai| image:: ../images/module2/module2-f5xc-waap-security-lb-sec-events-details-ai.png
   :width: 800px
.. |module2-f5xc-distapp-vk8-workload| image:: ../images/module2/module2-f5xc-distapp-vk8-workload.png
   :width: 800px
