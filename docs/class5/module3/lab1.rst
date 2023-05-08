Lab 1 - Create Origin Pool
==========================
In this first part of the lab, you will create an origin pool pointing to the service of the F5xcdemo workload you created in the previous lab.  

**Exercise 1: Create Origin Pool**

#. Navigate the left-side menu to **Manage -> Load Balancers**, then click **Origin Pools**.

   |origin_pool|
   
#. Click the **Add Origin Pool** button.

   |origin_pool_add|

#. On the New Origin Pool form:

	#. Enter a **Name** for your pool (ex: pool)
	#. Replace the **Port** value of *443* with *3000*
	#. Select **Add Item** under **Origin Servers**

   |origin_pool_name|

#. Complete the **Origin Server** section by make the following changes:

    - **Select Type of Origin Server**: K8s Service Name of Origin Server on given Sites
    - **Service Name**: <firstinitallastinitial-workload>.<your namespace> (eg: asmith-workload.grand-marten This will map to the service name of your vK8s workload and XC tenant namespace)
    - **Site or Virtual Site**: Virtual Site select shared/agility-k82-site
    - **Select Network on the site**: vK8s Networks on Site

   |origin_pools_menu|
 
#. Click on **Apply** to return to the previous screen

#. Click the **Save and Exit** button to close the **Origin Pool** dialogue.


.. |origin_pool| image:: ../images/m3-origin-pool.png
.. |origin_pool_add| image:: ../images/m3-add-origin-pools.png
.. |origin_pool_name| image:: ../images/m3-origin-pool-name-updated.png
.. |origin_pools_menu| image:: ../images/m3-add-origin-server-updated.png
