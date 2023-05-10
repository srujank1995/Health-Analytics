import { Children, createContext, useState } from "react";

const ContextHealthMainWrapper:React.FC<any>=(props)=>{
   
    const {children} = props;
    return (
        <div>
            
        </div>
    )
}
const ContextHealthMain= createContext({
    Users:[{
        SR_NO:0,
        name:'',
        BP:0,
        HR:0,
        SBP:0,
        DBP:0,
        SR:0,
        SL:0,

    }]
})
export default ContextHealthMain;