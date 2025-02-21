Lab 1 - Configure your jumphost to access your virtual K8s
==========================================================

F5 Distributed Cloud App Stack provides the ability to manage your vK8s namespace via command line with `kubectl`

In this lab, we will learn about and perform the following:

-  Download the **kubeconfig**, and then upload the **kubeconfig** file to the jumphost to allow for access your virtual k8s using native kubectl commands.

**Core Concepts**

   *Virtual Kubernetes vK8s*
      `F5 Distributed Cloud Services support a Kubernetes compatible API for centralized orchestration of applications across a fleet of sites (customer sites or F5 Distributed Cloud Regional Edge). This API is "Kubernetes compatible" because not all Kubernetes APIs or resources are supported. However, for the API(s) that are supported, it is hundred percent compatible. We have implemented a distributed control plane within our global infrastructure to manage scheduling and scaling of applications across multiple (tens to hundreds of thousands of) sites, where each site in itself is also a managed physical K8s cluster.`

   *kubectl*
      `Standard upstream kubectl CLI tool can be used on the vK8s API URL or the downloaded kubeconfig file can be used to access the vK8s APIs.`

   For more core concepts, please review `F5 Distributed Cloud documentation <https://docs.cloud.f5.com/docs/ves-concepts/dist-app-mgmt>`_

**Exercise 1 - Log into F5 Distributed Cloud Console**

#. Click the distributed apps tile on the F5 Distributed Cloud Services home page.

   .. image:: ../images/distributedappclick-updated.png
      :width: 500pt

#. Click virtual K8s under the applications section.

   .. image:: ../images/distributedappclickvirtualk8s.png
      :height: 300pt
      :class: no-scaled-link


#. Click the three dots under the "Action" column and then click **Kubeconfig**.

   .. image:: ../images/distributedappclickvirtualk8kubeconfig-updated.png
      :width: 500pt
      :class: no-scaled-link

#. When prompted to select an expiration date, pick a future date that will give you adequate time to complete the lab.

   .. image:: ../images/kubeconfigexpirydate.png
      :width: 500pt
      :class: no-scaled-link

   |

   Click **Download Credential**. If your browser prompts you for a location to download the file, select a directory you prefer and click **Save**.

#.    From the *Lab Deployments* view, find the Jumphost and click the *Access* button. From the access list, select **File Browser**.

      .. image:: ../images/M4-L1-filebrowser-launch2.png
         :width: 500pt
         :class: no-scaled-link

      .. note::
         If you have kubectl available on your computer, you would be able to interact with your vK8s cluster using the downloaded kubeconfig file.
         For the purposes of this lab, we will use the Jumphost to interact with the vK8s cluster. Before we can do that, we need to upload the kubeconfig file to the Jumphost.

#. Login with *admin/admin* credentials.

   .. image:: ../images/M4-L1-filebrowser-login.png
      :height: 250pt
      :class: no-scaled-link

#. Within File Browser, click the **Upload** upload icon, `Choose File` and then select the **kubeconfig** file you downloaded. Select this file and complete the upload.

   .. image:: ../images/M4-L1-filebrowser-upload.png
      :height: 150pt
      :class: no-scaled-link

   Make sure the **kubeconfig** file appears in File Browser.

   .. image:: ../images/M4-L1-filebrowser-file.png
      :width: 500pt
      :class: no-scaled-link

Proceed to the next Lab where you'll deploy the MQTT containers to your vk8s cluster and run Grafana on the Jumphost.
