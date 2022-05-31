Lab 2- Create a Virtual Kubernetes Cluster
-------------------------------------------

F5 Distributed Cloud App Stack is a SaaS-based offering to deploy, secure, and operate a fleet of applications across the distributed infrastructure in multi-cloud or edge. It can scale to a large number of clusters and locations with centralized orchestration, observability, and operations to reduce the complexity of managing a fleet of distributed clusters.

In this lab, we will learn the following:

•  Access the distributed apps in the F5 Distributed Cloud console

•  Create a Virtual Kubernetes Cluster (virtual K8s) to run a demo app

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

**Exercise 1 - Explore sites and virtual site**

#. Click the distributed apps tile on the F5 Distributed Cloud Services home page.

   .. image:: ../images/distributedappclick.png
      :width: 400pt

#. On the Distributed Apps section, click the virtual sites.

   .. image:: ../images/distributedappclickvirtualsite.png
      :width: 250pt


#. Locate a virtual site called agility-k8s-vsite.

    .. NOTE::
        - For this lab ,we have created a virtual called agility-k8s-vsite to save time 

   .. image:: ../images/distributedappclickagilityk8svsite.png
      :width: 400pt

#. Virtual site agility-k8s-vsite contains three customer edge sites. As mentioned in the core concepts section, a virtual site is a construct that 
   selects the sites on which the application can be deployed, secured, and operated. All workloads assigned to site agility-k8s-vsite will be 
   replicated across all three sites. Click on agility-vpc-site-one

   .. image:: ../images/distributedappclickvpcsiteone.png
      :width: 400pt

#. You can see a summary of stats and configurations for site agility-vpc-site-one. Notice the labels used to deploy the site. Can you guess where 
   this customer edge site is deployed? We can see by the labels that this site is deployed on the Google Cloud Platform (GCP). You can deploy a 
   customer edge site on ANY major cloud provider and also on-prem. Click on "Explore Site" to see more details about agility-vpc-site-one

   .. image:: ../images/distributedappclickvpcsiteoneexploresite.png
      :width: 400pt

#. You can get a lot of helpful information for site agility-vpc-site-one and its workloads. Including application metrics, number of Pods, 
   deployment status, etc. Spend some time exploring the different taps. Of course, there is no information because we have not deployed any workload on this site.

   .. image:: ../images/distributedappclickvpcsiteoneexploresite2.png
      :width: 400pt

**Exercise 2 - Create a virtual K8s**

#. Click virtual K8s under the applications section.

   .. image:: ../images/distributedappclickvirtualk8s.png
      :width: 250pt

#. There are currently no virtual K8s, so let's create one!. Click add virtual K8s

   .. image:: ../images/distributedappclickaddvirtualk8s.png
      :width: 250pt

#. Enter the site name using your Firstname initial and Lastname altogether and append "-vk8" at the end. Ex: For Andrew Smith, the site name will be "asmith-vk8" (Without the quotes!)

   .. image:: ../images/distributedappclickvirtualk8ssettings.png
      :width: 400pt

   .. image:: ../images/distributedappclickvirtualk8ssettings2.png
      :width: 250pt


#. Wait for your virtual K8's current state to show as "Ready" (this can take 5 min or more). This is your virtual Kubernetes cluster assigned to the virtual site agility-k8s-vsite. 
   As you already know, virtual site agility-k8s-vsite has three sites (agility-vpc-site-one, agility-vpc-site-two, agility-vpc-site-three)  

   .. image:: ../images/distributedappclickvirtualk8sstatus.png
      :width: 400pt


