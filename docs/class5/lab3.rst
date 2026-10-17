Lab 3: Human-Simulated Stuffing Attack
======================================

**Scenario Lab 3**

In this lab, you will configure Openbullet to simulate human input on a selenium-controlled browser. 
Since a browser is being used as the client, the POST will contain JavaScript containing telemetry about 
the client. Note: Telemetry allows the engine to assign a risk factor to a threat. For some attacks, 
like a slow-moving “human” stuffing attack, the engine needs to see enough data to positively identify 
it as a bot. Therefore, for this attack, you may see some of the initial requests are logged as Human 
but quickly the bot will be flagged.

**Expected Lab Time: 30 minutes**

Task 1: Execute a Human Credential Stuffing Attack
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this task you will create a Human credential stuffing attack with our test tool.  The workflow 
is the same as the Basic stuffing attack except you will use the Human config and Human credentials wordlist. 
We will end by reviewing the security requests logs as well as the Bot Defense dashboard for greater insights.


+----------------------------------------------------------------------------------------------+
|  1. RDP or Console into the Windows Jump Host.                                               |
|     Go back to your UDF Deployment page to initiate an *RDP* or *Console* connection into    | 
|     your Windows *JumpHost*.  The username is "user" and the password is "user".             |
|                                                                                              |
|     Click on **Deployment Tab > JumpHost > ACCESS**                                          |
|                                                                                              |
|     |lab1-task3-01a|                                                                         |
|                                                                                              |
|     |lab1-task3-01|                                                                          |
|                                                                                              |
|     |lab1-task3-01b|                                                                         |
|                                                                                              |
|  2. On the home screen double-click the OpenBullet 2 shortcut                                |
+----------------------------------------------------------------------------------------------+
| |lab1-task3-02|                                                                              |
+----------------------------------------------------------------------------------------------+                             
|  3. Click on **Configs** and double-click **"Human"** - this is our credential stuffing      |
|     attack configuration that will simulate a basic Bot.                                     |
+----------------------------------------------------------------------------------------------+
| |lab3-task1-01|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 4. Click the **Navigate to App** block and update the URL field with your load balancer      |
|    namespace.  Click **Save** and **Ok** at the bottom when finished.                        |
+----------------------------------------------------------------------------------------------+
| |lab3-task1-02|                                                                              |
|                                                                                              |
| |lab3-task1-03|                                                                              |
+----------------------------------------------------------------------------------------------+
| 5. From within the same window click **Jobs** then **+New** and finally **Multi-Run**.       |
|                                                                                              |             
+----------------------------------------------------------------------------------------------+
| |lab3-task1-04|                                                                              |
|                                                                                              |
| |lab3-task1-05|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| 6. In the new window, on the top left, click **"Select Config"**, then **Human** and         |
|    finally **Accept** at the bottom.                                                         |
+----------------------------------------------------------------------------------------------+
| |lab3-task1-06|                                                                              |
|                                                                                              |
| |lab3-task1-07|                                                                              |
+----------------------------------------------------------------------------------------------+
| 7. On the top right, click **Select Wordlist**, then select **Credentials-Human** and finally|
|    click **Accept** at the bottom.                                                           |
+----------------------------------------------------------------------------------------------+
| |lab3-task1-08|                                                                              |
|                                                                                              |
| |lab3-task1-09|                                                                              |
+----------------------------------------------------------------------------------------------+
| 8. Now that we have added the **Human** Configuration along with the **Credentials-Human**   |
|    we can finally click **Accept** at the bottom, this will save the Multi-Run Job setup.    |
|                                                                                              |
|    Change the Skip value to 0 (zero) either by typing it or using the minus button finally   |
|    clicking Accept at the bottom.                                                            |
|                                                                                              |
|    **Note:** *Scroll down to find the* **Accept** *button if the screen is too small...*     |
+----------------------------------------------------------------------------------------------+
| |lab3-task1-10|                                                                              |
+----------------------------------------------------------------------------------------------+
| 9. Now you can click on the newly created Job and click **Start** to run the job.            |
+----------------------------------------------------------------------------------------------+
| |lab3-task1-10a|                                                                             |
|                                                                                              |
| |lab3-task1-10b|                                                                             |
|                                                                                              |
+----------------------------------------------------------------------------------------------+


