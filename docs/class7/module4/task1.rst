Task 1 – F5 Web Application Scanning (WAS) as a DAST Tool
===========================================================

In this task, you will review how **F5 Web Application Scanning (WAS)** fits into a modern DevSecOps workflow as a **Dynamic Application Security Testing (DAST)** tool.

Unlike earlier modules, this task is **instructor-led**. The focus is on understanding *why* DAST matters, *where* it fits, and *how* it validates runtime security controls deployed earlier in the lab.

What is F5 Web Application Scanning (WAS)?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

F5 WAS is a DAST solution that evaluates a *running* application from the outside—just like an attacker would.

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

Instructor Review: Pre-Scan vs Post-Scan
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The instructor will walk through two pre-generated scan reports:

1. **Pre-Scan: AI-Generated App (No WAAP)**
   
   *What to notice:*
   - High-severity findings
   - Injection flaws
   - Missing input validation
   - Insecure endpoints
   - API weaknesses

   *Key takeaway:*  
   AI-generated code ships fast—but it ships risk.

2. **Post-Scan: Same App with F5XC Security Enabled**
   
   *What to notice:*
   - Reduced exploitability
   - Attacks blocked or mitigated
   - API behavior constrained by specification
   - Bot-sensitive flows protected

   *Key takeaway:*  
   Same code. Same app. **Very different risk profile.**

How WAS Fits into CI/CD (Conceptually)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

While WAS scans were not executed live in this lab (due to scan duration), in real-world pipelines:

- WAS can be triggered:
  - After deployment
  - On a schedule
  - Before major releases
- Results can:
  - Gate promotions
  - Feed back into backlog prioritization
  - Validate WAF and API policies

*Important idea:*  
WAS is not about blocking releases—it’s about **proving outcomes**.

What This Task Reinforces
~~~~~~~~~~~~~~~~~~~~~~~~~

- Security controls must be **measured**, not assumed
- Runtime protection should reduce *real* attack surface
- DAST closes the loop between intent and reality

This sets the stage for the final takeaway of the lab.
