---
title: Hacking WordPress
description: WordPress is an open-source Content Management System (CMS) that can be used for multiple purposes.
author:
  - mrb3n
  - Cry0l1t3
difficulty: Easy
tier: 2
type: Offensive
time: 6 hours
slug: hacking-wordpress
badge: /cheatsheets/badges/hacking-in-the-wild.webp
module: /cheatsheets/hacking-wordpress.webp
badgeLink: https://academy.hackthebox.com/achievement/badge/ee776246-fbf8-11ee-b18d-bea50ffe6cb4
moduleLink: https://academy.hackthebox.com/achievement/361848/17
completedAt: 2024-04-16
tags:
  - cheatsheet
  - CBBH
---

|**Command**|**Description**|
|---|---|
|`tree -L 1`|Lists contents of current directory|
|`curl -s -X GET <url>`|Makes a GET request to a webserver and receives HTML source code of requested web page|
|`curl -I -X GET <url>`|Prints the response header of the GET request from the requested web page|
|`curl -X POST -d <data> <url>`|Sends a POST request with data to specific webserver|
|`wpscan --url <url> -e ap`|Scans specific WordPress application to enumerate plugins|
|`wpscan --url <url> -e u`|Scans specific WordPress application to enumerate users|
|`msfconsole`|Starts Metasploit Framework|
|`html2text`|Converts redirected HTML output or files to easily readable output|
|`grep <pattern>`|Filters specific pattern in files or redirected output|
|`jq`|Transforms JSON input and streams of JSON entities|
|`man <tool>`|Man provides you with the manpage of the specific tool|