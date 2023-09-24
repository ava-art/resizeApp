import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import { store } from "./store";

import '../src/style.css';

import Header from '../src/components/header/header';
import ErrorBoundry from './components/error-boundry/error-boundry'
import { BlogServiceProvider } from "./components/blog-service-context/blog-service-context";
import CarsStoreServices from "./services/cars-store-services";

const carsService = new CarsStoreServices()



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BlogServiceProvider value={carsService}>
        <Router>
          
        <Header />
        <App />
          
        </Router>
      </BlogServiceProvider>
    </ErrorBoundry>
  </Provider>
)