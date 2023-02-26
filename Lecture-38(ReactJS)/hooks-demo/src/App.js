import { useState, useEffect, useRef } from 'react';
import './App.css';
import GithubUserList from './components/GithubUserList/GithubUserList';
import { v4 as uuid } from 'uuid';

let user = [];

function App() {
  // fetch('https://api.github.com/users/Kartik-Mathur')
  // .then((response)=>response.json())
  // .then((data)=>console.log(data));
  let styles = {
    margin: '20px 0px'
  }

  const [name, setName] = useState('');
  const userRef = useRef('');
  const [users, setUsers] = useState(user);
  function inputChangeHandler(ev) {
    setName(userRef.current.value);
    console.log("User Ref value",userRef.current.value);
  }

  useEffect(()=>{
    console.log('Inside Effect');
    setName('');
    userRef.current.value = '';
    console.log(name);
  },[users]);

  function submitHandler(e) {
    e.preventDefault();
    // console.log(name);
    setUsers([{
      id: uuid(),
      name: name,
      imgUrl: 'https://www.drivespark.com/images/2022-06/2022-bmw-x1-8.jpg'
    }, ...users])
  }

  function deleteUser(id){
    setUsers((prevState)=>{
      return prevState.filter((user)=>user.id!=id);
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="App" style={styles}>
        {/* <input ref={userRef} onChange={inputChangeHandler} type="text" placeholder="Enter Username" /> &nbsp;&nbsp;&nbsp; */}
        <input ref={userRef} onChange={inputChangeHandler} type="text" placeholder="Enter Username" /> &nbsp;&nbsp;&nbsp;
      <button type="submit">🔍</button>
      </form>
      <GithubUserList users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
