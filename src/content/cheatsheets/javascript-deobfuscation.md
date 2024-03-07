---
title: Javascript Deobfuscation
difficulty: easy
tier: 0
type: defensive
slug: javascript-deobfuscation
banner: /cheatsheets/javascript-deobfuscation.webp
badge: /cheatsheets/badges/playing-with-the-mess.webp
sharebleLink: https://academy.hackthebox.com/achievement/badge/78c603d7-0d31-11ee-acfc-bea50ffe6cb4
completedOn: 2023-06-17
---

# Commands

| **Command**   | **Description**   |
| --------------|-------------------|
| `curl http:/SERVER_IP:PORT/` | cURL GET request |
| `curl -s http:/SERVER_IP:PORT/ -X POST` | cURL POST request |
| `curl -s http:/SERVER_IP:PORT/ -X POST -d "param1=sample"` | cURL POST request with data |
| `echo hackthebox \| base64` | base64 encode |
| `echo ENCODED_B64 \| base64 -d` | base64 decode |
| `echo hackthebox \| xxd -p` | hex encode |
| `echo ENCODED_HEX \| xxd -p -r` | hex decode |
| `echo hackthebox \| tr 'A-Za-z' 'N-ZA-Mn-za-m'` | rot13 encode |
| `echo ENCODED_ROT13 \| tr 'A-Za-z' 'N-ZA-Mn-za-m'` | rot13 decode |

# Deobfuscation Websites

| **Website** |
| ----------------------------------|
| [JS Console](https://jsconsole.com) |
| [Prettier](https://prettier.io/playground/) |
| [Beautifier](https://beautifier.io/) |
| [JSNice](http://www.jsnice.org/) |

# Misc

| **Command**   | **Description**   |
| --------------|-------------------|
| `ctrl+u` | Show HTML source code in Firefox |