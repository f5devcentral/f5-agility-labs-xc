Lab 5: Introduction to Observability.
====================================

Have you ever wished that you knew about impending application issues before your users or 
boss did?  Application performance issues or outages usually provide clues before they 
manifest into larger problems.  Synthetic monitors provides you the opportunity to often fix 
them before they become large-scale issues.

Task 1: Test
~~~~~~~~~~~~~~~~~~~~~~~~

Configure a synthetic monitor  

#. Click the "Select Service" drop down menu on the sidebar and select "Observability".

   .. image:: _static/menu_observability.png
      :width: 75%

#. Click the "Add HTTP Monitor" button.

   .. image:: _static/add_http_monitor.png
      :width: 75%

#. In the name field, type "example-com".
#. In the URL field, type "https://example.com".
#. Click on the Interval drop down menu, choose "30 seconds".

   .. image:: _static/example-com.png
      :width: 75%

#. In the External Sources area, click the "Add Item" button.

   .. image:: _static/add_item.png
      :width: 75%

#. In the Regions field, select "us-east-2" and "us-west-1" and click Apply.

   .. image:: _static/monitor_sources.png
      :width: 75%

#. Click the "Save and Exit" button at the bottom right.

   .. image:: _static/save-exit.png
      :width: 75%

#. Wait 30-60 seconds for the monitors to update.

Review the statistics gathered by the synthetic monitor

#. Click on HTTP Monitors in the sidebar.
#. Click the All Monitors tab near the top of the screen.

   .. image:: _static/all-monitors.png
      :width: 75%

#. Click the "example-com" monitor name that you created previously.

   .. image:: _static/click-example-com.png
      :width: 75%

   .. image:: _static/monitor-data.png
      :width: 75%

#. Take a few minutes to review the items on the report, including:  
days until certificate expiration, latency, global response time breakdown, and 
response time by region (source).
#. Click the "TLS Report" link and review the TLS detailed report.  
Press the X to close the report and return to the synthetic monitor statistics.

   .. image:: _static/tls-report-link.png
      :width: 75%

   .. image:: _static/tls-report.png
      :width: 75%

#. Note that you can configure alerts to be sent to you when monitor thresholds are exceeded, 
however alerts are out of scope for this lab.

=======
