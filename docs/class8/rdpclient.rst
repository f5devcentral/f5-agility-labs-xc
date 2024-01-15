RDP client
==========================================================================================

If you don't already have an RDP client installed, you can download the RDP client that corresponds to your
operating system by following the links below.
+-------------------+-------------------------------------------------------------------------------------------+
| Operating System  | Documentation and Download Link                                                           | 
+===================+===========================================================================================+
| macOS             | `Remote Desktop Mac`_                                                                     |
+-------------------+-------------------------------------------------------------------------------------------+
| iOS/iPadOS        | `Remote Desktop iOS`_                                                                     |
+-------------------+-------------------------------------------------------------------------------------------+
| Android/Chrome OS | `Remote Desktop Android`_                                                                 |
+-------------------+-------------------------------------------------------------------------------------------+
| Linux             | `Remote Desktop Linux`_                                                                   |
+-------------------+-------------------------------------------------------------------------------------------+

Accessing the UDF Windows 10 Client via RDP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+---------------------------------------------------------------------------------------------------------------+
| 1. From the Webrowser tab that you used to login to the UDF environment, select deployment if you aren't      |
|                                                                                                               |
|    already there.                                                                                             |
|                                                                                                               |
| 2. Select the Windows 10 Client, and click details.                                                           |
|                                                                                                               |
| 3. On the resulting screen click the dropdown arrow next to RDP and choose the screen resolution you would    |
|                                                                                                               |
|    like to use.  This will start the download of a .rdp file with the RDP connection information.             |
|                                                                                                               |
| .. note::                                                                                                     |
|    *This will start the download of a .rdp file with RDP connection information. Please note where you saved* |
|                                                                                                               |
|    *this file.*                                                                                               |
+---------------------------------------------------------------------------------------------------------------+
| |lab1-RDP_Client_Deployment|                                                                                  |
|                                                                                                               |
| |lab1-RDP_Client_Windows10|                                                                                   |
|                                                                                                               |
| |lab1-RDP_Client_Download|                                                                                    |
+---------------------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| 4. Open the .rdp file you downloaded in step 3. This file should automatically open in your RDP client.       |
|                                                                                                               |
| 5. Enter labuser for the Username and F5L@bUser! for the password then click connect.                         |
|                                                                                                               |
| 6. You should now be logged into the Windows 10 client virtual machine.                                       |
+---------------------------------------------------------------------------------------------------------------+
| |lab1-RDP_Client_Login|                                                                                       |
|                                                                                                               |
| |lab1-RDP_Windows10_Desktop|                                                                                  |
+---------------------------------------------------------------------------------------------------------------+

.. _Remote Desktop Mac: https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac/
.. _Remote Desktop iOS: https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-ios/
.. _Remote Desktop Android: https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-android/
.. _Remote Desktop Linux: https://remmina.org/ 

.. |lab1-RDP_Client_deployment| image:: _static/lab1-RDP_Client_Deployment.png
   :width: 800px
.. |lab1-RDP_Client_Windows10| image:: _static/lab1-RDP_Client_Windows10.png
   :width: 800px
.. |lab1-RDP_Client_Download| image:: _static/lab1-RDP_Client_Download.png
   :width: 800px
.. |lab1-RDP_Client_Login| image:: _static/lab1-RDP_Client_Login.png
   :width: 800px
.. |lab1-RDP_Windows10_Desktop| image:: _static/lab1-RDP_Windows10_Desktop.png
   :width: 800px