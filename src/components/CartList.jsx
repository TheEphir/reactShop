import { CartItem } from './CartItem';

export function CartList(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    removeQuantity = Function.prototype,
    addQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity;
  }, 0);

  return (
    <ul className='collection cart-list'>
      <li className='collection-item active'>Cart</li>
      {order.length ? (
        order.map((item) => (
          <CartItem
            key={item.mainId}
            removeFromCart={removeFromCart}
            removeQuantity={removeQuantity}
            addQuantity={addQuantity}
            {...item}
          />
        ))
      ) : (
        <li className='collection-item '>Cart is empty</li>
      )}
      <li className='collection-item active'>Total price: {totalPrice}</li>
      <i className='material-icons CartList-close-btn' onClick={handleCartShow}>
        close
      </i>
    </ul>
  );
}
