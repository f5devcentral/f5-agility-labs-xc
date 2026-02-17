Lab 1 Service Policy
====================

In this lab, you will implement a simple service policy for a web application. The service policy will define how the application 
should handle incoming requests based on certain criteria, such as the user's role or the time of day.

F5 Distributed Cloud Service Policies are part of a unified, SaaS-based security framework that allows, denies, or rate-limits traffic to
applications across multi-cloud, edge, and on-premises environments. These policies offer granular control (via headers, IP, TLSfingerprint,or path) and
are enforced through a central console to protect against Layer 7 attacks, WAF, bot threats, and API misuse.

comparason to traffic policies from BIG-IP 

Common use cases:

- Allow for public certs, DNS to be established for the app, but only allow traffic from certain IPs, or that include specific headers and values.

- Allow for traffic to bypass WAF

- Geo blocking


List features of service policies in relation to ui 

For the scope of this lab, we will apply service policies to *Any Server* in the namespace. You *could* however, strategically apply 
service policies to specific applications by host header or label selectors.

Lab:

by default blue pool is active, we will see this when we go to add a new origin pool.

.. image:: _static/multi-app-conn.png
   :scale: 30%
   :alt: multi app conn
   :align: center

You'll now navigate to review the lb configuration as shown below.

.. image:: _static/lb-manage-conf.png
   :scale: 30%
   :alt: multi app conn
   :align: center

Make note of the name of the load balancer for your deployment as it will be different than the one shown below. It should be in the format
of *<adjective-animal>>*-routing-https-lb. 

.. image:: _static/lb-name.png
   :scale: 30%
   :alt: lb name
   :align: center

And verify that the blue pool is is your active pool.

.. image:: _static/lb-blue-pool.png 
   :scale: 20%
   :alt: blue pool
   :align: center

And scroll down to *Common Security Controls* section and notice the section below:

.. image:: _static/lb-csc.png
   :scale: 30%
   :alt: csc
   :align: center

This means that any service policy we create **AND** make active in the namespace will be applied to this load balancer.

Your review of the load balancer configuration is now complete. Please click *Close* in the bottom right to return to the main page.


You should now be back to the main page for load balancers. Please make note of the domain name for your load balancer as you 
will need this to access the app. It should be in the format of *<adjective-animal>>*-lab-app.f5demos.com. Like below:

.. image:: _static/lb-domain.png 
   :scale: 30%
   :alt: domain
   :align: center

You should now see the blue app when navigating to the domain name from your browser. Plese make note of the domain or leave a tab open
as you'll need this for further configuration in the next steps.

.. image:: _static/blue-app.png
   :scale: 30%
   :alt: blue app
   :align: center

Now we will create our first service policy. On the left navigation menu, click on *Security* > *Service Policies* > *Service Policies*

.. image:: _static/svc-pol-create.png 
   :scale: 30%
   :alt: pol create
   :align: center

Click on *Add Service Policy*, notice the two existing policies that are already in place. These are applied by Distributed Cloud
and in a namespace you do not control so you cannot remove them.  Let's build our first service policy:

.. image:: _static/add-svc-pol.png
   :scale: 30%
   :alt: add
   :align: center

Please name the service policy *custom-header*, take note of the Server Selections. You can make a policies based on all servers, host headers, or tags.
Notice the options in the dropdown. (add link for options) We will select *Custom Rule List*

.. image:: _static/svc-pol-custom.png
   :scale: 30%
   :alt: custom
   :align: center 

After selecting *Custom Rule List* (default) you will next click on *Configure* which will take you to where we will build and add rules.

.. image:: _static/svc-pol-custom-conf.png
   :scale: 30%
   :alt: conf
   :align: center

Click on *Add Item*, once you click this you will see the options for the different types of rules you can create. For this lab, 
we will be creating a simple rule that only allows traffic to the app if it contains a specific header with a specific value. You can build 
multiple rule sets to be applied.

.. image:: _static/svc-pol-custom-add-rule.png
   :scale: 30%
   :alt: add rule
   :align: center

Time to start building the **real** rule. You can title the specific rule whatever you like, but for this lab we will call it *appworld-header*. 
Please make sure to toggle *Show Advanced Fields* to the right so that you can see all of the options available to you. 

.. image:: _static/custom-rule-appworld.png
   :scale: 30%
   :alt: appworld
   :align: center 

In this step you'll configure the actual header and value that you want to require for traffic to be allowed to the app. 
For this lab, we will be creating a rule that only allows traffic that contains the header of:

 header = *x-f5-appworld*

 value  = *RjUtQXBwd29ybGQ=*.

How did we get this value? If you decode the value from base64, you will see that it decodes to *F5-Appworld*. This is just an extra 
step to make sure that the value is not easily guessable.

.. image:: _static/svc-req-match.png
   :scale: 30%
   :alt: match
   :align: center

.. image:: _static/svc-header-match.png
   :scale: 30%
   :alt: header
   :align: center

apply; apply; add service policy  

.. image:: _static/add-to-active.png
   :scale: 30%
   :alt: active
   :align: center

.. image:: _static/sel-active.png
   :scale: 30%
   :alt: select
   :align: center 


Add the previously created service policy to the active policies and make sure to click the bottom right **Add Select Active Service Policies **

.. image:: _static/act-custom-header.png
   :scale: 30%
   :alt: active header
   :align: center 

Now try to navigate to your domain again, you should now see a 403 error. This is because the service policy is blocking all 
traffic that does not have the header of *x-app-world: f5*.

.. image:: _static/403-error.png
   :scale: 30%
   :alt: 403 error
   :align: center


You should now also see this reflected in the analytics for the load balancer. You can navigate to the analytics by clicking on the load balancer name from the main load balancer page, and then clicking on the *Analytics* tab at the top.

.. image::_static/observe.png
   :scale: 30%
   :alt: observe
   :align: center

.. image:: _static/obs-req.png
   :scale: 30%
   :alt: observe req
   :align: center

.. image:: _static/obs-hit.png
   :scale: 30%
   :alt: observe hit
   :align: center 

.. image:: _static/test-curl.png
   :scale: 30%
   :alt: curl test
   :align: center

.. image:: _static/post-curl.png
   :scale: 30%
   :alt: post curl
   :align: center

Ending

We will now remove the service polices that have been built. 

When deleting the active service policy, make sure after you delete it to click the bottom right **Add Select Active Service Policies** to 
update the active policies for the load balancer.

.. image:: _static/del-custom-header.png
   :scale: 30%
   :alt: delete custom header
   :align: center
