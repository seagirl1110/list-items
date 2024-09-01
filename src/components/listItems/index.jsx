import { useEffect, useState } from 'react';

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addItem(evt) {
    evt.preventDefault();
    if (inputValue.length) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  }

  useEffect(() => {
    console.log('Компонент ListItems обновлен');
  }, [items]);

  return (
    <div>
      <form action="" onSubmit={addItem}>
        <input
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
          type="text"
        />
        <button>add item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
