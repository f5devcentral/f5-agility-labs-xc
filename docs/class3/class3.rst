F5 Distributed Cloud: SaaS Happens, Control the Flow
=============================================

Welcome
--------------

In this lab, attendees will explore how to control application traffic and security within F5 Distributed Cloud because SaaS happens, and you must control the flow.

Participants will configure Service Policies to enforce access controls, build route logic to enable blue/green testing and intelligent traffic steering, and apply WAF policies at the path level to deliver granular security where it matters most.

They will then validate their configurations using the Security and Performance dashboards, gaining visibility into real-time enforcement, traffic behavior, and application health while leveraging AI Assistant to accelerate investigation and tuning.

This lab demonstrates how to secure, steer, and observe application traffic with precision and confidence.

**Narrative:** 
During this lab, you will take on the role of an Engineer at ACME Corp responsible for controlling how application traffic is routed, secured, and observed within a modern SaaS environment.

As ACME continues to deploy new application versions and expose services to users, the team must ensure traffic is intelligently steered, security policies are applied with precision, and visibility is maintained across both security and performance metrics.

Your objective is to configure service policies, implement route-based traffic control for scenarios such as blue/green testing, apply granular WAF protections at the path level, and validate everything through real-time dashboards and AI-driven insights.

Because SaaS happens. Your job is to control the flow.

**Goal:**
Learn how to secure, steer, and observe application traffic within F5 Distributed Cloud.

- Configure and enforce Service Policies to control application access and traffic behavior

- Implement route-based traffic steering and granular WAF protections at the path level

- Use Security and Performance dashboards with AI Assistant to monitor, investigate, and optimize application security and health


This Lab uses the **[AppWorld] F5XC Application Lab** UDF Blueprint.

**Preparation:**

Before starting the course, update your nampspace to dynamically update the guide.

.. raw:: html
    
    <div style="margin: 1em 0; padding: 1em; border: 0px solid #ccc;">
        <label for="namespaceInput"> Enter your namespace: </label>
        <input id="namespaceInput" type="text" placeholder="e.g. sassy-panda" />
        <button onclick="setNamespace()">Save</button>
    </div>
    
    <p><strong>Current namespace: </strong> <span id="currentNamespace">&lt;namespace&gt;</span></p>

.. note:: You may have had a namespace from a previous lab, please update with the new.

.. warning:: Guide pages might need to be refreshed to get updated namespace to render.

.. toctree::
   :maxdepth: 1
   :glob:

   intro*
   lab*
   close*
