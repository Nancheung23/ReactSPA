import Default from "./components/DefaultView"
import Button from "./components/Button"
import DataFetching from "./components/DataFetching"
import { Provider } from 'react-redux'
import store from './store/store'
import { useState } from "react"

const views = {
  'title': 'Tampere Ammattikorkeakoulu',
  'time': new Date().toISOString(),
  'courses': [
    {
      id: 1,
      name: 'React.js'
    },
    {
      id: 2,
      name: 'JavaScript'

    },
    {
      id: 3,
      name: 'CSS'
    },
    {
      id: 4,
      name: 'HTML'
    },
    {
      id: 5,
      name: 'Vite'
    },
    {
      id: 6,
      name: 'ES6'
    },
    {
      id: 7,
      name: 'TypeScript'
    },
    {
      id: 8,
      name: 'Node.js'
    },
    {
      id: 9,
      name: 'Express'
    },
    {
      id: 10,
      name: 'MongoDB'
    },
  ]
}

const App = () => {
  const [click, setClick] = useState(0)
  const handleClick = () => {
    console.log('Button clicked!')
    setClick(click + 1)
  }
  return (
    <div>
      <Provider store={store}>
        <div>
          <h1>Redux Example</h1>
          <Default views={views} />
          <Button text={'Click'} handleClick={handleClick} click={click} />
        </div>
      </Provider>
    </div>
  )
}

export default App
