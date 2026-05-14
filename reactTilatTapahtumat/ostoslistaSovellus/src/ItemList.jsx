function ItemList({ items, onRemoveItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onRemoveItem(item.id)}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
