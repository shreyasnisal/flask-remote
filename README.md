# flask-remote

This repository contains the code for a mobile remote to any computer. The mobile app currently supports right and left arrow keys, spacebar, closing a window, and putting the computer on sleep mode.

## Getting Started

### Prerequisites

Before continuing to the next steps, make sure you have the following installed on your computer
- nodejs
- python

Run the command below to install the required python dependencies. If you have multiple versions python (2.x.x and 3.x.x) on your computer, you might have have to use **pip3** instead of **pip**
```
pip install flask pynput
```

### Installation

To set up the project, follow the instructions below

- Build an APK file from the react native code by navigating inside the **android** directory and running the command 
```
gradlew assembleRelease
```
- Install the APK on your android device (the generated APK is present in **android/app/build/outputs/apk/release** with the name **app-release.apk**
- Run the python (flask) script present in the **src** directory on the computer that you want to control, using the command
```
python flask_remote.py
```
- The flask server should start, and indicate the IP address that the program is listening on (example: 192.168.1.10:5000)
- Make sure your phone is on the same network as your computer
- Open the *Flask Remote* app on your android device and enter the IP address with the port number, exactly as shown in the example above
- If the connection is successful, the remote screen with the buttons should appear. You can now use these buttons to control the computer

## Contributing

Issues are welcome. If you encounter a bug, please open an issue with as accurate a description as possible.

Pull requests are also welcome. If you want to make major changes, it is better to first create an issue and discuss it first.
