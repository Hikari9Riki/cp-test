// Q3 · FavouritesProvider: OWNS the favourites and shares it with every Q3 page inside it.
// It uses useLocalStorage (not useState), so the favourites survives a page refresh.
// TODO I (1 mark): import FavouritesContext from favourites-context.js (same folder)
//   and useLocalStorage from src/shared/useLocalStorage.js (one folder up, then shared/)

import FavouritesContext from './favourites-context.js'
import useLocalStorage from 'src/shared/useLocalStorage.js'

export function FavouritesProvider({ children }) {
  // The ids of the favourite items, for example ['3', '7']
  const [favourites, setFavourites] = useLocalStorage('pt1-favourites', [])

  function toggleFavourites(id) {
    // TODO 2 (2 marks): add id if it is not in the favourites, remove it if it is.
    setFavourites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id)
      } else {
        return [...prev, id]
      }
    })
    // Same idea as toggleReserve in Q1.
  }

  const isInFavourites = (id) => favourites.includes(id)

  // Everything a Q3 page can get from useFavourites()
  const value = { favourites, count: favourites.length, isInFavourites, toggleFavourites }
  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}