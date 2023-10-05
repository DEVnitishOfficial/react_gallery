import { Routes,Route } from "react-router-dom";
import ImageDetails from "../components/imageDetails/ImageDetails";
import ImageList from "../components/imageList";


function CustomRouter(){
    return(
        <Routes>
            <Route path="/" element={<ImageList />} />
            <Route path="Image/:id" element={<ImageDetails />} />
        </Routes>
    )
}
export default CustomRouter;