import { server } from '../reducer/userReducer.js';

import axios from 'axios';

export const userLogin = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'userloginRequest' });

    const { data } = await axios.post(
      `${server}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'userloginSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'userloginFail', payload: err.response.data.message});
  }
};

export const userRegister =
  (name, email, password, confirmpassword) => async dispatch => {
    try {
      dispatch({ type: 'userRegisterRequest' });


      const { data } = await axios.post(
        `${server}/register`,
        {
          name,
          email,
          password,
          confirmpassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      dispatch({ type: 'userRegisterSuccess', payload: data });
    } catch (err) {
      dispatch({
        type: 'userRegisterFail',
        payload: err.response.data.message
      });
    }
  };

export const userProfile = () => async dispatch => {
  try {
    dispatch({ type: 'getuserprofile' });

    const { data } = await axios.get(`${server}/profile`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    dispatch({ type: 'getuserprofileSuccess', payload: data.user });
  } catch (err) {
    dispatch({
      type: 'getuserprofileFail',
      payload: err.response.data.message,
    });
  }
};

export const userLogout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutuser' });

    const { data } = await axios.get(`${server}/logout`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'logoutuserSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'logoutuserFail', payload: err.response.data.message });
  }
};

export const getallUsers = () => async dispatch => {
  try {
    dispatch({ type: 'getallusersRequest' });

    const { data } = await axios.get(`${server}/getall`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'getallusersSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'getallusersFail', payload: err.response.data.message });
  }
};

export const Deleteuser = id => async dispatch => {
  try {
    dispatch({ type: 'deleteuserRequest' });

    const { data } = await axios.delete(`${server}/deleteuser/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'deleteuserSuccess', payload: data.message });
  } catch (err) {
    dispatch({ type: 'deleteuserFail', payload: err.response.data.message });
  }
};

export const ForgotPassword = email => async dispatch => {
  try {
    dispatch({ type: 'userforgotpassword' });

    const { data } = await axios.post(
      `${server}/forgotpassword`,
      {
        email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
      
    );
    dispatch({ type: 'userforgotpasswordSuccess', payload: data.message });
  } catch (err) {
    dispatch({
      type: 'userforgotpasswordFail',
      payload: err.response.data.message,
    });
  }
};


export const ResetPassword =(token,newpassword,confirmpassword) => async dispatch => {
  try {
    dispatch({ type: 'userresetpassword' });

    const { data } = await axios.put(
      `${server}/resetpassword/${token}`,
      {
        newpassword,confirmpassword
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
      
    );
    dispatch({ type: 'userresetpasswordSuccess', payload: data.message });
  } catch (err) {
    dispatch({
      type: 'userresetpasswordFail',
      payload: err.response.data.message,
    });
  }
};


export const getAllUserProfiles = pageNumber => async dispatch => {
  try {
    dispatch({ type: 'getAllUserProfilesRequest' });

    const { data } = await axios.get(
      `${server}/pagination?pageNumber=${pageNumber}`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'getAllUserProfilesSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'getAllUserProfilesFail',
      payload: error.response.data.message,
    });
  }
};


export const changePassword=(newpassword)=>async(dispatch)=>{
     
  try{
           dispatch({type:"changepasswordRequest"});

           const {data}=await axios.put(`${server}/changepassword`,{
              newpassword
           },{
               headers:{
                      "Content-Type":"application/json",
               },
               withCredentials:true,
           })
        dispatch({type:"changepasswordSuccess",payload:data})
  }catch(err){
   dispatch({type:'changepasswordFail',payload:err.response.data.message})

  }
}

export const UpdateProfilePicture=(formData)=>async(dispatch)=>{
     
  

  try{
           dispatch({type:"UpdateProfilePictureRequest"});

           const {data}=await axios.put(`${server}/updateprofile`,
            formData
           ,{
               headers:{
                "Content-Type":"application/json",
              },
               withCredentials:true,
           })
        dispatch({type:"UpdateProfilePictureSuccess",payload:data.message})
  }catch(err){
   dispatch({type:'UpdateProfilePictureFail',payload:err.response.data.message})

  }
}