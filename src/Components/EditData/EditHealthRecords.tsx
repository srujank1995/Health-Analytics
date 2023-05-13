import { useContext } from 'react'
import { StateType, Update_BP } from '../../Context-Structure/StateTypeMain'
import ContextHealthMain from '../../Context-Structure/ContextHealth-Main'

const EditHealthRecords = () => {
  const {editUserData} = useContext(ContextHealthMain)
  return (
    <div>

      <input type='text' value={editUserData.id} />
      <select id='health'>
        <option value={Update_BP}>{editUserData.BP.name}</option>
      </select>
    </div>
  )
}

export default EditHealthRecords