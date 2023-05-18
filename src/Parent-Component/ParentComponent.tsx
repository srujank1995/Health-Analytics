import { useContext } from "react";
import EditHealthRecords from "../Components/EditData/EditHealthRecords";
import ViewHealthRecords from "../Components/ViewData/ViewHealthRecords";
import ContextHealthMain from "../Context-Structure/ContextHealth-Main";
import { View_mode, Edit_mode, Table_mode } from "../Context-Structure/StateTypeMain";
import TableData from "../Components/Table-Structure/Table-data";
import styless from './ParentComp.module.scss'
const ParentComponent = () =>{
    const HealthContext = useContext(ContextHealthMain)
    const {currentStatePage,CurrentpageFn} = HealthContext;
    return (
        <div>
        <button className={styless['Btn-Parent']} onClick={()=>{CurrentpageFn(Table_mode)}}>HEALTH MONITOR</button>  
        <button className={styless['Btn-Parent']} onClick={()=>{CurrentpageFn(Edit_mode)}}>HEALTH UPDATE</button>  
        <button className={styless['Btn-Parent']} onClick={()=>{CurrentpageFn(View_mode)}}>HEALTH STATS</button> 

        {currentStatePage === View_mode && <ViewHealthRecords/>}
        {currentStatePage === Edit_mode && <EditHealthRecords/>}
        {currentStatePage === Table_mode && <TableData/>}
        </div>
    )
}
export default ParentComponent;