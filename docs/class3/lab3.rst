Lab 3: Exploring Security and Performance Dashboard, and Leveraging AI Assistant
====================================================================

In this final lab, you will review the Distributed Cloud Security and Performance dashboards to observe how Service Policies and Routes configured in previous labs are enforced in real time. This lab highlights how performance metrics such as request volume, response codes, latency, and upstream health can be correlated with security events to help teams better understand overall application behavior.

Finally, you will explore Distributed Cloud AI Assistant, which provides contextual explanations for security events, including what violation occurred, why it was triggered, and recommended mitigation or tuning guidance.

By the end of the lab, you will understand how to validate enforcement, investigate anomalies, correlate performance impact, and leverage AI driven insights to accelerate security analysis.

**Expected Lab Time: 30 minutes**

Task 1: Review Security Dashboard
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will explore the Distributed Cloud Security Dashboard to monitor and investigate security events impacting their HTTP Load Balancer. They will review high level metrics, drill into specific attack signatures and violations, apply filters to isolate relevant traffic, and examine detailed request data. Students will also learn where to take operational action and leverage built-in tools to support investigation and mitigation.

1. If you are not still logged into the Distributed Cloud Console, logon at: 

     https://f5-xc-lab-app.console.ves.volterra.io/  
     
2. If you are at the home landing page, select the **Web App & API Protection** tile.                                              
                                                                                                                                    
    |Web-App-Tile|                                                                                                                  
                                                                                                                                    
    If you are already in a workspace you can get to the **Web APP & API Protection** workspace from the top navigation bar, by selecting the **Web App & API Protection** workspace from the dropdown menu.                                                    
                                                                                                                                    
    |Web-App-Dropdown|

3. Click on **Security** under the **Overview** menu on the top left hand corner. 

    |security|
    
4. This will display the security dashboard in the right pane. The initial view provides a high level snapshot of security activity within the namespace, including Threat Intelligence detections, BOT traffic, DDoS events, WAF violations, and other security related events. This overview enables teams to quickly assess the overall security posture and identify areas that may require further investigation.

    |securitydb|
    
5. Scroll down the right pane to review the additional metrics displayed in the dashboard. Continue to the bottom of the page and locate the **Delivery Resources** section. This section lists all HTTP Load Balancers configured within the namespace. In this lab, you will see only one load balancer; however, in a production environment, this view would display all deployed load balancers. From this view, you can quickly assess key security insights per load balancer, including the number of security events observed, overall threat level, and whether a WAF policy is enabled or disabled. This provides an operational snapshot of the security posture for each load balancer

    |lbsecuritysum|
    
6. Let’s take a deeper look at the security events associated with the load balancer. Click on your <your-namespace> load balancer to drill into the security events. 

    |lblink|
    
7. This dashboard provides a comprehensive view of the security events impacting the load balancer. As you scroll down, you will notice a series of prebuilt graphs and metrics designed to present a holistic view of security activities and trends. 

Let’s begin at the top and review several of these graphs in more detail to better understand the insights they provide.

You can easily confirm you are viewing the load balancer specific security dashboard by referencing the **HTTP Load Balancer** name displayed at the top of the page (see Box 1). If data is not immediately visible, adjust the time range and/or click refresh to populate the dashboard with recent events (see Box 2).

**Tip:** You can click the down arrow next to the load balancer name to display a list of all the HTTP load balancers within the namespace. This menu allows you to quickly switch between load balancers and view their respective security dashboards without navigating away from the page.

    |lbsecsummary|

The dashboard includes a variety of graphs and visualizations. Some graphs such as API Security, Bot Defense, and Client-Side Defense require additional configuration and are outside the scope of this lab. In this exercise, we will focus on the core metrics that are already populated, helping you become familiar with how to interpret the dashboard and extract meaningful security insights

Let's start with **Top Attacked** The Top Attacked section displays a list of domains that have generated the highest number of security incidents within the selected time range.

