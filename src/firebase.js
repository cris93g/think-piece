import firebase from "firebase/app";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyAkZDu451Tfc4oHXAs84AmOza9EXf12rhQ",
	authDomain: "chat-application-cddbd.firebaseapp.com",
	databaseURL: "https://chat-application-cddbd.firebaseio.com",
	projectId: "chat-application-cddbd",
	storageBucket: "chat-application-cddbd.appspot.com",
	messagingSenderId: "263014358285"
};
firebase.initializeApp(config);
window.firebase = firebase;
export const firestore = firebase.firestore();
export default firebase;
