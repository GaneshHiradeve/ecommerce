import { server } from "../reducer/userReducer";

import axios from "axios";


export const profileUpdate=(name)=>async(dispatch)=>{
     
       try{
                dispatch({type:"userupdateRequest"});

                const {data}=await axios.put(`${server}/updateprofile`,{
                    name
                },{
                    headers:{
                           "Content-Type":"application/json",
                    },
                    withCredentials:true,
                })
             dispatch({type:"userupdateSuccess",payload:data.message})
       }catch(err){
        dispatch({type:'userupdateFail',payload:err.response.data.message})

       }
}


export const changePassword=(newpassword,confirmpassword,id)=>async(dispatch)=>{
     
    try{
             dispatch({type:"changepasswordRequest"});

             const {data}=await axios.put(`${server}/password/${id}`,{
                newpassword,confirmpassword
             },{
                 headers:{
                        "Content-Type":"application/json",
                 },
                 withCredentials:true,
             })
          dispatch({type:"changepasswordSuccess",payload:data.message})
    }catch(err){
     dispatch({type:'changepasswordFail',payload:err.response.data.message})

    }
}