Task 2 : Review the Request Logs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+----------------------------------------------------------------------------------------------+
| 1. Let's review our load balancer request logs - Go to **Web App and API Protection**        |
|    then **Overview** and finally **Security**  (Adjust the time filter as needed)            |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab1-task4-01|                                                                              |
+----------------------------------------------------------------------------------------------+
| 2. Scroll to the bottom and click on your HTTP Load Balancer then into the **Security**      |
|    **overview.**                                                                             |
+----------------------------------------------------------------------------------------------+
| |lab1-task4-02|                                                                              |
+----------------------------------------------------------------------------------------------+
| 3. Click on **View in Bot Defense** button, top right.                                       |
+----------------------------------------------------------------------------------------------+
| |lab3-task2-01|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 4. Look at the Traffic by type, notice the bad bots are still there, but now we have also    |
|    “Telemetry Client” traffic.                                                               |
|                                                                                              |
|    **Note:** Telemetry Clients show up in the “Traffic By Type”. This indicates F5 JS is     |
|    being requested and served to the client to recollect signals from the browser.           |
+----------------------------------------------------------------------------------------------+
| |lab3-task2-02|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 5. Navigate to “Traffic Analyzer” to take a look. You should see two main request types:     |
|    * GETs going to /common.js with an “Action taken” of Not Applicable                       |
|    * POST going to /login/ with an “Action taken” of Continue and Bot reason Threat          |
|      Intelligence, this is Bot defense analyzing the collected signals by the JS and         |
|       identifying Human like behavior by Selenium, you will see this on more advance         |
|       automation.                                                                            |
+----------------------------------------------------------------------------------------------+
| |lab3-task2-03|                                                                              |
+----------------------------------------------------------------------------------------------+
| 5. Take a deeper look clicking on a POST request: •	Threat Intelligence: An attacker used an |
|    automated tool such as Selenium, iMacros, or PhantomJS, or there were other indications   |
|    of automation detected based on F5 signals.                                               |
+----------------------------------------------------------------------------------------------+
| |lab3-task2-04|                                                                              |
+----------------------------------------------------------------------------------------------+



+----------------------------------------------------------------------------------------------+
| **Lab 3 Summary**                                                                            |
|                                                                                              |
|   This lab shows how Distributed Cloud's machine learning capabilities                       | 
|   leverage telemetry in a browser request to identify a bot even if it is capable of         |
|   simulating human activity.  This concludes Lab 3, feel free to review the configuration.   |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+


.. |lab1-task3-01| image:: _static/lab1-task3-01.png
   :width: 800px
.. |lab1-task3-01a| image:: _static/lab1-task3-01a.png
   :width: 800px
.. |lab1-task3-01b| image:: _static/lab1-task3-01b.png
   :width: 800px
.. |lab1-task4-01| image:: _static/lab1-task4-01.png
   :width: 800px
.. |lab1-task4-02| image:: _static/lab1-task4-02.png
   :width: 800px
.. |lab1-task3-02| image:: _static/lab1-task3-02.png
   :width: 800px
.. |lab3-task1-01| image:: _static/lab3-task1-01.png
   :width: 800px
.. |lab3-task1-02| image:: _static/lab3-task1-02.png
   :width: 800px
.. |lab3-task1-03| image:: _static/lab3-task1-03.png
   :width: 800px
.. |lab3-task1-04| image:: _static/lab3-task1-04.png
   :width: 800px
.. |lab3-task1-05| image:: _static/lab3-task1-05.png
   :width: 800px
.. |lab3-task1-06| image:: _static/lab3-task1-06.png
   :width: 800px
.. |lab3-task1-07| image:: _static/lab3-task1-07.png
   :width: 800px
.. |lab3-task1-08| image:: _static/lab3-task1-08.png
   :width: 800px
.. |lab3-task1-09| image:: _static/lab3-task1-09.png
   :width: 800px
.. |lab3-task1-10| image:: _static/lab3-task1-10.png
   :width: 800px
.. |lab3-task1-10a| image:: _static/lab3-task1-10a.png
   :width: 800px
.. |lab3-task1-10b| image:: _static/lab3-task1-10b.png
   :width: 800px
.. |lab3-task1-11| image:: _static/lab3-task1-11.png
   :width: 800px
.. |lab3-task1-12| image:: _static/lab3-task1-12.png
   :width: 800px
.. |lab3-task1-13| image:: _static/lab3-task1-13.png
   :width: 800px
.. |lab3-task1-14| image:: _static/lab3-task1-14.png
   :width: 800px
.. |lab3-task2-01| image:: _static/lab3-task2-01.png
   :width: 800px
.. |lab3-task2-02| image:: _static/lab3-task2-02.png
   :width: 800px
.. |lab3-task2-03| image:: _static/lab3-task2-03.png
   :width: 800px
.. |lab3-task2-04| image:: _static/lab3-task2-04.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
      
