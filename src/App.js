import { Route, Routes } from "react-router-dom";
import './styles/component.scss';

import WrapperPc from "./pages/pc/WrapperPc";
import WrapperMobile from "./pages/mobile/WrapperMobile";

import MainHomePc from "./pages/pc/MainHomePc";
import MainJoinPc from "./pages/pc/Main/MainJoinPc";
import MainAlliancePc from "./pages/pc/Main/MainAlliancePc";

import SchoolPc from "./pages/pc/School/SchoolPc";
import SchoolJoinPc from "./pages/pc/School/SchoolJoinPc";
import SchoolAlliancePc from "./pages/pc/School/SchoolAlliancePc";
import SchoolQnaPc from "./pages/pc/School/SchoolQnaPc";

import CampusPc from "./pages/pc/Campus/CampusPc";
import CampusJoinPc from "./pages/pc/Campus/CampusJoinPc";
import CampusAlliancePc from "./pages/pc/Campus/CampusAlliancePc";
import CampusQnaPc from "./pages/pc/Campus/CampusQnaPc";

import MainPop from "./pages/pc/Popup/MainPop";
import CampusPop from "./pages/pc/Popup/CampusPop";
import SchoolPop from "./pages/pc/Popup/SchoolPop";

import MainHomeMo from "./pages/mobile/MainHomeMo";
import MainJoinMo from "./pages/mobile/Main/MainJoinMo";
import MainAllianceMo from "./pages/mobile/Main/MainAllianceMo";

import SchoolMo from "./pages/mobile/School/SchoolMo";
import SchoolJoinMo from "./pages/mobile/School/SchoolJoinMo";
import SchoolAllianceMo from "./pages/mobile/School/SchoolAllianceMo";
import SchoolQnaMo from "./pages/mobile/School/SchoolQnaMo";

import CampusMo from "./pages/mobile/Campus/CampusMo";
import CampusJoinMo from "./pages/mobile/Campus/CampusJoinMo";
import CampusAllianceMo from "./pages/mobile/Campus/CampusAllianceMo";
import CampusQnaMo from "./pages/mobile/Campus/CampusQnaMo";

import MainPopMo from "./pages/mobile/Popup/MainPopMo";
import CampusPopMo from "./pages/mobile/Popup/CampusPopMo";
import SchoolPopMo from "./pages/mobile/Popup/SchoolPopMo";

function App() {
  return (
    <Routes>
      {/* PC */}
      <Route path="/" element={<WrapperPc><MainHomePc /></WrapperPc>} />
      <Route path="/MainJoinPc" element={<WrapperPc><MainJoinPc /></WrapperPc>} />
      <Route path="/MainAlliancePc" element={<WrapperPc><MainAlliancePc /></WrapperPc>} />

      <Route path="/School" element={<WrapperPc><SchoolPc /></WrapperPc>} />
      <Route path="/SchoolJoinPc" element={<WrapperPc><SchoolJoinPc /></WrapperPc>} />
      <Route path="/SchoolAlliancePc" element={<WrapperPc><SchoolAlliancePc /></WrapperPc>} />
      <Route path="/SchoolQnaPc" element={<WrapperPc><SchoolQnaPc /></WrapperPc>} />

      <Route path="/Campus" element={<WrapperPc><CampusPc /></WrapperPc>} />
      <Route path="/CampusJoinPc" element={<WrapperPc><CampusJoinPc /></WrapperPc>} />
      <Route path="/CampusAlliancePc" element={<WrapperPc><CampusAlliancePc /></WrapperPc>} />
      <Route path="/CampusQnaPc" element={<WrapperPc><CampusQnaPc /></WrapperPc>} />

      {/* Pc Popup */}
      <Route path="/MainPop" element={<WrapperPc><MainPop /></WrapperPc>} />
      <Route path="/CampusPop" element={<WrapperPc><CampusPop /></WrapperPc>} />
      <Route path="/SchoolPop" element={<WrapperPc><SchoolPop /></WrapperPc>} />

      {/* MOBILE */}
      <Route path="/MainHomeMo" element={<WrapperMobile><MainHomeMo /></WrapperMobile>} />
      <Route path="/MainJoinMo" element={<WrapperMobile><MainJoinMo /></WrapperMobile>} />
      <Route path="/MainAllianceMo" element={<WrapperMobile><MainAllianceMo /></WrapperMobile>} />
      
      <Route path="/SchoolMo" element={<WrapperMobile><SchoolMo /></WrapperMobile>} />
      <Route path="/SchoolJoinMo" element={<WrapperMobile><SchoolJoinMo /></WrapperMobile>} />
      <Route path="/SchoolAllianceMo" element={<WrapperMobile><SchoolAllianceMo /></WrapperMobile>} />
      <Route path="/SchoolQnaMo" element={<WrapperMobile><SchoolQnaMo /></WrapperMobile>} />
     
      <Route path="/CampusMo" element={<WrapperMobile><CampusMo /></WrapperMobile>} />
      <Route path="/CampusJoinMo" element={<WrapperMobile><CampusJoinMo /></WrapperMobile>} />
      <Route path="/CampusAllianceMo" element={<WrapperMobile><CampusAllianceMo /></WrapperMobile>} />
      <Route path="/CampusQnaMo" element={<WrapperMobile><CampusQnaMo /></WrapperMobile>} />

      {/* Mobile Popup */}
      <Route path="/MainPopMo" element={<WrapperMobile><MainPopMo /></WrapperMobile>} />
      <Route path="/CampusPopMo" element={<WrapperMobile><CampusPopMo /></WrapperMobile>} />
      <Route path="/SchoolPopMo" element={<WrapperMobile><SchoolPopMo /></WrapperMobile>} />

      {/* ETC */}
      <Route path="*" element={<WrapperPc><MainHomePc /></WrapperPc>} />
    </Routes>
  );
}

export default App;