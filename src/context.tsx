import { createContext, useContext, useState } from "react";
import { Repos, User } from "./utils/types";
import userData from "./utils/mockData/userData";
import reposData from "./utils/mockData/reposData";
import { useAuth0 } from "@auth0/auth0-react";

type ContextType = { user: User, setUser: (value: User) => void, repos: Repos[], setRepos: (value: Repos[]) => void, requests: { limit: number, remaining: number }, setRequests: (value: { limit: number, remaining: number }) => void }

const GlobalContext = createContext<ContextType | undefined>(undefined);

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
  const [requests, setRequests] = useState<{ limit: number, remaining: number }>({ limit: 60, remaining: 60 });

  return (
    <GlobalContext.Provider value={{ user, setUser, repos, setRepos, requests, setRequests }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppProvider;
