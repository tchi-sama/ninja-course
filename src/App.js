// ? realtime reading from firebase data base

import { db } from "./firebase";
import { 
  doc,
  onSnapshot,
  getDoc, 
  updateDoc
} from "firebase/firestore";

import { useEffect } from "react";
function App() {
  useEffect(() => {
    const docRef = doc(db, "books", "5xhwFm1zI2H9z1VM5lR0");

    const updateDocfn = updateDoc(docRef, {
      title:"fuck yeah!",
      name:"tchisama"
    });

    return () => {
      updateDocfn();
    };
  }, []);

  return <div className=""></div>;
}

export default App;

 // ? realtime reading from firebase data base
// import { db } from "./firebase";
// import { 
//   doc,
//   onSnapshot,
//   getDoc 
// } from "firebase/firestore";
// import { useEffect } from "react";
// function App() {
//   useEffect(() => {
//     const docRef = doc(db, "books", "5xhwFm1zI2H9z1VM5lR0");

//     const getData = getDoc(docRef).then((doc) => {
//       console.log({ ...doc.data(), id: doc.id });
//       console.log("data");
//     });

//     const getRealTimeData = onSnapshot(docRef, (doc) => {
//       console.log({ ...doc.data(), id: doc.id });
//       console.log("realtime");
//     });

//     return () => {
//       getData();
//       getRealTimeData();
//     };
//   }, []);

//   return <div className=""></div>;
// }

// export default App;

// ? Firestore Queries

// import { colRef } from "./firebase";
// import { onSnapshot , query , where ,orderBy  } from "firebase/firestore";
// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     const q = query (colRef, where("title","==","helloworld"),orderBy("price","desc"))
//     const getData = onSnapshot(q, (snapshot) => {
//       let books = [];
//       snapshot.docs.forEach((doc) => {
//         books.push({ ...doc.data(), id: doc.id });
//       });
//       console.log(books);
//     });
//     return () => {
//       getData();
//     };
//   }, []);

//   return <div className=""></div>;
// }

// export default App;

// import {
//   serverTimestamp
//   } from "firebase/firestore";

// {
//   createdAt: serverTimestamp()
// }

// ? realtime reading from firebase data base

// import { colRef } from "./firebase";
// import { onSnapshot } from "firebase/firestore";
// import { useEffect } from "react";

// function App() {
//   useEffect(() => {

//     const getData = onSnapshot(colRef, (snapshot) => {
//       let books = [];
//       snapshot.docs.forEach((doc) => {
//         books.push({ ...doc.data(), id: doc.id });
//       });
//       console.log(books);
//     });

//     return () => {
//       getData();
//     };
//   }, []);

//   return <div className=""></div>;
// }

// export default App;

// ? how to delete from firebase database

// import { deleteDoc , doc } from "firebase/firestore"
// import { useEffect } from "react";
// import { db } from "./firebase";

// function App() {
//   useEffect(() => {
//     const docRef = doc(db , "books", "2HvuxJk4KJvskMl05TRT" )
//     const deleteBook = deleteDoc(docRef)
//       .then(()=>{
//         console.log("done delete");
//       })
//     return () => deleteBook();
//   }, []);
//   return <div></div>;
// }

// export default App;

// ? how to add to firebase database

// import { colRef } from "./firebase";
// import { addDoc } from "firebase/firestore"
// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     const addBook = addDoc(colRef,{
//       title: "new Book",
//       price: 1000,
//     }).then(()=>{
//       console.log("done")
//     })
//     return () => addBook();
//   }, []);
//   return <div className=""></div>;
// }

// export default App;

// ? how to read from firebase data base

// import { colRef } from "./firebase";
// import { getDocs } from "firebase/firestore";
// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     const getData = getDocs(colRef)
//       .then((snapshot) => {
//         let books = [];
//         snapshot.docs.forEach((doc) => {
//           books.push({ ...doc.data(), id: doc.id });
//         });
//         console.log(books);
//       })
//       .catch((err) => console.log(err));
//     return () => {
//       getData();
//     };
//   }, []);

//   return <div className=""></div>;
// }

// export default App;
