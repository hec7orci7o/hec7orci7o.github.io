---
title: Broken Authentication
description: "Authentication is probably the most straightforward and prevalent measure used to secure access to resources, and it's the first line of defense against unauthorized access. Broken authentication is currently listed as #7 on the 2021 OWASP Top 10 Web Application Security Risks, falling under the broader category of Identification and Authentication failures. A vulnerability or misconfiguration at the authentication stage can devastatingly impact an application's overall security."
author: 
  - Sandro guly Zaccarini
difficulty: Medium
tier: 2
type: Offensive
time: 2 days
slug: broken-authentication
badge: /cheatsheets/badges/just-a-small-crack-and-you-re-in.webp
module: /cheatsheets/broken-authentication.webp
badgeLink: https://academy.hackthebox.com/achievement/badge/4a77fe4a-f01a-11ee-b18d-bea50ffe6cb4
moduleLink: https://academy.hackthebox.com/achievement/361848/80
completedAt: 2024-04-01
tags:
  - cheatsheet
  - CBBH
---
# Fuzz

|**Command**|**Description**|
|---|---|
|`wfuzz -z file,/path/to/wordlist.txt -u http://127.0.0.1:80/site/FUZZ`|Fuzz using a wordlist|
|`wfuzz -z file,/path/to/user.txt -z file,/path/to/pass.txt http://127.0.0.1/login.php -d "user=FUZZ&pass=FUZ2Z"`|Fuzz using POST method and two wordlists|
|`wfuzz -H Foo:FUZZ`|Fuzz header|
|`-X GET , -X POST`|Choose method|

# Grep

|**Command**|**Description**|
|---|---|
|`grep '[[:classname:]]' file.txt`|Find strings that contain a given class. Classes are: [[:graph:]], [[:lower:]], [[:print:]], [[:punct:]], [[:space:]], [[:upper:]], and [[:xdigit:]]|
|`grep -x '.\{123\}'`|Find strings with length of 123|

# Misc

| **Command**                           | **Description**      |
| ------------------------------------- | -------------------- |
| `echo -n academy \| xxd -p`           | Convert hex to ASCII |
| `echo -n 61636164656d79 \| xxd -r -p` | Convert ASCII to hex |
