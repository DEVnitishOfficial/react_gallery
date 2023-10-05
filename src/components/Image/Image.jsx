import { Link } from "react-router-dom";
function Image({image, id}){

    return(
      <Link to={`Image/${id}`}>  
<div className="flex h-[200px] w-[200px] ">
    <img className="flex cursor-pointer ml-10 mb-2 rounded-xl" src={image} alt="" />
</div>
</Link>
  )
}
export default Image;