In this lab environment, you will see only one domain associated with the load balancer. However, in a production deployment where a single load balancer may serve multiple domains this view can quickly highlight which domains are experiencing the most security activity and may require closer investigation. Throughout the Distributed Cloud Console, most graphs and objects are interactive and provide additional detail.

Within the **Top Attacked** tile, you can click the drop-down arrow next to Domain to switch the view to Path. This allows you to pivot from identifying the most targeted domains to analyzing specific application paths generating security incidents.

    |topattack|
    
Let's review some more information, scroll down the dashboard a little ways until you see the following tiles: Top Attacks by Signature, Top Attacks by Attack Types, Top Attacks by Violations, and Top Attacks by Threat Campaigns. 

These tiles provide deeper insight into the most frequently observed attack activity across different security categories.

- Top Attacks by Signature – Attack signatures are specific rules or patterns used to detect known malicious payloads or behaviors in requests and responses. This tile highlights the exact signatures most frequently triggered.

- Top Attacks by Attack Types – Attack types group related signatures into broader categories (such as SQL Injection or Cross-Site Scripting). This view helps you quickly understand the general class of attacks targeting the application.

- Top Attacks by Violations – Violations represent the specific policy enforcement failures triggered during request inspection. This tile shows which security rules or policy checks (for example, illegal meta characters, malformed requests, or protocol compliance issues) are being triggered most often. It helps identify whether traffic is failing due to attack behavior, policy misconfiguration, or legitimate application patterns that may require tuning.

- Top Attacks by Threat Campaigns – Threat Campaign signatures are based on active, “in-the-wild” attack patterns. These detections include contextual intelligence about known attack campaigns and their intent, helping teams understand whether traffic is part of a broader threat activity.

Observe the entries listed under **Top Attacks by Signature** and **Top Attacks by Attack Types** (see arrows). These entries are interactive and allow you to drill deeper into the associated security analytics. Click on one of the items under **Top Attacks by Signature** to explore the detailed events and gain additional insight into the specific attack activity.

    |topattacks|

8. When you click an attack signature from the Dashboard view, you are automatically redirected to the Security Analytics dashboard (see number 1). Notice that the system applies a filter for the selected signature, allowing you to view only events associated with that specific attack signature (see number 2).

The bar graph displays the number of requests that matched this signature within the selected time range (see number 3).

Below, in section number 4, you will see the individual request entries associated with the signature. We will examine these in more detail in the following steps.

For now, click **Forensics** in the upper right corner (see number 5). This expands the Forensics panel, providing additional context such as source IP address, ASN, and country of origin.

**Tip:** You can return to the previous view by clicking Dashboard, and then select Security Analytics to navigate back to this tab. Please note if you do this you will lose the filter, flow step 7 above to return to the filtered security event.

    |securityanalytics|

9. The Filter option (see number 1) is a powerful tool when analyzing large volumes of security events. It allows you to quickly narrow results based on specific criteria such as signature, violation, source IP, country, path, or j4 fingerprint to name a few criteria, making it easier to isolate relevant activity and accelerate investigation.

**Tip:** You can also save your configured filter by clicking the Save Filter icon (see number 2). This allows you to quickly reapply the same criteria in the future without rebuilding the query, improving efficiency during repeated investigations or ongoing monitoring.

    |filter|

Let’s apply a filter to display only requests associated with a specific application path of /login that we created in the previous lab. This allows you to narrow the results and focus on security activity targeting that particular endpoint, making analysis more precise and efficient.

Click on Add Filter

    |addfilter|

In the Search bar, type in **req_path**, and select it from the drop down list. 

    |reqpath|


