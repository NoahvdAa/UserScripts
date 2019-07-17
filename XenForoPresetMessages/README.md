# XenForoPresetMessages

<a href="https://github.com/NoahvdAa/UserScripts/raw/master/XenForoPresetMessages/xenforopresetmessages.user.js" target="_blank">Install</a> [Requires Tampermonkey/Greasemonkey]

Are you tired of having to TYPE everything you say on a XenForo forum? Then this is the right userscript for you! Customize your own pre-set messages to reply quickly to a thread.

### Installation

1) Make sure you have Tampermonkey/Greasemonkey installed in your browser.

2) Click the "Install" button at the top of this page.

3) A new tab should pop up asking you if you want to install a userscript. Click "Install".

4) Go to the userscript manager of your userscript extension.

5) Generate a config with the [Config Generator](https://noahvdaa.github.io/Small-Websites/XenForoPresetMessagesConfigGenerator/) and copy it to your clipboard.

6) Click "Edit" next to "XenForoPresetMessages".

7) Remove the line that starts with `var XFPMOptions = {` and paste your own config there.

8) Go to this line: `// @match        https://xenforo.com/community/threads/*` and replace the domain (and path) with a forum of your choice.

Example: `// @match        https://myforum.com/threads/*` or `// @match        https://other.com/forum/threads/*`

If you want to install this for multiple forums (with their own pre-set mesasges), change the line `// @name         XenForoPresetMessages` to somethine unique, like `// @name         XenForoPresetMessages-ExampleForum`
