import { useMemo, useState } from 'react';
import './App.css';
import { Player } from './components'
import BatterActive from './images/batter_active.jpeg'
import BatterWait from './images/batter_wait.jpeg'

import CatcherActive from './images/catcher_active.jpeg'
import CatcherWait from './images/catcher_wait.jpeg'

const toggleStatus = prev => prev === 'wait' ? 'active' : 'wait'

function App() {
  const [list, setList] = useState([])

  const memoizedList = useMemo(() => list, [list])

  const addFirst = () => setList(prev => [Math.random(), ...prev])

  return <div className="App">
    <Player action={() => setList(123)} list={memoizedList} />
  </div>;
}

export default App;
