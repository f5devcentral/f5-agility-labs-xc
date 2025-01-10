Lab 6: Security Analytics and Malicious User Detection
=====================================

The Distributed Cloud (XC) platform has extensive logging and analytics capabilities.  Throughout this lab, we tested various
scenarios to explore how XC can protect and secure API endpoints. These requests and events are logged throughout the XC platform.
In this lab, we will explore the XC Analytics data observed from your scenarios. In addtion, we will explore Malicious User Detection & Mitigation.

F5 XC has the capability of indentifying and tracking user-sessions based on different parameters, such as: Client IP, TLS Fingerprint, Cookie value, 
HTTP Header value and many others.  These identifiers can track user behavior, allowing us to take action & make decision to block or challenge these
detected users.

**Expected Lab Time: 20 minutes**

Task 1: Review the Security Anatlyics Dashboard for Triggered Events
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will explore the Security Analytics Dashboard within Distributed Cloud (XC) for security events.

#. From the **Web App & API Protection** menu, navigate to **Overview**, then click **Security**

   .. image:: _static/lab4-image032.png
      :width: 800px

#. With the **Dashboard** view, scroll down to the bottom to the **Application Delivery** tile to find your HTTP Load Balancer object; click this LB object.

   .. image:: _static/lab4-image033.png
      :width: 800px

#. Within the **Dashboard** view, click the **Security Analytics** tab:

   .. image:: _static/lab4-image034.png
      :width: 800px

#. On the right-hand side, expand the time window to **Last 24 hour** and click the **Refresh** button; this should provide details of your requests you made during this lab.

   .. image:: _static/lab4-image035.png
      :width: 800px

#. Review and explore the related security events. Expand various requests to understand why they were allowed/blocked.

   .. image:: _static/lab4-image036.png
      :width: 800px

#. Continue to explore various filters, events, etc. within the **Security Analytics** dashboard to review and explore the related events.  Try using the **Forensics** filter
to drill-down further into specific traffic.

   .. image:: _static/lab4-image037.png
      :width: 800px

Task 2: Review the Requests in the Security Dashboard
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will explore the Security Analytics Dashboard within Distributed Cloud (XC) for security events.

#. From the **Web App & API Protection** menu, navigate to **Overview**, then click **Security**

   .. image:: _static/lab4-image032.png
      :width: 800px

#. With the **Dashboard** view, scroll down to the bottom to the **Application Delivery** tile to find your HTTP Load Balancer object; click this LB object.

   .. image:: _static/lab4-image033.png
      :width: 800px

#. Within the **Dashboard** view, click the **Requests** tab:

   .. image:: _static/lab4-image039.png
      :width: 800px

#. On the right-hand side, expand the time window to **Last 24 hour** and click the **Refresh** button; this should provide details of your requests you made during this lab.

   .. image:: _static/lab4-image040.png
      :width: 800px

#. Review and explore the related request events. Expand various requests to understand if they were successful or denied.

   .. image:: _static/lab4-image041.png
      :width: 800px

#. Continue to explore various filters, events, etc. within the **Requests** dashboard to review and explore the related events.  Try using the **Forensics** filter
to drill-down further into specific traffic.

   .. image:: _static/lab4-image042.png
      :width: 800px

Task 3: Configure Malicious User Detection
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Malicious User Detection uses Machine Learning (ML) to detect certain identifiers to classify a source.  This allows the XC platform to detect and track specific user traffic. These identifiers
can be used to make decisions to allow or block specific users.

In this task, we will enable Malicious User Detection on HTTP Load Balancer

#. In the left-hand navigation of the **Web App & API Protection** service, click on **Load Balancers > HTTP Load**
   **Balancers** under the **Manage** section.

   .. image:: _static/lab4-image018.png
      :width: 800px

#. In the resulting **Load Balancers** window, click on the three dots **...** in the
   **Action** column, and the select **Manage Configuration**.

   .. image:: _static/lab4-image019.png
      :width: 800px

#. Click **Edit Configuration** in the top-right corner.

   .. image:: _static/lab4-image020.png
      :width: 800px

#. Using the left-hand navigation, click the **Common Security Controls** link.

   .. image:: _static/lab4-image021.png
      :width: 800px

#. Locate the **Malicious User Detection** and **Malicious User Mitigation And Challenges** area of the **Common Security Controls** and use the
   drop-down to **Enable** each setting. We will use **Default** settings:

   .. image:: _static/lab4-image045.png
      :width: 800px

   .. image:: _static/lab4-image046.png
      :width: 800px

#. Select **Other Settings** on the left then click on **Save and Exit**
   at the bottom right of window.

   .. image:: _static/lab4-image044.png
      :width: 800px

#. **Left off here . . . need more content / testing examples **

   .. image:: _static/update_image.png
      :width: 800px

**End of Lab**

.. image:: _static/labend.png
   :width: 800px