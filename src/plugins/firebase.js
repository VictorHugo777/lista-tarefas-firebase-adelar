import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAZv2Yn3n4uVWQ4qZoJJMsLjmu_WIjbetc",
  authDomain: "lista-tarefas-b8ed2.firebaseapp.com",
  projectId: "lista-tarefas-b8ed2",
  storageBucket: "lista-tarefas-b8ed2.appspot.com",
  messagingSenderId: "818935953147",
  appId: "1:818935953147:web:1839239c80df239f65225e"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}