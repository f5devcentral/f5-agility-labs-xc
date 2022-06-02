Lab 2 - Scale vK8s Deployment
-----------------------------

F5 Distributed Cloud App Stack is a SaaS-based offering to deploy, secure, and operate a fleet of applications across the distributed infrastructure in multi-cloud or edge. It can scale to a large number of clusters and locations with centralized orchestration, observability, and operations to reduce the complexity of managing a fleet of distributed clusters.

In this lab, we will learn the following:

•  Review the Virtual K8s Cluster Dashboard

•  Modify Virtual K8s Deployment to Scale Replicas

**Core concepts**

   *Virtual K8s (vK8s)*
      `A vk8s stand for virtual Kubernetes cluster. F5 Distributed Cloud Services support a Kubernetes compatible API for centralized orchestration of applications across a fleet of sites 
      (customer sites or F5 Distributed Cloud Regional Edge). This API is “Kubernetes compatible” because not all Kubernetes APIs or resources 
      are supported. However, for the API(s) that are supported, it is hundred percent compatible. We have implemented a distributed control 
      plane within our global infrastructure to manage scheduling and scaling of applications across multiple (tens to hundreds of thousands of) 
      sites, where each site in itself is also a managed physical K8s cluster.`

   *Virtual Sites*
      `vK8s object has a reference to the virtual-site which selects the sites on which the application can be deployed, secured, and operated. 
      The virtual-site reference of vK8s is used as the default virtual-site for the given vK8s.`

   For more core concepts, please review `F5 Distributed Cloud documentation <https://docs.cloud.f5.com/docs/ves-concepts>`_

**Exercise 1 - Access Virtual K8s Cluster Dashboard and Edit Deployment**

#. Select **Applications -> Virtual K8s -> Dashboard**. You should see one pod per site.

   .. image:: ../images/13validate_vK8s_dashboard.png
      :width: 400pt

#. Select **Deployments**, then select the menu under **Actions** for your deployment, then **Edit**

   .. image:: ../images/14edit_deployment.png
      :width: 250pt

#. Ensure **Edit** mode is enabled, expand the **spec** section, and modify **replicas** from *1* to *3* and select **Save**

   .. image:: ../images/15modify_deployment_spec.png
      :width: 400pt

**Exercise 2 - Review Scaled vK8s Deployment**

#. It may take a few moments, but on the vK8s cluster dashboard, number of **Running Pods** should increase to 9. Upon refreshing the list, you may notice the number of **Sites with Error** gradually decrease as **Running Pods** increases.

   .. image:: ../images/16review_scaled_deployment.png
      :width: 400pt

