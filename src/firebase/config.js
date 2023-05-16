import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCZj7lpaP2Se66GjpvgDEClPDe6Zilvse0",
    authDomain: "movies-project-2-3031b.firebaseapp.com",
    projectId: "movies-project-2-3031b",
    storageBucket: "movies-project-2-3031b.appspot.com",
    messagingSenderId: "902620871593",
    appId: "1:902620871593:web:2989a915fa401affbea2b8"
};

// počáteční inicializace
firebase.initializeApp(firebaseConfig)

// počáteční inicializace služeb
const projectFirestore = firebase.firestore()

export { projectFirestore }