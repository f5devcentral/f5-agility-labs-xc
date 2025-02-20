Lab 1: Explore Load Balancer and Review Traffic Dashboards
=========================================================

Lab 1 will focus on the deployment and security of an existing hosted application using F5 
Distributed Cloud Platform and Services. This lab will be deployed in a SaaS only configuration 
with no on-premises (public or private cloud) elements.  All configurations will be made via 
the F5 Distributed Cloud Console and within the F5 Distributed Cloud Global Network services architecture.

For the tasks that follow, please note your individual **namespace**. Follow the instructions below 
which will guide you to locate your **namespace**. The **Delegated Domain** and the F5 Distributed Cloud 
**Tenant** are listed below for your convenience as they will be the same for all lab attendees.

* **Delegated Domain:** *.lab-sec.f5demos.com* 
* **F5 Distributed Cloud Tenant:** https://f5-xc-lab-sec.console.ves.volterra.io 

Following the tasks in the prior **Introduction** Section, you should now be able to access the
F5 Distributed Cloud Console, having set your Work Domain Roles and Skill levels. If you have not
done so already, please login to your tenant for this lab and proceed to Task 1.

**Scenario Lab 1**

Your company recently noticed an increase in credential stuffing and bot activity on it's F5 Airlines app. 
You are a SecOps engineer tasked with providing a security solution to address this threat.  In the following 
labs, you will learn how to use F5's Distributed Cloud to quickly enable an application and bot security 
profile to address the threat while also exploring some attack tools of your own!

**Expected Lab Time: 15 minutes**

Task 1: Review your assigned Namespace and Verify the Application is Up
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this objective you will explore the Distributed Cloud Console and identify your namespace.
Additionally you will ensure the F5 Air application is functioning.  Application availability 
is a pre-requisite for all other tasks.

+----------------------------------------------------------------------------------------------+
| 1. From the Distributed Cloud (XC) Home Screen click **Web App & API Protection**, this will | 
|                                                                                              |
|    bring you into your name space.                                                           |
|                                                                                              |
| 2. In the upper left hand portion of the screen, note your unique **Namespace**, it will be  |
|                                                                                              |
|    used throughout this lab.                                                                 |
+----------------------------------------------------------------------------------------------+
| |lab1-task1-01|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 3. Click on **Manage > Load Balancers > HTTP Load Balancers**.  You will see a               |
|                                                                                              |
|    a pre-configured HTTP Loadbalancer in the format of **<namespace>-lb**                    |
|                                                                                              |
| 4. On the right side, under Domains you should see a FQDN **namespace.lab-sec.f5demos.com**  |
|                                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab1-task1-02|                                                                              |
+----------------------------------------------------------------------------------------------+
|                                                                                              |
| 5. Open a browser window and navigate to **http://namespace.lab-sec.f5demos.com** to         |
|                                                                                              |
|    verify the application is up.  You should see the F5 Airlines logo!                       |
+----------------------------------------------------------------------------------------------+
|                                                                                              |
| |lab1-task1-03|                                                                              |
+----------------------------------------------------------------------------------------------+


Task 2: Review the HTTP Load Balancer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this task you will review the Load Balancer configuration and the origin pool for the backend
application. You will verify other security features that are tied to the Load Balancer and their
current state.  

+----------------------------------------------------------------------------------------------+
|  1. In the Distributed Cloud (XC) Console, under HTTP Loadbalancers click the three dots     |
|                                                                                              |
|     under the **Action** column and select **Manage Configuration**                          |
+----------------------------------------------------------------------------------------------+
| |lab1-task2-01|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
|  2. Explore the **Backend App** by selecting **Origins** and **Origin Pool** followed by     | 
|                                                                                              |
|     **Edit Configuration** Note that we are simply using a public DNS host for the backend.  |
|                                                                                              |
|     The application is directly accessibile to us which we will explore later.               |
+----------------------------------------------------------------------------------------------+
| |lab1-task2-02|                                                                              |
|                                                                                              |
| |lab1-task2-03|                                                                              |
|                                                                                              |                             
| |lab1-task2-04|                                                                              |          
|                                                                                              |
+----------------------------------------------------------------------------------------------+
|                                                                                              |
|  3. Click the back button at the bottom of the page, two times, and then review the Web      |               
|                                                                                              |
|     Application Firewall and Bot Protection status. Notice both the Web Application Firewall |
|                                                                                              |
|     and Bot Protection are disabled.  Click the **Cancel** and **Exit** buttons when         |
|                                                                                              |
|     finished.  Well it's no wonder your being attacked!  Lets dig into this...               |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab1-task2-05|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+


