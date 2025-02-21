Lab 2 - Scale vK8s Deployment
-----------------------------

F5 Distributed Cloud App Stack is a SaaS-based offering to deploy, secure, and operate a fleet of applications across the distributed infrastructure in multi-cloud or edge. It can scale to a large number of clusters and locations with centralized orchestration, observability, and operations to reduce the complexity of managing a fleet of distributed clusters.

In this lab, we will learn the following:

•  Review the Virtual K8s Cluster Dashboard

•  Modify Virtual K8s Deployment to Scale Replicas

**Core concepts**

   *Pods in vK8s*
      `The core concept in application management on Kubernetes is a Pod. Pod is the basic and smallest execution unit that can be created, deployed, and managed in Kubernetes. A Pod consumes compute, memory, and storage resources and needs a network identity. A Pod contains a single or multiple containers but it is a single instance of an application in Kubernetes.`

   *Service*
      `A service with one or more containers with configurable number of replicas that can be deployed on a selection of Regional Edge sites or customer sites and advertised within the cluster where is it deployed, on the Internet, or on other sites using TCP or HTTP or HTTPS load balancer.`

   For more core concepts, please review `F5 Distributed Cloud documentation <https://docs.cloud.f5.com/docs/ves-concepts/dist-app-mgmt>`_

**Exercise 1 - Access Virtual K8s Cluster Dashboard and Edit Deployment**

#. Select **Applications -> Virtual K8s -> <your cluster name> -> Dashboard**. You should see one pod per site.

   .. image:: ../images/13validate_vK8s_dashboard-updated.png
      :width: 600pt
      :class: no-scaled-link

#. Select **Deployments**, then select the menu under **Actions** for your deployment, then **Edit**

   .. image:: ../images/14edit_deployment-updated.png
      :width: 600pt
      :class: no-scaled-link

#. Ensure **Edit** mode is enabled, expand the **spec** section, and modify **replicas** from *1* to *3* and select **Save**

   .. image:: ../images/15modify_deployment_spec-updated.png
      :width: 600pt
      :class: no-scaled-link

**Exercise 2 - Review Scaled vK8s Deployment**

#. It may take a few moments, but on the vK8s cluster dashboard, number of **Running Pods** should increase to 9. Upon refreshing the list, you may notice the number of **Sites with Error** gradually decrease as **Running Pods** increases.

   .. image:: ../images/16review_scaled_deployment-updated.png
      :width: 600pt
      :class: no-scaled-link

#. The F5 XC platform can also provide more information on the specific pods directly from the web console.  Click on **Pods** in the top menu.


   .. image:: ../images/17review_scaled_pods.png
      :width: 600pt
      :class: no-scaled-link

#. In this view, you can see the specific pod information such as resource consumption, site deployment and node location, message status.  (you may need to click the "Refresh" button)

   .. image:: ../images/18review_pods_information.png
      :width: 600pt
      :class: no-scaled-link

So far, we've deployed and scaled our Virtual K8s Workload. Please continue on to module 3 for a look at how to publish your application for users to consume.
