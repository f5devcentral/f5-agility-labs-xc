App Firewall (WAF)
==================

Scenario
--------

We have been informed of multiple attacks targeting the application. 
Create and attach a **App Firewall (WAF)** to mitigate further threats.

Objective
---------

Successfully mitigate attacks against the application by creating 
and attaching the following:

- App Firewall (WAF)

Observation
-----------

Open a new browser tab, navigate to the following URL.

.. code-block:: text
    
   https://<namespace>.lab-sec.f5demos.com/waf

Exercise 1: Create a Route
--------------------------

**Quick Reference**

+-------------------+----------------------+
| Name              | .. code-block:: text |
|                   |                      |
|                   |    <namespace>-af    |
+-------------------+----------------------+
| Enforcement Mode  | Blocking             |
+-------------------+----------------------+


Exercise 2: Attach Route to HTTP Load Balancer
----------------------------------------------

**Quick Reference**

+-------------------------------+-------------------+
| Web Application Firewall (WAF)| Enable            |
+-------------------------------+-------------------+
| Enable (WAF object)           | <namespace>-af    |
+-------------------------------+-------------------+

Validation
----------

Navigate to the following URL.

.. code-block:: text
    
   https://<namespace>.lab-sec.f5demos.com/waf