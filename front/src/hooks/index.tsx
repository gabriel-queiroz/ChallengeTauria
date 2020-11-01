import React from 'react';
import { PurchaseProvider } from './purchase';

const AppProvider: React.FC = ({ children }) => (
  <PurchaseProvider>{children}</PurchaseProvider>
);

export default AppProvider;
