import React,{useState} from 'react'
import Place from '../Place/Place'
import Button from 'react-bootstrap/Button';

let arr = [
    { name: 'Thailand', imgUrl: 'https://i.ytimg.com/vi/MNuWA3BN8oc/maxresdefault.jpg' },
    { name: 'Jim Corbett', imgUrl: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/10/Feature-image-Jim-Corbett-.jpg' },
    { name: 'Las Vegas', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Welcome_to_LV.JPG' },
    { name: 'Netherlands', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Welcome_to_LV.JPG' }
]

const PlaceList = () => {
    const [showPlace,setShowPlace] = useState(true);
    // const [counter, setCounter] = useState(1);
    // let counter = 1;
    // function clickHandler(){
    //     setCounter(counter + 1);
    //     // counter = counter + 1;
    // }

    function newclickHandler(){
        setShowPlace(!showPlace);
    }
    return (
        <div>
            {/* <div>Counter: {counter}</div> */}
            {/* <Button onClick={clickHandler}>Hello Click Me!</Button> */}
            <Button onClick={newclickHandler}>Click me to see magic!</Button>
            {   showPlace &&
                arr.map((city,indx)=>{
                    return <Place key={indx} name={city.name} imgUrl={city.imgUrl} />
                })
            }
        </div>
    )
}

export default PlaceList
