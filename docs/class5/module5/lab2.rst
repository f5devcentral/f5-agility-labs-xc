Lab 1 - Deploy a Web Server to the Managed K8s Cluster
----------------------------------------------------

.. F5 Distributed Cloud App Stack is a K8s Edge SaaS managed offering to deploy, secure, and operate applications across cloud and edge infrastructure.

In this lab, we will learn the following:

•  Deploy a Managed K8s workload utilizing a containerized app from a public registry

•  Deploy to the Managed K8s site

**Exercise 1 - Deploy Web Server on Managed K8s Site**

#. Goto the following repo and either clone or copy and paste the deployment manifest from the below link into a directory on your local machine. 

    `Web-Server-for-XC-Managed-K8s-Training <https://github.com/Nettas/Web-Server-for-XC-Managed-K8s-Training/blob/main/AppStack-GCP/server-deployment/deployment.yaml/>`_


#. Utlizing the Global kubeconfig deploy the manifest.

   *Change to the directory where you saved the Deployment File and Apply it*
      `kubectl apply -f "filename.yaml"
   
#. Validate all resources were deployed

   *From UI follow the same steps from Lab1 Excercise 2.  Just search for resources in your created namespace*

   *From CLI just append with your created namespace*

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
