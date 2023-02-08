F5 Distributed Cloud 211 - Application Traffic Insight (ATI)
============================================================

`Last updated: 2022-06-11 6:00 PM CET`

Prerequisites
-------------


1. An account for **F5 Distributed Cloud (F5XC)** and a tenant with **Application Traffic Insight (ATI)** provisioned.

2. An F5 UDF Account to deploy the "F5XC ATI Lab" blueprint. Alternatively, you can import the iApp to your own BIGIP and use F5XC ATI for your own website.

You can sign up for a free account for the F5 Distributed Cloud by following the `sign up description <https://github.com/f5devcentral/f5-waap/blob/main/step-1-signup-deploy/voltConsole.rst>`_ or just go directly to the `sign up page <https://console.ves.volterra.io/signup/usage_plan>`_

What we'll learn
----------------

During this hands-on lab you will learn about the following: 

 - High level introductions for the use case of Application Traffic Insight (ATI)
 - Login to the F5 XC Console
 - Download, import, and run the latest ATI iApp on your BIGIP
 - Validate the ATI JS injection on the protected website
 - Use various automation tools to generate bot traffic 
 - Review the F5XC ATI dashboard to see a summary of Client/Device Overview and Bot Insights

Lab Environment
---------------

During this lab you can use your own F5 Distributed Cloud account and the associated F5 UDF blueprint to demo F5XC Application Traffic Insights.

Alternatively, you may also you your own BIGIP and your own website but, some of the instructions will have to be adapted accordingly.

The lab instructions include use of various features of the Chrome browser and it is strongly recommended to use Chrome.  However, similar functionality exists in most other browsers but, lab instructions will ned to be adjusted accordingly.

Please contact your F5 Sales Engineer/Account Manager if you need more information
Feedback for this lab can be sent directly to j.martin@f5.com.


F5 Distributed Cloud Application Traffic Insight:
--------------------------------------------------------------------------
Account Takeover, Online Fraud, and Webscraping are a problem for many organizations.  Identifying unique devices accessing your web applications and understanding the relationship between those devices and users, accounts, and where those devices are accessing your site from can help identify suspicious activity.  Additionally, gaining visibility into what traffic is automated can quickly and drastically reduce unwanted and/or malicious activity.  

F5 Distributed Cloud (F5XC) Application Traffice Insight provides a high-level overview of application traffic in two primary sections:
  
**Device Dashboard** - provides a high-level overview of devices accessing your web applications, including:
 - Count unique devices over time
 - Count of devices returning overtime
 - Session length per device
 - Device age (how long has this device been known)
 - ASNs per device
 - User-Agents per device.

**Bot Assessment** - provides a high-level overview of automated traffic to your web applications, including:
 - Percentage of human traffic versus bot traffic
 - Request timeline for human and bot traffic
 - Top ASNs sourcing suspected bot traffic
 - Top URLs accessed by suspected bots


Next: |signup|

.. |signup| raw:: html

            <a href="./lab1.rst" target="_blank">Lab 1: Configuring and Deploying F5XC Application Traffic Insight</a>

