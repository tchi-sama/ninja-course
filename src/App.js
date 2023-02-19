// ? realtime reading from firebase data base

import { colRef } from "./firebase";
import { onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

function App() {
  useEffect(() => {

    const getData = onSnapshot(colRef, (snapshot) => {
      let books = [];
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
      });
      console.log(books);
    });

    return () => {
      getData();
    };
  }, []);

  return <div className=""></div>;
}

export default App;

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
