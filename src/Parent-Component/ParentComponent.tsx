import { useContext } from "react";
import EditHealthRecords from "../Components/EditData/EditHealthRecords";
import ViewHealthRecords from "../Components/ViewData/ViewHealthRecords";
import ContextHealthMain from "../Context-Structure/ContextHealth-Main";
import { View_mode, Edit_mode, Table_mode } from "../Context-Structure/StateTypeMain";
import TableData from "../Components/Table-Structure/Table-data";

const ParentComponent = () =>{
    const HealthContext = useContext(ContextHealthMain)
    const {currentStatePage} = HealthContext;
    return (
        <div>
        {currentStatePage === View_mode && <ViewHealthRecords/>}
        {currentStatePage === Edit_mode && <EditHealthRecords/>}
        {currentStatePage === Table_mode && <TableData/>}
        </div>
    )
}
export default ParentComponent;