import { Children, createContext, useReducer, useState } from "react";
import ReducerFunction, { InitialStateValue, initialstate } from "./ReducerFunction";
import { StateType, Table_mode, VIEW_EDIT, stateval } from "./StateTypeMain";

const ContextHealthMain = createContext({
  UserVal: initialstate,
  currentStatePage: Table_mode,
  editUserData:initialstate[0],
  EditDataFn:(userData:StateType) => {},
  CurrentpageFn: (value: VIEW_EDIT) => {},
});

export const ContextHealthMainWrapper: React.FC<any> = (props) => {
  const [NewState, dispatch] = useReducer(ReducerFunction, InitialStateValue);

  const [currentStatePage, setCurrentStatePage] = useState<VIEW_EDIT>(Table_mode);
  const [editUserData, setEditUserData] = useState<StateType>(initialstate[0])

  const CurrentpageFn = (value: VIEW_EDIT) => {
    setCurrentStatePage(value);
  };

  const EditDataFn = (userData:StateType) => {
    setEditUserData(userData)
  }
 
  const updatefn = (input:any) => {

    dispatch({
      payload: initialstate,
      type:input
    })
  }
  
  const { children } = props;
  return (
    <ContextHealthMain.Provider
      value={{
        UserVal: NewState,
        currentStatePage: currentStatePage,
        CurrentpageFn: CurrentpageFn,
        editUserData:editUserData,
        EditDataFn:EditDataFn,
      }}
    >
      <div>{children}</div>
    </ContextHealthMain.Provider>
  );
};
export default ContextHealthMain;
