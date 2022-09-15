Configuration Lab
=================

Protecting applications requires the creation a WAF policy and attaching it to an HTTP/HTTPS load balancer.

Prerequisites
-------------

Prior to creating an HTTP load balancer, create a *WAF policy*, *Health Monitor*, and an *Origin Pool*.

Policy
^^^^^^^^^^

#. Select the ``Web App & API Protection`` section from the Home screen.

   .. image:: images/app-context.png
      :width: 800px
  
#. Select the assigned namespace.

   .. image:: images/namespace-selection.png
      :width: 800px

#. Navigate to ``Manage`` > ``App Firewall``, and click ``Add App Firewall``

   .. image:: images/add-app-firewall.png
      :width: 800px

#. Name the policy *blocking-app-firewall*, select ``Blocking`` as the ``Enforcement Mode``, and click the |save-and-exit| button at the bottom right.

   .. image:: images/app-firewall-create-save-exit.png
      :width: 800px

Health Check
^^^^^^^^^^^^

#. Navigate to ``Manage`` > ``Load Balancers`` > ``Health Checks``, and click ``Add Health Check``

   .. image:: images/add-health-check.png
      :width: 800px

#. Name the health-check "http-health-check", and click |save-and-exit|

   .. image:: images/add-health-check-save-and-exit.png
      :width: 800px

Origin Pool
^^^^^^^^^^^

#. Navigate to ``Manage`` > ``Load Balancers`` > ``Origin Pools``, and select ``Add Origin Pool``

   .. image:: images/add-origin-pool.png
      :width: 800px

#. Name the origin-pool "public-orgin-pool", and under "Origin Servers" click |add-item|

   .. image:: images/add-origin-pool-add-item.png
      :width: 800px

#. Set "Type of Origin Server" to "Public DNS Name of Origin Server", set the "DNS Name" to "demo-app.amer.myedgedemo.com" and click |apply|

   .. note:: A DNS value is used to resolve the IP address of the web server in the origin pool

   .. image:: images/add-origin-pool-add-public-server.png
      :width: 800px

#. Set the "Port" value to "80", and click |add-item| under "Health Checks"

   .. image:: images/add-origin-pool-add-item-health-check.png
      :width: 800px

#. After clicking |add-item| under "Health Checks", associate the "http-health-check", and click |save-and-exit|

   .. image:: images/add-origin-pool-add-item-health-check-save-and-exit.png
      :width: 800px

HTTP Load Balancer
--------------------

Creation
^^^^^^^^

#. Navigate to ``Manage`` > ``Load Balancers`` > ``HTTP Load Balancers`` and click ``Add HTTP Load Balancer``.

   .. image:: images/add-http-load-balancers.png
      :width: 800px

#. Create the http-load-balancer as follows:

   * Name: **public-endpoint-load-balancer**
   * Domains and LB Type: **<assigned-namespace>.lab-sec.f5demos.com**
   * Load Balancer Type: **HTTP (port 80)**
   * Automatically Manage DNS Records: **Checked**
   * Origins: **public-origin-pool**
   * Web Application Firewall (WAAP): **Enable and select "blocking-app-firewall"**
   * At the bottom of the page click |save-and-exit|

   .. image:: images/public-endpoint-http-load-balancer-save-and-exit.png
      :width: 800px

Testing Site
^^^^^^^^^^^^

After the HTTP Load Balancer has been created, use a browser to access the site:

http://<assigned-namespace>.lab-sec.f5demos.com

.. image:: images/lab2-010.png
   :width: 800px

Craft a Violation
^^^^^^^^^^^^^^^^^

Append an invalid string ``/?cat%20/etc/passwd`` to the URL to view a blocking page.

.. image:: images/cat-etc-passwd.png
   :width: 800px

Monitoring Dashboard
--------------------

Click ``Apps & APIs`` > ``security``, and select the public-endpoint-load-balancer.

.. image:: images/apps-api-security-http-lb.png
   :width: 800px

Event Viewing
^^^^^^^^^^^^^

Click ``Security Events`` and expand the violation details.

.. image:: images/security-event-expand-details.png
   :width: 800px

Event Search
^^^^^^^^^^^^

#. Click ``Add Filter``

   .. image:: images/add-filter.png
      :width: 800px

#. Scroll to and select ``req_id``

   .. image:: images/select-req-id.png
      :width: 800px

#. Click the ``In`` operator.

   .. image:: images/click-in-operator.png
      :width: 800px

#. Paste the Support ID of the violation and click ``Assign a custom value(S)`` and click |apply|

   .. image:: images/assign-custom-value.png
      :width: 800px

#. Expand the details of the search result and view details.

   .. image:: images/search-results.png
      :width: 800px

.. |save-and-exit| image:: images/save-and-exit.png
   :height: 24px

.. |add-item| image:: images/add-item.png
   :height: 24px

.. |apply| image:: images/apply.png
   :height: 24px
