# Poiyomi Shaders Documentation

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Contributors: Please Read!

This README contains a brief guide on how to develop the website on your local machine. It is very important that you are versed in using Git so that you can have an efficient workflow. Make sure you understand the prerequisites and the commands used in order to develop locally!

### Prerequisites

**In order to work on the website locally, you must install the [Node.js](https://nodejs.org/en) JavaScript runtime environment on your machine.** This is required in order to access the command-line package managers (such as npm) used in local development.

Secondly, please install [Git](https://git-scm.com/)! This is so that you may run the commands and clone the repository into your local directory. You may also need to set up credentials in order to Pull and Push using SSH. Refer to Git and GitHub Documentation on how to use the command line! 

You can also use [Visual Studio Code](https://code.visualstudio.com/) with the proper plugins installed as it supports managing Source Control as well.

### Installation

After cloning the Repository into your local machine, run the following command into the root folder of the repository:

```
$ npm install
```

This will install the Node Package Manager into the repository, required for building and developing the website locally.

### Local Development

After installing npm, you can start developing locally by running this command:

```
$ npm run start
```

This command starts a local development server and opens up a browser window. This allows you to reflect changes you make to the website in realtime without having to restart the server.

To close the server, simply hit `Ctrl + C` on the Keyboard in Git.

### Building

The following command will generate a static build of the website into the local directory and can be served using any static content hosting service. The static content will be thrown into the `./build` directory in the repository's root folder.

```
$ npm run build
```

**It is extremely important you run this command prior to pushing any authorized commits or PR's to this repository!** This is so that you can tell if Vercel will be able to successfully deploy the website.

You can optionally run the statically-built website locally as well by running the following command:

```
$ npm run serve
```

This will launch a locally hosted build of the website in a browser window. Similar to running a development server, this just launches a fully compiled version of the website. So any additional edits you make will require you to run the `build` command again.

To close the server, simply hit `Ctrl + C` on the Keyboard in Git.

### Deployment

The website deployment of the Poiyomi Shaders Documentation is automated by **Vercel**. Any approved PR's or direct commits to this repository by authorized contributors will instantly trigger the `deploy` command, which will rebuild and deploy the website.

**To ensure that Vercel can smoothly deploy your website, make sure you run `npm run build` before pushing your commits to the repository!**

