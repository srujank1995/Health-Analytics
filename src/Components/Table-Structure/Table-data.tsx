import { useContext } from "react";
import ContextHealthMain from "../../WareHouse/Context-Structure/ContextHealth-Main";
import styless from "./TableStruct.module.scss";
import { StateType } from "../../WareHouse/StateTypeMain/StateTypeMain";

const TableData = () => {
  const {users} = useContext(ContextHealthMain);

  const TableMap = users.map(user =>{
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.BP.name}</td>
            <td>{user.HR.name}</td>
            <td>{user.SBP.name}</td>
            <td>{user.DBP.name}</td>
            <td>{user.BTemp.name}</td>
            <td>{user.SR.name}</td>
            <td>{user.SL.name}</td>
            <td>{user.HR.name}</td>
          </tr>
  })

  const OnEditFn = (UserData:StateType) =>{
    console.table(UserData)

  }
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
            <th><button onClick={()=>OnEditFn(user)}>EDIT</button></th>
            <th>VIEW</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>XYZ</td>
            <td>ABC</td>
            <td>120/80</td>
            <td>80</td>
            <td>78</td>
            <td>98</td>
            <td>98</td>
            <td>98</td>
            <td>98</td>
            <th><button>EDIT</button></th>
            <th><button>VIEW</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TableData;
