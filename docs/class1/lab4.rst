(Optional) Lab 4: Fine Tuning a WAF Policy
==========================================

This lab is also covered in the xC WAF 102 course.
 
In this next lab we will learn how to customize a WAF policy.

We will go through the actions of disabling specific WAF rules that 
are associated with a specific Load Balancer and application path.

Leveraging Support ID/Request ID
--------------------------------

In the previous lab exercises you may have noticed that a "support ID" appears 
when you trigger a WAF block.

.. code-block::
   
   The requested URL was rejected. Please consult with your administrator.
   
   Your support ID is: 218bdf56-f34a-42f4-931b-1ba5f8873353
   
   [Go Back]
   
We can use the reported support ID to disable specific signatures.

Exercise 1: Generate Cross Site Scripting (XSS)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Send the following request to your `[NAMESPACE].lab-sec.f5demos.com` site

   ``/headers/?username=<script>window.open(%27hello%20world%27);</script>``

#. Retrieve the "support ID" that is displayed. Copy the value into your clipboard (i.e. highlight support ID in Chrome and select "Copy" / Ctrl-C).

#. Click on "Select service" and select "Load Balancers". Click "Virtual Hosts"->"HTTP Load Balancers" and click on your "global" Load Balancer

#. Select the "global" Load Balancer. Click on the "Performance Monitoring" dropdown and select "Security Monitoring". Select the "Security Events" tab.

#. Click on "Refresh" (on the page) until you see a request that matches the time of your most recent request.

   .. image:: _static/screenshot-global-vip-public-security-events-refresh.png   
#. Click on "Add Filter" under Security events
   
   .. image:: _static/screenshot-global-vip-public-security-events-add-filter.png

#. Select "req_id"
   
   .. warning:: If you do not see "req_id" you may need refresh your browser window.  Also ensure that you see at least one event on the page.
#. Select the Operator "In"
#. Paste in the support ID.
   
   .. image:: _static/screenshot-global-vip-public-security-events-paste-req-id.png
   
#. Click the "Assign a custom value(s)... link"
   
   .. image:: _static/screenshot-global-vip-public-security-events-paste-req-id-assign.png
   
#. At the bottom of the page you should see the desired Security Event.  Scroll to the far right to look for the "Actions" column and click on the three dots "..."
#. Select "Create WAF Exclusion Rule" from the "Actions" menu
   
   .. image:: _static/create-exception-rule-action.png
      :width: 75%

Exercise 2: Creating WAF Exclusion Rule
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#. Take note of the list of Signature IDs that are listed.

   .. image:: _static/waf-exclusion-rules-ids.png
      :width: 75%
	  
#. Search for one of the IDs at: https://clouddocs.f5.com/cloud-services/latest/f5-cloud-services-Essential.App.Protect-Details.html
   For example searching for "200000098" should return a "XSS script tag (Parameter)" signature.
#. Click on "Apply". You will now be taken to the "WAF Exclusion Rules" dialogue.
#. Click on "Apply". You will now be taken into the HTTP Load Balancer configuration and you should see under "WAF Exclusion Rules" it should show as "Configured".
#. Scroll to the bottom of the page and click on "Save and Exit"
#. Retry visiting your site with the same URL to your `[NAMESPACE].lab-sec.f5demos.com` site

   ``/headers/?username=<script>window.open(%27hello%20world%27);</script>``

Exercise 3: View Requests Log
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We can also view requests that have been excluded from a WAF policy by viewing 
the requests log.

#. From the "Security Events" page in F5 Distributed Cloud Console click on the "Requests" menu item at the top of the page.
#. Look for a "GET" request for `/headers/` and click on the arrow on the left of the date to expand the entry.
#. Observe that under "Policy Hits" you will see the WAF exclusion rule that was triggered.
   
   .. image:: _static/requests-policy-exclusion.png
      :width: 50%

#. Try visiting your site with the a different URL to your `[NAMESPACE].lab-sec.f5demos.com` site:
   ``/txt/?username=<script>window.open(%27hello%20world%27);</script>``

#. Observe that this request is blocked. F5 Distributed Cloud WAF can exclude signatures by both Signature ID and path; and these exclusions are tied to a specific HTTP Load Balancer.

Congratulations you have completed the lab!

Video Walkthrough 
^^^^^^^^^^^^^^^^^
Optional Video you can watch if you get stuck

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/s-BHH0Qayfc?start=523" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
