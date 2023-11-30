import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [dataBase, setDataBase] = useState([])
  useEffect(() => {
    const api = 'http://localhost:3001/posts'
    axios.get(api).then((response) => {
      setDataBase(response.data)
    }, [setDataBase])
  })
  return (
    <div>
      {dataBase.map((val, ind) => {
        return <div>{val.title}</div>
      })}
    </div>
  );
}

export default App;
