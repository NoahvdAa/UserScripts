# Navatar

<a href="https://github.com/NoahvdAa/UserScripts/raw/master/Navatar/navatar.user.js" target="_blank">Install</a> [Requires Tampermonkey/Greasemonkey]

Use your own image as your Netflix avatar.

**Important note: This is CLIENT-SIDE ONLY, so this will only work on the devices you install this UserScript on!**

### Installation

1) Make sure you have Tampermonkey/Greasemonkey installed in your browser.

2) Click the "Install" button at the top of this page.

3) A new tab should pop up asking you if you want to install a userscript. Click "Install".

4) Go to the userscript manager of your userscript extension.

5) Click "Edit" next to "XenForoPresetMessages".

6) Go to the line `window.profile_name = 'Noah';` and change `Noah` into the name of your profile, e.g. `Bob`. When you are finished, the line should look like this: `window.profile_name = 'Bob';`. 

7) Now go to the line `window.profile_newpicture = 'https://via.placeholder.com/750x750';` and change `https://via.placeholder.com/750x750` to a URL leading to your new avatar. This url **MUST USE HTTPS**. I recommend using [Imgur](https://imgur.com/) for this.

8) Save the UserScript and visit Netflix.