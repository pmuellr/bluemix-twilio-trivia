bluemix-twilio-trivia
================================================================================

A trivia game using twilio for Bluemix.



twilio pre-reqs
================================================================================

To run at all, you will need to have a [Twilio](https://twilio.com) account.
To be able to use more than just the single phone number you validate your
account with, you will need to add a credit card to the account and add some
money to it.

To run locally, you will need to copy the file `local-twilio-creds-sample.json`
to the file `local-twilio-creds.json`, and fill in your accoutn SID and auth
token, at the bottom.  This file is listed in both `.gitignore` and `.cfignore`,
and so will not be saved with the git repo or uploaded to Bluemix.

To run on Bluemix, you will need to have a Twilio service bound to your app,
whose name has "Twilio" in it somewhere.



quick start
================================================================================



attributions
================================================================================

**question mark icon**

* adapted from <http://commons.wikimedia.org/wiki/File:Icon-round-Question_mark.jpg>

* license: public domain



hacking
================================================================================

If you want to modify the source to play with it, you'll want to have the
`bower` program installed.

    sudo npm -g install bower    # for mac and *nix
    npm -g install bower         # for windows

You'll also want to have the `jbuild` program installed.

To install `jbuild` on Windows, use the command

    npm -g install jbuild

To install `jbuild` on Mac or Linux, use the command

    sudo npm -g install jbuild

The `jbuild` command runs tasks defined in the `jbuild.coffee` file.  The
task you will most likely use is `watch`, which you can run with the
command:

    jbuild watch

When you run this command, the application will be built from source, the server
started, and tests run.  When you subsequently edit and then save one of the
source files, the application will be re-built, the server re-started, and the
tests re-run.  For ever.  Use Ctrl-C to exit the `jbuild watch` loop.

You can run those build, server, and test tasks separately.  Run `jbuild`
with no arguments to see what tasks are available, along with a short
description of them.



attributions
================================================================================

pig image adapted from:

* <http://pixabay.com/en/pig-pink-animal-mammal-farm-animal-295040/>
* license: <http://creativecommons.org/publicdomain/zero/1.0/deed.en>



license
================================================================================

Apache License, Version 2.0

<http://www.apache.org/licenses/LICENSE-2.0.html>
