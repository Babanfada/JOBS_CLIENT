import axios from "axios";
import "../../../axios";
import { NextPage } from "next";
import * as React from "react";
const dataContext = React.createContext({});
import { useRouter } from "next/router";
import reducer from "./reducer";
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
const AppContext = ({ children }) => {
  const router = useRouter();
  const [values, setvalues] = React.useState({
    name: "",
    email: "",
    password: "",
    isMember: false,
  });
  const [details, setdetails] = React.useState({
    company: "",
    position: "",
  });
  const [valuesdyn, setvaluesdyn] = React.useState({
    company: "",
    position: "",
    status: "",
  });
  const initialState = {
    user: null,
    isLoading: false,
    jobs: [],
    showAlert: false,
    editItem: null,
    singleJobError: false,
    editComplete: false,
    isDeleted: false,
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  const toggleMember = (e) => {
    e.preventDefault();
    setvalues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    e.preventDefault();
    // const name = e.target.name;
    // const value = e.target.value;
    setvalues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  const addJob = (e) => {
    e.preventDefault();
    setdetails({ ...details, [e.target.name]: e.target.value });
    console.log(details);
  };
  const memberDetails = [
    {
      name: "name",
      type: "name",
      value: values.name,
      handleChange: handleChange,
    },
    {
      name: "email",
      type: "email",
      value: values.email,
      handleChange: handleChange,
    },
    {
      name: "password",
      type: "password",
      value: values.password,
      handleChange: handleChange,
    },
  ];
  const createJob = [
    {
      name: "company",
      type: "text",
      value: details.company,
    },
    {
      name: "position",
      type: "text",
      value: details.position,
    },
  ];
  const register = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(`/auth/register`, { ...userInput });
      localStorage.setItem(
        "registeredUser",
        JSON.stringify({ name: data.name, email: data.email })
      );
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.name });
    } catch (err) {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };
  const login = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(`/auth/login`, { ...userInput });
      console.log("start");
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { name: data.name, email: data.email },
      });
      console.log(state.user);
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: data.token,
          name: data.name,
          email: data.email,
        })
      );
      router.push("/dashboard");
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT_USER });
    router.push("/");
  };
  const fetchJobs = async () => {
    try {
      const { data } = await axios.get(`jobs/all`);
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data.jobs });
    } catch (error) {
      dispatch({ type: FETCH_JOBS_ERROR });
      logout();
    }
  };
  const CREATEJOB = async (userinput) => {
    setLoading();
    try {
      const { data } = await axios.post(`/jobs`, { ...userinput });
      dispatch({ type: CREATE_JOB_SUCCESS, payload: data.job });
    } catch (error) {
      dispatch({ type: CREATE_JOB_ERROR });
    }
  };

  const deleteJob = async (id) => {
    try {
      const { data } = await axios.delete(`/jobs/${id}`);
      fetchJobs();
      dispatch({ type: DELETE_JOB_SUCCESS });
    } catch (error) {
      dispatch({ type: DELETE_JOB_ERROR });
    }
  };

  const editJob = async (id, userinput) => {
    setLoading();
    try {
      const { data } = await axios.patch(`/jobs/${id}`, { ...userinput });
      dispatch({ type: EDIT_JOB_SUCCESS, payload: data.job });
      router.push("/dashboard");
      console.log(data.job);
    } catch (error) {
      console.log(error);
      dispatch({ type: EDIT_JOB_ERROR });
    }
  };

  const fetchSingleJob = async (id) => {
    try {
      const { data } = await axios.get(`jobs/${id}`);
      dispatch({ type: FETCH_SINGLE_JOB_SUCCESS, payload: data.Job });
    } catch (error) {
      dispatch({ type: FETCH_SINGLE_JOB_ERROR });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (isMember) {
      login({ email, password });
    } else {
      register({ name, email, password });
    }
  };

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const newUser = JSON.parse(user);
      console.log(newUser.name);
      dispatch({ type: SET_USER, payload: newUser });
    }
  }, []);

  return (
    <div>
      <dataContext.Provider
        value={{
          ...state,
          values,
          setvalues,
          handleChange,
          memberDetails,
          toggleMember,
          onSubmit,
          logout,
          createJob,
          CREATEJOB,
          details,
          setdetails,
          addJob,
          fetchJobs,
          deleteJob,
          editJob,
          valuesdyn,
          setvaluesdyn,
          fetchSingleJob,
        }}
      >
        {children}
      </dataContext.Provider>
    </div>
  );
};

export const useGlobalContext = () => {
  return React.useContext(dataContext);
};

export default AppContext;
