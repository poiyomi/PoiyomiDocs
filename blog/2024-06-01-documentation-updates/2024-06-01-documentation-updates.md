---
slug: 2024-06-01-documentation-updates
title: 'Major Revamps to the Poiyomi Documentation'
description: Details on the major updates that have been implemented in the Poiyomi Documentation
hide_table_of_contents: true
authors:
  bluwizard
keywords: [shader, docs, documentation, updates, website]
---

Greetings! My name is BluWizard. I've been one of the recent active contributors to the Poiyomi Shaders Documentation, bringing everything up-to-date with 9.0 and finishing up some areas that needed attention.

I would like to talk about some of the major updates that I'm bringing to the Documentation. These overhauls will help bring it more in line with our goals with the Poiyomi Shaders Documentation, as well as bring it more in-line with how similar Documentations organize their pages and helpful resources. We hope these updates will encourage more frequent usage of the Documentation, rather than just trying to search Discord for an answer.

### Let's start of with the big one... A brand new Home Page!

Instead of providing just completion status, I made the Home Page look more presentable and professional. Not only it introduces what known features you can do with the Shader, but has two new Buttons that will redirect you where to `Download & Install` the shader, as well as a link to Join the Discord Server.

I have appended some of the relevant information back to the Introduction page, which will now act as the Docs Hub. It talks about how to navigate the Documentation, as well as our Completion Status. As for links to Download the Shader, it has been moved into an entirely dedicated page.

#### Speaking of, let's talk about the new Download & Install page!

This is going to be your new one-stop shop to learn how to Download, Install, and Update Poiyomi Shaders. Since we both maintain a classic Manual Unity Package version and a VCC Version, we now detail instructions on how to use either one. We list both `Method 1.` and `Method 2.` as the instructions.

We prefer that the users choose which method they wish to use when downloading and installing the Shader. While `Method 1. Manual Unity Package` is preferred, a growing number of users may have a better experience using `Method 2. Creator Companion` to install the Shader due to it's ease-of-use.

Regardless, whichever method you use is up to you, but keep in mind that the latest version of the Shader will always be available first via Discord before it's distributed on both GitHub, BOOTH, and in the VCC Repo. If you are a Poiyomi Pro user, they will exclusively be available via Discord as always. This is also mentioned on the page.

### There are even more changes, down to the small details. Let's break down all the notable visual changes:
- **Overhauled the Home Page.**
    - A more professional, presentable Home Page that gets right to the point and contains relevant information.
    - Added a new Logo.
    - Added Buttons that redirect to Download & Install and as the Discord Server.
- **Added `Download & Install` Page.**
    - Two Methods with Instructions on how to install Poiyomi Shaders, either as a Unity Package or through the Creator Companion.
    - Download Links.
    - Info on the Pro Shader.
- **Fixed a lot of Image and Video Sizing to be more consistent.**
    - For a while, this Documentation was not very mobile-friendly. I've implemented some changes to React JS that makes the embedded videos have more responsive width, regardless of display size. This eliminates an issue where the embedded videos would extend far beyond the width constrains on a Mobile Web Browser. By default, all Images and Videos will now be automatically responsive based on your browser's width, with some exceptions on certain Documentation entries.
- **Upgraded Docusaurus to v3.3.2.**
    - Docusaurus v3.3.2 introduces major improvements, bug fixes, and new features for us to use in the near future.
    - React, MDX, and Node.js have been updated as a result of the Docusaurus v3 Upgrade.
    - The Light and Dark Theme will now automatically match the user's client by default.
- Removed irrelevant information and old pages in favor of the new `Download & Install` page.
    - The `Poiyomi VCC Repo` Page is no longer necessary, as I've implemented a button in the `Download & Install` page for the VCC Version that directly opens the Creator Companion App, adding the Repository.
    - Redirects added to the website configuration to handle old links.

### Conclusion

We are continuously working on improving the Documentation with as much information as possible in an easy-to-understand fashion. If you have any feedback, feel free to drop us a line in the Discord Server. Other than that, we hope you enjoy these new updates!