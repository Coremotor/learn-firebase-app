import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { App } from 'App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './i18next/i18next'
import { SuspenseLoader } from 'components/suspenseLoader'

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseLoader />}>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
