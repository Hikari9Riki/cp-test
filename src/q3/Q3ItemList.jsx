// Q3 · The equipment list page (/q3)
// TODO I (1 mark): import Link from 'react-router', useItems, useFavourites,
//   and Loading and ErrorMessage from src/shared/Status.jsx
import { Link } from "react-router"
import { useItems } from "./useItems.js"
import { useFavourites } from "./useFavourites.js"
import { Loading, ErrorMessage } from "src/shared/Status.jsx"

// The HTML is already written: replace each null with your code.
function Q3ItemList() {
  const { items, loading, error, reload } = useItems()

  // TODO 4 (1 mark): get count from useFavourites() instead of 0
  const count = useFavourites().count

  if (loading) return <Loading text="Loading items…" />
  // TODO 5 (1 mark): if there is an error, return <ErrorMessage message={error} onRetry={reload} />
  if (error) return <ErrorMessage message={error} onRetry={reload} /> 
  return (
    <section>
      <div className="row">
        <h1>Q3 · Equipment list</h1>
        <span>Favourites <span className="badge">{count}</span></span>
      </div>

      <ul className="card-grid">
        {items.map((item) => (
          <li key={item.id} className="card">
            {/* TODO 6 (2 marks): change "/q3" to this item's own page: `/q3/item/${item.id}` */}
            <h3><Link to={`/q3/item/${item.id}`}>{item.name}</Link></h3>
            <p className="muted">{item.location}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Q3ItemList
