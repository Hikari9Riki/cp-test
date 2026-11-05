// Q3 · useFavourites: the one way components read the favourites context.
// It holds NO state itself: every component that calls it gets the SAME favourites from the provider.
// (Hooks share logic, not state. Context shares state.)
import { useContext } from 'react'
import { FavouritesContext } from './favourites-context.js'

export function useFavourites() {
  const context = useContext(FavouritesContext)
  // A clear message if someone forgets to wrap the pages in <FavouritesProvider>.
  if (!context) throw new Error('useFavourites must be used inside <FavouritesProvider>')
  return context
}
