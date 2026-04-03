---
slug: upcoming-docs-changes-for-10-0
title: Upcoming Changes to the Documentation for 10.0
description: Sharing some details on the changes being made to the documentation in preparation for 10.0.
hide_table_of_contents: true
authors:
  bluwizard
tags: [documentation, docs, version, versioning, updates]
---

Hi, BluWizard here! As the maintainer of the Poiyomi Shaders Documentation, I would like to share some changes being made to the Documentation in preparation for 10.0.

As some of your Patreon subscribers already know, **Poiyomi Pro 10.0 is now available and is ready for open testing.** Before 10.0 can be released to the public as Poiyomi Toon (Free), some changes must be made to this website so that the transition is seamless and that information stays relevant and up-to-date.

This also includes a full transition from being able to download Poiyomi Pro into our brand new system used on [pro.poiyomi.com <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://pro.poiyomi.com), which is far more reliable than Discord for various technical reasons. That being said, all future downloads of Poiyomi Pro will be handled from that sub-domain moving forward.

Now, let's get into the most important changes...

## Docs Versioning

As of recent updates, we have implemented the usage of the Docusaurus Versioning CLI to create versions of each page in the documentation that shows context based on the version selected. It appears as a version dropdown on the Header, which looks like this:

<a>
<img src="/img/general/Docs-Version-Dropdown.png" alt="Dropdown Menu to switch between versions."/>
</a>

*Figure 1: Version Dropdown*

When you hover your mouse over it, you will see some version numbers. By default, the latest version will be what has been set as the default in our configuration. If you select an older version (such as `9.3`), the context of the documentation page you are viewing will significantly change.

This means that if you happen to be using an older version, **you can now use this dropdown to view accurate information on what you're looking for.** Because of how `10.0` has a gigantic amount of changes across the shader overall, this will be how we will control our context for future versions. By default, the "latest" will be shown (which is `10.0`). If you happen to be viewing context with an older version selected, a yellow-colored banner will appear as a gentle reminder.

> If a new version becomes available, we will run a CLI command that basically "archives" a copy of all pages into a special "versioned_docs" directory. So if and when `10.1` releases in the distant future, we will run a command that makes all current (`10.0`) documentation be archived as a previous version, thus making any new edits be seen as `10.1` (latest version) and the Version Dropdown gets updated.

As a result, this allows our visitors to always find relevant information for the version of the shader they are using. Now while it could make it difficult for contributors to help improve our documentation, we barely get any changes to older versions. So there is less of a reason to edit or update older pages for older shader versions unless deemed absolutely necessary.

You can view more technical details of how this system works [here <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://docusaurus.io/docs/versioning).

## Download & Install Instructions

As some people may have already noticed, our [Download & Install](/download) instructions have been overhauled as requested by Poiyomi.

To start, Poiyomi Toon (the public Free version) now recommends `ALCOM / Creator Companion` as our recommended installation method. This is because we find this method to be far more manageable and easier for the majority of our users, as the package is coded to automatically remove conflicting Poiyomi Shaders versions (if any are detected) before it is installed in the project. It also now contains scripts that hardens the process to ensure edgy avatar creators who like to include a copy of Poiyomi Shaders with their Avatar packages to never have their conflicting copy imported in the first place (essentially removing the `_PoiyomiShaders` folder from the import dialogue). A Debug message will throw in the console when this happens, so you'll know. If you are reading this and are one of those avatar creators still doing this practice, please stop doing that!

Secondly, for our Poiyomi Pro users, all Poiyomi Pro Unity Packages starting with `10.0` will now be posted on [pro.poiyomi.com <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://pro.poiyomi.com) from now on. We will be deprecating posting our Unity Packages from our Discord server moving forward, as Discord's inability to maintain the platform's security and Patreon's inability to make the Discord Bot reliable makes using Discord for Patreon Authentication a very difficult process for everyone. Thus, authenticating from our new `pro.poiyomi.com` website has proven to me much more reliable and has faster authentication timing from Patreon in comparison, so we highly recommend you bookmark that website.

Please take a read through our updated [Download & Install](/download) instructions to see all the options now available to you.

## Conclusion

There is a lot more work to be done as Poiyomi 10.0 is continuously being worked on each day to ensure it is fully stable when the big day comes (the full release of the 10.0 Free version, that is). I am continuously editing, updating, and proofreading everything that I learn from each new update. If you find some information that is either inaccurate, conflicting, or find tomfoolery of any kind, please don't hesitate to reach out by opening an Issue on our [Docs Repository <FAIcon icon="fa-solid fa-square-arrow-up-right"/>](https://github.com/poiyomi/PoiyomiDocs/issues) as this helps me stay organized on what needs to be done.
