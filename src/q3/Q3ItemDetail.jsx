// Q3 · One item's page (/q3/item/:id)
// TODO I (1 mark): import Link and useParams from 'react-router', useItems, useFavourites,
//   and Loading and ErrorMessage from src/shared/Status.jsx
import { Link, useParams } from "react-router"
import { useItems } from "./useItems.js"
import { useFavourites } from "./useFavourites.js"
import { Loading, ErrorMessage } from "src/shared/Status.jsx"
// The HTML is already written: replace each null with your code.

function Q3ItemDetail() {
  // TODO 7 (2 marks): read the id from the URL with useParams() instead of ''
  const id = useParams().id

  const { items, loading, error, reload } = useItems()
  const { isInFavourites, toggleFavourites } = useFavourites()

  if (loading) return <Loading text="Loading items…" />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  // TODO 8 (2 marks): find the item whose id matches (items.find(...)) instead of items[0].
  const item = items.find((i) => i.id === id)
  // TODO 8: if there is no item, return this (the markup is given, just add the if):
  //   <section><h1>Item not found</h1><p><Link to="/q3">← Back to the equipment list</Link></p></section>
  if (!item) {
    return (
      <section>
        <h1>Item not found</h1>
        <p><Link to="/q3">← Back to the equipment list</Link></p>
      </section>
    )
  }

  return (
    <section className="detail">
      <p><Link to="/q3">← Back to the equipment list</Link></p>
      <h1>{item.name}</h1>
      <p className="muted">{item.location} · {item.quantity} available · {item.condition}</p>
      <p><span className="pill">{item.type}</span></p>
      <p>{item.notes}</p>

      {/* TODO 9 (2 marks): onClick calls toggleFavourites(item.id).
          The text is "Remove from favourites" if isInFavourites(item.id) is true, otherwise "Add to favourites". */}
      <button onClick={() => toggleFavourites(item.id)}>
        {isInFavourites(item.id) ? 'Remove from favourites' : 'Add to favourites'}
      </button>
      {/* <button onClick={null}>{null}</button> --- IGNORE --- */}
    </section>
  )
}

export default Q3ItemDetail

