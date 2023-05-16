
export type stateval = {value:number , name:string}
export type StateType ={
    id:number,
    name:string,
    BP:stateval
    HR:stateval
    SBP:stateval
    DBP:stateval
    BTemp:stateval
    SR:stateval
    SL:stateval

}

export type Actiontype = {

    payload:{value: number},
    type : string
}

export const Update_BP = "Update_BP"
export const Update_HR = "Update_HR"
export const Update_SBP = "Update_SBP"
export const Update_DBP = "Update_DBP"
export const Update_BTemp = "Update_BTemp"
export const Update_SR = "Update_SR"
export const Update_SL = "Update_SL"

export const View_mode = "View"
export const Edit_mode = "Edit"
export const Table_mode = "Table"
export type VIEW_EDIT = 'View' | 'Edit' | 'Table'