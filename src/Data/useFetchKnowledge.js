import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";

const useFetchKnowledge = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [knowledgeData, setKnowledgeData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const knowledgeCollectionRef = collection(db, "knowledge");
        const newData = await getDocs(knowledgeCollectionRef);
        setKnowledgeData(
          newData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setError(false);
        setErrorMsg(null);
      } catch (error) {
        setError(true);
        setErrorMsg(error.message);
        console.error("Error fetching knowledge data:", error);
      } finally {
        setLoading(false);
      }
    };
    // console.log(knowledgeData, "D");
    getData();
  }, []);

  return { knowledgeData, loading, error, errorMsg };
};

export default useFetchKnowledge;

// {
//     "authorPicture": "https://firebasestorage.googleapis.com/v0/b/wowhr-abe7c.appspot.com/o/knowledge%2FScreenshot%202024-06-02%20141954.png?alt=media&token=b0a70c0e-2d35-4655-a4df-e31a5f2cafd4",
//     "type": "pepTalks",
//     "mediaUrl": "https://www.youtube.com/watch?v=o17MF9vnabg",
//     "description": "description",
//     "authorName": "author",
//     "title": "test-title",
//     "id": "4kkVC2q40mZbOjNmIyK8"
// }
