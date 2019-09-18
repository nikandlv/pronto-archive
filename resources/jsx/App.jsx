import React from 'react'
import ReactDOM from 'react-dom'
import ReduxProvider from './Data/ReduxProvider'
import MainRouter from './Routes/MainRouter';
ReactDOM.render(
      <ReduxProvider>
          <div>
              <MainRouter>

              </MainRouter>
          </div>
      </ReduxProvider>,
    document.getElementById('root')
  );