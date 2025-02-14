Lab Optional - Manually Create a TCP Load Balancer and Origin Pool
==================================================================

**Origin Pool Configuration**

The Origin Pool will point to the pods on on the vk8s cluster.

#. On the Distributed Cloud console and in the **Distributed Apps** workspace, under **Manage**, hover over **Load Balancers**, then click **Origin Pools**

#. Click the **Add Origin Pool** button.

#. On the configuration page, click the JSON button.

#. In the textual config editor page select the other JSON button, and then select YAML.

#. Click into the main editor window and then press CTRL-A to select all of the prepopulated text.

   Press the DELETE key (or the BACKSPACE key) to remove all the text.

   There should only be left a blank line on line 1.

#. Copy and paste the following YAML configuration into the editor window:

   .. code-block:: yaml

      metadata:
         name: kind-python-mosquitto
         namespace: kind-python  ## Replace with your namespace
         labels: {}
         annotations: {}
         disable: false
      spec:
        origin_servers:
         - k8s_service:
            service_name: mosquitto.kind-python  ## Replace with your namespace
            site_locator:
               virtual_site:
                  tenant: f5-xc-lab-app-jqguisgi
                  namespace: shared
                  name: appworld2025-k8s-vsite
                  kind: virtual_site
            vk8s_networks: {}
            labels: {}
        no_tls: {}
        port: 1883
        same_as_endpoint_port: {}
        healthcheck: []
        loadbalancer_algorithm: LB_OVERRIDE
        endpoint_selection: LOCAL_ONLY

**TCP Load Balancer Configuration**

The TCP Load Balancer will point to the Origin Pool, which will allow interest access into the MATT containers.

#. On the Distributed Cloud console and in the **Distributed Apps** workspace, under **Manage**, hover over **Load Balancers**, then click **TCP Load Balancers**

#. Click the **Add TCP Load Balancer** button.

#. On the New TCP Load Balancer configuration page, click the JSON button and select YAML as before.

#. Clear any configuration in the editor window as before.

#. Copy and paste the following YAML configuration into the editor window and replace the fields with your namespace.

   .. code-block:: yaml

      metadata:
        name: kind-python-mqtt ## Replace with your namespace
        namespace: kind-python ## Replace with your namespace
        labels: {}
        annotations: {}
        disable: false
      spec:
        domains:
          - kind-python.useast.lab-app.f5demos.com ## Replace with your namespace
          - kind-python.europe.lab-app.f5demos.com ## Replace with your namespace
          - kind-python.uswest.lab-app.f5demos.com ## Replace with your namespace
        listen_port: 8883
        sni: {}
        dns_volterra_managed: false
        origin_pools: []
        origin_pools_weights:
          - pool:
              tenant: f5-xc-lab-app-jqguisgi
              namespace: kind-python      ## Replace with your namespace
              name: kind-python-mosquitto  ## Replace with Origin Pool name
              kind: origin_pool
            weight: 1
            priority: 1
            endpoint_subsets: {}
        advertise_custom:
          advertise_where:
            - virtual_site:
                network: SITE_NETWORK_INSIDE_AND_OUTSIDE
                virtual_site:
                  tenant: f5-xc-lab-app-jqguisgi
                  namespace: shared
                  name: appworld2025-k8s-vsite
                  kind: virtual_site
              use_default_port: {}
        hash_policy_choice_round_robin: {}
        idle_timeout: 3600000
        retract_cluster: {}
        tls_tcp:
          tls_cert_params:
            tls_config:
              medium_security: {}
            certificates:
              - tenant: f5-xc-lab-app-jqguisgi
                namespace: shared
                name: caas-lab-certificate
                kind: certificate
            no_mtls: {}
        service_policies_from_namespace: {}
