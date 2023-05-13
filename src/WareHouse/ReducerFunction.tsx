
import { Actiontype, StateType } from "./Context-Structure/StateTypeMain";

export const initialstate: StateType = {
    id:0,
    name:'',
    BP: { value: 0, name: "Blood Pressure" },
    HR: { value: 0, name: "Heart Rate" },
    SBP: { value: 0, name: "Sistolic Blood Pressure" },
    DBP: { value: 0, name: "Distolic Blood Pressure" },
    BTemp: { value: 0, name: "Body Temperature" },
    SR: { value: 0, name: "Sugar level" },
    SL: { value: 0, name: "Stress level" },
  };
const ReducerFunction = (state=initialstate, action:any) => {

    switch (action.type) {
        case 'UPDATE_USER_HALTH_DATA':
            console.log("state initial", state, action)
            return {

                ...state
            }
            break;
    
        default:
            break;
    }
    return(

    )
}
export default ReducerFunction;