Route
=====

Scenario
--------

The development team has introduced a bug where the login page link no longer 
directs users correctly. Configure a **Route** to redirect requests to the proper login page.

Objective
---------

Successfully redirect requests by configuring the following:

- Route (Redirect)

Observation
-----------

Open a new browser tab, navigate to the following URL.

.. code-block:: text
    
   https://<namespace>.lab-sec.f5demos.com/member/login

Exercise 1: Configure a Route on HTTP Load Balancer
---------------------------------------------------

**Quick Reference**

+----------------+------------------------------------------+
| Route Type     | Redirect Route                           |
+----------------+------------------------------------------+
| Method         | Any                                      |
+----------------+------------------------------------------+
| Prefix Match   | .. code-block:: text                     |
|                |                                          |
|                |    /member/login                         |
+----------------+------------------------------------------+
| Protocol       | incoming-proto                           |
+----------------+------------------------------------------+
| Host           | .. code-block:: text                     |
|                |                                          |
|                |    <namespace>.lab-sec.f5demos.com       |
+----------------+------------------------------------------+
| Redirect Path  | .. code-block:: text                     |
|                |                                          |
|                |    /login                                |
+----------------+------------------------------------------+

Validation
----------

Navigate to the following URL.

.. code-block:: text
    
   https://<namespace>.lab-sec.f5demos.com/member/login