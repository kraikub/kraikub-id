import { createContext, FC, useContext, useState } from "react";

interface UserProviderProps {
  children?: any;
  user: UserWithStudent | null;
}

interface UserContext {
  user: UserWithStudent | null;
}

const defaultUserContextValue = {
  user: null
};

export const userContext = createContext<UserContext>(defaultUserContextValue);

export const UserProvider: FC<UserProviderProps> = ({ children, user }) => {
  if (!user) {

    return (
      <>no user</>
    );
  }
  return (
    <userContext.Provider
      value={{
        user
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
