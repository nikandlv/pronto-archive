import React from 'react'
import ReactDOM from 'react-dom'
import ReduxProvider from './Data/ReduxProvider'
ReactDOM.render(
      <ReduxProvider>
          <div>
              Hello!
          </div>
      </ReduxProvider>,
    document.getElementById('root')
  );