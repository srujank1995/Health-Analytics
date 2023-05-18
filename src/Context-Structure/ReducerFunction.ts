import { StateType, stateval } from "./StateTypeMain";

export const initialstate: StateType[] = [
  {
    id: 0,
    name: "",
    BP: { value: 0, name: "Blood Pressure" },
    HR: { value: 0, name: "Heart Rate" },
    SBP: { value: 0, name: "Sistolic Blood Pressure" },
    DBP: { value: 0, name: "Distolic Blood Pressure" },
    BTemp: { value: 0, name: "Body Temperature" },
    SR: { value: 0, name: "Sugar level" },
    SL: { value: 0, name: "Stress level" },
  },
];

export const InitialStateValue: StateType[] = [
  {
    id: 1,
    name: "Test 1",
    BP: { value: 12, name: "Blood Pressure" },
    HR: { value: 123, name: "Heart Rate" },
    SBP: { value: 34, name: "Sistolic Blood Pressure" },
    DBP: { value: 45, name: "Distolic Blood Pressure" },
    BTemp: { value: 56, name: "Body Temperature" },
    SR: { value: 20, name: "Sugar level" },
    SL: { value: 30, name: "Stress level" },
  },
  {
    id: 2,
    name: "Test 2",
    BP: { value: 45, name: "Blood Pressure" },
    HR: { value: 20, name: "Heart Rate" },
    SBP: { value: 30, name: "Sistolic Blood Pressure" },
    DBP: { value: 40, name: "Distolic Blood Pressure" },
    BTemp: { value: 50, name: "Body Temperature" },
    SR: { value: 70, name: "Sugar level" },
    SL: { value: 80, name: "Stress level" },
  },
  {
    id: 3,
    name: "Test 3",
    BP: { value: 10, name: "Blood Pressure" },
    HR: { value: 20, name: "Heart Rate" },
    SBP: { value: 30, name: "Sistolic Blood Pressure" },
    DBP: { value: 40, name: "Distolic Blood Pressure" },
    BTemp: { value: 50, name: "Body Temperature" },
    SR: { value: 60, name: "Sugar level" },
    SL: { value: 70, name: "Stress level" },
  },
];

const ReducerFunction = (NewState = initialstate, action: any) => {
  switch (action.type) {
    case "UPDATE_USER_HEALTH_DATA":
      console.log("state initial", NewState, action);
      const userID: number = NewState.findIndex((users:StateType) => users.id === action.userData.id)
      NewState[userID] = action.userData;
      return [
        ...NewState,
      ];
      
      case "SET_USER_DATA":
        return{
          ...action.payload.UserVal
        }

    default:
      break;
  }
};
export default ReducerFunction;
