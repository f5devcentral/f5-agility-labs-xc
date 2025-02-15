Lab 6: Security Analytics and Malicious User Detection
======================================================

**Scenario**

A recent review highlighted the need for greater visibility into API performance and security events. 
This includes identifying bad actors (clients) attempting to misuse or attack the API.

Investigate request and security events, and establish a method for detecting malicious users.

**Expected Lab Time: 8 minutes**

Task 1: Review the Requests Dashboard
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will explore the Security Analytics Dashboard within Distributed Cloud (XC) for security events.

#. From the **Web App & API Protection** menu, navigate to **Overview**, then click **Security**

#. With the **Dashboard** view, scroll down to the bottom to the **Application Delivery** tile to find your HTTP Load Balancer object; click this LB object.

   .. image:: _static/lab6-101.png
      :width: 800px

#. Within the **Dashboard** view, click the **Requests** tab:

   .. image:: _static/lab6-request-102.png
      :width: 800px

#. On the right-hand side, expand the time window to **Last 24 hour** and click the **Refresh** button; this should provide details of your requests you made during this lab.

#. Review and explore the related request events. Expand various requests to understand if they were successful or denied.

   .. image:: _static/lab6-request-103.png
      :width: 800px

#. Continue to explore various filters, events, etc. within the **Requests** dashboard to review and explore the related events.

Task 2: Review the Security Anatlyics Dashboard
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will explore the Security Analytics Dashboard within Distributed Cloud (XC) for security events.

#. From the **Web App & API Protection** menu, navigate to **Overview**, then click **Security**

#. With the **Dashboard** view, scroll down to the bottom to the **Application Delivery** tile to find your HTTP Load Balancer object; click this LB object.

   .. image:: _static/lab6-101.png
      :width: 800px

#. Within the **Dashboard** view, click the **Security Analytics** tab:

   .. image:: _static/lab6-security-102.png
      :width: 800px

#. On the right-hand side, expand the time window to **Last 24 hour** and click the **Refresh** button; this should provide details of your requests you made during this lab.

#. Review and explore the related security events. Expand various requests to understand why they were allowed/blocked.

   .. image:: _static/lab6-security-102.png
      :width: 800px


#. Continue to explore various filters, events, etc. within the **Security Analytics** dashboard to review and explore the related events.  
   Try using the **Forensics** filter to drill-down further into specific traffic.

   .. image:: _static/lab6-security-103.png
      :width: 800px

Task 3: Review Malicious User Detection
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will explore the Malicious Users section of the Security Analytics Dashboard within Distributed Cloud (XC).

#. From the **Web App & API Protection** menu, navigate to **Overview**, then click **Security**

#. With the **Dashboard** view, scroll down to the bottom to the **Application Delivery** tile to find your HTTP Load Balancer object; click this LB object.

   .. image:: _static/lab6-101.png
      :width: 800px


#. Within the **Dashboard** view, click the **Malicious Users** tab:

   .. image:: _static/lab6-mud-102.png
      :width: 800px

#. On the right-hand side, expand the time window to **Last 24 hour** and click the **Refresh** button; this should provide details of your requests you made during this lab.

#. Review and explore the related malicious user events.

   .. image:: _static/lab6-mud-103.png
      :width: 800px

   .. note ::

      Malicious User Detection also includes migitation, which was not enabled for this lab. As the user score increases action can be taken, including a temporary block.

**End of Lab**

.. image:: _static/labend.png
   :width: 800px