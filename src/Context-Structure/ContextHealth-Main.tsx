import { Children,createContext, useReducer } from "react";
import ReducerFunction, { initialstate } from "./ReducerFunction";

const ContextHealthMain = createContext({UserVal: initialstate});

export const ContextHealthMainWrapper: React.FC<any> = (props) => {
  const [NewState, dispatch] = useReducer(ReducerFunction, initialstate);

  const { children } = props;
  return (
    <ContextHealthMain.Provider value={{UserVal:initialstate}}>
      <div>{children}</div>
    </ContextHealthMain.Provider>
  );
};
export default ContextHealthMain;
