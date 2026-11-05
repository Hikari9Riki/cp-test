// Q3 · useItems: a custom hook that loads /api/items.json (like useVendors in CampusEats).
// TODO I (1 mark): import useEffect and useState from 'react'

import { useEffect } from "react"

export function useItems() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0) // change it to fetch again

  useEffect(() => {
    setLoading(true)
    setError(null)

    // TODO 1 (5 marks): fetch('/api/items.json') and then:
    //   - if res.ok is false, throw new Error(...)
    //   - otherwise read res.json() and save it with setItems
    //   - .catch: setError('Could not load items.')
    //   - .finally: setLoading(false)
  }, [reloadKey])

  const reload = () => setReloadKey((k) => k + 1)
  return { items, loading, error, reload }
}
