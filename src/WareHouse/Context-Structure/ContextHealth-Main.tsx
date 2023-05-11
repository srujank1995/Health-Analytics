import { Children, createContext, useState } from "react";


const ContextHealthMain= createContext({
     users:[{
        id:0,
        name:'',
        BP:0,
        HR:0,
        SBP:0,
        DBP:0,
        SR:0,
        SL:0,

    }]
})

export const ContextHealthMainWrapper:React.FC<any>=(props)=>{
   const users=[{id:0,
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