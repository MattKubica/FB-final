### Facebook clone / React / Firebase

Online @ https://fb-clone-repo.onrender.com/

⚙️ Technology:

- [React](https://reactjs.org/) as Frontend Framework
- [Firebase](https://firebase.google.com/) as Cloud Authentication and Database Service

### Description:

- I have build a "Facebook Clone with REACT JS.
Currently there's many features missing and hopefully they are gonna be implemented in future.

- WORKS:
  - Login with Google || as a Guest.
  - Ability to add comment wtih image url to main wall visible to everyone.

- You need to provide your own firebaseConfig in `src/firebase.js`

  Go to `https://console.firebase.google.com/u/0/` and make `new project`

  Add `Web` as firebase app then go to `Firestore Database` and create new one.

  Add `collections` - `messages` with message / timestamp / username

  and `posts` - with image / message / profilePic / timestamp / username

  Go to Project settings -> General and you should have all credentials you need.

### How to start the application

- npm install
- change `src/firebase.js` -> firebaseConfig to your own
- npm run start

 Feel free to fork this project and customize it to your liking!
