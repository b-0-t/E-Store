// @ts-nocheck
import useCurrUserStore from "../data/userdata";
import deleteIcon from "./delete.png";

const Cart = () => {
  const { curruser, removeFromCart, updateCartItemQuantity } =
    useCurrUserStore();
  return (
    <div className="right-0 mt-2 bg-white shadow-lg rounded-lg z-50 ">
      <ul className="  mr-[10px] pt-10 divide-y divide-gray-200">
        {curruser.cartList.length > 0 ? (
          curruser.cartList.map((item) => (
            <li
              key={item.id}
              className="h-[120px] flex items-center gap-2 p-2 hover:bg-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className=" w-12 h-12 object-cover rounded-md"
              />
              <div className="flex-1 w-7">
                <p className="font-semibold">{item.title}</p>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="flex justify-between">
                  <input
                    className="border border-black-600 w-[50px]"
                    type="number"
                    id={`quantity_${item.id}`}
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartItemQuantity(item, e.target.value)
                    }
                    min="1"
                  />
                  <img
                    onClick={() => removeFromCart(item)}
                    className="cursor-pointer  w-[20px] h-[20px] "
                    src={deleteIcon}
                    alt=""
                  />
                  <p>Total: ${item.quantity * item.price}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-600">No items in cart</li>
        )}
      </ul>
    </div>
  );
};

export default Cart;
