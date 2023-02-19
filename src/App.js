import { colRef } from "./firebase";
import { getDocs } from "firebase/firestore";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getData = getDocs(colRef)
      .then((snapshot) => {
        let books = [];
        snapshot.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id });
        });
        console.log(books);
      })
      .catch((err) => console.log(err));
    return () => {
      getData();
    };
  }, []);

  return <div className=""></div>;
}

export default App;
