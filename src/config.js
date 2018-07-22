import firebase from 'firebase'
import Rebase from 're-base'

const firebaseInfo = {
    apiKey: "AIzaSyC9jZvAduVJgAmgunbHXU1_K8f_yNjGXgA",
    authDomain: "quiz-xumes.firebaseapp.com",
    databaseURL: "https://quiz-xumes.firebaseio.com",
    projectId: "quiz-xumes",
    storageBucket: "quiz-xumes.appspot.com",
    messagingSenderId: "542913374410"
};
const db = firebase.database(firebaseInfo)
const config = Rebase.createClass(db)

export default config