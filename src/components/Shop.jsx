import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Preloader } from './Prealoader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { Alert } from './Alert';

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  const pushToOrder = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId //check if item already added to order
    );

    if (itemIndex < 0) {
      // if item does not exist => we add a new item
      const newItem = {
        ...item, // add to item new prop quantity
        quantity: 1,
      };
      setOrder([...order, newItem]); //push to order item with new prop
    } else {
      // if item already exist we add quantity
      const newOrder = order.map((orderItem, index) => {
        // create a new order
        if (index === itemIndex) {
          return { ...orderItem, quantity: orderItem.quantity + 1 }; // if we have coincidence in itemIndex in order make newOrder with quantity + 1
        } else {
          return orderItem; // if its 'clear' does return as this was
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  const removeFromCart = (itemID) => {
    const newOrder = order.filter((el) => el.mainId !== itemID);
    setOrder(newOrder);
  };

  const removeQuantity = (itemID) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemID) {
        return { ...el, quantity: el.quantity - 1 };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const addQuantity = (itemID) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemID) {
        return { ...el, quantity: el.quantity + 1 };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(function getGoods() {
    fetch(`https://fortniteapi.io/v2/shop?lang=en`, {
      headers: { Authorization: '2acbaf6d-51411817-b0daca4d-7328ed7e' },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className='shop content container'>
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} pushToOrder={pushToOrder} />
      )}
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          removeQuantity={removeQuantity}
          addQuantity={addQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}
// функция чтобы можно было добавить\убрать в корзине колво товара = [+1 -1] делать на уровне шоп
