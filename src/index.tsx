import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { RootStack } from '~/routes';

import store from './store';

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <RootStack />
    </StoreProvider>
  );
};

export default App;
