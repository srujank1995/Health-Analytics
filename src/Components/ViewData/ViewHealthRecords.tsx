import { useContext, useEffect, useState } from "react"
import ContextHealthMain from "../../Context-Structure/ContextHealth-Main"

const  ViewHealthRecords = ()=> {

  const { editUserData } = useContext(ContextHealthMain)

  const [healthData, setHealthData] = useState('');

  const VitalsCheck = () =>{
    if (editUserData.BP.value <120 && editUserData.BP.value>80){
      setHealthData("NORMAL")
    }else if ((editUserData.BP.value >120 && editUserData.BP.value < 129) && editUserData.BP.value>80){
      setHealthData("ELEVATED")
    }else if ((editUserData.BP.value >130 && editUserData.BP.value < 139) && (editUserData.BP.value < 80 && editUserData.BP.value>89)){
      setHealthData("HIGH BP")
    }
  } 
  useEffect( () =>{
    VitalsCheck()
  },[editUserData])
  return (
    <div>
      <h3>Health Stats</h3>
      <h4> NAme : {editUserData.name}</h4>
      <h4>BP STATUS : {editUserData.BP.value} : {healthData} </h4>
    </div>
  )
}

export default ViewHealthRecords