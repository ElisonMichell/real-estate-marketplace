import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';
import './styles/global.css';

import { Header } from './components/Header';

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
    </ApolloProvider>
  );
}

export default App;
