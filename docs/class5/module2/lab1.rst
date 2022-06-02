Lab 1 - Review vK8s Cluster and Deploy vK8s Workload
----------------------------------------------------

F5 Distributed Cloud App Stack is a SaaS-based offering to deploy, secure, and operate a fleet of applications across the distributed infrastructure in multi-cloud or edge. It can scale to a large number of clusters and locations with centralized orchestration, observability, and operations to reduce the complexity of managing a fleet of distributed clusters.

In this lab, we will learn the following:

•  Review the previously-created Virtual K8s cluster

•  Configure a vK8s workload utilizing a containerized app from a private registry

•  Deploy a vK8s workload within a vK8s site

•  Advertise a vK8s workload within a cluster via custom HTTP port

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

**Exercise 1 - Review Virtual K8s Site**

#. Access **Distributed Apps** on the F5XC Console

   .. image:: ../images/1access_distributed_apps_service_menu.png
      :width: 400pt

#. Select **Applications -> Virtual K8s**, then your Virtual K8s cluster from the list

   .. image:: ../images/2access_applications_vk8s.png
      :width: 250pt

#. Review **Sites** on the vK8s dashboard -- there should be three, each with one pod

    .. NOTE::
        - For this lab ,we have created a virtual called agility-k8s-vsite to save time 

   .. image:: ../images/3review_vk8s_dashboard_sites.png
      :width: 400pt

**Exercise 2 - Configure vK8s Workload Container**

#. Select **Workloads** -> **Add vK8s workload**

   .. image:: ../images/4add_vk8s_workload.png
      :width: 400pt

#. Complete the **Metadata** section by providing a **Name** and **Description**, then select **Service** from the **Type of Workload** list. Next, select **Configure** within the **Service** sub-section.

   .. image:: ../images/5workload_metadata_and_service.png
      :width: 400pt

#. Select **Add Item** within the **Containers** section

   .. image:: ../images/6add_container.png
      :width: 400pt

#. Complete the **Container Configuration** section by providing a **Name** and details for which **Image to Use**

    - **Image Name**: coleman.azurecr.io/volterrademoapp
    - **Container Registry**: Private Registry
    - **Private Registry**: shared/azure-registry

   .. image:: ../images/7container_config.png
      :width: 250pt

**Exercise 3 - Configure vK8s Workload Deployment Options**

#. Within the **Deploy Options** section, set **Where to Deploy the Workload** to *Customer Virtual Sites*, then **Configure** within the **Customer Virtual Sites** section

   .. image:: ../images/8deploy_options.png
      :width: 250pt

#. Select your vK8s site name from **List of Virtual Sites to Deploy**, then **Apply**

   .. image:: ../images/9select_customer_site.png
      :width: 250pt

**Exercise 4 - Configure vK8s Workload Advertisement Options**

#. Within the **Advertise Options** section, set **Options to Advertise the Workload** to *Advertise in Cluster*, then select **Configure** within the **Advertise in Cluster** section

   .. image:: ../images/10select_advertise_options.png
      :width: 250pt

#. Within the **Select Port to Advertise** section, set **Select Port to Advertise** to *Port*

      - **Port**: 3000
      - **Application Protocol**: HTTP

   .. image:: ../images/11set_advertise_port.png
      :width: 400pt

#. Select **Apply**, then **Apply** again, then **Save and Exit** from the vK8s Workload configuration page

#. You should now see the workload added with 3 total sites and 3 total pods

   .. image:: ../images/12verify_3_workload_sites_pods.png
      :width: 400pt
