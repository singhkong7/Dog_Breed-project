import React,{useState,useEffect} from 'react'
import "./DogImage.css"
import Axios from "axios";
const DogImage = ({category}) => {
    const[imageUrls,setImageUrls]=useState([]);
    useEffect(async () =>{
        await Axios .get(`https://dog.ceo/api/breed/${category}/images/random/4`).then((response)=>{
          //console.log(response.data)
          setImageUrls(response.data.message)
        }
        ).catch(err=>(
            console.log("Not Working")
        ))
    },[category])
    
    console.log(imageUrls);
    return (
        <div className="container" style={{marginTop:"4%"}}>
        {
            imageUrls.map((imageUrl,id)=>(
                <img key={id} className="img-fluid" src={imageUrl} alt="dog" style={{margin:"1%"}} />
            ))
        }
        </div>
    )
}

export default DogImage
