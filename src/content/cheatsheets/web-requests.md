---
title: Web Requests
description: This module introduces the topic of HTTP web requests and how different web applications utilize them to communicate with their backends.
author:
  - 21y4d
difficulty: Fundamental
tier: 0
type: General
time: 4 hours
slug: web-requests
badge: /cheatsheets/badges/your-request-is-my-demand.webp
module: /cheatsheets/web-requests.webp
badgeLink: https://academy.hackthebox.com/achievement/badge/9e22e73e-0d16-11ee-acfc-bea50ffe6cb4
moduleLink: https://academy.hackthebox.com/achievement/361848/35
completedAt: 2023-06-17
tags:
  - cheatsheet
  - CBBH
---
## cURL

|**Command**|**Description**|
|---|---|
|`curl -h`|cURL help menu|
|`curl inlanefreight.com`|Basic GET request|
|`curl -s -O inlanefreight.com/index.html`|Download file|
|`curl -k https://inlanefreight.com`|Skip HTTPS (SSL) certificate validation|
|`curl inlanefreight.com -v`|Print full HTTP request/response details|
|`curl -I https://www.inlanefreight.com`|Send HEAD request (only prints response headers)|
|`curl -i https://www.inlanefreight.com`|Print response headers and response body|
|`curl https://www.inlanefreight.com -A 'Mozilla/5.0'`|Set User-Agent header|
|`curl -u admin:admin http://<SERVER_IP>:<PORT>/`|Set HTTP basic authorization credentials|
|`curl http://admin:admin@<SERVER_IP>:<PORT>/`|Pass HTTP basic authorization credentials in the URL|
|`curl -H 'Authorization: Basic YWRtaW46YWRtaW4=' http://<SERVER_IP>:<PORT>/`|Set request header|
|`curl 'http://<SERVER_IP>:<PORT>/search.php?search=le'`|Pass GET parameters|
|`curl -X POST -d 'username=admin&password=admin' http://<SERVER_IP>:<PORT>/`|Send POST request with POST data|
|`curl -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' http://<SERVER_IP>:<PORT>/`|Set request cookies|
|`curl -X POST -d '{"search":"london"}' -H 'Content-Type: application/json' http://<SERVER_IP>:<PORT>/search.php`|Send POST request with JSON data|

## APIs

|**Command**|**Description**|
|---|---|
|`curl http://<SERVER_IP>:<PORT>/api.php/city/london`|Read entry|
|`curl -s http://<SERVER_IP>:<PORT>/api.php/city/ \| jq`|Read all entries|
|`curl -X POST http://<SERVER_IP>:<PORT>/api.php/city/ -d '{"city_name":"HTB_City", "country_name":"HTB"}' -H 'Content-Type: application/json'`|Create (add) entry|
|`curl -X PUT http://<SERVER_IP>:<PORT>/api.php/city/london -d '{"city_name":"New_HTB_City", "country_name":"HTB"}' -H 'Content-Type: application/json'`|Update (modify) entry|
|`curl -X DELETE http://<SERVER_IP>:<PORT>/api.php/city/New_HTB_City`|Delete entry|

## Browser DevTools

|**Shortcut**|**Description**|
|---|---|
|[`CTRL+SHIFT+I`] or [`F12`]|Show devtools|
|[`CTRL+SHIFT+E`]|Show Network tab|
|[`CTRL+SHIFT+K`]|Show Console tab|