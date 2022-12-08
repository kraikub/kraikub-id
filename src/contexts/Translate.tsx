import { createContext, FC } from "react";

const TranslateContext = createContext<any>({});

interface TranslateProviderProps {
  dict: any;
  children: any;
}

export const TranslateProvider: FC<TranslateProviderProps> = ({ dict, children }) => {
  return (
    <TranslateContext.Provider value={dict}>
      {children}
    </TranslateContext.Provider>
  );
};
