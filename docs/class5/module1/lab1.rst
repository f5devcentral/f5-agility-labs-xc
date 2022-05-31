Lab 1- Explore F5 Distributed Cloud Console
--------------------------------------------

Welcome to F5 Distributed Cloud Application 301.

In this lab, we will learn the following:

•	Log on into the F5 Distributed CLoud Console. 

•   Review account profile

•   Identify your namespace and your delegated domain name 

.. NOTE::
   - The delegated Domain Name should be captured/written down as it will be used later in the lab
   - Basic Kubernetes knowledge is recommended

**Core concepts**

   *Tenant*
      `Tenant is an entity that is the owner of a given set of configuration and infrastructure. Tenant is the owner of all 
      configuration objects that a user with given tenant-id has created. Tenant is the fundamental concept of isolation, and a 
      tenant cannot access any objects or infrastructure of other tenants.`

   *Namespaces*
      `Tenant’s configuration objects are grouped under namespaces. Namespaces can be thought of as administrative domains. 
      All the objects of the same kind need to have unique names in a given namespace. Namespace themselves must be unique 
      within a tenant. In this document namespace will be referred as <tenant>/<namespace>, which will be globally unique.`

   For more core concepts, please review `F5 Distributed Cloud documentation <https://docs.cloud.f5.com/docs/ves-concepts>`_

**Exercise 1 - Log into F5 Distributed Cloud Console**

.. NOTE::
      Once you join the UDF session, your UDF deployment will start and create an ephemeral account on the F5 Distributed Cloud console (this can take for 5 to 10 min)


#. Once your ephemeral account is created, you will receive an email to update your password. 

   .. image:: ../images/xclogonoemailupdatepass.png
      :width: 250pt

#. Upon the first login, you will be prompted to change your password.

   .. image:: ../images/xclogonopass.png
      :width: 250pt

#. After setting your login credentials, click login.

   .. image:: ../images/xclogon.png

#. Upon password update completion, you will be redirected to the F5 Distributed Cloud Console login. You will need to enter the lab tenant name "F5-xc-lab-app" and then click Next. Then enter your email and password and click Sign in

.. NOTE::
      A tenant in the F5 Distributed Cloud console is a similar construct as an account in AWS or GCP terms.

   .. image:: ../images/xclogontenantname.png
      :width: 250pt

   .. image:: ../images/xclogonlogin.png
      :width: 250pt

#. You must click accept and agree to the terms.

   .. image:: ../images/xclogonacceptterms.png
      :width: 250pt

#. Now, you will need to set the persona and the skill level to access the console.

   .. image:: ../images/xclogonsetlevel.png
      :width: 400pt

   .. image:: ../images/xclogonsetpersona.png
      :width: 400pt

#. Finally, navigate through the initial prompts. 

   .. image:: ../images/xcconsolepromt.png
      :width: 400pt



**Exercise 2 - Explore F5 Distributed Cloud Console**

In this exercise, we will explore the F5 Distributed Cloud Console to identify your namespace and your delegated domain name 

#. Click the User Icon (top-right) and then click Account Settings.

   .. image:: ../images/xcconsoleaccountprofile.png
      :width: 400pt

#. Select "My Namespaces" under the Personal Management section

   .. image:: ../images/xcconsolenamespace.png
      :width: 400pt

#. Each Lab attendee will need to note their own namespace nam

   .. image:: ../images/xcconsolenamespace2.png
      :width: 400pt

   .. NOTE::
      - Your namespace name should captured/written down as it will be referenced later in the labs
      - A namespace is a kubernetes construct. For more Kubernetes concepts, please review `Kubernetes Documentation <https://kubernetes.io/docs/concepts/>`_

#. Click on the Select Service navigation, then click the DNS Management tile.

   .. image:: ../images/xcconsoleclickdns.png
      :width: 400pt

#. Please note the delegated domain name 

   .. image:: ../images/xcconsoleclickdomain.png
      :width: 400pt

   .. NOTE::
      The delegated Domain Name should be captured/written down as it will be leveraged later in the lab

