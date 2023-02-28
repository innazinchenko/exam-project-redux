import dataClothes from "../../data/dataClothes";
import Cloth from "./Cloth";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../redux/clothesSlice";

const Clothes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (<div> 
        {dataClothes
        .filter(cloth => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === cloth.category;
        })
        .map(cloth => <Cloth cloth={cloth} key={cloth.id}/>)} 
        </div>)
}

export default Clothes;