Task 3: Generate Attack Traffic with OpenBullet Automated Attack Tool
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this task, you will simulate your attacker’s behavior by using the Openbullet utility to 
perform a credential stuffing attack.
  

+----------------------------------------------------------------------------------------------+
|  Note:  Because each student is assigned a unique namespace, there is no way to pre-stage    |
|  traffic generation.  Because of that, we will play the role of an attacker and generate     |                                                                                            
|  some interesting traffic.  Before we begin we need to configure the tool                    |
|                                                                                              |
|  1. RDP or Console into the Windows Jump Host, you can locate the password here:             |
|                                                                                              |
|     **Password is located in your UDF Course browser page in the**                           |
|                                                                                              |
|     **Deployment Tab > Jump Host > Click Details and find Credentials**                       |
|                                                                                              |
+----------------------------------------------------------------------------------------------+                                                                                             
|  2. On the home screen double-click the OpenBullet 2 shortcut                                |
+----------------------------------------------------------------------------------------------+
| |lab1-task3-02|                                                                              |
+----------------------------------------------------------------------------------------------+                             
|  3. Click on **Configs** and double-click **"Basic"** - this is our credential stuffing      |
|                                                                                              |
|     attack configuration that will simulate a basic Bot.                                     |
+----------------------------------------------------------------------------------------------+
| |lab1-task3-03|                                                                              |
+----------------------------------------------------------------------------------------------+ 
|  4. Notice there are two blocks called **"HTTP Request"**. Click on each one and update the  |
|                                                                                              |
|     URL by replacing the **<namespace>** with your assigned namespace and then **Save**      |
+----------------------------------------------------------------------------------------------+
| |lab1-task3-04|                                                                              |
|                                                                                              |
| |lab1-task3-05|                                                                              |
+----------------------------------------------------------------------------------------------+
|                                                                                              |
+----------------------------------------------------------------------------------------------+
|  5. Click on **Jobs** and then **+ New** and then select **Multi-Run**                       |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab1-task3-08|                                                                              |
+----------------------------------------------------------------------------------------------+
| 6. In the new window, on the top left, click **"Select Config"** and then **Basic**          |
|                                                                                              |
|    finally **Accept** at the bottom.                                                         |
+----------------------------------------------------------------------------------------------+
| |lab1-task3-09|                                                                              |
|                                                                                              |
| |lab1-task3-10|                                                                              |
+----------------------------------------------------------------------------------------------+
| 7. On the top right, click **Select Wordlist** and then **Credentials-Basic** and finally    |
|                                                                                              |
|    **Accept** at the bottom.                                                                 |
+----------------------------------------------------------------------------------------------+
| |lab1-task3-11|                                                                              |
|                                                                                              |
| |lab1-task3-12|                                                                              |
+----------------------------------------------------------------------------------------------+
| 8.   Change the **Skip** value to 0 (zero) either by typing it or using the **minus** button |
|                                                                                              |
|      finally clicking **Accept** at the bottom.  Now with the **Skip** value changed to "0"  |
|                                                                                              |
|      you can click **Start** to run the job.                                                 |
|                                                                                              |
|      **The job progress indicator bar will update as it cycles through the credentials.**    |
|                                                                                              |
|     *Please note it may take a minute or two to complete and also show up in the logs*       |
|                                                                                              |
|     *If you do not see the indicator progress ask a Lab Assistant for help*                  |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab1-task3-16|                                                                              |
|                                                                                              |
| |lab1-task3-17|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 9.  Were any credentials successful ?  You should see one successful login attempt on the    |
|                                                                                              |
|     right-side Openbullet panel                                                              |
+----------------------------------------------------------------------------------------------+



