export function Cart(props) {
  const { quantity = 0, handleCartShow = Function.prototype } = props;

  return (
    <div className='cart teal lighten-3' onClick={handleCartShow}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantuty'>{quantity}</span> : null}
    </div>
  );
}
