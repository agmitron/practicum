import './App.css';
import { Player } from './components'
import { useState } from 'react'
import BatterActive from './images/batter_active.jpeg'
import BatterWait from './images/batter_wait.jpeg'

import CatcherActive from './images/catcher_active.jpeg'
import CatcherWait from './images/catcher_wait.jpeg'

function App() {
  const [ status, setStatus ] = useState({
    catcher: 'wait',
    batter: 'wait'
  })

  const changeStatus = () => {
    setStatus({
      catcher: 'active',
      batter: 'active'
    })
  }

  return (
    <div className="App">
      <Player
        status={status.batter}
        name='Batter'
        imageWait={BatterWait}
        imageActive={BatterActive}
        action={changeStatus}
      />

      <Player
        status={status.catcher}
        name='Catcher'
        imageWait={CatcherWait}
        imageActive={CatcherActive}
      />
    </div>
  );
}

export default App;
