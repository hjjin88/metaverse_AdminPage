import { Route, Routes } from "react-router-dom";
import './styles/component.scss';
import MainPage from "./pages/MainPage";
import MyRoom from "./pages/MyRoom";
import CounselingwaitingRoom from "./pages/CounselingwaitingRoom";
import SpaceSet from "./pages/SpaceSet";
import MainPage02 from "./pages/MainPage02";
import Tb_MainPage from "./pages/Theborn/Tb_MainPage";
import Pop0509_MainPage from "./pages/Pop0509/Pop0509_MainPage";

import AFMMicroscopyPractice from "./pages/AFMMicroscopyPracticePage/AFMMicroscopyPractice";
import SchoolPoint from "./pages/SchoolPointPage/SchoolPoint";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/MyRoom" element={<MyRoom />} />
      <Route path="/CounselingwaitingRoom" element={<CounselingwaitingRoom />} />
      <Route path="/SpaceSet" element={<SpaceSet />} />
      <Route path="/MainPage02" element={<MainPage02 />} />
      {/* 더본 코리아*/}
      <Route path="/Tb" element={<Tb_MainPage/>} />
      {/* 0509 추가 팝업 */}
      <Route path="/0509" element={<Pop0509_MainPage/>} />
      {/* 0426 추가 팝업 파일 */}
      <Route path="/AFMMicroscopyPractice" element={<AFMMicroscopyPractice/>} />      
      <Route path="/SchoolPoint" element={<SchoolPoint/>} />
      {/* 관리자 */}
      <Route path="/AdminPage" element={<AdminPage/>} />
      {/* ETC */} 
      <Route path="/" element={<MainPage />} />

    </Routes>
  );
}

export default App;