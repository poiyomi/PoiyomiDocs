# Poiyomi Shaders Documentation

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator utilizing React.

## Contributors: Please Read!

This README contains a brief guide on how to develop the website on your local machine. It is very important that you are versed in using Git so that you can have an efficient workflow. Make sure you understand the prerequisites and the commands used in order to develop locally!

### Prerequisites

**In order to work on the website locally, you must install the [Node.js](https://nodejs.org/en) JavaScript runtime environment on your machine.** This is required in order to access the command-line package managers (such as npm) used in local development.

Secondly, please install [Git](https://git-scm.com/)! This is so that you may run the commands and clone the repository into your local directory. You may also need to set up credentials in order to Pull and Push using SSH. Refer to Git and GitHub Documentation on how to use the command line!

It's recommended you use an IDE that supports Source Control such as [Visual Studio Code](https://code.visualstudio.com/) with the proper plugins installed so that things are easier to manage.

**Ensure you have Forked this Repository before you edit! This is so that you can manage Source Control on your end.**

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

*Keep in mind, some features of Docusaurus will be unavailable in local development. Things such as Search, Redirects, etc., will be unavailable.*

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

*All features in Docusaurus will be functional in a hosted build of the website.*

To close the server, simply hit `Ctrl + C` on the Keyboard in Git.

### Deployment

The website deployment of the Poiyomi Shaders Documentation is automated by **Vercel**. Any approved PR's or direct commits to this repository by authorized contributors will instantly trigger the `deploy` command, which will rebuild and deploy the website.

**To ensure that Vercel can smoothly deploy your website, make sure you run `npm run build` before pushing your commits to the repository!**

## Creating Pull Requests or adding Commits

**THIS IS IMPORTANT!** When adding commits to your Fork (and prepping it for PRs), ONLY include files that are necessary. **DO NOT INCLUDE your generated `package-lock.json` or `yarn.lock` files in your pushes, or there will be a PR conflict!** I will not allow PRs that overwrite either one of those files due to the sensitive nature those files serve in the website deployment.

The `package-lock.json` and `yarn.lock` files are auto-generated and should never be edited! Therefore, the only exception is if they are being replaced when upgrading Docusaurus versions. Which, should only be done exclusively by the owners of the Repository.