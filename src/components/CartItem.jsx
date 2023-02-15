export function CartItem(props) {
  const {
    mainId,
    displayName,
    finalPrice,
    quantity,
    removeFromCart = Function.prototype,
    removeQuantity = Function.prototype,
    addQuantity = Function.prototype,
  } = props;

  return (
    <li className='collection-item '>
      {displayName} x{' '}
      {quantity < 2 ? ( // btn to remove quantity
        <a href='/#' className='disabled cart-quantity-btns btn-small'>
          <i className='material-icons '>remove</i>
        </a>
      ) : (
        <a
          href='/#'
          className='cart-quantity-btns btn-small'
          onClick={() => removeQuantity(mainId)}
        >
          <i className='material-icons'>remove</i>
        </a>
      )}{' '}
      {quantity} {/* add quantity button */}
      <a
        href='/#'
        className='cart-quantity-btns btn-small'
        onClick={() => addQuantity(mainId)}
      >
        <i className='material-icons '>add</i>
      </a>{' '}
      = {finalPrice * quantity}
      <span
        className='secondary-content CartItem-close-btn'
        onClick={() => {
          removeFromCart(mainId);
        }}
      >
        <i className='material-icons '>close</i>
      </span>
    </li>
  );
}
