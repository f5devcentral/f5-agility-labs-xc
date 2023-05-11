Lab 6: Introduction to Content Delivery Networks (CDN)
=====================================================

F5 Distributed Cloud CDN (Content Delivery Network) provides integrated security with support for content caching and containerized edge-based workloads for richer digital experiences. Built on a high-performance, secure global private network, F5 Distributed Cloud CDN enables rich digital experiences for end users. Distributed Cloud CDN integrates with critical app security services to empower your organization as it pursues multi-cloud and edge-based initiatives. 

This lab provides an introduction to CDN services available within Distributed Cloud. The following steps will demonstrate the process of configuring CDN features within F5 Distributed Cloud Console. These steps will outline the process of creating CDN Distribution, and the steps involved for CDN Verification & viewing the Dashboard.

Task 1: Create CDN Distribution
~~~~~~~~~~~~~~~~~~~~~~~~

#. Login as SecOps, NetOps, or DevOps User

#. Select ‘Content Delivery Network’ from Common Services.

   .. image:: _static/lab6-001.PNG
	    :width: 75%
			
You can also select it from the left drop-down menu.		
						
	 .. image:: _static/lab6-002.PNG
			
#. Select Manage > Distributions > Add Distribution

   .. image:: _static/lab6-003.PNG
	    :width: 75%
			
#. Enter the following variables:

   ================================= =====
   Variable                          Value
   ================================= =====
   Name                              <namespace-cdn>
   Domains                           <namespace-cdn.lab-sec.f5demos.com>
   ================================= =====
	 
       .. image:: _static/lab6-004.PNG
	 
   ================================= =====
   Variable                          Value	
   ================================= =====
   Type of CDN Distribution          HTTP
   ================================= =====
	 
       .. image:: _static/lab6-005.PNG
			
   ================================= ==============
   Variable                          Value	
   ================================= ==============
   Automatically Manage DNS Records  Enabled/Checked
   ================================= ==============
	 
      .. image:: _static/lab6-006.PNG
	 
#. Under 'CDN Origin Pool' select 'Configure'.

      .. image:: _static/lab6-007.PNG
      
#. Enter the following variables under 'Origin Host Header'

   ================================= =====
   Variable                          Value	
   ================================= =====
   DNS Name:                         demo-app.amer.myedgedemo.com
   Enable TLS for Origin Servers     No TLS
   ================================= =====
   
      .. image:: _static/lab6-008.PNG
      
#. Select 'Add Item' under the 'List of Origin Servers'. 

      .. image:: _static/lab6-009.PNG
      
   ================================= =====
   Variable                          Value	
   ================================= =====
   Type of Origin Server:            Public DNS Name of Origin Server
   DNS Name                          demo-app.amer.myedgedemo.com
   ================================= =====
   
      .. image:: _static/lab6-010.PNG
      
#. Select 'Apply' > 'Apply' > 'Save and Exit'.

      .. image:: _static/lab6-011.PNG
      
#. The CDN Distribution will take a few moments to deploy. You can click the 'Refresh' button to monitor the status as it goes from ‘Pending’ to ‘Active’.
     
      .. image:: _static/lab6-012.PNG

#. Once the CDN Distribution is active you can launch a new browser window and navigate to <namespace-cdn.lab-sec.f5demos.com

   Note: It may take 1-2 minutes before the site loads
 
     .. image:: _static/lab6-013.png
       
#. In chrome, right click on the screen and navigate to developer tools (Inspect). Then click on the "Network' tab and check the 'Disable cache' option before refreshing the page a few times. 

#. Select the upper lefthand menu and navigate to the various sub-pages to generate some traffic. 

      .. image:: _static/lab6-014b.PNG
      
   Congratuations!! You successfully deployed a CDN Distribution within F5XC.

#. Now you will see monitoring/performance statistics within the F5XC dashboard. 

#. Naviate to the Monitoring > Performance section within the CDN configuration. Then select the CDN Distribution you just created (namespace-cdn).

     .. image:: _static/lab6-015.PNG
    
#. Click around to review to the dashboard statistics. 

     .. image:: _static/lab6-016.PNG
     
#. On the main dashboard, you will notice requests being categorized as 'Hits' or 'Misses'. 

   A cache miss occurs when a client device makes a request to the CDN and the CDN cache does not have the requested content. 

   A cache hit occurs when the CDN cache has the requested content. Content is delivered with lower Time-To-First-Byte (TTFB) on a cache hit because the CDN can immediately deliver the content to the end user without having to make an origin pull. 

   An origin pull occurs anytime the CDN server needs to pass a request to the origin server. This typically occurs on a cache miss. On an origin pull, the CDN will cache the content contained in the origin server's response. Subsequent requests for the same content will result in a cache hit and lower latency for end users.

#. You will notice a series of 'Misses' after refreshing the page serveral times. The reason the requests are identified as 'misses' is due to the 'Cache-Control' headers that are being injected into the request/resonse and origin caching. Distributed Cloud CDN allows you to configure advanced "Header Controls' and additional 'Cache Options'. 

#. Lets go back into the CDN Distribution configuration by navigating to Manage > Distributions. 

#. Under the 'Actions' Column, click the ellipses (ie. three dots), then select Manage Configuration.

     .. image:: _static/lab6-017.png
     
     .. image:: _static/lab6-018.PNG

#. In the upper right hand corner, select 'Edit Configuration'.

     .. image:: _static/lab6-019.PNG
     
#. At the bottom of the screen, under 'Advanced Configuration', select the 'Show Advanced Fields' toggle button.

     .. image:: _static/lab6-020.PNG
     
     .. image:: _static/lab6-021.PNG

#. Under 'More Options' > 'Header Control' select 'Configure'

     .. image:: _static/lab6-022.PNG
     
#. We are now going to remove the 'Cache-Control' header from both the origin request and response. Select 'Configure' under the 'Remove Origin Request Header' option. 

     .. image:: _static/lab6-023.PNG
    
#. Select 'Add Item'

          .. image:: _static/lab6-024.PNG
	  
#. Enter 'Cache-Control' as the header name. Then select 'Apply' at the bottom of the screen.

          .. image:: _static/lab6-025.PNG

#. Perform the same step for the 'Remove Response Header' option. 
     
     .. image:: _static/lab6-025.PNG
     
#. Select 'Add Item'

     .. image:: _static/lab6-026.PNG
     
#. Enter 'Cache-Control' as the header name. Then select 'Apply' at the bottom of the screen.

     .. image:: _static/lab6-027.PNG

#. You will now see the 'Remove Origin Request Headers' and 'Remove Response Headers' configured. Click 'Apply' at the bottom of the screen. 

     .. image:: _static/lab6-028.PNG
     
#. You will now be returned to the main Distributed configuration. The final step is to disable caching from the origin server for demoonstration purposes. Select 'Configure' under the 'Cache Options'.

     .. image:: _static/lab6-029.PNG

#. Under the 'Cache Settings' menu, select 'Disable Cache' to disable the caching of content from the origin server. 

     .. image:: _static/lab6-030.PNG
     
#. Once 'Header Control' and 'Cache Options' are configured click Save and Exit at the bottom. 

     .. image:: _static/lab6-031.PNG
     
#. With the advanced options configured, we can now retest/refresh the application to see the new results. 


#. Lab Completed!
