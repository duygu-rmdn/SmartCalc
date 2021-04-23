var globalUser = null;
var config = {
  apiKey: "AIzaSyD9s6_129jQg84_kbWCZJTFKt4zfqnSp-A",
  authDomain: "smartcalc4.firebaseapp.com",
  projectId: "smartcalc4",
  storageBucket: "smartcalc4.appspot.com",
  messagingSenderId: "446144834667",
  appId: "1:446144834667:web:9559c6d6648642c589152e"
};
// Initialize Firebase
firebase.initializeApp(config);
var db = firebase.firestore();
//Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const result = document.getElementById('result');

//Add login event
btnLogin.addEventListener('click', e => {
  //Get Email and Password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //Sign in 
  const promise = auth.signInWithEmailAndPassword(email, pass)
  promise.catch(e => console.log(e.message))
});
btnSignUp.addEventListener('click', e => {
  //Get Email and Password
  //Check for real emails
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //Sign in 
  auth.createUserWithEmailAndPassword(email, pass)
    .then(u => {
      var user = u.user;
      console.log(user)
      db.collection("users").doc(user.uid).set({
        uid: user.uid,
        email: user.email,
        name: user.displayName
      }).then(() => {
        console.log("Document written with ID: ", user.uid);
      })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    })
    .catch(e => {
      if(e.code === "auth/invalid-email"){
        alert("invalid email")
      }
    })
});

btnLogout.addEventListener('click', e => {
  firebase.auth().signOut()
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser)
    btnLogout.classList.remove('hide')
    globalUser = firebaseUser;
  } else {
    console.log('not logged in')
    btnLogout.classList.add('hide')
    globalUser = null;
  }
})

btnSave.addEventListener('click', e => {
  if (globalUser) {
    db.collection('users/' + globalUser.uid + '/favourites').add({
      txt: inputBlock.value
    })
  }
});

btnPrint.addEventListener('click', e => {
  if (globalUser) {
    db.collection('users/' + globalUser.uid + '/favourites').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        result.innerHTML += `${doc.id} => <button onclick="Paste('${doc.data().txt}')">${doc.data().txt}</button><br/>`;
      });
    })
  }
});
function Paste(x){
  inputBlock.value = x;
}