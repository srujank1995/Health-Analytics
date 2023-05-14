import { Children, createContext, useReducer, useState } from "react";
import ReducerFunction, { initialstate } from "./ReducerFunction";
import { StateType, VIEW_EDIT, stateval } from "./StateTypeMain";
import { Value } from "sass";

const ContextHealthMain = createContext({
  initialValue:0,
  UserVal: initialstate,
  currentStatePage: "View",
  CurrentpageFn: (value: VIEW_EDIT) => {},
  editUserData:initialstate[0],
  EditDataFn:(userData:StateType) => {},
  ModalFun:(value:any) => {},
  setInputData:(value:number) => {}

});

export const ContextHealthMainWrapper: React.FC<any> = (props) => {
  const [NewState, dispatch] = useReducer(ReducerFunction, initialstate);

  const [currentStatePage, setCurrentStatePage] = useState<VIEW_EDIT>("View");
  const [editUserData, setEditUserData] = useState<StateType>(initialstate[0])

  const CurrentpageFn = (value: VIEW_EDIT) => {
    setCurrentStatePage(value);
  };

  const EditDataFn = (userData:StateType) => {
    setEditUserData(userData)
  }
  const [inputData, setInputData] = useState<number>(0)
  
  const ModalFun = (value:any) => {
   dispatch({
    payload:{value:inputData},
    type:value
   }) 
  }
  const SetInputDataFn = (Value:number) =>{
    setInputData(Value)
  }
  const { children } = props;
  return (
    <ContextHealthMain.Provider
      value={{
        ModalFun,
        setInputData:SetInputDataFn,
        initialValue:inputData,
        UserVal: initialstate,
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
