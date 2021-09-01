import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById("root"));
