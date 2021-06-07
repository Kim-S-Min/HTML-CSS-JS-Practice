import React from "react";
import Potato from "./Potato";

function Food({ name, picture }) {
  //console.log(props.fav);
  return (
    <div>
      <h1>I Like {name}</h1>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: 
      "http://https://www.maangchi.com/wp-content/https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg?w=900&h=602/2014/06/whole-cabbage-kimchi.jpg.com/wp-content/updates/2008/09/kimchi"
  },
  {
    id:2,
    name: "Bibimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsimplycook.imgix.net%2Frecipes%2FBibimbap-_720x480.jpg%3Fdpr%3D1%26fit%3Dcrop%26fm%3Djpg%26h%3D1000%26ixlib%3Dphp-1.0.6%26lossless%3D0%26q%3D50%26w%3D1200%26s%3D683b3a92e878ee9cdb83e0ed1a98597c&f=1&nofb=1"
  }]

  
function App() {
  return (
    <div className="App">
      {foodILike.map(dish => ( //  dish = object
      <Food key={dish.id} name={dish.name} picture={dish.image} /> 
      ))}
    </div>
  );
}

export default App;
