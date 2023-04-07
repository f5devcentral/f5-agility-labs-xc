# Protect your site from application vulnerabilities using XC WAF

**Objective:**

Protect your site from application vulnerabilities using XC WAF

Required Outcome:

* Configure a new HTTP**S** load balancer with the name, "frontend-secure", that points to the *frontend-private* origin pool.
* Ensure the new site works by navigating to https://adjective-animal.lab-sec.f5demos.com
* Use ssllabs.com to ensure the HTTPS site gets an "A" score.
* Use a WAF to detect and then block most common attacks
* ~~Block self identified bots~~

**Why:**

Scaling application traffic, high availability ,progressive application version updates

**How:**

* (Instructions for creating an HTTPS loadbalancer?)
* Create a WAF *in transparent mode* and attach it to the frontend-secure loadbalancer. See (https://docs.cloud.f5.com/docs/how-to/app-security).
  (NOTE: for this workshop, you can skip the sections on attaching the WAF to a specific route, configuring a Data Guard, creating WAF Exclusion Rules, and WAF Processing for Specific Match Criteria.).

**Validation:**

* Browser to the HTTPS version of the website with the following added to the end of the URL: “?cat%20/etc/passwd”
* Go to Web App & API Protection-->Overview-->Dashboards-->Security Dashboard to ensure you see this listed in the "Top Attacks by Signatures" section.
* Now, change the WAF to *blocking* mode and try the same URL again. What do you see now? (Hint: You may need to open an incognito browser window to avoid caching.)
* ~~How long did it take to complete the steps here?~~
* ~~Show that malicious requests get blocked~~
* ~~Show that self identified bots are blocked~~
* ~~What is the workflow for dealing with a false positive?~~
