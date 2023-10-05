import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ImageDetails(){
    const {id} = useParams()
    const [image, setImage] = useState([])
    async function downloadImage(){
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log('dataresponsegetting',response.data.photo.title)
        setImage({
            imageUrl : response.data.photo.url,
            title : response.data.photo.title,
            description : response.data.photo.description,
        })
        
    }

    useEffect(()=> {
       downloadImage()
    },[])
    return(
    <div> 
        <div className="bg-cyan-700 m-5 flex">  
     <img className="h-[200px] w-[200px] border rounded-lg m-2 border-cyan-500 border-8 " src={image.imageUrl} alt="" />
     <span className=" flex flex-col justify-center items-center">  
     <h1 className="text-2xl font-bold">{image.title}</h1>
     <p>{image.description}</p>
     </span>
     </div>
    </div>
    )
}
export default ImageDetails;