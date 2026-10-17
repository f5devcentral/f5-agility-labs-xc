Lab 2: Adding a Bot Protection Profile and Testing 
==================================================


**Scenario Lab 2**

In the prior lab we discovered our airline application lacked proper security protections and was vulnerable.
The following lab tasks will strengthen our security posture and address the increase in Bot activity towards
your company's airline application.  We will leverage our Bot testing tool to validate our Bot protection policies 
and utilize security analytics to examine various requests.  
  

**Expected Lab Time: 30 minutes**

Task 1: Create a Bot Protection Profile  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task you will view recent requests and filter out specific requests from our test tool.  You will then work
on configuring a Bot Defense profile to protect our airline application's *Sign-In* page.  We will initiate a Basic 
Credential Stuffing attack and observe related events using security analytics and making any necessary adjustments needed. 

+----------------------------------------------------------------------------------------------+
| 1. In the Distributed Cloud (XC) Console go to **Web App and API Protection** then click on  |
|    **Overview** and finally **Security** (You may have to adjust the time filter as needed)  |                                                  
+----------------------------------------------------------------------------------------------+
| |lab1-task4-01|                                                                              |
+----------------------------------------------------------------------------------------------+
|    Scroll to the bottom and click on your HTTP Load Balancer                                 |
+----------------------------------------------------------------------------------------------+
| |lab1-task4-02|                                                                              |
+----------------------------------------------------------------------------------------------+
| 2. Now we are going to Click **Add Filter** and enter the following filter syntax            | 
|    "**Method In Post**". As you type each word click on the syntax match that will appear    |
|    in the dialogue box.                                                                      |
|                                                                                              |
|    See the example below on how your filter will appear as you create it.                    |
+----------------------------------------------------------------------------------------------+
| |lab2-task4-02b|                                                                             |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
|                                                                                              |
|   Here is what the filter should end up looking like when correctly created                  |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-01|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
|    As you examine these **POST** requests can you see what endpoint is being targeted?       |
|                                                                                              |
|    **Hint:** *Request Path*                                                                  |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-03|                                                                              |
+----------------------------------------------------------------------------------------------+
| 3. In the Distributed Cloud (XC) Console, go back to **Manage** > **Load Balancers** >       |
|    **HTTP Loadbalancers**, click the three dots.                                             |
|    under the **Action** column and select **Manage Configuration**.                          |
+----------------------------------------------------------------------------------------------+
| |lab1-task2-01|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 4. At the top right click **Edit Configuration** then Click **Bot Protection**. Now click    |
|    on *Disable* and select **Enable Bot Defense Standard**                                   |
|                                                                                              |
| 5. In the resulting Bot Defense Policy section, click the **Configure** link.                |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-04|                                                                              |
+----------------------------------------------------------------------------------------------+
| 6. In the **Protected App Endpoints** window, click the **Configure** link under             |  
|    **App Endpoint Type**                                                                     |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-05|                                                                              |
+----------------------------------------------------------------------------------------------+
| 7. In the resulting window, click the **Add Item** in the App Endpoint Type section.         | 
+----------------------------------------------------------------------------------------------+
| |lab2-task1-07|                                                                              |
+----------------------------------------------------------------------------------------------+
| 8. In the resulting **App Endpoint Type** window, input the following values as shown:       |
|                                                                                              |
|    - **Name:** *auth-bot*                                                                    |
|    - **HTTP Methods:** *POST*                                                                |
|    - **Endpoint Label** *Authentication > Login*                                             |
|    - **Protocol:** *BOTH*                                                                    |
|    - **Path:Path Match:** *Prefix*                                                           |
|    - **Prefix:** */login/*                                                                   |
|    - **Bot Traffic Mitigation:Select Bot Mitigation Action:** *Flag*                         |
|    - **Bot Traffic Mitigation:Include Mitigation Headers:** *Append Headers*                 |
|    - **Inference Header Name** and **Automation Type Header Name** *As Defaults (unchanged)* |
|                                                                                              |
|    Once all of these settings are configured scroll to the bottom and click **Apply**        |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-08|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 9. Next, click **Apply** on the **App Endpoint Type** screen                                 |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-10|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 10. Next, click **Apply** on the **Protected App Endpoints** screen                          |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-11|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 11. We can now see the **Bot Defense Policy** is now configured                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-12|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 12. Click **Save HTTP Load Balancer** at the bottom of the page.                             |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-13|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 13. Now that we have a Bot Policy applied lets re-run the Basic Credential stuffing attack.  |
|     From Windows Jump Host.  Click on **OpenBullet** goto **Jobs**, open the previous job    |
|     Click **Start**.                                                                         |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-13a|                                                                             |
|                                                                                              |
| |lab2-task1-13b|                                                                             |
+----------------------------------------------------------------------------------------------+
| 14. Check review the request logs.  Was anything flagged as a violation? Why or Why not ?    |
|                                                                                              |
|    **Hint:** *Are HTTP requests violating any HTTP protocol definitions/standards?*          |
|                                                                                              |
| 15. Let's inspect the **Security Analytics** dashboard and any captured events.              |  
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-14|                                                                              |
+----------------------------------------------------------------------------------------------+
| This dashboard provides an easy option to quickly take actions such as adding the            |
| source IP address of the bad actor to the Blocked Client List of our WAF policy.             |
|                                                                                              |
| **Note**: *The following images are for example only. Notice how XC can create a blocking*   |
| *rule using the context in the individual request.*                                          |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-15|                                                                              | 
| |lab2-task1-16|                                                                              |
+----------------------------------------------------------------------------------------------+
| 17. By clicking on **Bot Defense** then **View in Bot Defense** we gain greater visibility   |
|     on the various traffic types. Notice these requests are defined as **Bad Bot**           |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-17|                                                                              |
|                                                                                              |
| |lab2-task1-18|                                                                              |
+----------------------------------------------------------------------------------------------+
| **Note:** Only Bad Bot traffic is here. All automation is targeting the authentication       |
| endpoint, the Traffic action is showing Continue, as the bots are only being **flagged**.    |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-19|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 18. Click on **Traffic Analyzer** (Left Navigation) and open a bad bot request.              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-20|                                                                              |
+----------------------------------------------------------------------------------------------+
| 19. Look at the transaction details, note the Inference Fields and the “Bot Reason” showing  |
|     Token missing, F5 uses this method to detect simple bots. It means the UUID token is not |
|     present in the body or headers request, probably due to the F5 JS not being processed on |
|     the client side.                                                                         |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab2-task1-21|                                                                              |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **End of Lab 2:**  This concludes Lab 2, feel free to review and test the configuration.     |
|                                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. |lab1-task4-01| image:: _static/lab1-task4-01.png
   :width: 800px
.. |lab1-task4-02| image:: _static/lab1-task4-02.png
   :width: 800px
.. |lab2-task4-02b| image:: _static/lab2-task4-02b.png
   :width: 800px
.. |lab1-task4-03| image:: _static/lab1-task4-03.png
   :width: 800px
.. |lab1-task2-01| image:: _static/lab1-task2-01.png
   :width: 800px
.. |lab1-task5-03| image:: _static/lab1-task5-03.png
   :width: 800px
.. |lab2-task1-01| image:: _static/lab2-task1-01.png
   :width: 800px
.. |lab2-task1-01a| image:: _static/lab2-task1-01a.png
   :width: 500px 
.. |lab2-task1-02| image:: _static/lab2-task1-02.png
   :width: 800px
.. |lab2-task1-03| image:: _static/lab2-task1-03.png
   :width: 800px
.. |lab2-task1-04| image:: _static/lab2-task1-04.png
   :width: 800px
.. |lab2-task1-05| image:: _static/lab2-task1-05.png
   :width: 800px
.. |lab2-task1-06| image:: _static/lab2-task1-06.png
   :width: 800px
.. |lab2-task1-07| image:: _static/lab2-task1-07.png
   :width: 800px
.. |lab2-task1-08| image:: _static/lab2-task1-08.png
   :width: 800px
.. |lab2-task1-09| image:: _static/lab2-task1-09.png
   :width: 800px
.. |lab2-task1-10| image:: _static/lab2-task1-10.png
   :width: 800px
.. |lab2-task1-11| image:: _static/lab2-task1-11.png
   :width: 800px
.. |lab2-task1-12| image:: _static/lab2-task1-12.png
   :width: 800px
.. |lab2-task1-13| image:: _static/lab2-task1-13.png
   :width: 800px
.. |lab2-task1-13a| image:: _static/lab2-task1-13a.png
   :width: 800px
.. |lab2-task1-13b| image:: _static/lab2-task1-13b.png
   :width: 800px
.. |lab2-task1-14| image:: _static/lab2-task1-14.png
   :width: 800px
.. |lab2-task1-15| image:: _static/lab2-task1-15.png
   :width: 800px
.. |lab2-task1-16| image:: _static/lab2-task1-16.png
   :width: 800px
.. |lab2-task1-17| image:: _static/lab2-task1-17.png
   :width: 800px
.. |lab2-task1-18| image:: _static/lab2-task1-18.png
   :width: 800px
.. |lab2-task1-19| image:: _static/lab2-task1-19.png
   :width: 800px
.. |lab2-task1-20| image:: _static/lab2-task1-20.png
   :width: 800px
.. |lab2-task1-21| image:: _static/lab2-task1-21.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
      
