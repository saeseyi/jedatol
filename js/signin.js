// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGfFeWRJMCGPz4hEwSZdexgiUanqduuoY",
    authDomain: "estatemanager-602cd.firebaseapp.com",
    projectId: "estatemanager-602cd",
    storageBucket: "estatemanager-602cd.appspot.com",
    messagingSenderId: "779690242937",
    appId: "1:779690242937:web:0bd0540d108c723644f5a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var IDnum, passW;

function Ready() {
    IDnum = document.getElementById("ID").value;
    passW = document.getElementById("psw").value;
}
//............signup.............
document.getElementById('signup').onclick = function() {
    Ready();
    firebase.database().ref('Tenants/').set({
        TenantID: IDnum,
        Password: passW
    })
}