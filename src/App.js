import React,{useState} from "react";
import Card from "./component/Card";
import NavBar from "./component/NavBar";
import Header from "./component/Header";

function App() {
  let [cartValue,setCartValue] = useState(0)
  let data = [
    {
      product:"Fancy Product",
      price :"$40.00-80.00"
  },
  {
    product:"Special Item",
    price :"$18.00"
},
{
  product:"Sale Item",
  price :"$25.00"
},
{
  product:"Popular Item",
  price :"$40.00-80.00"
},
{
  product:"Sale Item",
  price :"$25.00"
},
{
  product:"Fancy Product",
  price :"$120.00-280.00"
},
{
  product:"Special Item",
  price :"$18.00"
},
{
  product:"Popular Item",
  price :"$40.00"
}
  ]
  return <>
  <NavBar cartValue={cartValue}/>
  {/* <Header /> */}
  <Header/>
  <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      { data.map((e,i)=>{
        return <Card key ={i}
        details={e}
        setCartValue={setCartValue}/>  
      })}
       
      </div>
    </div>
  </section>
  </>
}

export default App;