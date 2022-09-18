Lab 1 - Deploy a Web Server to the Managed K8s Cluster
----------------------------------------------------

.. F5 Distributed Cloud App Stack is a K8s Edge SaaS managed offering to deploy, secure, and operate applications across cloud and edge infrastructure.

In this lab, we will learn the following:

•  Deploy a Managed K8s workload utilizing a containerized app from a public registry

•  Deploy to the Managed K8s site

**Exercise 1 - Review Virtual K8s Site**

#. Goto the following repo and either clone or copy and paste the deployment manifest from the below link. 

    `Organizing Cluster Access Using kubeconfig Files <https://github.com/Nettas/Web-Server-for-XC-Managed-K8s-Training/blob/main/AppStack-GCP/server-deployment/deployment.yaml/>`_

#. Utlizing the Global kubeconfig deploy the manifest.

   *Apply*
      `kubectl apply -f "filename.yaml"
   
#. Validate all resources were deployed

   *From UI same as Lab1 Excercise 2 just look for your resources*

   *From CLI*
   *Namespace*
      `kubectl get namespace`
   *Deployment*
      `kubectl get deployment -n "namespace"`
   *Pods*
      `kubectl get pods -n "namespace"`
   *Service*
      `kubectl get svc -n "namespace"`
   *Get All resources for the Namespace you created*
      `kubectl get all -n "namespace"`
