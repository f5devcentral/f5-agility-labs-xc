HTTP Load Balancer
==================

Scenario
--------

The development team has created a new application that will be publicly accessible. 
An application **HTTP Load Balancer** will need to be created to manage traffic, 
enforce security controls, and provide visibility into application usage.

Objective
---------

Successfully load the Demonstration Application by creating 
the following:

- Health check
- Origin Pool (Public)
- HTTP Load Balancer (Public)

Exercise 1: Create a Health Check
---------------------------------

**Quick Reference**

+--------------+-------------------------------------+
| Name         | .. code-block:: text                |
|              |                                     |
|              |    <namespace>-hc                   |
+--------------+-------------------------------------+

Exercise 2: Create a Origin Pool and attach Health Check
----------------------------------------------------------

**Quick Reference**

+--------------+-------------------------------------+
| Name         | .. code-block:: text                |
|              |                                     |
|              |    <namespace>-op                   |
+--------------+-------------------------------------+
| Type         | Public DNS Name of Origin Server    |
+--------------+-------------------------------------+
| DNS Name     | .. code-block:: text                |
|              |                                     |
|              |    demoapp.lab-sec.f5demos.com      |
+--------------+-------------------------------------+
| Port         | 80                                  |
+--------------+-------------------------------------+
| Health Check | <namespace>/<namespace>-hc          |
+--------------+-------------------------------------+
| TLS          | Disabled                            |
+--------------+-------------------------------------+

Exercise 3: Create a HTTP Load Balancer and attach Origin Pool
--------------------------------------------------------------

**Quick Reference**

+-----------------------+------------------------------------+
| Name                  | .. code-block:: text               | 
|                       |                                    | 
|                       |    <namespace>-lb                  |
+-----------------------+------------------------------------+
| Domain                | .. code-block:: text               | 
|                       |                                    | 
|                       |    <namespace>.lab-sec.f5demos.com |
+-----------------------+------------------------------------+
| Load Balancer Type    | HTTPS with Custom Certificate      |
+-----------------------+------------------------------------+
| HTTP Redirect to HTTPS| **✓**                              |
+-----------------------+------------------------------------+
| HTTPS Port            | 443                                |
+-----------------------+------------------------------------+
| TLS Certificate       | shared/lab-sec-wildcard            |
+-----------------------+------------------------------------+
| Origin Pool           | <namespace>/<namespace>-op         |
+-----------------------+------------------------------------+
| VIP Advertisement     | Internet                           |
+-----------------------+------------------------------------+

Validation
----------

Open a new browser tab, navigate to the following URL.

.. code-block:: text
    
   https://<namespace>.lab-sec.f5demos.com