Select the word **In** in the **Select Operator** menu

    |In|
  
  Select the path **/login/** in the **Assign Values or Type to Add**   
    
    |login|

You should now see security events filtered to the specific attack signature ID 2000003909 and the request path /login/.

Although traffic volume in this lab is minimal, filtering significantly reduces noise and allows you to focus on the precise security events you are investigating. In production environments where thousands of events may be generated, this level of filtering becomes essential for efficient analysis and incident response.

    |filtered|

10. This next step we will evaluate the individual requests. Scroll down until you see the list of requests.

This view provides a summary of each request including source IP address, HTTP method used in the request, HTTP response code, Event Type, Mode (Block/Unblocked), Authority (domain), path, and Action. This allows you to quickly assess how each request was handled, and where the request originated.

Click on the three dots under **Actions** (see number 1). From here, you can take operational actions on the request, such as creating an exception. You will also notice the **Explain with AI** option, which helps interpret the security event. We will explore this capability in the final task of the lab.

For now, click the chevron (>) number 2, next to one of the requests to expand and review its detailed information.

    |evalrequest|
    
11. With the request expanded, you can view additional security details associated with the request. This includes where the request originated (such as source IP address, ASN, region, and country), as well as the contents of the request itself.

    |secinfo1|
    
Scroll down further to review any additional details associated with the request. Depending on the type of security event and the request characteristics, you may see expanded information such as violation context or matched signatures.

Keep in mind that some requests may display limited information. This does not indicate that the security inspection is not functioning it simply means that fewer inspection details were relevant or triggered for that specific request.

    |secinfo2|
    |secinfo3|
    
This is the end of this task. You have explored the Distributed Cloud Security Dashboard and learned how to analyze, investigate, and take action on security events impacting your HTTP Load Balancer. You reviewed high level security trends, drilled into attack signatures and violations, applied filters to isolate specific activity, and examined detailed request-level data. You also learned how to use interactive dashboard elements and operational tools to support efficient investigation and mitigation.

Task 2: Review Performance Dashboard
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will explore the Distributed Cloud Performance Dashboard to analyze application traffic and health metrics. They will review key indicators such as request volume, response codes, latency, and upstream health to better understand application behavior. By correlating performance data with security events, you will gain insight into whether traffic patterns are related to malicious activity or backend application performance issues.

1. Click on **Performance**, under the **Overview** menu on the to left hand corner.

    |performance|

2. The Performance Dashboard provides several high level metrics to help you quickly assess the health and activity of the load balancer.

At the top, the Health tile shows the overall status of load balancers in the namespace, categorized as Good, Moderate, Critical, or Unknown. This metric displays the health between Distributed Cloud Regional Edge the origin servers. This gives you an immediate understanding of system health.

The Active Alerts tile highlights any current alerts, categorized by severity (Critical, Major, or Minor). This helps teams quickly determine if there are operational attention is required. 

The Active Configuration section summarizes how many load balancers are deployed and which security services are enabled, such as WAF, Bot Defense, API Discovery, or DDoS Detection and Auto Mitigation.

Further down, the Traffic Overview section displays total requests, total errors, and requests to origin. These metrics help you evaluate traffic volume and identify potential application or backend issues.

Lastly, the Throughput section shows request and response bandwidth over time, allowing you to monitor traffic load and detect abnormal spikes or drops in activity.

Together, these metrics provide a comprehensive view of load balancers performance and application health within the namespace.

    |pdashboard|

3. Let’s take a closer look at the load balancer specific performance metrics. Scroll to the bottom of the page and click on <your-namespace> load balancer name.

    |lbperformance|

4. This load balancer Performance Dashboard provides a detailed view of application health and traffic behavior. Similar to the Security Dashboard, you can confirm you are in the load balancer–specific performance view by referencing the HTTP Load Balancer field at the top of the page. 

A brief overview of the key sections: 

The **Application Health** tile displays an overall health score based on regional edge health checks to the configured origin pools, providing an immediate indication of system stability. Adjacent to it, **Active Alerts** highlights any current operational or high level security issues that may require attention.

The **End-to-End Latency** section breaks down request timing across the client, load balancer, and origin server, helping you identify where delays may be occurring within the request flow. This is very powerful because it helps identify where there is a potential bottleneck. 

The **Requests** section summarizes traffic rate, total requests, error rate, and drop rate, allowing you to quickly assess application reliability and detect anomalies.

Finally, the **Throughput** metrics show upstream and downstream data transfer, providing insight into bandwidth usage and traffic volume.

Together, these metrics help you evaluate performance, identify bottlenecks, and validate overall application health for the selected load balancer.

    |lbpmetrics|

5. In the next few steps, we will review additional dashboard views that provide a broader perspective, enabling you to quickly identify potential performance or connectivity issues 

Let's start with **Origin Servers**. Click on **Origin Servers** from the top menu.

Recall the Application Health metric from the main dashboard. The Origin Servers metrics shown in this view directly contribute to that overall health score.

If the Application Health score drops below 100 or changes to a warning state (yellow), it typically indicates that one or more regional edges are unable to successfully perform health checks against the backend origin servers.

This view allows you to investigate potential communication or connectivity issues particularly useful when users report slowness or availability problems from a specific geographic region. By reviewing origin health and regional status here, you can quickly determine whether the issue is related to backend reachability or edge-to-origin connectivity.

    |originservers|

6. Click on **Alerts** from the top menu. The alerts displayed here are the same alerts summarized in the Active Alerts tile on the main dashboard.

This view provides more information about each alert, allowing you to investigate the underlying condition, severity level, and impacted resources. In this lab, the alert is WAF related, so you will see high level information associated with security event. To investigate the specific violation or event in more detail, navigate back to the Security dashboard.

In this Alerts view, you can identify health check failures, operational issues, and other performance or connectivity related alerts. While the information presented here is high level, it helps you quickly narrow down the potential area of concern before drilling into the Security or Performance dashboards for deeper analysis.

    |alerts|

7. Next, navigate to the **Requests** dashboard view.

This view provides an overall summary of the requests and responses processed by the selected load balancer. From here, you can drill down into individual requests to access more granular details.

You can also use the **Filter** option at the top to refine the requests, similar to how you filtered events in the security dashboard in previous task. For example, you can filter by specific request attributes such as path, method, or client IP. Additionally, you can click on a response code to quickly include or isolate requests matching that code.

Take a moment to apply a filter or deselect/select a response code to see how the view dynamically updates. If you choose to use a **Filter**, in the **Filter** box select **req_path IN** and choose one of the available paths from the drop down list. 

    |requests|
    
8. You can get more detailed information about a request by clicking on the chevron (>) to expand the request. This view will provide you information about source and destination, connection duration, latency, along with other device specific information, and security related information.

Click the chevron ( > ) next to one of the requests to expand it and review the detailed information.

    |perfdetail1|
    
This concludes this task. You have explored the Distributed Cloud Performance Dashboard and learned where to find key metrics and how to interpret metrics such as request rate, latency, error rates, throughput, and origin health to help you gain a more complete understanding of your application’s overall health and behavior.

Task 3: Leveraging AI Assistant
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task, you will explore Distributed Cloud AI Assistant and learn how it can assist with security investigations. You will use AI Assistant to analyze a security events and receive contextual explanations of what violation occurred, why it was triggered, and what mitigation options may be appropriate. 

1. Click on **Security** under the **Overview** menu on the top left hand corner. 

    |security|
    
2. In the Security dashboard, scroll down and click on your <your-namespace> load balancer.

    |lblink|

3. Click on **Security Analytics** from the top horizontal menu. If you don't see any security events, adjust the timeframe to an hour, and click on Refresh. 

    |secanalytics|
    
4. Scroll down to the list of security events and pick an event. Follow the event row to the right and click the three dots under **Actions**, then choose **Explain with AI**. This will open the AI Assistant panel, which will automatically generate a contextual explanation of the selected security event, including details about the violation, why it was triggered, and suggest mitigatioh.

    |explainAI|
    
5. In the AI Assistant window, you can view the exact prompt being submitted for analysis. After a few seconds, the AI Assistant will return its response with a contextual analysis of the event. The response typically includes details such as the time of the event, the source of the request, the specific security violation or threat detected, and recommended follow-up actions you can take to mitigate or tune your security policy.

    |explanation|
 
6. Scroll down to the bottom of the AI Assistant response and click the **Detection Details** hyperlink. This will expand the section to display the enforcement action taken by the policy for example, Blocked or Unblocked along with the specific violations that were triggered for the request.

    |detectiondetials|

7. If you would like additional information about the signature or want to ask a follow up question there a couple of ways to go about this.

First, you can select one of the prompt suggestions displayed above the **Type or Select a prompt** field. These suggestions are context aware and based on your previous query.

    |suggestion1|
    
Second, click inside the **Type or Select a prompt** text box to view a list of additional suggested prompts. These options help guide deeper analysis without requiring you to manually input a question.

    |suggestion2|

Lastly, you can enter your own custom prompt. As shown in the screenshot, the assistant provides guidance and may include related Distributed Cloud documentation links to support further research.

    |suggestion3|
    
    |suggestion4|

Take a moment to try a suggested prompt or create a custom prompt to explore the AI Assistant’s capabilities.

+----------------------------------------------------------------------------------------------+ 
 **End of Lab 3**  

This concludes Lab 3. 

In this lab, you learned how to:  

- Analyze and investigate security events using the Distributed Cloud Security Dashboard, including filtering, drilling into request details, and taking operational action.
- Interpret Performance Dashboard metrics to evaluate application health, identify latency or connectivity issues, and correlate performance data with security activity.
- Leverage Distributed Cloud AI Assistant to understand violations, assess impact, and evaluate mitigation or policy tuning options.
                            
+----------------------------------------------------------------------------------------------+
    |labend|                                                                 
+----------------------------------------------------------------------------------------------+

.. |Web-App-Tile| image:: _images/Web-App-Tile.png
   :width: 800px
.. |Web-App-Dropdown| image:: _images/Web-App-Dropdown.png
   :width: 800px
.. |security| image:: _images/security.png
   :width: 400px
.. |securitydb| image:: _images/securitydb.png
   :width: 800px
.. |lbsecuritysum| image:: _images/lbsecuritysum.png
   :width: 800px
.. |lblink| image:: _images/lblink.png
   :width: 800px
.. |lbsecsummary| image:: _images/lbsecsummary.png
   :width: 800px
.. |topattack| image:: _images/topattack.png
   :width: 600px
.. |topattacks| image:: _images/topattacks.png
   :width: 800px
.. |securityanalytics| image:: _images/securityanalytics.png
   :width: 800px
.. |filter| image:: _images/filter.png
   :width: 800px
.. |addfilter| image:: _images/addfilter.png
   :width: 400px
.. |reqpath| image:: _images/reqpath.png
   :width: 400px
.. |In| image:: _images/In.png
   :width: 400px
.. |login| image:: _images/login.png
   :width: 800px
.. |filtered| image:: _images/filtered.png
   :width: 800px
.. |evalrequest| image:: _images/evalrequest.png
   :width: 800px
.. |secinfo1| image:: _images/secinfo1.png
   :width: 800px
.. |secinfo2| image:: _images/secinfo2.png
   :width: 800px
.. |secinfo3| image:: _images/secinfo3.png
   :width: 800px
.. |performance| image:: _images/performance.png
   :width: 800px
.. |pdashboard| image:: _images/pdashboard.png
   :width: 800px
.. |lbperformance| image:: _images/lbperformance.png
   :width: 800px
.. |lbpmetrics| image:: _images/lbpmetrics.png
   :width: 800px
.. |originservers| image:: _images/originservers.png
   :width: 800px
.. |alerts| image:: _images/alerts.png
   :width: 800px
.. |requests| image:: _images/requests.png
   :width: 800px
.. |perfdetail1| image:: _images/perfdetail1.png
   :width: 800px
.. |secanalytics| image:: _images/secanalytics.png
   :width: 800px
.. |explainAI| image:: _images/explainAI.png
   :width: 800px
.. |explanation| image:: _images/explanation.png
   :width: 800px
.. |detectiondetials| image:: _images/detectiondetials.png
   :width: 800px
.. |suggestion1| image:: _images/suggestion1.png
   :width: 800px
.. |suggestion2| image:: _images/suggestion2.png
   :width: 600px
.. |suggestion3| image:: _images/suggestion3.png
   :width: 800px
.. |suggestion4| image:: _images/suggestion4.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
      
