import axios from "axios";
import { useEffect, useState } from "react";
import Image from "./Image/Image";

function ImageList(){

    const [imageList, setImageList] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    async function downloadImages(){
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20')
        const imageData = response.data.photos
        console.log('response',response)
        const res = imageData.map((takeimg) => {
            const photoData = takeimg
            return {
               Image :  photoData.url,
               title :  photoData.title,
               description : photoData.description,
               Id : photoData.id,
               dataOwner : photoData.user
            }
        })
        console.log('see result', res);
        setIsLoading(false)
        setImageList(res)
    }

    useEffect(()=> {
   downloadImages()
    },[])

    return(
        <>  
        <div className="text-2xl font-bold p-6 text-center items-center m-4 bg-neutral-600">IMAGE LIST</div>
        <div className="flex flex-wrap gap-10 "> {(isLoading) ? 'loading....' : 
        imageList.map((I) => 
        <Image image={I.Image} key = {I.Id} id={I.Id}
        />)}  </div>
        
        </>
    )
}
export default ImageList;