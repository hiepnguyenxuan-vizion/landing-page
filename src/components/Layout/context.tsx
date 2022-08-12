import { createContext, useCallback, useState } from 'react';
import { ILayout } from './type';

const defaultValue: ILayout = {
  isSidebarOpen: false,
  onToggleSidebar: () => {
    return {};
  },
};

export const LayoutContext = createContext(defaultValue);

const LayoutContextProvider: React.FC = ({ children }) => {
  // states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // methods
  const handleToggleSidebar = useCallback(
    () => setIsSidebarOpen(!isSidebarOpen),
    [isSidebarOpen]
  );

  return (
    <LayoutContext.Provider
      value={{
        isSidebarOpen,
        onToggleSidebar: handleToggleSidebar,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
