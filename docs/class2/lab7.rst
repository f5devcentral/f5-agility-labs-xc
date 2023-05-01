Lab 7: Client-Side Defense 
=================================

F5® Distributed Cloud Client-Side Defense (CSD) provides a multi-phase protection system 
that protects web applications against Formjacking, Magecart, and other malicious JavaScript attacks. 

This multi-phase protection system includes detection, alerting, and mitigation.

* **Detection**: A continuously evolving signal set allows CSD to understand when scripts on web pages 
  start reading PII or exhibit signs of exfiltration.

* **Alerting**: CSD generates timely alerts on malicious changes in behavior of scripts, provided by a 
  continuously improving Analysis Engine. 
  The Analysis Engine contains a machine learning component for accurate and informative analysis 
  and provides details on the behavior of malicious script to help troubleshoot and identify the root 
  cause.

* **Mitigation**: CSD detects threats in real-time and provides enforcement with one-click mitigation. 
  CSD leverages the same obfuscation and signal technology as F5® Distributed Cloud Bot Defense, 
  delivering unparalleled efficacy.

The following lab tasks will guide you through the REVIEW of the Client-Side Defense,
which can be used to implement a variety of security controls to monitor and mitigate fraudulent
requests at the client devices. 

Task 1: Navigate to the Client-Side Defense Tile 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will navigate to the client side defense tile to start reviewing CSD options.

+----------------------------------------------------------------------------------------------+
| 1. On the left top click the F5 red ball.                                                    |
|                                                                                              |
|    Under Common Services find the tile for **Client-Side Defense**                           |
+----------------------------------------------------------------------------------------------+
|  |lab001|                                                                                    |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
|  Click the Client-Side Defense tile.                                                         |
+----------------------------------------------------------------------------------------------+
|  |lab002|                                                                                    |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
|The CSD Monitoring Dashboard page displays the suspicious network interactions with additional|
|                                                                                              |
|information for deciding whether to mitigate or allow a suspicious domain. When a web page    |
|                                                                                              |
|with CSD protection is loaded on the end-user’s browser, scripts running on that webpage      |
|                                                                                              |
|interact with other domains.                                                                  |
|                                                                                              |
|The Suspicious Domains list displays a list of the domains that those scripts interact with   |
|                                                                                              |
|and which CSD detected to be potentially malicious.                                           |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 2. Review the existing Dashboard and Dashboard Elements                                      |
|                                                                                              |
| .. note::                                                                                    |
|    *Your data might be different than the screen grab shown below*                           |
+----------------------------------------------------------------------------------------------+
| |lab003|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 3. Click on a domain and review the details in the flyout.                                   |
|                                                                                              |
|    Review the status, details, risk score ,risk reasoning, etc. Close the flyout.            |
+----------------------------------------------------------------------------------------------+
| |lab004|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. **Review** the Actions available by clicking the three dots under Action.                 |
|                                                                                              |
|    Add to allow list                                                                         |
|                                                                                              |
|    Add to mitigate list                                                                      |
+----------------------------------------------------------------------------------------------+
| |lab005|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. Click **Network** under Monitoring on the left side.                                      |
+----------------------------------------------------------------------------------------------+

The CSD Monitoring Network page displays several tabs for displaying holistic network data, 
which can assist you when deciding whether to mitigate or allow a suspicious domain:

* **All Domains:** When a web page with CSD protection is loaded, scripts running on that web page interact 
with other domains. The All Domains list displays a list of the domains that those scripts interact with.

* **Mitigate List:** Displays a list of domains that the user has assigned for mitigation. 
When a domain is assigned for mitigation, CSD blocks that domain and it cannot be accessed 
by any script running on the end-user's browser when accessing a CSD protected web page.

* **Allow List:** Displays a list of domains that the user has decided don't need mitigation and 
are allowed free access.

+----------------------------------------------------------------------------------------------+
| |lab006|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. Click **Script List** under Monitoring on the left side.                                  |
|                                                                                              |
| .. note::                                                                                    |
|    *Your data might be different than the screen grab shown below*                           |
+----------------------------------------------------------------------------------------------+
| |lab007|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. Click on a URL under "Script Name" and review the overview screen                         |
|                                                                                              |
|    Script Behaviors Over Time                                                                |
+----------------------------------------------------------------------------------------------+
| |lab008|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. Click **Form Fields** under Monitoring on the left side.  This shows any form fields      |
|                                                                                              |
|    that are protected by CSD                                                                 |
|                                                                                              |
| .. note::                                                                                    |
|    *Your data might be different than the screen grab shown below. Also you may not have*    |
|                                                                                              |
|    *any data based on the configuration of the CSD*.                                         |
+----------------------------------------------------------------------------------------------+
| |lab009|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **End of Lab 7:**  This concludes Lab 7.                                                     |
|                                                                                              |
| A Q&A session will begin shortly after conclusion of the overall lab.                        |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. |lab001| image:: _static/lab7-001.PNG
   :width: 800px
.. |lab002| image:: _static/lab7-002.PNG
   :width: 800px
.. |lab003| image:: _static/lab7-003.PNG
   :width: 800px
.. |lab004| image:: _static/lab7-004.PNG
   :width: 800px
.. |lab005| image:: _static/lab7-005.PNG
   :width: 800px
.. |lab006| image:: _static/lab7-006.PNG
   :width: 800px
.. |lab007| image:: _static/lab7-007.PNG
   :width: 800px
.. |lab008| image:: _static/lab7-008.PNG
   :width: 800px
.. |lab009| image:: _static/lab7-009.PNG
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
