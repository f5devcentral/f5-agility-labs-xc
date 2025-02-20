Lab 2 - Create a Virtual Kubernetes Cluster
-------------------------------------------

F5 Distributed Cloud App Stack is a SaaS-based offering to deploy, secure, and operate a fleet of applications across the distributed infrastructure in multi-cloud or edge environments. It can scale to a large number of clusters and locations with centralized orchestration, observability, and operations to reduce the complexity of managing a fleet of distributed clusters.

In this lab, we will learn the following:

•  Access the **Distributed Apps** service in the F5 Distributed Cloud console

•  Create a Virtual Kubernetes Cluster (Virtual K8s) to run a demo app

**Core concepts**

   *Virtual K8s (vK8s)*
      `vK8s refers to a virtual Kubernetes cluster. F5 Distributed Cloud Services support a Kubernetes compatible API for centralized orchestration of applications across a fleet of sites
      (customer sites or F5 Distributed Cloud Regional Edge). This API is considered “Kubernetes compatible”, because not all Kubernetes APIs or resources
      are supported. However, for the API(s) that are supported, it is 100% compatible. We have implemented a distributed control
      plane within our global infrastructure to manage scheduling and scaling of applications across multiple (tens to hundreds of thousands of)
      sites, where each site in itself is also a managed physical K8s cluster.`

   *Virtual Sites*
      `vK8s objects have a reference to the virtual-site which selects the sites on which the application can be deployed, secured, and operated.
      The virtual-site reference of vK8s is used as the default virtual-site for the given vK8s.`

   For more core concepts, please review `F5 Distributed Cloud documentation <https://docs.cloud.f5.com/docs/ves-concepts>`_

**Exercise 1 - Explore sites and virtual site**

#. Select the **Distributed Apps** tile on the F5 Distributed Cloud Services home page.

   .. image:: ../images/distributedappclick.png
      :width: 400pt
      :class: no-scaled-link


#. Within the Distributed Apps navigation menu and under **Applications**, click on **Virtual Sites**.

   .. image:: ../images/distributedappclickvirtualsite.png
      :width: 250pt
      :class: no-scaled-link

#. Locate the Virtual Site named *appworld2025-k8s-vsite*.

   The virtual site *appworld2025-k8s-vsite* contains three customer edge sites. As mentioned in the core concepts section, a virtual site is a construct that
   selects the sites on which the application can be deployed, secured, and operated. All workloads assigned to site *appworld2025-k8s-vsite* will be
   replicated across all three sites.

    .. NOTE::
      For this lab, we have provisioned a Virtual Site called *appworld2025-k8s-vsite* to save time

   Click on **appworld2025-vpc-site** to show a geographical representation of the sites.

   .. image:: ../images/distributedappclickagilityk8svsite.png
      :width: 400pt
      :class: no-scaled-link

#. With your mouse hover over **appworld2025-vpc-site-one**

   .. image:: ../images/distributedappclickvpcsiteone.png
      :width: 400pt
      :class: no-scaled-link

#. You can see a summary of stats and configurations for site *appworld2025-vpc-site-one*. Notice the labels used to deploy the site.

   Can you guess where this customer edge site is deployed?

   We can see by the labels that this site is deployed on the Google Cloud Platform (GCP).
   You can deploy a customer edge site on ANY major cloud provider and also on-prem.

   Now click on **appworld2025-vpc-site-one** on the map for some quick details and metrics about this customer edge site, shown on a right-hand flyout panel.

   .. image:: ../images/M1-L2-site-one-flyout-click.png
      :width: 400pt
      :class: no-scaled-link

#. On this flyout, click **appworld2025-vpc-site-one**.  The **App Traffic** dashboard for *appworld2025-vpc-site-one* provides helpful information for application metrics, Pods, Pod health,
   deployment status, etc. Spend some time exploring the different tabs. Of course, there is no information because we have not deployed any workload on this site.

   .. image:: ../images/distributedappclickvpcsiteoneexploresite2-updated.png
      :width: 400pt
      :class: no-scaled-link

**Exercise 2 - Create a Virtual K8s**

#. In the left-hand side of the console, click **Virtual K8s** under the **Applications** section.

   .. image:: ../images/distributedappclickvirtualk8s.png
      :width: 250pt
      :class: no-scaled-link

#. There are currently no Virtual K8s, so let's create one! Click **Add Virtual K8s**

   .. image:: ../images/distributedappclickaddvirtualk8s.png
      :width: 250pt
      :class: no-scaled-link

#. Enter the site **Name** using your Firstname initial and Lastname altogether and append "-vk8" at the end. Ex: For Andrew Smith, the site name will be *"asmith-vk8"* (without the quotes!)

   .. image:: ../images/distributedappclickvirtualk8ssettings.png
      :width: 600pt
      :class: no-scaled-link

#. Click the **Add Item** button in the *Virtual Sites* section

   .. image:: ../images/distributedappclickvirtualk8ssettings2.png
      :width: 450pt
      :class: no-scaled-link

#. Select the `shared/appworld2025-k8s-vsite` site from the dropdown.

   .. image:: ../images/distributedappclickvirtualk8ssettings3.png
      :width: 450pt
      :class: no-scaled-link

#. Click the **Save and Exit** button at the bottom of the page.

#. Wait for your virtual K8s current state to show as *Ready* (this can take 5 minutes or more). This is your virtual Kubernetes cluster assigned to the virtual site *appworld2025-k8s-vsite*.
   As you already know, virtual site *appworld2025-k8s-vsite* has three sites (*appworld2025-vpc-site-one*, *appworld2025-vpc-site-two*,*appworld2025-vpc-site-three*)

   .. image:: ../images/distributedappclickvirtualk8sstatus-in-progress.png
      :width: 600pt
      :class: no-scaled-link

   Your virtual K8s is now ready!

   .. image:: ../images/distributedappclickvirtualk8sstatus-updated.png
      :width: 600pt
      :class: no-scaled-link

   You're ready to deploy your first workload on the virtual K8s cluster. Continue to the next module.
