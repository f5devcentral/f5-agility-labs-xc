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

#. Click the config kubeconfig is downloaded, and follow the Kubernetes documentation to configure your local kubctl tool. 

    `Organizing Cluster Access Using kubeconfig Files <https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/>`_

#. Once you have configured your local kubctl tool, you should be able to manage your managed k8s using kubectl commands.