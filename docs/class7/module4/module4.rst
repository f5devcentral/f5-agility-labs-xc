Module 4: Monitoring Operating System Metrics with MQTT and Grafana
===================================================================

**Overview**

This lab will demonstate leveraging vk8s to deploy a workload distributed across the globe, and managed as a single application.

To demonstate this capability, we will be deploying is MQTT broker in US East, US West, and Europe.

For this lab exercise we will leveage bash script running on a Jumphost to publish data to collect, and publish system metrics. Data from each region will then be visualized on a Grafana dashboard.

**What is MQTT?**
  Overview
    The MQTT protocol defines two types of network entities: a message broker and a number of clients. An MQTT broker is a server that receives all messages from the clients and then routes the messages to the appropriate destination clients. An MQTT client is any device (from a micro controller up to a fully-fledged server) that runs an MQTT library and connects to an MQTT broker over a network.

    Information is organized in a hierarchy of topics. When a publisher has a new item of data to distribute, it sends a control message with the data to the connected broker. The broker then distributes the information to any clients that have subscribed to that topic. The publisher does not need to have any data on the number or locations of subscribers, and subscribers, in turn, do not have to be configured with any data about the publishers.
    Source: Wikipedia (https://en.wikipedia.org/wiki/MQTT)

    MQTT is commonly used in IoT applications to collect and publish data from sensors and other devices. You may even be running it as part of your home automation system.

**Lab Topology**

.. image:: ../images/labdiagram.png
  :width: 400pt

**Expected Outcome**

By the end of this lab exercise, participants will have used F5 Distrubuted Cloud and three globally distributed MQTT brokers and demonstation a working setup that continuously monitors and displays system metrics on a Grafana dashboard.

.. toctree::
   :maxdepth: 1
   :glob:

   lab*
