---
layout: post
title: Old Projects - Warframe
categories: programming
tags: [programming, warframe, wardroid, deathsnacks]

---

This will be a series of posts where I log various old projects that I've done and probably abandoned.

## IRC Bot

This was a Lua script with HexChat running on the clan/alliance chat channels for Warbros in the game's IRC server. If you want details on how to connect, don't ask me.

<!--more-->

### Clan MOTD in Chat

The bot's original purpose was to regular dump the clan's MOTD in chat so members would actually read the MOTD and follow any instructions given.

### Member Invasion Status

When invasions were first introduced with The Gradivus Dilemma event, the clan was aiming for the top of the leaderboards. The bot would check each clan member's status and notify the clan when someone was supporting the opposing faction and causing the clan scores to drop. The bot also tracks ETAs to completion and kept a log of progress (which was how we discovered DE was manipulating invasion goals on the fly and certain nodes had discrepencies in them).

### Alert/Invasion Notifications

This was actually the inspiration for DE to implement global notifications in chat (yay for DE staff being in clan chat). Notifications are posted in chat whenever a new alert/invasion is detected (up to 5 minutes before it is live).

### Ghost Notifications

Since the IRC server was configured to time out users after 5 minutes, it was very common for players to login and have \_1/\_2 in their names, breaking invite functionality/PMs. When the player's ghost timed out, a message was sent to request the player to relog.

This is no longer an issue because ghosts are automatically killed.

### Cicero Crisis Management

Since the Cicero Crisis event required farming mats from the different cycles, the bot will give the current day/night cycle to ease farming.

The bot also checked clan members' event scores, and anyone without max scores would be announced when they came online since DE changed clan scoring from total scores to average personal scores. Any member without max score would drag the clan score down and I believe were kicked prior to the event ending.

The bot also dumped member leaderboards for the event for the clan, and other clans (discovering clans that were exploiting to get points beyond what was allowed). Members could also check on the event status without logging in.

### Mod Drop Tables

Players could query the bot for the drop locations of any mod.

### Player Count Logs

Since there was still a minority of players not on the Steam version of the game, I wanted finer granularity for player counts. Luckily, I can just query the IRC server for the current player count.

### Dark Sector Status

Players could query the bot for the current progress of dark sector conflicts. Used when the clan/alliance had a rail up.

---

## WarDroid - Pre-Release

Prior to the current version of WarDroid, there was another version that connected to the game server with your credentials that allowed you to manage your account such as claiming items from the foundry (starting builds were in the pipeline until it was shut down), claiming extractor resources, and viewing clan details (management similarly was under development).

![Sidebar](https://i.imgur.com/1VuXaZH.png){:.img-responsive }

![Foundry # 1](https://i.imgur.com/eFyuMKW.png){:.img-responsive style="display:inline"}
![Foundry # 2](https://i.imgur.com/y2domQd.png){:.img-responsive style="display:inline"}
![Foundry # 3](https://i.imgur.com/CNvlBJZ.png){:.img-responsive style="display:inline"}

![Extractor # 1](https://i.imgur.com/CNvlBJZ.png){:.img-responsive style="display:inline"}
![Extractor # 2](https://i.imgur.com/ZfqIlp6.png){:.img-responsive style="display:inline"}
![Extractor # 3](https://i.imgur.com/ZfqIlp6.png){:.img-responsive style="display:inline"}

![Clan](https://i.imgur.com/iopaD7k.png){:.img-responsive }

This was also when Glen changed worldState from a private API to a publicly available resource (+ RSS feeds) that people are using now.