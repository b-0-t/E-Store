// @ts-nocheck
import "../../css/cart.css";
import useCartStore from "../../stores/CartStore";

const RemoveFromCartButton = ({ item }) => {
  const { removeFromCart } = useCartStore();
  return (
    <>
      <button className="remove-button" onClick={() => removeFromCart(item)}>
        Remove
      </button>
    </>
  );
};

export default RemoveFromCartButton;
