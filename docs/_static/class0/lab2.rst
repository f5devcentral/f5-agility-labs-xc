Service Policy
==============

Scenario
--------

We have observed a high number of requests coming from a single IP address. 
Create a **Service Policy** to deny requests from that user while ensuring 
legitimate traffic continues uninterrupted.

Objective
---------

Block request from identified badactor by creating and attaching the following:

- Service Policy (IP Deny)

Exercise 1: Create a Service Policy
-----------------------------------

**Quick Reference**

+--------------------+----------------------------+
| Name               | .. code-block:: text       | 
|                    |                            | 
|                    |    <namespace>-ipdeny-sp   |
+--------------------+----------------------------+
| Rule               | Denied Sources             |
+--------------------+----------------------------+
| IPv4 Prefix List   | IP will be provided        |
+--------------------+----------------------------+
| Default Action     | Next Policy                |
+--------------------+----------------------------+


Exercise 2: Attach Service Policy to a HTTP Load Balancer
---------------------------------------------------------

**Quick Reference**

+-------------------+---------------------------------------+
| Service Policies  | Apply Specified Service Polices       |
+-------------------+---------------------------------------+
| Order 1           | <namespace>-ipdeny-sp                 |
+-------------------+---------------------------------------+
| Order 2           | ves-io-shared/ves-io-allow-all        |
+-------------------+---------------------------------------+