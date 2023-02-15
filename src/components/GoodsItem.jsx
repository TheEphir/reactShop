export function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    pushToOrder = Function.prototype,
  } = props;

  const finalPrice = price.finalPrice;

  return (
    <div className='card' id={mainId}>
      <div className='card-image'>
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() =>
            pushToOrder({
              mainId,
              displayName,
              finalPrice,
            })
          }
        >
          Buy
        </button>
        <span className='right' style={{ fontSize: '1.5rem' }}>
          {finalPrice}
        </span>
      </div>
    </div>
  );
}
