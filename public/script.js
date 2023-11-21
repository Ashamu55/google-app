// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAuth, signInWithPopup, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBSjawpNjwkXIwIwetk1xQfX05_RAWd2EI",
//     authDomain: "ass-one.firebaseapp.com",
//     projectId: "ass-one",
//     storageBucket: "ass-one.appspot.com",
//     messagingSenderId: "581952540051",
//     appId: "1:581952540051:web:6fe73196cfada6fe54ac66"
// };
// // Initialize Firebase
// const app = initializeApp (firebaseConfig);
// const provider = new GithubAuthProvider();
// const auth = getAuth();
// const cliked = () => {
// signInWithPopup(auth, provider)
//     .then((result) => {
//         // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//         const credential = GithubAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         console.log(user);
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//     }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GithubAuthProvider.credentialFromError(error);
//         // ...
//     });
// }
// window.cliked = cliked;




// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqWEk0HTmYxf5Mig0pe2RASHKQ0ICimWA",
    authDomain: "app-bde04.firebaseapp.com",
    projectId: "app-bde04",
    storageBucket: "app-bde04.appspot.com",
    messagingSenderId: "520922559140",
    appId: "1:520922559140:web:cd9185f0388de164456c31"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("signed").addEventListener("click", () => {
    const email = youremail.value
    const password = yourpasskey.value
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            if (user) {
                window.location.href = "dashboard.html";
            } else {
                window.location.href = "index.html"
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})