Task 1 – F5XC Web Application Scanning (WAS) as a DAST Tool
===========================================================

In this task, you will review how **F5XC Web Application Scanning (WAS)** fits into a modern DevSecOps workflow as a **Dynamic Application Security Testing (DAST)** tool.

The focus in this module is on understanding *why* DAST matters, *where* it fits, and *how* it validates runtime security controls deployed earlier in the lab.

What is F5XC Web Application Scanning (F5XC WAS)?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

F5XC WAS is a DAST solution that evaluates a *running* application from the outside—just like an attacker would.

* It sends real HTTP requests to the live application
* It looks for exploitable behaviors, not just code patterns
* It validates how the app behaves **in production conditions**

*Key difference from SAST:*  
SAST inspects code.  
DAST tests reality.

Why WAS Matters in This Lab
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Throughout this lab, you have:

- Generated code using AI
- Enforced intent using CI/CD
- Deployed runtime protections using F5 Distributed Cloud
- Observed live security events (WAF, API, Bot Defense)

WAS answers the final question:

**“Did all of this actually make the app more secure?”**

Review: Pre-Scan vs Post-Scan WAF Reports
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Review the Pre-Scan and Post-Scan reports performed using F5XC Web Application Scanning to the live version of the `F5 AI Generated Application <https://f5-ai-generated-app.xc.hvf5lab.com/reports>`_

The reports include:

- Full PDF pre and post WAF reports
- Videos of each scan that shows how F5XC Web Application Scanning performs the scan and test the application.
- Summary of the issues found on each scan

Walk through both reports:

- **Pre-Scan: F5 AI-Generated App PRE-SCAN (WAF OFF)**
- **Post-Scan: Same App POS-SCAN (WAF ON)**

How F5XC WAS Fits into CI/CD (Conceptually)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

While F5XC WAS scans were not executed live in this lab (due to scan duration), in real-world pipelines:

- A F5XC WAS can be triggered:
  - After deployment
  - On a schedule
  - Before major releases
- Results can:
  - Gate promotions
  - Feed back into backlog prioritization
  - Validate WAF and API policies

*Important idea:*  
F5XC WAS is not about blocking releases—it’s about **proving outcomes**.

What This Task Reinforces
~~~~~~~~~~~~~~~~~~~~~~~~~

- Security controls must be **measured**, not assumed
- Runtime protection should reduce *real* attack surface
- DAST closes the loop between intent and reality

This sets the stage for the final takeaway of the lab.
