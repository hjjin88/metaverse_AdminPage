import { useState } from "react";
import MainHeaderPc from "../MainHeaderPc";
import LoginPopPc from "./LoginPopPc";
import Under14Pc  from "./Under14Pc";
import AccountPc  from "./AccountPc";
import AccountPc02  from "./AccountPc02";
import TermsServicePc01  from "./TermsServicePc01";
import TermsServicePc02  from "./TermsServicePc02";
import TermsServicePc03  from "./TermsServicePc03";
import TermsServicePc04  from "./TermsServicePc04";
import TermsServicePc05  from "./TermsServicePc05";
import GuardianPc from "./GuardianPc";
import SelectPhonePc from "./SelectPhonePc";
import AlarmPc01 from "./AlarmPc01";
import CertifyPc from "./CertifyPc";
import AlarmPc02 from "./AlarmPc02";
import AlarmPc03 from "./AlarmPc03";
import AlarmPc05 from "./AlarmPc05";
import AlarmPc06 from "./AlarmPc06";
import NicknamePc  from "./NicknamePc";
import EmailCheckPc  from "./EmailCheckPc";
import PwCheckPc  from "./PwCheckPc";
import LoginPc  from "./LoginPc";


const SchoolPop = () => {

  const [popLoginPopPcOpened, setPopLoginPopPcOpened] = useState(false);
  const toggleLoginPopPcPop = () => { setPopLoginPopPcOpened(!popLoginPopPcOpened); }

  const [popUnder14PcOpened, setPopUnder14PcOpened] = useState(false);
  const toggleUnder14PcPop = () => { setPopUnder14PcOpened(!popUnder14PcOpened); }

  const [popAccountPcOpened, setPopAccountPcOpened] = useState(false);
  const toggleAccountPcPop = () => { setPopAccountPcOpened(!popAccountPcOpened); }

  const [popAccountPc02Opened, setPopAccountPc02Opened] = useState(false);
  const toggleAccountPc02Pop = () => { setPopAccountPc02Opened(!popAccountPc02Opened); }

  const [popTermsServicePc01Opened, setPopTermsServicePc01Opened] = useState(false);
  const toggleTermsServicePc01Pop = () => { setPopTermsServicePc01Opened(!popTermsServicePc01Opened); }

  const [popTermsServicePc02Opened, setPopTermsServicePc02Opened] = useState(false);
  const toggleTermsServicePc02Pop = () => { setPopTermsServicePc02Opened(!popTermsServicePc02Opened); }

  const [popTermsServicePc03Opened, setPopTermsServicePc03Opened] = useState(false);
  const toggleTermsServicePc03Pop = () => { setPopTermsServicePc03Opened(!popTermsServicePc03Opened); }

  const [popTermsServicePc04Opened, setPopTermsServicePc04Opened] = useState(false);
  const toggleTermsServicePc04Pop = () => { setPopTermsServicePc04Opened(!popTermsServicePc04Opened); }

  const [popTermsServicePc05Opened, setPopTermsServicePc05Opened] = useState(false);
  const toggleTermsServicePc05Pop = () => { setPopTermsServicePc05Opened(!popTermsServicePc05Opened); }

  const [popGuardianPcOpened, setPopGuardianPcOpened] = useState(false);
  const toggleGuardianPcPop = () => { setPopGuardianPcOpened(!popGuardianPcOpened); }

  const [popSelectPhonePcOpened, setPopSelectPhonePcOpened] = useState(false);
  const toggleSelectPhonePcPop = () => { setPopSelectPhonePcOpened(!popSelectPhonePcOpened); }

  const [popAlarmPc01Opened, setPopAlarmPc01Opened] = useState(false);
  const toggleAlarmPc01Pop = () => { setPopAlarmPc01Opened(!popAlarmPc01Opened); }

  const [popCertifyPcOpened, setPopCertifyPcOpened] = useState(false);
  const toggleCertifyPcPop = () => { setPopCertifyPcOpened(!popCertifyPcOpened); }

  const [popAlarmPc02Opened, setPopAlarmPc02Opened] = useState(false);
  const toggleAlarmPc02Pop = () => { setPopAlarmPc02Opened(!popAlarmPc02Opened); }

  const [popAlarmPc03Opened, setPopAlarmPc03Opened] = useState(false);
  const toggleAlarmPc03Pop = () => { setPopAlarmPc03Opened(!popAlarmPc03Opened); }

  const [popAlarmPc05Opened, setPopAlarmPc05Opened] = useState(false);
  const toggleAlarmPc05Pop = () => { setPopAlarmPc05Opened(!popAlarmPc05Opened); }

  const [popAlarmPc06Opened, setPopAlarmPc06Opened] = useState(false);
  const toggleAlarmPc06Pop = () => { setPopAlarmPc06Opened(!popAlarmPc06Opened); }

  const [popNicknamePcOpened, setPopNicknamePcOpened] = useState(false);
  const toggleNicknamePcPop = () => { setPopNicknamePcOpened(!popNicknamePcOpened); }

  const [popEmailCheckPcOpened, setPopEmailCheckPcOpened] = useState(false);
  const toggleEmailCheckPcPop = () => { setPopEmailCheckPcOpened(!popEmailCheckPcOpened); }

  const [popPwCheckPcOpened, setPopPwCheckPcOpened] = useState(false);
  const togglePwCheckPcPop = () => { setPopPwCheckPcOpened(!popPwCheckPcOpened); }

  const [popLoginPcOpened, setPopLoginPcOpened] = useState(false);
  const toggleLoginPcPop = () => { setPopLoginPcOpened(!popLoginPcOpened); }

  return (
    <div className="wrapper school_wrap uverse_wrap" id="wrapper">
      
        <MainHeaderPc selectedGnbIndex={1} popVisible={false} />
        
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleLoginPopPcPop(); }}>환영합니다. 입장/로그인 창</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleUnder14PcPop(); }}>14세미만구분팝업</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAccountPcPop(); }}>계정연결</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAccountPc02Pop(); }}>로그인 // 계정연결</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleTermsServicePc01Pop(); }}>개인정보 처리방침 전문</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleTermsServicePc02Pop(); }}>(필수) 서비스 이용약관 동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleTermsServicePc03Pop(); }}>(필수) 개인정보 수집 및 이용 동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleTermsServicePc04Pop(); }}>(필수) 개인정보 처리 및 위탁, 제3자 제공동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleTermsServicePc05Pop(); }}>(선택) 마케팅 정보 수신 동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleGuardianPcPop(); }}>보호자(법정대리인) 동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleSelectPhonePcPop(); }}>통신사팝업</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmPc01Pop(); }}>계정연결_ 상세 / 팝업 알람 해당 기능을 사용하려면 인증이 필요합니다. 인증하시겠습니까?</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleCertifyPcPop(); }}>사용자 인증</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmPc02Pop(); }}>알람 입력하신 xxx가 정확한가요?</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmPc03Pop(); }}>알람 인증코드가 틀렸습니다. 다시 확인 후 입력 부탁드립니다.</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmPc05Pop(); }}>알람 // 오류창 // ‘구글로 시작하기’에서 소속 학교 이메일 주소 (@sookmyung.ac.kr)로 다시 인증 바랍니다.</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmPc06Pop(); }}>알람 // 오류창 // 필수정보는 모두 입력 바랍니다.</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleNicknamePcPop(); }}>닉네임 변경</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleEmailCheckPcPop(); }}>이메일로 시작하기</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePwCheckPcPop(); }}>비밀번호 재설정</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleLoginPcPop(); }}>로그인</button>
        </div>
        { popLoginPopPcOpened && ( <LoginPopPc togglePop={toggleLoginPopPcPop} /> )}
        { popUnder14PcOpened && ( <Under14Pc togglePop={toggleUnder14PcPop} /> )}
        { popAccountPcOpened && ( <AccountPc togglePop={toggleAccountPcPop} /> )}
        { popAccountPc02Opened && ( <AccountPc02 togglePop={toggleAccountPc02Pop} /> )}
        { popTermsServicePc01Opened && ( <TermsServicePc01 togglePop={toggleTermsServicePc01Pop} /> )}
        { popTermsServicePc02Opened && ( <TermsServicePc02 togglePop={toggleTermsServicePc02Pop} /> )}
        { popTermsServicePc03Opened && ( <TermsServicePc03 togglePop={toggleTermsServicePc03Pop} /> )}
        { popTermsServicePc04Opened && ( <TermsServicePc04 togglePop={toggleTermsServicePc04Pop} /> )}
        { popTermsServicePc05Opened && ( <TermsServicePc05 togglePop={toggleTermsServicePc05Pop} /> )}
        { popGuardianPcOpened && ( <GuardianPc togglePop={toggleGuardianPcPop} /> )}
        { popSelectPhonePcOpened && ( <SelectPhonePc togglePop={toggleSelectPhonePcPop} /> )}
        { popAlarmPc01Opened && ( <AlarmPc01 togglePop={toggleAlarmPc01Pop} /> )}
        { popCertifyPcOpened && ( <CertifyPc togglePop={toggleCertifyPcPop} /> )}
        { popAlarmPc02Opened && ( <AlarmPc02 togglePop={toggleAlarmPc02Pop} /> )}
        { popAlarmPc03Opened && ( <AlarmPc03 togglePop={toggleAlarmPc03Pop} /> )}
        { popAlarmPc05Opened && ( <AlarmPc05 togglePop={toggleAlarmPc05Pop} /> )}
        { popAlarmPc06Opened && ( <AlarmPc06 togglePop={toggleAlarmPc06Pop} /> )}
        { popNicknamePcOpened && ( <NicknamePc togglePop={toggleNicknamePcPop} /> )}
        { popEmailCheckPcOpened && ( <EmailCheckPc togglePop={toggleEmailCheckPcPop} /> )}
        { popPwCheckPcOpened && ( <PwCheckPc togglePop={togglePwCheckPcPop} /> )}
        { popLoginPcOpened && ( <LoginPc togglePop={toggleLoginPcPop} /> )}
    </div>
  )
}

export default SchoolPop;