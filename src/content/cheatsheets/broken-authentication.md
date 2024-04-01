---
title: Broken Authentication
difficulty: medium
tier: 2
type: offensive
slug: broken-authentication
banner: /cheatsheets/broken-authentication.webp
badge: /cheatsheets/badges/just-a-small-crack-and-you-re-in.webp
sharebleLink: https://academy.hackthebox.com/achievement/badge/4a77fe4a-f01a-11ee-b18d-bea50ffe6cb4
completedOn: 2024-04-01
---

## Fuzz

|**Command**|**Description**|
|---|---|
|`wfuzz -z file,/path/to/wordlist.txt -u http://127.0.0.1:80/site/FUZZ`|Fuzz using a wordlist|
|`wfuzz -z file,/path/to/user.txt -z file,/path/to/pass.txt http://127.0.0.1/login.php -d "user=FUZZ&pass=FUZ2Z"`|Fuzz using POST method and two wordlists|
|`wfuzz -H Foo:FUZZ`|Fuzz header|
|`-X GET , -X POST`|Choose method|

## Grep

|**Command**|**Description**|
|---|---|
|`grep '[[:classname:]]' file.txt`|Find strings that contain a given class. Classes are: [[:graph:]], [[:lower:]], [[:print:]], [[:punct:]], [[:space:]], [[:upper:]], and [[:xdigit:]]|
|`grep -x '.\{123\}'`|Find strings with length of 123|

## Misc

| **Command**                           | **Description**      |
| ------------------------------------- | -------------------- |
| `echo -n academy \| xxd -p`           | Convert hex to ASCII |
| `echo -n 61636164656d79 \| xxd -r -p` | Convert ASCII to hex |
