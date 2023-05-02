**Exercise 1 – Define the protected application in F5 Distributed Cloud
Bot Defense**

1. Login to your F5 Distributed Cloud tenant at
   https://f5-xc-lab-sec.console.ves.volterra.io/web/home.

2. From the Home page select the Bot Defense tile.

.. image:: Documents/Agility 2023/media/image1.png
   :alt: Graphical user interface, application, Teams Description
   automatically generated
   :width: 6.5in
   :height: 4.91597in

3. From the left-hand menu select **Manage >> Applications**. Then
   select the “\ **Add Protected Application**\ ” button.

.. image:: Documents/Agility 2023/media/image2.png
   :alt: Graphical user interface, application, Teams Description
   automatically generated
   :width: 6.5in
   :height: 2.88264in

4. On the Protected Application screen do the following:

   a. Give the application a descriptive **Name** (like “f5airlines” or
      “airline.f5demo.com”)

   b. Leave the **Application Region** as “US”.

   c. Select “Custom” for the **Connector Type**.

   d. Click **Save and Exit**.

.. image:: Documents/Agility 2023/media/image3.png
   :alt: Graphical user interface, application, Teams Description
   automatically generated
   :width: 6.5in
   :height: 3.99514in

5. This will return you to the Applications screen. Click the ellipsis
   icon on the right of your newly defined application. Here you will
   find the ability to copy various values that are needed to configure
   the BIGIP connector.

.. image:: Documents/Agility 2023/media/image4.png
   :alt: Graphical user interface, application, Teams Description
   automatically generated
   :width: 6.5in
   :height: 2.96181in

6. dtfgsdfgsadf

**
**

**Exercise 2 – Configure F5 BIGIP Distributed Cloud Bot Defense
connector profile.**

7. Select the **Airline App** Access Method for your F5 BIGIP in your
   UDF deployment.

**ADD SCREENSHOT HERE**

**Screenshot of student view of UDF deployment BIGIP access methods with
“Airline App” Access Method highlighted.**

8. From this new browser tab, take note of the FQDN. You will need it
   when configuring the F5 Distributed Cloud Bot Defense profile later
   in this lab.

.. image:: Documents/Agility 2023/media/image5.png
   :alt: Graphical user interface, website Description automatically
   generated
   :width: 6.5in
   :height: 3.57778in

9. Access the TMUI of your BIGIP 17.1. Login credentials are
   **admin/f5xcdemo!**.

**ADD SCREENSHOT HERE**

**Screenshot of student/course view of UDF deployment BIGIP access
methods with “TMUI” Access Method highlighted**

10. In the F5 BIGIP TMUI, browse to **Distributed Cloud Services >> Bot
    Defense >> BD Profiles** and click the (+) icon to create a new Bot
    Defense profile.

.. image:: Documents/Agility 2023/media/image6.png
   :alt: Graphical user interface, text, application Description
   automatically generated
   :width: 4.68476in
   :height: 5.54063in

11. On the **New BD Profile…** screen edit the following settings:

..

   **General Properties**

a. Give the BD profile a descriptive **Name**.

..

   **API Request Settings**

b. Paste into the **Application ID** field the value copied from F5
   Distributed Cloud console.

c. Paste into the **Tenant ID** field the value copied from F5
   Distributed Cloud console.

d. Paste into the **API Key** field the value copied from F5 Distributed
   Cloud console.

.. image:: Documents/Agility 2023/media/image7.png
   :alt: Graphical user interface Description automatically generated
   :width: 6.5in
   :height: 6.68194in

   **JS Insertion Configuration**

e. Select the check box to enable **Inject JS in Specific URL**.

f. In the **JS Inject Included Paths**, enter **/user/signin** and click
   **Add**.

..

   **Protected Endpoint(s) – Web**

g. For **Protected URIs**:

   i. In the **Host** field paste in the FQDN from the Airline App
      Access Method to you BIGIP.

