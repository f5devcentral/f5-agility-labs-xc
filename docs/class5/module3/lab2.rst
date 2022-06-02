Lab 2 - Publish to the Internet
===============================

Exercise 1: Create HTTP Load Balancer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


#. Navigate the menu to go to *Manage* -> *Load Balancers*, *HTTP Load Balancers*, then click *add HTTP Load Balancer*.

   |add_HTTP|
   
#. enter a name for your HTTP Load Balancer in the Metadata section.

    |http_name|
#. In the Basic Configuration Section make the following changes 

   =============================== ===============
   Enter domain                    use your namespace.lab-app.f5demos.com
   Select Type of Load Balancer    HTTPS with Automatic Certificate
   HTTP Redirect to HTTPS          Make sure this is checked
   =============================== =============== 

    |http_basic|

#. In the Default Origin Servers Section click *Add item*.
    |add_origin_server|

#. Select your origin pool, which was created earlier in this lab, and Click *Add Item *

 |select_origin_pool|

#. In the Security Configuration section change the *Security Polices* to *Do Not Apply Service Policies* then click *Save and Exit*.

 |security_configuration|
   
#. After a few moments you sould see a screen like the following

 |http_status|
   Please wait for the VIRTUAL_HOST_READY and Valid certificate status before proceeding.

   Now we are ready to test!

   Open a browser tab to browse to the domain you entered. 
   
   In the case below it is fkying-ox.lab-app.f5demos.com

   Success will rendera a page like the following:

 |http_page|

   Please note the country name. 
   
   Refresh your browser and notice what happens to the country name. 
   
   Why?
   
   This ends the lab.




.. |add_HTTP| image:: ../images/m-add-http.png
.. |http_name| image:: ../images/m-http-name.png
.. |http_basic| image:: ../images/m-http-basic.png
.. |add_origin_server| image:: ../images/m-add-origin-server.png
.. |select_origin_pool| image:: ../images/m-select-origin-pool.png
.. |security_configuration| image:: ../images/m-security-configuration.png
.. |http_status| image:: ../images/m-http-status.png
.. |http_page| image:: ../images/m-http-page.png  