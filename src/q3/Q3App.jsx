// QUESTION 3 · Equipment and favourites (hard, 25 marks) · every URL that starts with /q3
// App.jsx sends /q3 and everything under it here, so the paths below are RELATIVE to /q3.
// TODO I (1 mark): import Routes and Route from 'react-router', FavouritesProvider,
//   and the two page components Q3ItemList and Q3ItemDetail (all in this folder)
import { Route } from "react-router"

function Q3App() {
  return (
    // The provider wraps all the Q3 pages, so they share one favourites.
    <FavouritesProvider>
      {/* TODO 3 (3 marks): add <Routes> with two <Route>s:
            index        → <Q3ItemList />      (the page /q3)
            "item/:id"   → <Q3ItemDetail />    (the page /q3/item/5) */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Q3ItemList />} />
          <Route path="item/:id" element={<Q3ItemDetail />} />
        </Routes>
      </BrowserRouter>
      <p className="muted">Routes not added yet.</p>
    </FavouritesProvider>
  )
}

export default Q3App
