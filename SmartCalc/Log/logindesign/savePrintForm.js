var isContains = 0;
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
        db.collection('users/' + globalUser.uid + '/favourites').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().txt === input.value) {
                    isContains += 2;
                }

            });
        
        if (isContains == 0) {
            db.collection('users/' + globalUser.uid + '/favourites').add({
                txt: input.value
            })
            isContains = 4
        } else {
            isContains = 0
        }
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
                    row += `<button style="width:89%" onclick="Paste('${doc.data().txt}')">${doc.data().txt}</button>|<button style="width:8%" onclick="Delete('${doc.data().txt}')">X</button><br/>`;
                });
                saved.innerHTML = row;
                saved.style.padding = "10px";
            })
        }
    }
});
function Delete(x) {
    db.collection('users/' + globalUser.uid + '/favourites').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().txt === x) {
                db.collection("users/" + globalUser.uid + "/favourites").doc(doc.id).delete()              
            }
        })
    })
}
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