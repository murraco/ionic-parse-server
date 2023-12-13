 # Ionic Parse Server

![](https://img.shields.io/badge/build-success-brightgreen.svg)

# Stack

![](https://img.shields.io/badge/ionic_3-✓-blue.svg)
![](https://img.shields.io/badge/angular_2+-✓-blue.svg)
![](https://img.shields.io/badge/parse_server-✓-blue.svg)

***

<h3 align="center">Please help this repo with a ⭐ if you find it useful! :blush:</h3>

***

# About this starter

This is a simple starter for integrating Ionic 3, Angular 4+ and Parse Server. It provides a small PoC (Proof of Concept) app for adding/removing scores and uses signin/signout based on Parse Server. You can just use it as the foundation for your next big app.

## Some screenshots

<p align="center">
  <img src="https://github.com/murraco/ionic-parse-server/blob/master/signin.png" width="40%" />
  <img src="https://github.com/murraco/ionic-parse-server/blob/master/home.png" width="40%" />
</p>

# File structure

```
ionic-parse-server/
│
├── resources/
│
├── src/
│   ├── app/
│   │   ├── app.constant.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.template.html
│   │   └── main.ts
│   │
│   ├── assets/
│   │   └── icon/
│   │       └── favicon.ico
│   │
│   ├── pages/
│   │   ├── about/
│   │   │   ├── about.html
│   │   │   ├── about.ts
│   │   │   └── about.scss
│   │   │
│   │   ├── account/
│   │   │   ├── account.html
│   │   │   ├── account.ts
│   │   │   └── account.scss
│   │   │
│   │   │── contact/
│   │   │   ├── contact.html
│   │   │   ├── contact.ts
│   │   │   └── contact.scss
│   │   │
│   │   │── home/
│   │   │   ├── home.html
│   │   │   ├── home.ts
│   │   │   └── home.scss
│   │   │
│   │   │── signin/
│   │   │   ├── signin.html
│   │   │   ├── signin.ts
│   │   │   └── signin.scss
│   │   │
│   │   ├── signup/
│   │   │   ├── signup.html
│   │   │   └── signup.ts
│   │   │
│   │   └── tabs/
│   │       ├── tabs.html
│   │       └── tabs.ts
│   │
│   ├── providers/
│   │   │── auth/
│   │   │   └── auth.ts
│   │   │
│   │   └── parse/
│   │       └── parse.ts
│   │
│   ├── theme/
│   │   └── variables.scss
│   │
│   └── index.html
│
├── typings/
│    └── cordova-typings.d.ts
│
├── .editorconfig                 * Defines coding styles between editors
├── .gitignore                    * Example git ignore file
├── config.xml                    * Cordova configuration file
├── ionic.config.json             * Ionic configuration file
├── LICENSE                       * MIT License
├── package.json                  * Defines our JavaScript dependencies
├── package-lock.json             * Defines our exact JavaScript dependencies tree
├── README.md                     * This file
├── tsconfig.json                 * Defines the root files and the compiler options
├── tslint.json
└── *.png                         * Images for the README.md
```

## Ionic Framework

The Ionic framework allows for the creation of highly interactive, **cross-platform mobile applications** that can be deployed across iOS, Android, and Windows devices. These hybrid applications include native functionalities, exhaustive gestures, and customizable tools to enhance user-friendliness. Those powerful capabilities are brought to Ionic because it provides mobile-friendly `HTML`, `JS`, and `CSS` components to developers.

Some of its advantages are:

- Open source
- Code once, run on all mobile devices
- One programming language for all mobile OS
- Use of well-known web technologies
- A huge community

## Parse Server

**Parse Server** is an open source version of the Parse backend that can be deployed to any infrastructure that can run `Node.js`. It works with the Express web application framework and can be added to existing web applications, or run by itself. Its repository on [Github](https://github.com/parse-community/parse-server) is very active with ~165 contributors and ~14K stars so even if you didn't use the hosted Parse platform before, its open source version is a wise choice if you need to build a backend for you mobile app or your clients apps.

Parse offer a backend to store data, push notifications, social media integration for your app etc. The features provided tend to be helpful in prototyping quickly.

- **General Purpose**: Open Source
- **Hosting**: Self-hosting or Parse Server Hosting providers. Supports local testing and development
- **Custom Code**: Supported via Cloud Code
- **Database**: Mongo DB
- **Push**: Support push notifications for Android, iOS. Also users can manage Push Notifications campaigns
- **Storage**: No restricted time limits and no file storage restrictions. Control over backup, restore and database indexes
- **Ideal for**: General purpose applications

## How to use this starter?

1. Install Ionic

  ```
  $ npm install -g ionic cordova
  ```
  
2. Install and run Parse Server

  ```
  $ npm install -g parse-server mongodb-runner
  $ mongodb-runner start
  $ parse-server --appId APPLICATION_ID --masterKey MASTER_KEY --databaseURI mongodb://localhost/test
  ```
  
  > You can use any arbitrary string as your application id and master key. These will be used by your clients to authenticate with the Parse Server. The application id and the parse url can be changed in `src/app/app.constant.ts`.

3. Fork this repository and clone it
  
  ```
  $ git clone https://github.com/<your-user>/ionic-parse-server
  ```
  
4. Navigate into the folder  

  ```
  $ cd ionic-parse-server
  ```
  
5. Install NPM dependencies

  ```
  $ npm install
  ```
  
6. Run the project

  ```
  $ ionic serve
  ```
  
7. Navigate to `http://localhost:8100` in your browser

## Or if you only want to add Parse Server to your project

1. Go to the project directory:

```
cd my-project
```

2. Install Parse SDK by running the following command

```
npm install parse --save
```

3. Import `Parse`

```js
import { Parse } from 'parse';
```

4. Declare your `parseAppId` and `parseServerUrl`

```js
private parseAppId: string = 'APPLICATION_ID';
private parseServerUrl: string = 'http://localhost:1337/parse';
```

5. Initialize it on the constructor

```js
constructor() {
  this.parseInitialize();
}

private parseInitialize() {
  Parse.initialize(this.parseAppId);
  Parse.serverURL = this.parseServerUrl;
}
```
**That's all!** Just create a provider, import Parse and start writing code

# Contribution

- Report issues
- Open pull request with improvements
- Spread the word
- Reach out to me directly at <mauriurraco@gmail.com>
