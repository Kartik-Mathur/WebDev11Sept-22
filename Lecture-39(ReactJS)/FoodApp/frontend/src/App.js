import './App.css';
import {useEffect, useState} from 'react';
import Food from './Food';

function App() {
  const [food, setFood] = useState([]);

  useEffect(()=>{
    // network call
    fetch('http://localhost:4444/').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
      setFood(data);
    }).catch(err=>console.log(err));
  },[]);

  return (
    <div className="App">
      {
        food.map((f,indx)=>{
          return <Food key={indx} food={f} />
        })
      }
    </div>
  );
}

export default App;
