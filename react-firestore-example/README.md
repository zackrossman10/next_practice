## Screenshot

![React-firestore demo](screenshot/screenshot_1.png)

This project shows you how to integrate Firestore into your React application for saving data.

View the tutorial of this app [here](https://sebhastian.com/react-firestore/).

This project is bootstrapped using Create React App and Bootstrap. In the project directory, you can run:

### `npm install`

To install all node modules required by this project

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Don't forget to add your Firebase credential

Or the demo will not work. Put it in the `firebase.js` file:

```js
var firebaseConfig = {
    apiKey: "AIzaSyBlhW517Tq4iZch9g3npL-QE4xiIpAM1Rw",
    authDomain: "liarsdice-4c00d.firebaseapp.com",
    databaseURL: "https://liarsdice-4c00d.firebaseio.com",
    projectId: "liarsdice-4c00d",
    storageBucket: "liarsdice-4c00d.appspot.com",
    messagingSenderId: "474625669665",
    appId: "1:474625669665:web:63ae38d1b6d6b413514160",
    measurementId: "G-6S2W8N5Z0D"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
```

Learning about React? Check out my book [React Distilled](https://sebhastian.com/react-distilled/)