import React,{useEffect,useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import './App.css';
import Select from "./Select";
import DogImage from "./DogImage/DogImage";
import Subcategory from "./Subcategory";

function App() {
  const[items,setItems]=useState([]);
  const[show,setShow]=useState(false)
  const[selectedItem,setSelectedItem]=useState([]);
  const[subSelections,setSubSelections]=useState([]);
    useEffect(async ()=>{
    await Axios .get(`https://dog.ceo/api/breeds/list/all`).then((response)=>{
        setItems(response.data.message)
        }
    )
  },[ ])
    //console.log(items);
   const selectHandler=(item)=>
  {
    setSelectedItem(item)
  }
  //console.log(selectedItem);
  useEffect(async () =>{
    await Axios .get(`https://dog.ceo/api/breed/${selectedItem}/list`).then((response)=>{
      console.log(response.data)
      setSubSelections(response.data.message)
    })
  },[selectedItem])
  const subHandler=(subSelection)=>
  {
    setSubSelections(subSelection)
  }
  //console.log(subSelections);
  return (
    <div className="App">
        <h1>DOGS IMAGES SECTION</h1>
        <div className="d-grid gap-2 col-6 mx-auto">
          <div className="p-2 bd-highlight">
              <Select items={items} onSelect={selectHandler} />
          </div>
          <div className="p-2 bd highlight">
            {
              selectedItem.length>0 ?  <Subcategory subSelections={subSelections} onSelect={subHandler} /> : null
            }
          </div>
          <button  onClick={()=>{setShow(!show)}} type="button" className="btn btn-secondary">Get Images</button>{show &&  <DogImage  category={selectedItem} /> }
      </div>
    </div>
  )
}

export default App;
