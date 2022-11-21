# Button App

This app should trigger a zapier web hook by clicking a button sending status of inactive or active as POST request body.
The zapier web hook needs to be entered manually in the settings.

## Create standalone preview build for iOS

To create and install a standalone preview of the Button App on iOS you need to first register the iOS device on which the app should run later.
To register a device run the following command in your project root folder.

```bash
eas device:create
```

This will output a website accessible by link or qr code to scan on the device. Download the profile and install the profile by following the instructions on the website.

After registering the target device run the following command in the project root folder to create a preview build for internal distribution and testing on previously registered devices.

```bash
eas build --profile preview --platform ios
```

This will again output a website accessible by link or qr code where the app can be downloaded and installed.
When a new device has been registered, make sure to specifically select the device's uuid when asked about the registered devices in the Provisioning Profile.
On iOS 16 the development mode needs to be activated in order to install preview builds, therefore go to "Settings", then to "Privacy & Security" and scroll down to "Developer Mode" at the bottom.

If there is no "Developer Mode" entry the device needs to be physically connected to a Macbook with Xcode 14. Before connecting the device open a project in Xcode and then connect your device. "Developer Mode" should now be visible in the "Privacy & Security" settings.