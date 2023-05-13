import { useContext } from "react";
import styless from "./TableStruct.module.scss";
import ContextHealthMain from "../../Context-Structure/ContextHealth-Main";
import { Edit_mode, StateType, View_mode } from "../../Context-Structure/StateTypeMain";


const TableData = () => {
  const { UserVal ,CurrentpageFn,EditDataFn  } = useContext(ContextHealthMain);

  const EditFn = (userData: StateType) => {
    console.table(userData);
    CurrentpageFn(Edit_mode);
    EditDataFn(userData);
  };

  const ViewFn = (userData: StateType) => {
    console.table(userData);
    CurrentpageFn(View_mode)
  };

  const TableMap = UserVal.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.BP.value}</td>
        <td>{user.HR.value}</td>
        <td>{user.SBP.value}</td>
        <td>{user.DBP.value}</td>
        <td>{user.BTemp.value}</td>
        <td>{user.SR.value}</td>
        <td>{user.SL.value}</td>
        <td>{user.HR.value}</td>

        <th>
          <button onClick={() => EditFn(user)}>Edit</button>
        </th>
        <th>
          <button onClick={() => ViewFn(user)}>View</button>
        </th>
      </tr>
    );
  });

  return (
    <div>
      <table className={styless["Table-Main"]}>
        <thead>
          <tr>
            <th>SR NO.</th>
            <th>Name</th>
            <th>Username</th>
            <th>Blood Pressure</th>
            <th>Heart Rate</th>
            <th>Sistolic Blood Pressure</th>
            <th>Distolic Blood Pressure</th>
            <th>Body Temperature</th>
            <th>Sugar level</th>
            <th>Stress level</th>
            <th>Edit</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>{TableMap}</tbody>
      </table>
    </div>
  );
};
export default TableData;
function CurrentpageFn(Edit: any) {
  throw new Error("Function not implemented.");
}

function EditDataFn(userData: StateType) {
  throw new Error("Function not implemented.");
}

