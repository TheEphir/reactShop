import { GoodsItem } from './GoodsItem';

export function GoodsList(props) {
  const { goods = [], pushToOrder = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} pushToOrder={pushToOrder} />
      ))}
    </div>
  );
}
