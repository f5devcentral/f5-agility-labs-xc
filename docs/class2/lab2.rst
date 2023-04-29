Lab 2: Reviewing Signature-based Bot Strategies and enabling F5 Distributed Cloud BotDefense
============================================================================================

The following lab tasks will guide you through a review of signature-based Bot protections
already available via the Web Application Firewall configuration. The security configuration
will then be extended through F5 Distributed Bot Defense, an AI-driven, behavioral security 
feature set to protect the previously configured application from advanced Bot threats. 

Task 1: Reviewing Signature-based Bot protection   
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In this task you will review the Bot signature configuration and view logged security events.
This lab will begin back in the F5 Distributed Cloud Console.

+----------------------------------------------------------------------------------------------+
| 1. Return to **Web App & API Protection**, in the left-hand navigation menu, click on        |
|                                                                                              |
|    **App Firewall**.                                                                         |
|                                                                                              |
| 2. On your App Firewall policy **<namespace>-appfw**, click the three dots in the **Actions**|
|                                                                                              |
|    column and then click **Manage Configuration**.                                           |
|                                                                                              |
| 3. Click **Edit Configuration** in the top right corner.                                     |
+----------------------------------------------------------------------------------------------+
| |lab001|                                                                                     |
|                                                                                              |
| |lab002|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 4. Using the left-hand navigation, click **Detection Settings**.  In the **Detection**       |
|                                                                                              |
|    **Settings** section, click the **Signature-Based Bot Protection** dropdown menu.         |
|                                                                                              |
| 5. From the **Signature-Based Bot Protection** dropdown menu, select **Custom**.             |
+----------------------------------------------------------------------------------------------+
| |lab003|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. In the expanded configuration window, observe the three Bot signature categories;         |
|                                                                                              |
|    **Malicious, Suspicious,** and **Good**. Also observe the actions **Block, Ignore**, and  |
|                                                                                              |
|    **Report** which can be reviewed by selecting one of the dropdowns.                       |
|                                                                                              |
| 7. Click **Cancel and Exit** to leave this window.                                           |
+----------------------------------------------------------------------------------------------+
| |lab004|                                                                                     |
|                                                                                              |
| |lab005|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 8. Open a terminal window or DOS prompt on your respective client and issue the following    |
|                                                                                              |
|    **curl** command: *curl -v http://<namespace>.lab-sec.f5demos.com*.                       |
|                                                                                              |
| 9. Observe the **User Agent** and response content.                                          |
|                                                                                              |
| .. note::                                                                                    |
|    *curl is installed on Windows10+, and is available on most Linux or MAC platforms*.       |
+----------------------------------------------------------------------------------------------+
| |lab006|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 10. Return to the F5 Distributed Cloud Console, within **Web App & API Protection** in the   |
|                                                                                              |
|     left-hand navigation menu, click on **Dashboards > Security Dashboard**                  |
+----------------------------------------------------------------------------------------------+
| |lab007|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 11. Within the **Security Dashboard**, scroll down to the **Load Balancer** section and click|
|                                                                                              |
|     the configured Load Balancer *<namespace>-lb*.                                           |   
+----------------------------------------------------------------------------------------------+
| |lab008|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 12. Select **Security Events** from the horizontal navigation.                               |
|                                                                                              |
| 13. Locate the most recent security event, which should be your curl request. Expand the     |
|                                                                                              |
|     security event as you have done in prior exercises to observe the "Suspicious" Bot       |
|                                                                                              |
|     reporting. Remember the setting for Suspicious Bot was set to *Report* from Step 6 above.|
|                                                                                              |
| .. note::                                                                                    |
|    *You can review the steps of Lab1, Task 3, Step 8 to locate the information detail*.      |  
+----------------------------------------------------------------------------------------------+
| |lab009|                                                                                     |
+----------------------------------------------------------------------------------------------+

Task 2: Enabling F5 Distributed Cloud BotDefense
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following steps will enable you to deploy F5 Distributed Cloud BotDefense and understand its
implementation.

