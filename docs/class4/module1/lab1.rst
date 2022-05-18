Lab 1.1 - Setup
===============

Minimun Requirements
--------------------

No matter what you're daily driver is you'll need `Docker` and `Git`.

.. note:: We recommend some sort of Linux distro. All of this can be done with
   Windows but you'll need to overcome several hurdles.

.. attention:: The examples below assume Linux as the build machine.

- For Linux use apt (or whatever package tool) to download and install:

  Git

  .. code-block:: bash

     sudo apt update
     sudo apt install git

  Docker

  .. code-block:: bash

     sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
     curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
     sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
     sudo apt update
     sudo apt install docker-ce docker-ce-cli containerd.io

- For Windows download the following and install:

  - `Git for Windows <https://git-scm.com/download/win>`_
  - `Docker Desktop for Windows <https://hub.docker.com/editions/community/docker-ce-desktop-windows/>`_

Configure Git
-------------

Now that Git's installed we need to configure it for basic use. From your
terminal of choice run the following git commands:

.. code-block:: bash

   git config --global user.name "vtog"
   git config --global user.email "v.tognaci@f5.com"
   git config --global core.editor vim

.. attention:: Be sure to use your user name, email, and editor of choice.

It's recommended to setup ssh auth with you're github account. For details on
how to configure this see the following,
`Connecting to GitHub with SSH <https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh>`_

#. From linux this can easily be accomlished with the following:

   .. code-block:: bash

      ssh-keygen

#. If you used the default `ssh-keygen` variables, simply copy the contents of
   "id_rsa.pub". You can view the file with the following:

   .. code-block:: bash

      cat ~/.ssh/id_rsa.pub

#. On github go to your account settings, click "SSH and GPG keys", and click
   "New SSH key".

   - Give the new key a "Title"
   - Copy the contents of id_rsa.pub in the "Key" field

Clone Your Repo
---------------

Now that Git's installed and configured we need to clone the repo from GitHub

.. attention:: We recommend cloning opposed to forking.

.. important:: We're using the "template" repo in all our examples. Be sure to
   use the proper repo for the class you're working on. If you don't know which
   one that is reach out to the `*AgilityLabsRTD` doc team.

#. Open a terminal
#. Clone the repo you plan to contribute to.

   .. code-block:: bash

      git clone git@github.com:f5devcentral/f5-agility-labs-template.git

#. When using the git clone as shown above it will clone the repo's default
   branch. If a specific branch is required you have two options depending on
   where you are in the process.

   - Before cloning: use the "-b" switch and specify the branch of choice

     .. code-block:: bash

        git clone -b develop git@github.com:f5devcentral/f5-agility-labs-template.git

   - After cloning: use `fetch` and `checkout` the branch of choice

     .. code-block:: bash

         git fetch
         git checkout develop

Fork Your Repo (NOT Recommended)
--------------------------------

.. important:: We recommend the cloning process outlined in the previous
   section. This section is to document how to fork/clone. But more importantly
   keep your fork/clone in sync.

#. From GitHub Fork the Agility repo you plan to contribute to.
#. Clone the repo to your build PC.

   .. code-block:: bash

      git clone git@github.com:f5devcentral/f5-agility-labs-template.git

#. See previous section on "branch" selection/changing.

.. important:: You need to know how to keep your fork in sync with the upstream
   Agility project.

#. Stay in sync with the upstream repo.

   .. code-block:: bash

      git remote add upstream <agility repo clone link>

#. Rebase your branch

   .. code-block:: bash

      git pull --rebase upstream <branch>

#. Update your Local Fork

   .. code-block:: bash

      git push --force

Build The Doc
-------------

The repo should have several scripts to build the doc. The most important of
which is `containthedocs-build.sh`

#. From the currenlty open terminal move into the cloned repo directory

   .. code-block:: bash

      cd f5-agility-labs-template

#. Build your html from rst

   .. code-block:: bash

      ./containthedocs-build.sh

#. You now should have a new directory with your lab html files

   .. code-block:: bash

      ls -la docs/_build

   You should see the following output

   .. code-block:: bash

      ❯ ls -la docs/_build
      total 16
      drwxr-xr-x 4 root  root  4096 Feb 22 13:14 .
      drwxr-xr-x 6 vince vince 4096 Feb 22 13:14 ..
      drwxr-xr-x 3 root  root  4096 Feb 22 13:14 doctrees
      drwxr-xr-x 6 root  root  4096 Feb 22 13:14 html

View your doc locally with Python
---------------------------------

For your convenience a script to invoke a simple python web server is provided.

.. attention:: Assuming Python3 is installed.

#. From the repo directory run the `server` script in the "scripts" directory.
   This will start the http server on the local IP and port 8000

   .. code-block:: bash

      ./scripts/server

#. With your local browser type in the following URL

   .. code-block:: bash

      http://<IP_ADDR>:8000/html/

#. When finished hit CTRL-C

View your doc locally with Nginx
--------------------------------

#. Install nginx

   .. code-block:: bash

      sudo apt install nginx

#. Create a softlink to the rst repo documents.

   .. code-block:: bash

      cd /var/www/html
      sudo ln -s ~/f5-agility-labs-template/docs/_build/html/ template

   .. note:: In my example the cloned repo is in the home directory.

#. With your local browser type in the following URL

   .. code-block:: bash

      http://<IP_ADDR>/template/

Recap
-----
You now have the following:

- A working build environment
- A cloned repo
- A place to view changes

Next we'll explore basic RST examples.
