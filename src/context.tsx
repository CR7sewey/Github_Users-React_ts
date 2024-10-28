import { createContext, useContext, useState } from "react";
import { Repos, User } from "./utils/types";
import userData from "./utils/mockData/userData";
import reposData from "./utils/mockData/reposData";


const GlobalContext = createContext<User | undefined>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      "Undefined value - useGLobalContext must be used within the AppProvider "
    );
  }
  return context;
};

function AppProvider({ children }: ThemeProviderProps) {
  const [user, setUser] = useState<User>(userData);
  const [repos, setRepos] = useState<Repos[]>(reposData);
  return (
    <GlobalContext.Provider value={{ user, setUser, repos, setRepos }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppProvider;
