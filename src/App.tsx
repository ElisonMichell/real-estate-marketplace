import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';
import './styles/global.css';

import { Marketplace } from './pages/marketplace';

function App() {
  return (
    <ApolloProvider client={client}>
      <Marketplace />
    </ApolloProvider>
  );
}

export default App;
