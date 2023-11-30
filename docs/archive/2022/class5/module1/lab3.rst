Lab 3 - Configure your local kubectl to access your virtual K8s (Optional)
-------------------------------------------------------------------------

In this lab, we will learn the following:

•  Download the kubeconfig file to access your virtual k8s

**Exercise 1 - Log into F5 Distributed Cloud Console**


#. Click the distributed apps tile on the F5 Distributed Cloud Services home page.

   .. image:: ../images/distributedappclick.png
      :width: 400pt

#. Click virtual K8s under the applications section.

   .. image:: ../images/distributedappclickvirtualk8s.png
      :width: 180pt

#. Click the three dots under the "Action" column and then click **Kubeconfig**.

   .. image:: ../images/distributedappclickvirtualk8kubeconfig.png
      :width: 650pt

#. When prompted to select an expiration date, pick a future date that will give you adequate time to complete the lab.

#. If your browser prompts you for a location to download the file, select a directory you prefer and click **Save**.

#. Click the config kubeconfig is downloaded, and follow the Kubernetes documentation to configure your local kubctl tool. 

    `Organizing Cluster Access Using kubeconfig Files <https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/>`_

#. Once you have configured your local kubectl tool, you will be able to manage your virtual k8s using kubectl commands.
