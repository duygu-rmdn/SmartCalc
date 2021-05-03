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
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const result = document.getElementById('result');

//Add login event
btnLogin.addEventListener('click', e => {
  //Get Email and Password
  const email = Email.value;
  const pass = Password.value;
  const auth = firebase.auth();
  //Sign in 
  const promise = auth.signInWithEmailAndPassword(email, pass)
  promise.then(() => {
    $('div.loggedIn').css("display", "block")
    setTimeout(function () {
      $('div.loggedIn').css("display", "none");
    }, 2000);
  }).catch(e => alert(e.message))
});

btnSignUp.addEventListener('click', e => {

  const email = Email.value;
  const pass = Password.value;
  const auth = firebase.auth();
  //Sign in 
  if (pass.length < 6) {
    alert("Password must be at least 6 characters")
  } else {
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => alert(e.message))
    promise.then(u => {
        var user = u.user;
        db.collection("users").doc(user.uid).set({
          uid: user.uid,
          email: user.email,
          name: user.displayName
        }).then(() => {
          $('div.singUp').css("display", "block");
          setTimeout(function () {
            $('div.singUp').css("display", "none");
          }, 2000);
        })
          .catch((error) => {
            alert(error.message)
          });
      })
      .catch(e => {
        if (e.code === "auth/invalid-email") {
          alert("invalid email")
        }
      })
  }
});

btnLogout.addEventListener('click', e => {
  firebase.auth().signOut()
  $('div.loggedOut').css("display", "block");
  setTimeout(function () {
    $('div.loggedOut').css("display", "none");
  }, 2000);
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    btnLogout.classList.remove('hide')
    btnLogout.style.display = "block";
    globalUser = firebaseUser;
  } else {
    btnLogout.classList.add('hide')
    btnLogout.style.display = "none";
    globalUser = null;
  }
})


function Paste(x) {
  inputBlock.value = x;
}


