# fintopio-botjs

fintopio botjs auto tap multiple account https://t.me/fintopio

<img width="495" alt="Code_71YD0Ftdze" src="https://github.com/user-attachments/assets/5eb875f0-5f5c-4427-b7c6-effd726eed84">

## Features
- Auto create token (login by query_id)
- Auto tap/hold
- Auto complete/claim task
- Auto start and claim farm
- Auto refresh token

## Requirement
- Node.js 18+

## How to run
1. Clone/download this repository
2. Fill query.txt
3. > npm install
4. > node index

## How to get query_id?
1. Open telegram web/desktop
2. Go to Settings - Advanced - Experimental settings - Enable webview inspecting
3. Open bot https://t.me/fintopio
4. Press F12 or right click then select inspect element
5. Go to Application tab - Session storage - Select fintopio-tg.fintopio - Select '__telegram__initParams' (copy value start with ```query_id=```)
6. Separate query_id with the newline (for multiple account)
