import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Cloth = ({cloth}) => {
    const [quantity, setQuantity] = useState(1); 
    const dispatch = useDispatch()
    return (
    <div>
        <img src={`./${cloth.img}.jpg`} alt='clothes'/>
        <h2>{cloth.name}</h2>
        <p>$ {cloth.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={()=> {dispatch(addItemToCart({cloth, quantity}));
    }}>Add to cart</button>
    </div>
        );
}
export default Cloth;