import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  SET_USER,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
  LOGOUT_USER,
  SET_LOADING,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_ERROR,
  FETCH_SINGLE_JOB_SUCCESS,
  FETCH_SINGLE_JOB_ERROR,
  EDIT_JOB_ERROR,
  EDIT_JOB_SUCCESS,
} from "./action";

const reducer = (state, action) => {
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      user: action.payload,
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      showAlert: true,
    };
  }
  if (action.type === SET_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: null,
    };
  }
  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: [...state.jobs, action.payload],
    };
  }
  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
    };
  }
  if (action.type === SET_USER) {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === FETCH_JOBS_SUCCESS) {
    return {
      ...state,
      jobs: action.payload,
    };
  }
  if (action.type === FETCH_JOBS_ERROR) {
    return {
      ...state,
      showAlert: true,
      jobs: action.payload,
    };
  }
  if (action.type === DELETE_JOB_SUCCESS) {
    return {
      ...state,
      isDeleted: true,
    };
  }
  if (action.type === DELETE_JOB_ERROR) {
    return {
      ...state,
      showAlert: true,
      isLoading: false,
    };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      editComplete: true,
      editItem: action.payload,
    };
  }
  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      editComplete: true,
      showAlert: true,
    };
  }
  if (action.type === FETCH_SINGLE_JOB_SUCCESS) {
    return {
      ...state,
      editItem: action.payload,
      // isLoading:true,
    };
  }
  if (action.type === FETCH_SINGLE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      editComplete: false,
      editItem: "",
      singleJobError: true,
    };
  }
};

export default reducer;
