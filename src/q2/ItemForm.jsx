// Q2 · ItemForm: a controlled form. It checks the fields and sends the new item UP to its parent
// through the onAdd prop. It does NOT keep the list of items.
// TODO I (1 mark): import useState from 'react'
import { useState } from "react"

// All the HTML is already written for you. Only fill in the React parts:
//   replace each null with your code, and write your code at each TODO.

function ItemForm({ onAdd }) {
  const [name, setName] = useState('')
  // TODO 1 (2 marks): a second state for the location, starting as ''
  const [location, setLocation] = useState('')
  const [errors, setErrors] = useState({})

  function handleSubmit(event) {
    event.preventDefault() // stop the page from reloading

    const found = {}
    if (name.trim().length < 2) found.name = 'Name must be at least 2 characters.'
    // TODO 2 (3 marks): if the location is empty (ignore spaces), set found.location = 'Enter the location.'
    if (location.trim().length === 0) found.location = 'Enter the location.'

    setErrors(found)
    if (Object.keys(found).length > 0) return // stop: there are errors to show

    // TODO 3 (3 marks): call onAdd with the new item: { id: `new-${Date.now()}`, name, location }
    onAdd({ id: `new-${Date.now()}`, name, location })
    // TODO 4 (2 marks): clear both fields
    setName('')
    setLocation('')
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      {/* TODO 5 (4 marks): connect the Location field, like the Name field above:
          value is the location state, onChange updates it, and show errors.location when there is one. */}

      <div className="field">
        <label htmlFor="location">Location</label>
        <input id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        {errors.location && <p className="error">{errors.location}</p>}
      </div>

      <button type="submit">Add item</button>
    </form>
  )
}

export default ItemForm
