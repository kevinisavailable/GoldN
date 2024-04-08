import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from '@pangeacyber/react-auth'
import React from 'react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider
        config={{
          domain: import.meta.env.VITE_APP_PANGEA_DOMAIN,
          clientToken: import.meta.env.VITE_APP_CLIENT_TOKEN,
          useJwt: false
        }}
        cookieOptions={{
          useCookie: true,
          cookieName: "pangea-authn"
        }}
        loginUrl={import.meta.env.VITE_APP_LOGIN_URL}
        useStrictStateCheck={false}
      >
        <App />
      </AuthProvider>
    </React.StrictMode>,
)
