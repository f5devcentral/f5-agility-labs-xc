Lab 1 - Deploy Containers on vK8s and Build Grafana Dashboard
=============================================================

**Steps**

Environment Setup:

- Ensure that the NAMESPACE environment variable is set.
- Deploy Grafana using docker compose which will be procongigured to match your namespace name for each of the 3 regions.


.. code-block:: bash

  ### Enter your own namespace value
  export NAMESPACE=<namespace>

**Deploy MQQT Broker**

.. code-block:: bash

  export KUBECONFIG=/srv/filebrowser/ves_$NAMESPACE\_$NAMESPACE-vk8s.

  #Let's review again to confirm that we can reach the cluster:
  kubectl config view

**Deploy Manifests**

.. code-block:: bash

  cd ~/caaslab
  kubectl apply -f vk8s/

**Deploy Grafana**

.. code-block:: bash

  cd ~/caaslab
  docker-compose up -d

**Access Grafana**

Within the lab

