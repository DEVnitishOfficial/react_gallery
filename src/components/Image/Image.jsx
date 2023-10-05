
function Image({image}){

    return(
<div className="flex h-[200px] w-[200px] ">
    <img className="flex cursor-pointer ml-10 mb-5" src={image} alt="" />
</div>
  )
}
export default Image;