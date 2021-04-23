
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
const result = document.getElementById('result');
const btnSave = document.getElementById('save');
const btnPrint = document.getElementById('favorites');
const input = document.getElementById('input');

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {

        globalUser = firebaseUser;
    } else {

        globalUser = null;
    }
})

btnSave.addEventListener('click', e => {
    if (globalUser) {
        db.collection('users/' + globalUser.uid + '/favourites').add({
            txt: input.value
        })
    }
});

btnPrint.addEventListener('click', e => {
    if (globalUser) {
        if (saved.innerHTML != '') {
            saved.innerHTML = '';
            saved.style.padding = "0";
        }
        else {
            db.collection('users/' + globalUser.uid + '/favourites').get().then((querySnapshot) => {
                var row = '';
                querySnapshot.forEach((doc) => {
                    row += `<button onclick="Paste('${doc.data().txt}')">${doc.data().txt}</button><br/>`;
                });
                saved.innerHTML = row;
                saved.style.padding = "10px";
            })
        }
    }
});
function Paste(x) {
    input.value = x;
    clearFav();
}
function showButtons() {
    document.getElementById("save").style.display = "block";
    document.getElementById("favorites").style.display = "block";
}
function hideButtons() {
    document.getElementById("save").style.removeProperty('display');
    document.getElementById("favorites").style.removeProperty('display');
}


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        showButtons();
    }
});

function clearFav() {
    saved.innerHTML = '';
    saved.style.padding = "0";
}