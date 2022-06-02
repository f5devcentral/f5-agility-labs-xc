Lab 1 - Create origin pool
==========================

Exercise 1: Create Origin Pool
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


#. Navigate the menu to go to *Manage* -> *Load Balancer*, then click *Origin Pools*.

   |origin_pool|
   
#. Click the *Add Origin Pool* button.

    |origin_pool_add|
#. On the New Origin Pool form 
	#. Enter a name for your pool
	#. delete port 443 and add port 3000
	#. then click add item under Origin Servers

 |origin_pool_name|

#. Enter a name for your origin pool then 
#. Click on "Add Item" under Origin Servers
#. Making the following changes on the Origin Server form:

   =============================== ===============
   Select Type of Origin Server    K8s Service Name of Origin Server on given Sites
   Service Name                    workloadname.namespace (make a note to remember this in creation stage)
   Site                            Virtual Site select shared/agility-k82-site
   Select Network on the site      vK8s Networks on Site
   =============================== ===============

 |origin_pools_menu|
 

#. Click on "Add Item" to return to the previous screen


#. Click the *Save and Exit* button to close the *Origin Pool* dialogue.



.. |origin_pools_menu| image:: ../images/m3-add-origin-server.png
.. |origin_pool| image:: ../images/m-origin-pool.png
.. |origin_pool_name| image:: ../images/m-origin-pool-name.png
.. |origin_pool_add| image:: ../images/m3-add-origin-pools.png
.. |origin_pools_config_mongodb| image:: ../images/origin_pools_config_mongodb.png