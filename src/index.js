import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Adding Request Interceptor
let requestInterceptor = axios.interceptors.request.use(
  (requestConfig) => {
    console.log(requestConfig);
    return requestConfig;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// Adding Response Interceptor
let responseInterceptor = axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// Removing Interceptors
// axios.interceptors.request.eject(requestInterceptor);
// axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
