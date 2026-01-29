import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Store from "./utilities/Store";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Watch from "./components/Watch";
import WatchCardContainer from "./components/WatchCardContainer";
import Sidebar from "./components/Sidebar";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/results",
        element: <WatchCardContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <div className="px-3 py-2">
        <Header />
        <div className="w-full flex">
          <Sidebar />
          <Outlet />
        </div>
        {/* <Outlet /> */}
      </div>
    </Provider>
  );
}

export default App;
