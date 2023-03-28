# Crosshair Music site

A Keystone.js-built marketing site for Crosshair Music.

KeystoneJS Docs: https://v4.keystonejs.com/documentation/

This site uses **_VERSION 4_**. V5 saw major changes so be sure to work in accordance with V4.

This site is built in MVC architecture. Models pull data from Mongo in JSON and use routes/views
to populate the frontend. Uses Gulp. 

### Stack:

- SASS
- Pug
- Node.js
  -> Express.js
  -> Keystone.js
- MongoDB

### Dev process

Unfortunately, this site was built in 2018, which means the versions of gulp, keystone, etc. are all woefully out-of-date. You may encounter compatability issues trying to install it five years after it was built...

### Notes on Keystone.js:

- Dev only possible with network connection.
- CMS'd images are sourced REMOTELY w/ Cloudinary
- To add something to the CMS, simply register and edit the data model in /models

### Google Mailer:

You need this to send site emails. Creds are with Anne and Kurt at Eclipse.

### Hosting:

Currently hosted in the OHIO REGION of AWS.
WHEN FTP-ING: Make sure the '.env' file is synced up. The error 'Cloudinary config not set' occurs when this file is missing.
