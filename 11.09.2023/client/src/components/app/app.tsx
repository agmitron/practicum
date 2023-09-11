import * as React from 'react';
import './app.module.css';
import LiveTable from '../live-table/live-table';

const App = () => {
  const { table, status } = {table: [], status: 0 } 
  const isDisconnected = false
  
  let className = 'app__status';
  /*switch (status) {
    case WebsocketStatus.ONLINE:
      className += ' app__status--online';
      break;
    case WebsocketStatus.OFFLINE:
      className += ' app__status--offline';
      break;
    case WebsocketStatus.CONNECTING:
      className += ' app__status--connecting';
      break;
  }*/

  return (
    <div className='app'>
      <h3 className='app__header'>Live table</h3>
      <p>
        Connection status: <span className={className}>{status}</span>
      </p>
      <div>
        <button className='app__button app__button--connect' disabled={isDisconnected}>Connect</button>
        <button className='app__button app__button--disconnect' disabled={!isDisconnected}>Disconnect</button>
      </div>
      <LiveTable table={table}/>
    </div>
  );
}

export default App;


