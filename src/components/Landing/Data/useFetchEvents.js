import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";

const useFetchEvents = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const eventCollectionRef = collection(db, "events");
        const newData = await getDocs(eventCollectionRef);
        setEventsData(
          newData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setError(false);
        setErrorMsg(null);
      } catch (error) {
        setError(true);
        setErrorMsg(error.message);
        console.error("Error fetching events data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { eventsData, loading, error, errorMsg };
};

export default useFetchEvents;

// {
//     "date": "19 Aug 2024",
//     "type": "hi",
//     "image": "https://firebasestorage.googleapis.com/v0/b/wow-hr-4f569.appspot.com/o/events%2FxZQU42eK_400x400.jpg?alt=media&token=04d22c68-c617-490a-994e-5d7c7da84b2a",
//     "description": "event",
//     "id": "1vXWDXPGhzL9tbSehIOc"
// }
