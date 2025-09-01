# Poiyomi Shaders Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator utilizing React.

## Contributors: Please Read!

This README contains a brief guide on how to develop the website on your local machine. It is very important that you are versed in using Git so that you can have an efficient workflow. Make sure you understand the prerequisites and the commands used in order to develop locally!

### Prerequisites

**In order to work on the website locally, you must install the [Node.js](https://nodejs.org/en) JavaScript runtime environment on your machine.** This is required in order to access the command-line package managers (such as npm) used in local development.

Secondly, please install [Git](https://git-scm.com/)! This is so that you may run the commands and clone the repository into your local directory. You may also need to set up credentials in order to Pull and Push using SSH. Refer to Git and GitHub Documentation on how to use the command line!

It's recommended you use an IDE that supports Source Control such as [Visual Studio Code](https://code.visualstudio.com/) with the proper plugins installed so that things are easier to manage.

**Ensure you have Forked this Repository before you edit! This is so that you can manage Source Control on your end.**

#### Package Manager

This README shows using `yarn` since it addresses performance issues `npm` is known for. However you are free to use your own Package Manager that supports Node.js. If you do choose to use a different one (like `npm`) instead, just put them in place of `yarn` in the commands. **Just make sure you DO NOT include their lock files in your commits!**

### Installation

After cloning the Repository into your local machine, run the following command into the root folder of the repository:

```
$ yarn install
```

This will install the Node Package Manager into the repository, required for building and developing the website locally.

### Local Development

After installing yarn, you can start developing locally by running this command:

```
$ yarn start
```

This command starts a local development server and opens up a browser window. This allows you to reflect changes you make to the website in realtime without having to restart the server.

*Keep in mind, some features of Docusaurus will be unavailable in local development. Things such as Search, Redirects, etc., will be unavailable.*

To close the server, simply hit `Ctrl + C` on the Keyboard in Git.

### Building

The following command will generate a static build of the website into the local directory and can be served using any static content hosting service. The static content will be thrown into the `./build` directory in the repository's root folder.

```
$ yarn build
```

**It is extremely important you run this command prior to pushing any authorized commits or PR's to this repository!** This is so that you can tell if Vercel will be able to successfully deploy the website.

You can optionally run the statically-built website locally as well by running the following command:

```
$ yarn serve
```

This will launch a locally hosted build of the website in a browser window. Similar to running a development server, this just launches a fully compiled version of the website. So any additional edits you make will require you to run the `build` command again.

*All features in Docusaurus will be functional in a hosted build of the website.*

To close the server, simply hit `Ctrl + C` on the Keyboard in Git.

### Deployment

The website deployment of the Poiyomi Shaders Documentation is automated by **Vercel**. Any approved PR's or direct commits to this repository by authorized contributors will instantly trigger the `deploy` command, which will rebuild and deploy the website.

**To ensure that Vercel can smoothly deploy your website, make sure you run `yarn build` before pushing your commits to the repository!**

## Creating Pull Requests or adding Commits

**THIS IS IMPORTANT!** When adding commits to your Fork (and prepping it for PRs), ONLY include files that are necessary. **DO NOT INCLUDE your generated `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml` files in your pushes, or there will be a PR conflict!** I will not allow PRs that overwrite either one of those files due to the sensitive nature those files serve in the website deployment.

The `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml` and similar .lock files of their type, are files that are auto-generated and should never be edited! Therefore, the only exception is if they are being replaced when upgrading Docusaurus versions. Which, should only be done exclusively by the owners of the Repository.

## Making a Blog Post

For those active in this project, the main Blog is located in the folder `/blog`. This is where Tips, Tricks, and helpful articles will be posted in. Creating a Blog Post requires a few things:

- Your Name and info in the `authors.yml` file, located inside the `/blog` folder. Use currently-added Authors for reference.
- Must be in Markdown format.
- The prefix of the document name must be `YYYY-MM-DD-` for the Date of the post (Year, Month, Day).
  - *Example: `2025-08-30-my-blog-post.md` for the date to be August 30, 2025.*
- A header in the post containing:
  - `slug:` - The URL-friendly name of the page. Optional. If empty, will assume the name of the file as the default.
  - `title:` - The H1 Heading name of your Blog Post.
    - *Example: `title: My Blog Post`*
  - `description:` - A short description of the context of the Blog post. Important for SEO!
    - *Example: `description: This is my short description.`*
  - `hide_table_of_contents: true` - This should be marked `true` to keep things clean.
  - `authors:` - This should be your name as specified in the `authors.yml` file. Shows who wrote this post.
    - *Example: `authors: myname`*
  - `tags:` - Search-friendly tags to add. Each should be a single word separated by a comma. Important for SEO!
    - *Example: `tags: [blog, post, subject]`*
- Compliance with the Docusaurus Blogging system.

After you create a named Markdown file in the `/blog` folder and followed the requirements stated above, you can then start writing!

In order to follow Markdown compliance, make sure you follow the Basic Syntax guidelines when formatting your text: https://www.markdownguide.org/basic-syntax/.

### Attaching Images

If your Blog Post contains images, put your Blog post inside a folder instead! To do this, you will instead create a folder named appropriately (to match the document name) and place your Markdown file inside of it.

Example: `/blog/2025-08-30-my-blog-post/my-blog-post.md`

You can then add an image inside the same folder directory. Add as many images as you need.

To show them in your post, use the Markdown syntax as found here: https://www.markdownguide.org/basic-syntax/#images-1. Since the image will be in the same folder as your post, the path to the image should just be the name of the file itself.

Make sure you specify the Alt text as described in the Markdown syntax. This is important for SEO!