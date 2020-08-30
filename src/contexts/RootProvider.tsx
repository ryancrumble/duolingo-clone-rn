import React from 'react';
import { Provider as AppProvider } from './AppContext';

// Handles all Providers into one. This is consumed in App.js

const RootProvider: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <AppProvider>
      {/* <AnotherProvider> */}
      {children}
      {/* </AnotherProvider> */}
    </AppProvider>
  );
};

export default RootProvider;
