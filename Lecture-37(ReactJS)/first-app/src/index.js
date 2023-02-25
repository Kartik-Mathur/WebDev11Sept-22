import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Learn from './components/Learn/Learn';
import Person from './components/Person/Person';
import Place from './components/Place/Place';
import PlaceList from './components/PlaceList/PlaceList';

// let showPlaceList = true;
// const [showPlaceList, setShowPlaceList] = useState(true);

function buttonHandler(){
  console.log('Clicked');
  // showPlaceList = !showPlaceList
  // setShowPlaceList(!showPlaceList);
  // console.log(showPlaceList);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.
  render(
    <div>
      <PlaceList />
      {/* <button onClick={buttonHandler}>Click Me to see Magic!</button> */}
      {/* <Place />
      <App />
      <Learn />
      <Person /> */}
    </div>
  );
