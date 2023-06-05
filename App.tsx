import React from 'react';

import Home from './src/screens/Home';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

export default App;
