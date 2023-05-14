import { useContext, useRef } from "react";
import {
  StateType,
  Update_BP,
  Update_BTemp,
  Update_DBP,
  Update_HR,
  Update_SBP,
  Update_SL,
  Update_SR,
} from "../../Context-Structure/StateTypeMain";
import ContextHealthMain from "../../Context-Structure/ContextHealth-Main";

const EditHealthRecords = () => {
  const ModalRef: any = useRef();
  const { editUserData, ModalFun, setInputData, initialValue } =useContext(ContextHealthMain);
  return (
    <div>
      <ul>
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
      </ul>
      <label>ID:-</label>
      <br></br>
      <input type="number" value={editUserData.id} />
      <br></br>
      <input type="text" value={editUserData.name} />
      <br></br>
      <input
        type="number"
        value={initialValue}
        onChange={(e) => {
          setInputData(parseInt(e.target.value));
        }}
      />
      <br></br>
      <select id="health" ref={ModalRef}>
        <option value={Update_BP}>{editUserData.BP.name}</option>
        <option value={Update_HR}>{editUserData.HR.name}</option>
        <option value={Update_SBP}>{editUserData.SBP.name}</option>
        <option value={Update_DBP}>{editUserData.DBP.name}</option>
        <option value={Update_BTemp}>{editUserData.BTemp.name}</option>
        <option value={Update_SR}>{editUserData.SR.name}</option>
        <option value={Update_SL}>{editUserData.SL.name}</option>
      </select>
      <br></br>
      <button type="button" onClick={() => ModalFun(ModalRef.current.value)}>
        Submit Details
      </button>
    </div>
  );
};

export default EditHealthRecords;
