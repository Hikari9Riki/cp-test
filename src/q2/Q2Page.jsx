// QUESTION 2 · Add an item (intermediate, 25 marks) · route /q2
// TODO I (2 marks): write the imports this file needs:
//   useState from 'react', startItems from startItems.js (same folder), and the ItemForm component
import { useState } from 'react'
import startItems from './startItems.js'
import ItemForm from './ItemForm.jsx'

function Q2Page() {
  // The PARENT owns the list, because the form adds to it and the page shows it.
  const [itemList, setItemList] = useState(startItems)

  function addItem(newItem) {
    // TODO 6 (3 marks): put newItem at the TOP of the list. Do not use push.
    // Hint: setItemList((prev) => [...])
    setItemList((prev) => [newItem, ...prev])
  }

  return (
    <section>
      <h1>Q2 · Add an item</h1>

      {/* TODO 7 (2 marks): show <ItemForm /> and give it addItem as its onAdd prop */}
      <ItemForm onAdd={addItem} />
      <p className="summary">Items: {itemList.length}</p>
      <ul className="card-grid">
        {/* TODO 8 (3 marks): itemList.map(...) → one card per item, with a key.
            The markup for ONE card is given; put the right values in the { }:
              <li key={...} className="card">
                <h3>{...name...}</h3>
                <p className="muted">{...location...}</p>
              </li> */}
        {itemList.map((item) =>(
          <li key={item.id} className="card">
            <h3>{item.name}</h3>
            <p className="muted">{item.location}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Q2Page