Task 4: Review the Request Logs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this exercise you will work on filtering and identifying requests.

+----------------------------------------------------------------------------------------------+
| 1. In the Distributed Cloud (XC) Console go to **Web App and API Protection** then click on  |
|                                                                                              |
|    **Overview** and finally **Security**                                                     |
+----------------------------------------------------------------------------------------------+
| |lab1-task4-01|                                                                              |
+----------------------------------------------------------------------------------------------+
| 2. Scroll to the bottom and click on your HTTP Load Balancer                                 |
+----------------------------------------------------------------------------------------------+
| |lab1-task4-02|                                                                              |
+----------------------------------------------------------------------------------------------+
| 3. Click the **Requests** tab at the top and review the POST request in the log.  You can    |
|                                                                                              |
|    expand individual request details by clicking the down button as shown below.  Also, you  |
|                                                                                              |
|    can expand the time interval to longer if needed.                                         |   
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab1-task4-03|                                                                              |
+----------------------------------------------------------------------------------------------+


Task 5: Assign a Web Application Firewall Policy and Re-Test
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this initiative you will assign a Web Application Firewall to the Load Balancer.  Finally you
simulate more test traffic with OpenBullet.  

+----------------------------------------------------------------------------------------------+
| 1. In the Distributed Cloud (XC) Console, under HTTP Loadbalancers click the three dots      |
|                                                                                              |
|    under the **Action** column and select **Manage Configuration**                           |
+----------------------------------------------------------------------------------------------+
| |lab1-task2-01|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 2. At the top right click **Edit Configuration** then look to the left side settings         |
|                                                                                              |
|    and click **Web Application Firewall**                                                    |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab1-task5-01|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 3. On the right side toggle **Enable** for the Web Application Firewall. Next, click         |
|                                                                                              |
|    **Select Item** a drop down list of pre-configured App Firewall policies will appear.     |
|                                                                                              |
|    Select **"shared/base-appfw"**.                                                           |
+----------------------------------------------------------------------------------------------+
| |lab1-task5-02|                                                                              |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
|    Now click **Other Settings** from the left hand side then finally **Save and Exit**.      |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| 4. We will Re-run our credential stack from the Windows Jump Host.  Click on **OpenBullet**  |
|                                                                                              |
|    then **Jobs** and the pencil/edit icon to the right.                                      |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
| |lab1-task5-03|                                                                              |
+----------------------------------------------------------------------------------------------+
| 5. In the **Skip** counter, highlight the current number and type 0 (zero).  You can also    |
|                                                                                              |
|    press and hold the minus button next to the **Skip** field.  Click **Accept** when done.  |
+----------------------------------------------------------------------------------------------+
| |lab1-task5-04|                                                                              |
+----------------------------------------------------------------------------------------------+                                                                                              
| 6. Once again click on the **Job** and hit **Start**, the tool will iterate through the      |
|                                                                                              |
|    Credentials-Basic list and when done will be in a ready state for another test.           |
+----------------------------------------------------------------------------------------------+
| |lab1-task5-05|                                                                              |
|                                                                                              |
| |lab1-task5-06|                                                                              |
+----------------------------------------------------------------------------------------------+


Task 6: Analyze the Request Logs after WAF Policy Enablement
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this objective you will want see what difference the Web Application Firewall has on the 
credential stuffing traffic.  

+----------------------------------------------------------------------------------------------+
| 1. In the Distributed Cloud (XC) Console go to **Web App and API Protection** then click on  |
|                                                                                              |
|    **Overview** and finally **Security**                                                     |
+----------------------------------------------------------------------------------------------+
| |lab1-task4-01|                                                                              |
+----------------------------------------------------------------------------------------------+
| 2. Scroll to the bottom and click on your HTTP Load Balancer                                 |
+----------------------------------------------------------------------------------------------+
| |lab1-task4-02|                                                                              |
+----------------------------------------------------------------------------------------------+
| 3. Let's review the requests,  Is anything being flagged as a violation?  Why or Why Not?    |
|                                                                                              |
|    **Hint:** Click **Requests** and if needed change the time interval to a longer time slot |
|                                                                                              |
|    and click **Apply**.  You can also expand Request details by click the down button below  |
+----------------------------------------------------------------------------------------------+
| |lab1-task4-03|                                                                              |
+----------------------------------------------------------------------------------------------+



