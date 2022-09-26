This is a **React Native** clone project bootstrapped with **create-expo-app**.

## Run the server

First, install the **expo-cli**.

```bash
npm install -g expo-cli
# or
yarn global add expo-cli
```

Run the development server:

```bash
npm start
# or
yarn start
```

## Install Expo Go

You will need to install **Expo Go** app on your mobile device.
Then, scan the **QR-code** in the terminal via Expo Go.

It's also possible to run the app with Android/iOS emulators.

## Stripe

Refer to the **.env.example** file in api folder and set your keys as in example.

## Config

Refer to the **config.example.js** file in the root folder and set your **API_URL** as in example.
Backend server may not work without [ngrok](https://ngrok.com/).

## CMS

This build is powered by Sanity CMS.
All the content is managed from there.
