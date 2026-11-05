// Q3 · The context object: an empty "box" that FavouritesProvider fills.
// null means "no provider above me". Kept in its own .js file so Vite's fast refresh works well.
import { createContext } from 'react'

export const FavouritesContext = createContext(null)
