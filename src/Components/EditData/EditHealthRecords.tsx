import { useContext } from "react";
import {
  StateType,
  Table_mode,
  Update_BP,
  Update_BTemp,
  Update_DBP,
  Update_HR,
  Update_SBP,
  Update_SL,
  Update_SR,
} from "../../Context-Structure/StateTypeMain";
import ContextHealthMain from "../../Context-Structure/ContextHealth-Main";
import styless from "./EditHealthRecords.module.scss";

const EditHealthRecords = () => {
  const { editUserData, CurrentpageFn ,EditDataFn } = useContext(ContextHealthMain);
  
  const OnChangeData = (e:any) => {
    console.log("e.name", e.target.value)
    const NewDataUser = {...editUserData, name:e.target.value}
    EditDataFn(NewDataUser)
  };
  return (
    <div className={styless["Main-Container"]}>
      <h2>HEALTH UPDATE</h2>
      <br></br>
      <ol className={styless["label-Main-ol"]}>
        <li>
          {editUserData.BP.name} : {editUserData.BP.value}
        </li>
        <li>
          {editUserData.HR.name} : {editUserData.HR.value}
        </li>
        <li>
          {editUserData.SBP.name} : {editUserData.SBP.value}
        </li>
        <li>
          {editUserData.DBP.name} : {editUserData.DBP.value}
        </li>
        <li>
          {editUserData.BTemp.name} : {editUserData.BTemp.value}
        </li>
        <li>
          {editUserData.SR.name} : {editUserData.SR.value}
        </li>
        <li>
          {editUserData.SL.name} : {editUserData.SL.value}
        </li>
      </ol>
      <label className={styless["label-Main-ol"]}>ID:-{editUserData.id}</label>
      <br></br>
      <br></br>
      <input
        type="text"
        className={styless["label-Main"]}
        onChange={OnChangeData}
        placeholder='Enter Name'
      />
      <br></br>

      <input
        className={styless["Input-Main"]}
        onChange={OnChangeData}
        type="number"
        placeholder="Enter Value"
      />
      <br></br>

      <select id="health" className={styless["Select-Main"]}>
        <option value={Update_BP}>{editUserData.BP.name}</option>
        <option value={Update_HR}>{editUserData.HR.name}</option>
        <option value={Update_SBP}>{editUserData.SBP.name}</option>
        <option value={Update_DBP}>{editUserData.DBP.name}</option>
        <option value={Update_BTemp}>{editUserData.BTemp.name}</option>
        <option value={Update_SR}>{editUserData.SR.name}</option>
        <option value={Update_SL}>{editUserData.SL.name}</option>
      </select>
      <br></br>
      <button type="button" onClick={OnChangeData} className={styless["Btn-Main"]}>
        Submit Details
      </button>
    </div>
  );
};

export default EditHealthRecords;
