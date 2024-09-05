import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";

const useFetchLeadership = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [leadershipData, setLeadershipData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const mentorsCollectionRef = collection(db, "mentors");
        const newData = await getDocs(mentorsCollectionRef);
        setLeadershipData(
          newData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setError(false);
        setErrorMsg(null);
      } catch (error) {
        setError(true);
        setErrorMsg(error.message);
        console.error("Error fetching leadership data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { leadershipData, loading, error, errorMsg };
};

export default useFetchLeadership;

// {
//     "name": "Amely Norwood2",
//     "github": "https://facebook.com/amely",
//     "profileImg": "https://firebasestorage.googleapis.com/v0/b/wow-hr-4f569.appspot.com/o/mentors%2Fpic2.jpg?alt=media&token=92f8fefc-7712-4b84-9c82-f3f325e9e005",
//     "instagram": "https://facebook.com/amely",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "job": "Law Consultant",
//     "twitter": "https://facebook.com/amely",
//     "leaderType": "Core Team",
//     "linkedIn": "https://facebook.com/amely",
//     "location": "Coimbatore",
//     "id": "4j9uRTFJK0CbvV9O7q1w"
// }
