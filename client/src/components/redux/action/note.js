import { server } from "../reducer/userReducer";

import axios from "axios";



export const CreateProduct =(formData) =>async (dispatch) => {
    try {
      dispatch({ type: "userproductRequest" });

      const { data } = await axios.post(`${server}/add_product`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      dispatch({ type: "userproductSuccess", payload: data });
    } catch (err) {
      dispatch({ type: "userproductFail", payload: err.response.data.message });
    }
  };


  
export const GetAllProduct =() =>async (dispatch) => {
  try {
    dispatch({ type: "allproductRequest" });

    const { data } = await axios.get(`${server}/allproduct`, {
      headers: {
        "Content-Type":"application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "allproductSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "allproductFail", payload: err.response.data.message });
  }
};

export const ProductbyCategory =(category) =>async (dispatch) => {
  try {
    dispatch({ type: "byCategoryRequest" });

    const { data } = await axios.get(`${server}/category/${category}`, {
      headers: {
        "Content-Type":"application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "byCategorySuccess", payload: data });
  } catch (err) {
    dispatch({ type: "byCategoryFail", payload: err.response.data.message });
  }
};
































































































export const getallTask = () => async (dispatch) => {
  try {
    dispatch({ type: "getnoteRequest" });

    const { data } = await axios.get(`${server}/user/alltask`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "getnoteSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "getnoteFail", payload: err.response.data.message });
  }
};

export const updateNote =
  (updatetitle, updatedescription, note_id) => async (dispatch) => {
    try {
      dispatch({ type: "updatenoteRequest" });

      const { data } = await axios.put(
        `${server}/${note_id}`,
        {
          updatetitle,
          updatedescription,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({ type: "updatenoteSuccess", payload: data.message });
    } catch (err) {
      dispatch({ type: "updatenoteFail", payload: err.response.data.message });
    }
  };

export const deleteNote = (note_id) => async (dispatch) => {
  try {
    dispatch({ type: "deletenoteRequest" });

    const { data } = await axios.delete(`${server}/${note_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "deletenoteSuccess", payload: data.message });
  } catch (err) {
    dispatch({ type: "deletenoteFail", payload: err.response.data.message });
  }
};

export const getdataforGraph = async (dispatch) => {
  /* eslint-disable */
  const { data } = await getallTask();
  /* eslint-enable */
};

export const getFolderData = (folder) => async (dispatch) => {
  try {
    dispatch({ type: "folderdataRequest" });

    const { data } = await axios.get(`${server}/getfolder?folder=${folder}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "folderdataSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "folderdataFail", payload: err.response.data.message });
  }
};

export const getFolderName = () => async (dispatch) => {
  try {
    dispatch({ type: "foldernameRequest" });

    const { data } = await axios.get(`${server}/foldername`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "foldernameSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "foldernameFail", payload: err.response.data.message });
  }
};

export const ChangeColor = (color, note_id) => async (dispatch) => {
  try {
    dispatch({ type: "changecolorRequest" });

    const { data } = await axios.put(
      `${server}/colorchange/${note_id}`,
      {
        color,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "changecolorSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "changecolorFail", payload: err.response.data.message });
  }
};

export const getAllPaginatedTasks = (pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: "getAllTaskRequest" });
    const { data } = await axios.get(
      `${server}/alltask/pagination?pageNumber=${pageNumber}`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "getAllTaskSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllTaskFail",
      payload: error.response.data.message,
    });
  }
};

export const UpdateDueDate = (id, dueDate) => async (dispatch) => {
  try {
    dispatch({ type: "updateduDateRequest" });
    const { data } = await axios.put(
      `${server}/task/updateduedate/${id}`,
      {
        dueDate,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "updateduDateSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "updateduDateFail",
      payload: error.response.data.message,
    });
  }
};

export const SortByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: "sortCategoryRequest" });
    const { data } = await axios.get(
      `${server}/sort/category/?category=${category}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "sortCategorySuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "sortCategoryFail",
      payload: error.response.data.message,
    });
  }
};

export const UpdateTaskStatus = (TaskId) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateTaskStatusRequest" });
    const { data } = await axios.post(
      `${server}/updatetaskstatus`,
      {
        TaskId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "UpdateTaskStatusSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "UpdateTaskStatusFail",
      payload: error.response.data.message,
    });
  }
};
