import { useState } from 'react';
import './App.css';
import GithubUserList from './components/GithubUserList/GithubUserList';
import { v4 as uuid } from 'uuid';

let user = [];

function App() {
  // fetch('https://api.github.com/users/Kartik-Mathur')
  // .then((response)=>response.json())
  // .then((data)=>console.log(data));
  let styles = {
    margin:'20px 0px'
  }

  const [name, setName] = useState('');
  const [users, setUsers] = useState(user);
  function inputChangeHandler(ev){
    setName(ev.target.value);
    // console.log(name);
  }

  function submitHandler(e){
    e.preventDefault();
    // console.log(name);
    setUsers([{
      id: uuid(),
      name: name,
      imgUrl: 'https://www.drivespark.com/images/2022-06/2022-bmw-x1-8.jpg'
    },...users])
  }

  return (
    <form onSubmit={submitHandler} className="App" style={styles}>
      <input onChange={inputChangeHandler} type="text" placeholder="Enter Username" /> &nbsp;&nbsp;&nbsp;
      <button type="submit">🔍</button>
      <GithubUserList users={users} />
    </form>
  );
}

export default App;
