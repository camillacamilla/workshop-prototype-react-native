# Workshop Prototype with React Native

## Contents

1. [Tools & Prerequisites](#tools--prerequisites)
2. [Installing the Prerequisites](#installing-the-prerequisites)
3. [Guide Exercise](#guide-exercise)
4. [Useful Links](#useful-links)

## Tools & Prerequisites

Here is a list of tools, software and libraries that will be used during the workshop.

| Tool  | Description |
|---|---|
| *Code Editor* | A JavaScript code editor, [VSCode](https://code.visualstudio.com/) is recommended
| *Command-Line* | A command-line application like Terminal (macOS) or [cmder](http://cmder.net/) (Windows)
| [npm](https://www.npmjs.com/get-npm) (v5+) | Used to install third-party dependencies and tools
| [Helper tools (macOS)](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/) | Gives Mac terminal users many commonly used commands
| *Expo App* | Mobile app to preview your code [iPhone](https://itunes.apple.com/app/apple-store/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
| [`expo-cli`](https://expo.io/) | toolchain to help build React Native apps.

## Installing the Prerequisites

1. Install npm. [Get download link](https://www.npmjs.com/get-npm)

2. Open your terminal and check if npm is installed

```
npm -v
```

3. Install `expo-cli`

```
npm install -g expo-cli
```

4. If you have permission error, fix given right access to the global folder

```
sudo chown -R $USER:`id -g -n $USER` /usr/local/
```

or 

```
sudo chmod 755 /usr/local/
```

5. Create the project

```
cd desktop
expo init workshop-react-native
```

6. Check the project folder

```
cd workshop-react-native
open .
```

7. Start the dev environment

```
expo start
```

8. Download the Expo CLI app. [iPhone](https://itunes.apple.com/app/apple-store/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

9. Open the camera and Scan the QR code.

10. Bonus: Install [VScode](https://code.visualstudio.com/download) to follow the workshop.

## Guide Exercise

### Part 0 - Assets

| Link  | Description |
|---|---|
| [assets.zip](https://www.dropbox.com/s/wmdzbnawlr9f3dy/assets.zip?dl=0) | 375x667

### Part I - Home Page

| Code Sample  | Description |
|---|---|
| [Home.js](https://gist.github.com/zehfernandes/d9292d08410594e1aabff35aa060c619#file-home01-js) | Understanding React structure and add a image
| [Home.js](https://gist.github.com/zehfernandes/d9292d08410594e1aabff35aa060c619#file-home02-js) | How to use react native component Scroll View
| [Home.js](https://gist.github.com/zehfernandes/d9292d08410594e1aabff35aa060c619#file-home03-js) | Adding a modal alert after you tap the button

 
### Part 2 - React Navigation 

| Code Sample  | Description |
|---|---|
| [App.js](https://gist.github.com/zehfernandes/dcd96604d1de04c054b909d86b5a19a9#file-app-js) | Setup `react-navigation`
| [Home.js](), [Checkin.js](https://gist.github.com/zehfernandes/dcd96604d1de04c054b909d86b5a19a9#file-checkin-js) | Navigate from home to checkin page
 
### Part 3 - Camera

| Code Sample  | Description |
|---|---|
| [Camera.js]() | Creating and using functions
| [Camera.js]() | Understanding React components' lifecycle
| [Camera.js]() | Using the <Camera> component
| [Camera.js]() | Understainding states
| [Camera.js]() | How to set states

## Useful Links

- [React Native Documentation](https://facebook.github.io/react-native/docs/getting-started.html)
- [React Navigation Documentation](https://reactnavigation.org/)
- [Expo Documentation](https://github.com/jondot/awesome-react-native)
- [React For Designers](https://reactfordesigners.com/) 
- [Awesome React Native](https://github.com/jondot/awesome-react-native)
- [Awesome React Native Education](https://github.com/hsavit1/Awesome-React-Native-Education)
