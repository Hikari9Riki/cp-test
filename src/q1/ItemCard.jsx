// Q1 · ItemCard: shows ONE item. Everything it needs comes in through props:
//   item       → { id, name, location, type }
//   isReserved → true or false (the parent decides)
//   onToggle   → a function from the parent; call it with the item's id

// All the HTML is already written for you. Only fill in the React parts:
//   replace each null with your code, and write your code at each TODO.

function ItemCard({ item, isReserved, onToggle }) {
  return (
    
    // The class "card selected" turns the card green when it is reserved.
    <li className={isReserved ? 'card selected' : 'card'}>
      {/* TODO 1 (4 marks): show the item's name, location and type from the item prop.
          Hint: replace each null with {item.something} */}
      <h3>{item.name}</h3>
      <p className="muted">{item.location}</p>
      <span className="pill">{item.type}</span>

      {/* TODO 2 (4 marks): onClick calls onToggle(item.id).
          The text is "Cancel" if isReserved is true, otherwise "Reserve".
          Hint: onClick={() => ...}   and   {isReserved ? '...' : '...'} */}
      <button onClick={() => onToggle(item.id)}>
        {isReserved ? 'Cancel' : 'Reserve'}
      </button>
    </li>
  )
}

export default ItemCard
