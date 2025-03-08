# Digital Clock Expo React Native App

This repository contains a digital clock application built with Expo and React Native.

## Features

- Display current time
- Set alarms
- Customize clock appearance

## Commands

Here are the details of the available commands:

https://www.geeksforgeeks.org/how-to-convert-an-expo-app-to-apk-in-react-native-for-android/

### Start the Application

To start the application, use the following command:

```bash
npm start
npm install -g eas-cli
eas login
eas init
eas build:configure
npx expo export --platform web
eas build --profile development --platform android
npm run android

