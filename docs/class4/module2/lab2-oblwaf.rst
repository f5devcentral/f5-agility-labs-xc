Lab 2: Protect your site from application vulnerabilities using XC WAF
======================================================================

Prerequisites:

* An account and namespace on Distributed Cloud
* A deployment of the "[Agility 2022] F5XC Security" UDF blueprint in running state
* Completion of Lab 1, "Create HTTP Load Balancer"

**Objective:**
~~~~~~~~~~~~~~

Protect your site from application vulnerabilities using XC WAF

Required Outcome:

* Configure a WAF to detect and then block most common attacks
* Test out some attack methods and ensure your website blocks them

**Why:**
~~~~~~~~

Scaling application traffic, high availability, progressive application version updates

**How:**
~~~~~~~~

* If you did the extra credit exercise in the previous lab and created an **HTTPS** load balancer, use that one for the exercises in this lab. Otherwise, you may either create one now (see https://docs.cloud.f5.com/docs/how-to/app-networking/http-load-balancer) or proceed with the HTTP load balancer already created.
* Create a WAF *in blocking mode* and attach it to the frontend-secure loadbalancer. See (https://docs.cloud.f5.com/docs/how-to/app-security).
  (NOTE: for this workshop, you can skip the sections on attaching the WAF to a specific route, configuring a Data Guard, creating WAF Exclusion Rules, and WAF Processing for Specific Match Criteria.).

**Validation:**
~~~~~~~~~~~~~~~

* Browse to your website and add a path of "/foo" to the end of the URL. Ensure you get a "404 Not Found" page. (You should not see a "The requested URL was rejected." message.)
* Browse to the same FQDN (without "/foo") but try out other common URL exploits by appending strings such as “?cat%20/etc/passwd” and "<script>alert("TEST");</script>" to the end of the URL. You should receive the message, "The requested URL was rejected." This means the Distributed Cloud WAF identified the request as potentially malicious and blocked it.
* Go to Web App & API Protection-->Overview-->Dashboards-->Security Dashboard to ensure you see this listed in the "Top Attacks by Signatures" section.

**Alternative Lab:**
~~~~~~~~~~~~~~~~~~~~
If you get stuck or would prefer guided version, you can instead go to our Protecting a Public Endpoint lab: https://clouddocs.f5.com/training/community/f5xc/html/class1/lab1.html

**(OPTIONAL) Fine Tuning a WAF Policy:**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you have completed the above exercises and wish to go further in your Distributed Cloud learning, feel free to work on the following lab on Fine Tuning a WAF Policy. This is optional.
https://clouddocs.f5.com/training/community/f5xc/html/class1/lab4.html
