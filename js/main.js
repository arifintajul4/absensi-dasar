// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPCnJggZPuaEKjl91k10GNO75qlz4CRf4",
    authDomain: "absensi-dasar-34060.firebaseapp.com",
    databaseURL: "https://absensi-dasar-34060.firebaseio.com",
    projectId: "absensi-dasar-34060",
    storageBucket: "absensi-dasar-34060.appspot.com",
    messagingSenderId: "381090655573",
    appId: "1:381090655573:web:22ec172530ce4dda61d3dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$('#btn-login').click(function(){
    let email = $('#input-email').val();
    let password = $('#input-password').val();
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(res){
        alert('berhasil Login')
        window.location = '/'
    })
    .catch(err => alert(err.message))

    $('#input-email').val();
});

$('#btn-register').click(function(){
    let email = $('#input-email').val();
    let password = $('#password').val();
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(res){
        alert('berhasil Register')
        window.location = '/login.html'
    })
    .catch(err => alert(err.message))

    $('#input-email').val();
});
