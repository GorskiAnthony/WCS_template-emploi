import React, {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  const API = "http://localhost:5500/api/token";
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(API);
      setToken(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {
        isLoading ?
          <div>Loading...</div>
          :
          <div>{token}</div>
      }
    </div>
  );
}

export default App;