..

   *(See Exercise 1 step 8. FQDN for your Airline App will be similar to
   3995dde2-4cf8-4c5b-89f2-2d0717d76d5b.access.udf.f5.com.)*

ii.  Enter **/user/signin** into the **Path** field.

iii. Select **Block** from the **Mitigation Action** dropdown.

iv.  Click **Add**.

.. image:: Documents/Agility 2023/media/image8.png
   :alt: Graphical user interface, text, application, Word, email
   Description automatically generated
   :width: 6.5in
   :height: 3.70903in

   **Advanced Features**

h. Select the **Advanced** view from the section dropdown.

i. From the **Protection Pool – Web** dropdown select the
   **ibd-webus.fastcache.net** pool.

j. From the **SSL Profile** dropdown select the **serverssl** profile.

.. image:: Documents/Agility 2023/media/image9.png
   :alt: Graphical user interface, application Description automatically
   generated
   :width: 6.5in
   :height: 4.74792in

k. Choose **X-Forwarded-For** from the **Source of Client IP Address**
   dropdown.

l. Click **Finished**.

The F5 Distributed Cloud Bot Defense connector profile is now
configured. However, in order to protect the application we must assign
the BD profile to the virtual server.

12. From the F5 BIGIP TMUI, browse to **Local Traffic >> Virtual
    Servers**. Select the **airline-backend.f5se.com** virtual server.

.. image:: Documents/Agility 2023/media/image10.png
   :alt: Graphical user interface, text, application Description
   automatically generated
   :width: 6.5in
   :height: 2.74722in

13. Select the **Distributed Cloud Services** tab at the top and then do
    the following:

    a. Set **Bot Defense** to **Enabled**.

    b. From the **Profile** dropdown, select the BD profile created in
       the previous step.

    c. Click **Update**.

.. image:: Documents/Agility 2023/media/image11.png
   :alt: Graphical user interface, text, application, email Description
   automatically generated
   :width: 6.5in
   :height: 3.07083in

Exercise 2 – Test and Monitor Protected Traffic

1. Select the **Airline App** Access Method for your F5 BIGIP in your
   UDF deployment

2. Select **Signin** in the top left to access the F5 AIR login page.
   This is the protected page configured in your F5 BIGIP Distributed
   Cloud Bot Defense Profile.

3. Enter any email address and password and click **Confirm** to submit
   a login attempt.

.. image:: Documents/Agility 2023/media/image12.png
   :alt: Graphical user interface, application Description automatically
   generated
   :width: 5.87275in
   :height: 3.07943in

4. Try several login attempts with your browser.

5. You can generate “attack” traffic by opening your browser’s
   “Developer Tools”, selecting the Network tab, finding the POST
   request to the login page, right-clicking it, and choosing “Copy as
   cURL”.

.. image:: Documents/Agility 2023/media/image13.png
   :alt: Graphical user interface Description automatically generated
   :width: 5.99382in
   :height: 4.64393in

You can then paste the copied request into a terminal/command prompt and
hit **Enter**.

Repeat this several times to generate many requests.

6. Return to the **F5 Distributed Cloud** console and navigate to the
   **Bot Defense** service.

7. From the left-hand menu, select **Overview >>** **Monitor**. Change
   the time range to **Last 1 hour**.

.. image:: Documents/Agility 2023/media/image14.png
   :alt: Graphical user interface, application, Teams Description
   automatically generated
   :width: 6.5in
   :height: 4.46111in

Here you will see a high-level overview of the traffic to your Bot
Defense protected applications.

8. From the left-hand menu, select **Report >> Traffic Analyzer**.

.. image:: Documents/Agility 2023/media/image15.png
   :alt: A picture containing table Description automatically generated
   :width: 6.5in
   :height: 3.26667in

Here you can see the most recent requests associated with your
connector-protected applications, the Traffic Type, the Automation Type,
and additional detailed information about these requests.

9. Browse to the other sections under **Report** in the Bot Defense
   console; **Bad Bot Report**, **Protection Coverage Report**,
   **Transaction Usage**.
