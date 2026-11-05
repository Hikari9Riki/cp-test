// QUESTION 1 · Reserve equipment (easy, 20 marks) · route /q1
// TODO I (2 marks): write the imports this file needs:
//   useState from 'react', items from items.js (same folder), and the ItemCard component
import { useState } from 'react'
import items from './items.js'
import ItemCard from './ItemCard.jsx'

function Q1Page() {
  // The ids of the reserved items, for example ['b2', 'b5']. Starts empty.
  const [reservedIds, setReservedIds] = useState([])

  function toggleReserve(id) {
    // TODO 3 (4 marks): if id is already in reservedIds, take it out; otherwise add it.
    // Always make a NEW array. Hint: prev.includes(id), prev.filter(...), [...prev, id]
    setReservedIds(reservedIds => {
      if (reservedIds.includes(id)) {
        return reservedIds.filter((itemId) => itemId !== id)
      } else {
        return [...reservedIds, id]
      }
    })

  }

  // TODO 4 (2 marks): work out how many items are reserved from reservedIds.
  // Do NOT add another useState for this.
  const reservedCount = reservedIds.length

  return (
    <section>
      <h1>Q1 · Reserve equipment</h1>
      <p className="summary">Reserved: {reservedCount}</p>
      <ul className="card-grid">
        {/* TODO 5 (4 marks): items.map(...) → one <ItemCard /> per item.
            Give each one: key, item, isReserved={reservedIds.includes(item.id)} and onToggle={toggleReserve} */}
            {items.map((item) =>(
              <ItemCard
              item={item}
              isReserved={reservedIds.includes(item.id)}
              onToggle={toggleReserve}
              />
            ))}
      </ul>
    </section>
  )
}

export default Q1Page
