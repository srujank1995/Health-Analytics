import { useContext } from "react";
import ContextHealthMain from "../Context-Structure/ContextHealth-Main";
import styless from "./TableStruct.module.scss";

const TableData = () => {
  const TableContext = useContext(ContextHealthMain);
  return (
    <div>
      <table className={styless["Table-Main"]}>
        <thead>
          <tr>
            <th>SR NO.</th>
            <th>Name</th>
            <th>Username</th>
            <th>Blood Pressure(mmHg)</th>
            <th>Heart Rate</th>
            <th>Sistolic Blood Pressure</th>
            <th>Distolic Blood Pressure</th>
            <th>Body Temperature</th>
            <th>Sugar level</th>
            <th>Stress level</th>
            <th>EDIT</th>
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
            <td>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-edit-943-528034.png?f=avif&w=256 width=50 height=50"
                alt="No Img"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TableData;
