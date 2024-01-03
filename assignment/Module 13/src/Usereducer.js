import { createSlice } from "@reduxjs/toolkit";
import Userdata from "./Data";

const Usereducer = createSlice({
    name: "Umar" ,
    initialState: Userdata,
    reducers: {

        adduser : (state,action)=>{
            state.push(action.payload)
        },

        edituser : (state,action)=>{

            const {id,name,email}= action.payload

            const userid = state.find (xyz=>xyz.id == id )

            if(userid)
            {
                userid.name = name
                userid.email = email
            }
        },

        deleteuser : (state,action)=>{
            const {id} = action.payload

            const userid = state.find(xyz=>xyz.id == id)

            if(userid)
            {
                return state.filter(xyz=>xyz.id !== id )
            }
        }
    }
}
)

export const {adduser,edituser,deleteuser} = Usereducer.actions
export default Usereducer.reducer