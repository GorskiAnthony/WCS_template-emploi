import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardJobs from "./components/CardJobs";

function App() {
  const API = "http://localhost:5500/api/token";
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(API);
      setToken(result.data.access_token);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {
        isLoading ?
          <div>Loading...</div>   :
          <div><CardJobs token={token} /></div>
      }
    </div>
  );
}

export default App;
