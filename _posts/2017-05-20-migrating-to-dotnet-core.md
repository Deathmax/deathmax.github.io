---
title: Experiences with migrating to .NET Core
layout: post
categories: programming
tags: [programming, bravefrontier]
---

BfUpdater is the backend app that updates the [bravefrontier_data](https://github.com/Deathmax/bravefrontier_data/) repo and [/r/bravefrontier](https://reddit.com/r/bravefrontier)'s sidebar, and also acts as an IRC and Discord bot. The entire thing is written in C#, but a constant pain point was deploying to Mono. Take the [Discord.Net](https://github.com/RogueException/Discord.Net) library for example. WebSockets as used by Discord.Net is broken by newer versions of Mono, requiring a downgrade of Mono, and newer versions of Discord.Net are completely non-functional on Mono regardless of workarounds.

So, I decided on migrating the project to target .NET Core rather than the .NET Framework with Mono, starting off with copying the entire project into a new .NET Core project skeleton. Here were some areas of interest I encountered while migrating the project:

## Libraries

Finding newer versions of libraries that were used that support .NET Core was ok for the most part. The only library that I used without .NET Core support was `SmartIrc4Net`, but since the #bravefrontier channel was pretty much dead, I just removed the IRC code completely and didn't worry about switching to a new library.

## API Changes

This was where all the fun came from. The code made extensive use of `WebClient`, which is gone in .NET Core. So, after writing a bunch of extensions for `HttpClient` and a bit of regex search and replace later all the network related code was running again.

One of the harder things to account for was the removal of `System.Diagnostics.StackTrace`, which I used for logging method names by looking for the log's caller. Instead of trying to parse the output from `Environment.StackTrace`, I decided to make use of Microsoft's `ILogger` and deal with the fact that my logs no longer have method-level names, but only class-level names.