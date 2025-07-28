import Main from "./components/Main";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Orders from "./components/Orders";
import MiddleHeadBar from "./components/Middleheaderbar";
import { useState } from "react";

function App() {
  const [isOpenOrdersPage, setIsOpenOrdersPage] = useState(false);
  return (
    <div className="app">
      <SideBar setIsOpenOrdersPage={setIsOpenOrdersPage} />
      <div className="main-page-container">
        <MiddleHeadBar />
        <div>
        {!isOpenOrdersPage ? <Main /> : <Orders />}
        </div>
      </div>
      {!isOpenOrdersPage && <RightBar />}
    </div>
  );
}

export default App;
