import dataClothes from '../../data/dataClothes';
import { removeItemFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";


const CartItem = ({cartItem}) => {

const clothes = dataClothes.find(item => item.id === cartItem.clothId);
const dispatch = useDispatch();

    return (
<div>
    <p>{clothes.name}</p>
    <p>{cartItem.quantity}</p>
    <p>Price: ${clothes.price * cartItem.quantity}</p>
    <span onClick={() =>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete item"/> 
    </span>
</div>
    );
}

export default CartItem;