+----------------------------------------------------------------------------------------------+
| **Lab 1 Summary**                                                                            |
|                                                                                              |
|    Since the bot requests in this lab are not violating any HTTP protocols                   |
|                                                                                              |
|   or attack vectors, a WAF policy has no impact on mitigating traffic.  In order to detect   |
|                                                                                              |
|   and mitigate bots that do not violate HTTP security, we need a very specialized service    |
|                                                                                              |
|   known as Bot Protection in Distributed Cloud.  A brief presentation will be shared prior   |
|                                                                                              |
|   to beginning Lab 2.                                                                        |
+----------------------------------------------------------------------------------------------+
| |labend|                                                                                     |
+----------------------------------------------------------------------------------------------+

.. |lab001| image:: _static/lab1-001.png
   :width: 800px
.. |lab002| image:: _static/lab1-002.png
   :width: 800px
.. |lab003| image:: _static/lab1-003.png
   :width: 800px
.. |lab1-task1-01| image:: _static/lab1-task1-01.png
   :width: 800px
.. |lab1-task1-02| image:: _static/lab1-task1-02.png
   :width: 800px
.. |lab1-task1-03| image:: _static/lab1-task1-03.png
   :width: 800px
.. |lab1-task2-01| image:: _static/lab1-task2-01.png
   :width: 800px
.. |lab1-task2-02| image:: _static/lab1-task2-02.png
   :width: 800px
.. |lab1-task2-03| image:: _static/lab1-task2-03.png
   :width: 800px
.. |lab1-task2-04| image:: _static/lab1-task2-04.png
   :width: 800px
.. |lab1-task2-05| image:: _static/lab1-task2-05.png
   :width: 800px
.. |lab1-task3-02| image:: _static/lab1-task3-02.png
   :width: 800px
.. |lab1-task3-03| image:: _static/lab1-task3-03.png
   :width: 800px
.. |lab1-task3-04| image:: _static/lab1-task3-04.png
   :width: 800px
.. |lab1-task3-05| image:: _static/lab1-task3-05.png
   :width: 800px
.. |lab1-task3-06| image:: _static/lab1-task3-06.png
   :width: 800px
.. |lab1-task3-07| image:: _static/lab1-task3-07.png
   :width: 800px
.. |lab1-task3-08| image:: _static/lab1-task3-08.png
   :width: 800px 
.. |lab1-task3-09| image:: _static/lab1-task3-09.png
   :width: 800px 
.. |lab1-task3-10| image:: _static/lab1-task3-10.png
   :width: 800px 
.. |lab1-task3-11| image:: _static/lab1-task3-11.png
   :width: 800px 
.. |lab1-task3-12| image:: _static/lab1-task3-12.png
   :width: 800px 
.. |lab1-task3-13| image:: _static/lab1-task3-13.png
   :width: 800px
.. |lab1-task3-14| image:: _static/lab1-task3-14.png
   :width: 800px
.. |lab1-task3-15| image:: _static/lab1-task3-15.png
   :width: 800px
.. |lab1-task3-16| image:: _static/lab1-task3-16.png
   :width: 800px
.. |lab1-task3-17| image:: _static/lab1-task3-17.png
   :width: 800px
.. |lab1-task4-01| image:: _static/lab1-task4-01.png
   :width: 800px
.. |lab1-task4-02| image:: _static/lab1-task4-02.png
   :width: 800px
.. |lab1-task4-03| image:: _static/lab1-task4-03.png
   :width: 800px
.. |lab1-task5-01| image:: _static/lab1-task5-01.png
   :width: 800px
.. |lab1-task5-02| image:: _static/lab1-task5-02.png
   :width: 800px
.. |lab1-task5-03| image:: _static/lab1-task5-03.png
   :width: 800px
.. |lab1-task5-04| image:: _static/lab1-task5-04.png
   :width: 800px
.. |lab1-task5-05| image:: _static/lab1-task5-05.png
   :width: 800px
