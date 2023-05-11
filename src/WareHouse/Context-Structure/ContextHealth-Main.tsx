import { Children, createContext, useState } from "react";
import { StateType, stateval } from "../StateTypeMain/StateTypeMain";

export const initialstate: StateType = {
    id:0,
    name:"",
    BP: { value: 0, name: "Blood Pressure" },
    HR: { value: 0, name: "Heart Rate" },
    SBP: { value: 0, name: "Sistolic Blood Pressure" },
    DBP: { value: 0, name: "Distolic Blood Pressure" },
    BTemp: { value: 0, name: "Body Temperature" },
    SR: { value: 0, name: "Sugar level" },
    SL: { value: 0, name: "Stress level" },
  };
const ContextHealthMain= createContext({
     users:[initialstate]
})
export const ContextHealthMainWrapper:React.FC<any>=(props)=>{
   const users: StateType[]=[{
    id:0,
    name:'',
    BP:0,
    HR:0,
    SBP:0,
    DBP:0,
    SR:0,
    SL:0,}]
    const {children} = props;
    return (
        <ContextHealthMain.Provider value={
            {users:users}
        }>
        <div>
            {children}     
        </div>
        </ContextHealthMain.Provider>
    )
}
export default ContextHealthMain;