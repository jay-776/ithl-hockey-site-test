import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/layout/index";
import Home from "./pages/home";
import Core from "./pages/core";
import Elite from "./pages/elite";
import Rammer from "./pages/rammer";
import Sweat from "./pages/sweat";
import Europa from "./pages/europa";
import { NavList } from "./utils/Navlist";
import Login from "./pages/login";
import Register from "./pages/register";
import Spinner from "./components/spinner";

const componentMap = {
  europa: Europa,
  core: Core,
  rammer: Rammer,
  elite: Elite,
  sweat: Sweat,
};

function App() {
  const { spinStat } = useSelector((state) => state.auth); // Assuming spinStat is a boolean indicating loading state

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/bg.jpg')] m-0">
      <BrowserRouter>
        {spinStat ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <div className="flex">
                    <Home />
                  </div>
                }
              />
              {NavList.map((item, index) => {
                const Component = componentMap[item];
                return (
                  <Route
                    path={`${item}`}
                    element={
                      <div className="">
                        <Component />
                      </div>
                    }
                    key={index}
                  />
                );
              })}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
