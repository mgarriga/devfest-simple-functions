# devfest-simple-functions
Simple Sample Functions for the DevFest Serverless Course

Prerequisites:
Install nodejs (version 6 or 8) and npm:
https://nodejs.org/en/download/package-manager/

Create an empty project on firebase:
https://console.firebase.google.com/u/0/

Install firebase tools:
```
npm install -g firebase-tools
firebase login
```

create and init local firebase working dir:
```
mkdir devfest-simple-functions
cd devfest-simple-functions/
firebase init functions
```


Write some code (or use the code on this repo) and then...

Link the remote project to upload the functions to:
```
firebase use --add
firebase deploy --only functions
```