+----------------------------------------------------------------------------------------------+
| 1. Open another tab in your browser (Chrome shown), navigate to your application/Load        |
|                                                                                              |
|    Balancer configuration: **http://<namespace>.lab-sec.f5demos.com**.                       |
|                                                                                              |
| 2. Enable developer tools (Chrome shown (use F12)) and click on the **Network** tab.         |
|                                                                                              |
| 3. Using the 3 bars/menu icon (top right), navigate to **Access** link.                      |
|                                                                                              |
| 4. In the resulting login screen use the following values to login and click **Submit**      |
|                                                                                              |
|    - **Identity:** **user@f5.com**                                                           |
|    - **Token:** **password**                                                                 |
+----------------------------------------------------------------------------------------------+
| |lab010|                                                                                     |
|                                                                                              |
| |lab011|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 5. In the Developer window, find the **POST** to **auth.php**. *You can also use the filter* |
|                                                                                              |
|    *to find auth.php*. Select the respective line as shown.                                  |
|                                                                                              |
| 6. Select the **Request** tab in the payload window that appears and observe that you only   |
|                                                                                              |
|    see limited form POST data (identity, token, & submit).                                   |
+----------------------------------------------------------------------------------------------+
| |lab012|                                                                                     |
|                                                                                              |
| |lab013|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 7. Return to the Load Balancer in the F5 Distributed Cloud Console, *Manage > Load Balancer* |
|                                                                                              |
|    *> HTTP Load Balancers* and use the **Action Dots** and click **Manage Configuration**    |
|                                                                                              |
| 8. Click **Edit Configuration** in the top right-hand corner.                                |
+----------------------------------------------------------------------------------------------+
| |lab014|                                                                                     |
|                                                                                              |
| |lab015|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 9. Click **Bot Protection** in the left-hand navigation.                                     |
|                                                                                              |
| 10. In the **Bot Protection** section, use the drop down under **Bot Defense** and select    |
|                                                                                              |
|     **Enable**.                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab016|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 11. In the new **Bot Defense Policy** section, click **Configure**.                          |
|                                                                                              |
| 12. In the new **Protected App Endpoints** window, under **App Endpoint Type**,  click       |
|                                                                                              |
|     **Configure**.                                                                           |
|                                                                                              |
| 13. In the new **App Endpoint Type** window, click  **App Item**.                            |
+----------------------------------------------------------------------------------------------+
| |lab017|                                                                                     |
|                                                                                              |
| |lab018|                                                                                     |
|                                                                                              |
| |lab019|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 14. In the **Application Endpoint** input the following values in the fields identified:     |
|                                                                                              |
|     * **Metadata\\Name:** *auth-bot*                                                         |
|     * **HTTP Methods:** *POST*                                                               |
|     * **Protocol:** *BOTH*                                                                   |
|     * **Path\\Path Match:** *Prefix*                                                         |
|     * **Prefix:** */auth.php*                                                                |
|     * **Bot Traffic Mitigation\Select Bot Mitigation Action:** *Block*                       |
|                                                                                              |
| 15. Scroll to the bottom and click **Apply**.                                                |
+----------------------------------------------------------------------------------------------+
| |lab020|                                                                                     |
|                                                                                              |
| |lab021|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 16. Click **Apply** on the **App Endpoint Type** window.                                     |
|                                                                                              |
| 17. Observe the additional positioning options in the **JavaScript Insertion** section of    |
|                                                                                              |
|     the **Protected App Endpoints** window, then click **Apply**.                            |
+----------------------------------------------------------------------------------------------+
| |lab022|                                                                                     |
|                                                                                              |
| |lab023|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 18. Observe that the **Bot Defense Policy** is now configured.                               |
|                                                                                              |
| 19. Click **Other Settings** in the left-hand navigation or scroll to the bottom on the      |
|                                                                                              |
|     **HTTP Load Balancer** screen, and click **Save and Exit**.                              |
+----------------------------------------------------------------------------------------------+
| |lab024|                                                                                     |
|                                                                                              |
| |lab025|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 20. Repeat Task 2 Steps 1-6.  Note you many need to close your browser and clear cookies     |
|                                                                                              |
| 21. Observe now that there is additional telemetry being passed in the POST request.  This   |
|                                                                                              |
|     telemetry will be used to determine if the connecting client is an Automated Bot.        |
+----------------------------------------------------------------------------------------------+
| |lab027|                                                                                     |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **End of Lab 2:**  This concludes Lab 2, feel free to review and test the configuration.     |
|                                                                                              |
| A brief presentation will be shared prior to the beginning of Lab 3.                         |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. |lab001| image:: _static/lab2-001.png
   :width: 800px
.. |lab002| image:: _static/lab2-002.png
   :width: 800px
.. |lab003| image:: _static/lab2-003.png
   :width: 800px
.. |lab004| image:: _static/lab2-004.png
   :width: 800px
.. |lab005| image:: _static/lab2-005.png
   :width: 800px
.. |lab006| image:: _static/lab2-006.png
   :width: 800px
.. |lab007| image:: _static/lab2-007.png
   :width: 800px
.. |lab008| image:: _static/lab2-008.png
   :width: 800px
.. |lab009| image:: _static/lab2-009.png
   :width: 800px
.. |lab010| image:: _static/lab2-010.png
   :width: 800px
.. |lab011| image:: _static/lab2-011.png
   :width: 800px
.. |lab012| image:: _static/lab2-012.png
   :width: 800px
.. |lab013| image:: _static/lab2-013.png
   :width: 800px
.. |lab014| image:: _static/lab2-014.png
   :width: 800px
.. |lab015| image:: _static/lab2-015.png
   :width: 800px
.. |lab016| image:: _static/lab2-016.png
   :width: 800px
.. |lab017| image:: _static/lab2-017.png
   :width: 800px
.. |lab018| image:: _static/lab2-018.png
   :width: 800px
.. |lab019| image:: _static/lab2-019.png
   :width: 800px
.. |lab020| image:: _static/lab2-020.png
   :width: 800px
.. |lab021| image:: _static/lab2-021.png
   :width: 800px
.. |lab022| image:: _static/lab2-022.png
   :width: 800px
.. |lab023| image:: _static/lab2-023.png
   :width: 800px
.. |lab024| image:: _static/lab2-024.png
   :width: 800px
.. |lab025| image:: _static/lab2-025.png
   :width: 800px
.. |lab026| image:: _static/lab2-026.png
   :width: 800px
.. |lab027| image:: _static/lab2-027.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
