Lab 1- Working with Managed K8s (Optional)
-------------------------------------------------------------------------

In this lab, we will learn the following:

•  How to view and work with Managed K8s in the Console and global kubeconfig file to access and deploy publish a web server across the ADN to the Internet.

**Exercise 1 - Log into F5 Distributed Cloud Console**


#. Click the Cloud and Edge Sites tile on the F5 Distributed Cloud Services home page.

   .. image:: ../images/xchomepage.png
      :width: 400pt

#. Click Overview under Managed K8s on the left hand pane.

   .. image:: ../images/managedk8s.png
      :width: 250pt

#. Pick a Site and click the three dots under the "Action" column and then Download Global Kubeconfig.

   .. image:: ../images/globalkubeconfig.png
      :width: 400pt

#. Locate your downloaded kubeconfig file, and follow the Kubernetes documentation to configure your local kubectl tool. 

    `Organizing Cluster Access Using kubeconfig Files <https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/>`_

#. Once you have configured your local kubectl tool, you should be able to manage for your managed k8s site using kubectl commands.

**Exercise 2 - Viewing the K8s Cluster in UI and CLI**

#. In XC Console Click on the Managed K8s Site you are working in, and view the following in the UI Dashboard, Nodes, Namespaces, Deployments, Services, and Pods

   .. image:: ../images/dasboard.png
      :width: 600pt

   .. image:: ../images/nodes.png
      :width: 600pt

   .. image:: ../images/namespaces.png
      :width: 600pt

   .. image:: ../images/deployments.png
      :width: 600pt

   .. image:: ../images/services.png
      :width: 600pt
   
   .. image:: ../images/pods.png
      :width: 600pt

**CLI Commands to view Managed K8s Outputs**

   *Commands*
      `Run the following commands and view the outputs.`

   *View Nodes*
      `kubectl get nodes`
   
      `kubectl get nodes -o wide`
   
   *View pods*
      `kubectl get pods -A`
   
      `kubectl get pods -o wide`
   
      `kubectl describe pod <podname> -n (namespace)`
   
   *View all deployment and service*
      `kubectl get deployment -A`
   
      `kubectl get svc -A`

   *View all resources *
      `kubectl get all -A`
   