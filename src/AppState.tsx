import React, { PropsWithChildren, useState } from 'react';

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: string | number, name: string }[] }
}

const defaultContextValue: AppStateValue = {
  username: 'lmy',
  shoppingCart: { items: [] }
}
export const appContext = React.createContext(defaultContextValue)
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)
export const AppStateProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [state, setState] = useState(defaultContextValue)
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  )
}


