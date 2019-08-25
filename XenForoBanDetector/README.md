# XenForoBanDetector

<a href="https://github.com/NoahvdAa/UserScripts/raw/master/XenForoBanDetector/xenforobandetector.user.js" target="_blank">Install</a> [Requires Tampermonkey/Greasemonkey]

Shows when a XenForo forum user is banned. (In threads only).

## Installation

1) Install the userscript using the "Install" button at the top of the page.

2) Go to your userscript manager (Tampermonkey/Greasemonkey) and click "Edit" next to XenForoBanDetector.

3) Change `// @match        https://xenforo.com/community/threads/*` to whatever site you want to use + the thread path. For example: `// @match        https://spigotmc.org/threads/*`.

**Important note: some sites don't have their XenForo installation at the home page (/*) so you might need to include the subdirectory first (e.g. /community/*).**

4) Change the userscript name to something that makes this installation of the userscript unique. (So you can install it for multiple sites)

## Flaws

- Users that have their profile page set to private, will also be shown as "banned". There is no way to fix this, since XenForo shows the same page for both.