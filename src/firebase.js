import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

 const firebaseConfig = {
        apiKey: "AIzaSyBpEXWSY806WZugxiHVGeQszUwoHls9hSg",
        authDomain: "todo-78b0e.firebaseapp.com",
        projectId: "todo-78b0e",
        storageBucket: "todo-78b0e.appspot.com",
        messagingSenderId: "258876263792",
        appId: "1:258876263792:web:4d12a6fb8a4567c78d93b5"
     };
    
const app=initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db};

