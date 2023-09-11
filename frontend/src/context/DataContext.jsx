import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [responseData, setResponseData] = useState(null);
  const [searchBook, setSearchBook] = useState(null);

  return (
    <DataContext.Provider
      value={{
        searchBook,
        setSearchBook,
        responseData,
        setResponseData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
