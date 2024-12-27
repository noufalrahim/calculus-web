import { Layout } from './components/ui/layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ClerkProvider } from '@clerk/clerk-react'
import Router from './router/Router/Router';
import './App.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
  return (
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </ClerkProvider>
    </Provider>
  );
}

export default App;