.. |lab1-task5-06| image:: _static/lab1-task5-06.png
   :width: 800px
.. |lab004| image:: _static/lab1-004.png
   :width: 800px
.. |lab005| image:: _static/lab1-005.png
   :width: 800px
.. |lab006| image:: _static/lab1-006.png
   :width: 800px
.. |lab007| image:: _static/lab1-007.png
   :width: 800px
.. |lab008| image:: _static/lab1-008.png
   :width: 800px
.. |lab009| image:: _static/lab1-009.png
   :width: 800px
.. |lab010| image:: _static/lab1-010.png
   :width: 800px
.. |lab011| image:: _static/lab1-011.png
   :width: 800px
.. |lab012| image:: _static/lab1-012.png
   :width: 800px
.. |lab013| image:: _static/lab1-013.png
   :width: 800px
.. |lab014| image:: _static/lab1-014.png
   :width: 800px
.. |lab015| image:: _static/lab1-015.png
   :width: 800px
.. |lab016| image:: _static/lab1-016.png
   :width: 800px
.. |lab017| image:: _static/lab1-017.png
   :width: 800px
.. |lab018| image:: _static/lab1-018.png
   :width: 800px
.. |lab019| image:: _static/lab1-019.png
   :width: 800px
.. |lab020| image:: _static/lab1-020.png
   :width: 800px
.. |lab021| image:: _static/lab1-021.png
   :width: 800px
.. |lab022| image:: _static/lab1-022.png
   :width: 800px
.. |lab023| image:: _static/lab1-023.png
   :width: 800px
.. |lab024| image:: _static/lab1-024.png
   :width: 800px
.. |lab025| image:: _static/lab1-025.png
   :width: 800px
.. |lab026| image:: _static/lab1-026.png
   :width: 800px
.. |lab027| image:: _static/lab1-027.png
   :width: 800px
.. |lab028| image:: _static/lab1-028.png
   :width: 800px
.. |lab029| image:: _static/lab1-029.png
   :width: 800px
.. |lab030| image:: _static/lab1-030.png
   :width: 800px
.. |lab031| image:: _static/lab1-031.png
   :width: 800px
.. |lab032| image:: _static/lab1-032.png
   :width: 800px
.. |lab033| image:: _static/lab1-033.png
   :width: 800px
.. |lab034| image:: _static/lab1-034.png
   :width: 800px
.. |lab035| image:: _static/lab1-035.png
   :width: 800px
.. |lab036| image:: _static/lab1-036.png
   :width: 800px
.. |lab037| image:: _static/lab1-037.png
   :width: 800px
.. |lab038| image:: _static/lab1-038.png
   :width: 800px
.. |lab039| image:: _static/lab1-039.png
   :width: 800px
.. |lab040| image:: _static/lab1-040.png
   :width: 800px
.. |lab041| image:: _static/lab1-041.png
   :width: 800px
.. |lab042| image:: _static/lab1-042.png
   :width: 800px
.. |lab043| image:: _static/lab1-043.png
   :width: 800px
.. |lab044| image:: _static/lab1-044.png
   :width: 800px
.. |lab045| image:: _static/lab1-045.png
   :width: 800px
.. |lab046| image:: _static/lab1-046.png
   :width: 800px
.. |lab047| image:: _static/lab1-047.png
   :width: 800px
.. |lab048| image:: _static/lab1-048.png
   :width: 800px
.. |lab049| image:: _static/lab1-049.png
   :width: 800px
.. |lab050| image:: _static/lab1-050.png
   :width: 800px
.. |lab051| image:: _static/lab1-051.png
   :width: 800px
.. |lab052| image:: _static/lab1-052.png
   :width: 800px
.. |lab053| image:: _static/lab1-053.png
   :width: 800px
.. |lab054| image:: _static/lab1-054.png
   :width: 800px
.. |lab055| image:: _static/lab1-055.png
   :width: 800px
.. |lab056| image:: _static/lab1-056.png
   :width: 800px
.. |lab057| image:: _static/lab1-057.png
   :width: 800px
.. |labend| image:: _static/labend.png
   :width: 800px
