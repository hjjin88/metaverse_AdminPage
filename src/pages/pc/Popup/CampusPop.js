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
import CertiPc from "./CertiPc";
import SelectPhonePc from "./SelectPhonePc";
import AlarmPc01 from "./AlarmPc01";
import ConnectPc from "./ConnectPc";
import AgreePc from "./AgreePc";
import MemPc  from "./MemPc";
import AlarmPc02 from "./AlarmPc02";
import AlarmPc03 from "./AlarmPc03";
import AlarmPc04 from "./AlarmPc04";
import AlarmPc05 from "./AlarmPc05";
import AlarmPc06 from "./AlarmPc06";
import NicknamePc  from "./NicknamePc";
import EmailCheckPc  from "./EmailCheckPc";
import PwCheckPc  from "./PwCheckPc";
import LoginPc  from "./LoginPc";

// 0421추가 팝업
import PopLogin_01  from "./PopLogin_01";
import PopLogin_02  from "./PopLogin_02";
import PopLogin_03  from "./PopLogin_03";
import PopLogin_04  from "./PopLogin_04";
import PopLogin_05  from "./PopLogin_05";
import PopLogin_06  from "./PopLogin_06";
import PopLogin_07  from "./PopLogin_07";
import PopLogin_08  from "./PopLogin_08";
import PopLogin_09  from "./PopLogin_09";

import PopLogin_test  from "./PopLogin_test";


const CampusPop = () => {

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

  const [popCertiPcOpened, setPopCertiPcOpened] = useState(false);
  const toggleCertiPcPop = () => { setPopCertiPcOpened(!popCertiPcOpened); }

  const [popSelectPhonePcOpened, setPopSelectPhonePcOpened] = useState(false);
  const toggleSelectPhonePcPop = () => { setPopSelectPhonePcOpened(!popSelectPhonePcOpened); }

  const [popAlarmPc01Opened, setPopAlarmPc01Opened] = useState(false);
  const toggleAlarmPc01Pop = () => { setPopAlarmPc01Opened(!popAlarmPc01Opened); }

  const [popConnectPcOpened, setPopConnectPcOpened] = useState(false);
  const toggleConnectPcPop = () => { setPopConnectPcOpened(!popConnectPcOpened); }

  const [popAgreePcOpened, setPopAgreePcOpened] = useState(false);
  const toggleAgreePcPop = () => { setPopAgreePcOpened(!popAgreePcOpened); }

  const [popMemPcOpened, setPopMemPcOpened] = useState(false);
  const toggleMemPcPop = () => { setPopMemPcOpened(!popMemPcOpened); }

  const [popAlarmPc02Opened, setPopAlarmPc02Opened] = useState(false);
  const toggleAlarmPc02Pop = () => { setPopAlarmPc02Opened(!popAlarmPc02Opened); }

  const [popAlarmPc03Opened, setPopAlarmPc03Opened] = useState(false);
  const toggleAlarmPc03Pop = () => { setPopAlarmPc03Opened(!popAlarmPc03Opened); }

  const [popAlarmPc04Opened, setPopAlarmPc04Opened] = useState(false);
  const toggleAlarmPc04Pop = () => { setPopAlarmPc04Opened(!popAlarmPc04Opened); }

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
  
  // 0421 추가 팝업
  const [popPopLogin_01Opened, setPopPopLogin_01Opened] = useState(false);
  const togglePopLogin_01Pop = () => { setPopPopLogin_01Opened(!popPopLogin_01Opened); }
  const [popPopLogin_02Opened, setPopPopLogin_02Opened] = useState(false);
  const togglePopLogin_02Pop = () => { setPopPopLogin_02Opened(!popPopLogin_02Opened); }
  const [popPopLogin_03Opened, setPopPopLogin_03Opened] = useState(false);
  const togglePopLogin_03Pop = () => { setPopPopLogin_03Opened(!popPopLogin_03Opened); }
  const [popPopLogin_04Opened, setPopPopLogin_04Opened] = useState(false);
  const togglePopLogin_04Pop = () => { setPopPopLogin_04Opened(!popPopLogin_04Opened); }
  const [popPopLogin_05Opened, setPopPopLogin_05Opened] = useState(false);
  const togglePopLogin_05Pop = () => { setPopPopLogin_05Opened(!popPopLogin_05Opened); }
  const [popPopLogin_06Opened, setPopPopLogin_06Opened] = useState(false);
  const togglePopLogin_06Pop = () => { setPopPopLogin_06Opened(!popPopLogin_06Opened); }
  const [popPopLogin_07Opened, setPopPopLogin_07Opened] = useState(false);
  const togglePopLogin_07Pop = () => { setPopPopLogin_07Opened(!popPopLogin_07Opened); }
  const [popPopLogin_08Opened, setPopPopLogin_08Opened] = useState(false);
  const togglePopLogin_08Pop = () => { setPopPopLogin_08Opened(!popPopLogin_08Opened); }
  const [popPopLogin_09Opened, setPopPopLogin_09Opened] = useState(false);
  const togglePopLogin_09Pop = () => { setPopPopLogin_09Opened(!popPopLogin_09Opened); }

  const [popPopLogin_testOpened, setPopPopLogin_testOpened] = useState(false);
  const togglePopLogin_testPop = () => { setPopPopLogin_testOpened(!popPopLogin_testOpened); }

  return (
    <div className="wrapper uverse_wrap" id="wrapper">
      
        <MainHeaderPc selectedGnbIndex={2} popVisible={false} />
        {/* 0421 추가 팝업 */}
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePopLogin_01Pop(); }}>0421 추가 01 로그인/가입하기 선택</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePopLogin_02Pop(); }}>0421 추가 02 약관 동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePopLogin_03Pop(); }}>0421 추가 03 약관 동의 - 마케팅 수신 동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePopLogin_04Pop(); }}>0421 추가 04 아바타 만들기</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePopLogin_05Pop(); }}>0421 추가 05 계정 연동</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePopLogin_06Pop(); }}>0421 추가 06 계정 연동 (학교 계정으로 연동하기)</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePopLogin_07Pop(); }}>0421 추가 07 로그인</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePopLogin_08Pop(); }}>0421 추가 08 이메일 로그인</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePopLogin_09Pop(); }}>0421 추가 09 이메일 인증 </button>
        </div>


        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePopLogin_09Pop(); }}>샐랙박스 선택 테스트용</button>
        </div>


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
          <button onClick={ e => { toggleCertiPcPop(); }}>휴대폰본인인증</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleSelectPhonePcPop(); }}>통신사팝업</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmPc01Pop(); }}>계정연결_ 상세 / 팝업 알람 해당 기능을 사용하려면 인증이 필요합니다. 인증하시겠습니까?</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleConnectPcPop(); }}>학생/교직원인증</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAgreePcPop(); }}>학생/교직원인증_3자동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleMemPcPop(); }}>학생/교직원인증_회원구분</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmPc02Pop(); }}>알람 입력하신 xxx가 정확한가요?</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmPc03Pop(); }}>알람 인증코드가 틀렸습니다. 다시 확인 후 입력 부탁드립니다.</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmPc04Pop(); }}>알람 학생/교직원 인증 완료</button>
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

        { popLoginPcOpened && ( <LoginPc togglePop={toggleLoginPcPop} /> )}
        { popLoginPopPcOpened && ( <LoginPopPc togglePop={toggleLoginPopPcPop} /> )}
        { popUnder14PcOpened && ( <Under14Pc togglePop={toggleUnder14PcPop} /> )}
        { popAccountPcOpened && ( <AccountPc togglePop={toggleAccountPcPop} /> )}
        { popAccountPc02Opened && ( <AccountPc02 togglePop={toggleAccountPc02Pop} /> )}
        { popTermsServicePc01Opened && ( <TermsServicePc01 togglePop={toggleTermsServicePc01Pop} /> )}
        { popTermsServicePc02Opened && ( <TermsServicePc02 togglePop={toggleTermsServicePc02Pop} /> )}
        { popTermsServicePc03Opened && ( <TermsServicePc03 togglePop={toggleTermsServicePc03Pop} /> )}
        { popTermsServicePc04Opened && ( <TermsServicePc04 togglePop={toggleTermsServicePc04Pop} /> )}
        { popTermsServicePc05Opened && ( <TermsServicePc05 togglePop={toggleTermsServicePc05Pop} /> )}
        { popCertiPcOpened && ( <CertiPc togglePop={toggleCertiPcPop} /> )}
        { popSelectPhonePcOpened && ( <SelectPhonePc togglePop={toggleSelectPhonePcPop} /> )}
        { popAlarmPc01Opened && ( <AlarmPc01 togglePop={toggleAlarmPc01Pop} /> )}
        { popConnectPcOpened && ( <ConnectPc togglePop={toggleConnectPcPop} /> )}
        { popAgreePcOpened && ( <AgreePc togglePop={toggleAgreePcPop} /> )}
        { popMemPcOpened && ( <MemPc togglePop={toggleMemPcPop} /> )}
        { popAlarmPc02Opened && ( <AlarmPc02 togglePop={toggleAlarmPc02Pop} /> )}
        { popAlarmPc03Opened && ( <AlarmPc03 togglePop={toggleAlarmPc03Pop} /> )}
        { popAlarmPc04Opened && ( <AlarmPc04 togglePop={toggleAlarmPc04Pop} /> )}
        { popAlarmPc05Opened && ( <AlarmPc05 togglePop={toggleAlarmPc05Pop} /> )}
        { popAlarmPc06Opened && ( <AlarmPc06 togglePop={toggleAlarmPc06Pop} /> )}
        { popNicknamePcOpened && ( <NicknamePc togglePop={toggleNicknamePcPop} /> )}
        { popEmailCheckPcOpened && ( <EmailCheckPc togglePop={toggleEmailCheckPcPop} /> )}
        { popPwCheckPcOpened && ( <PwCheckPc togglePop={togglePwCheckPcPop} /> )}

        {/* 0421 추가 팝업 */}
        { popPopLogin_01Opened && ( <PopLogin_01 togglePop={togglePopLogin_01Pop} /> )}
        { popPopLogin_02Opened && ( <PopLogin_02 togglePop={togglePopLogin_02Pop} /> )}
        { popPopLogin_03Opened && ( <PopLogin_03 togglePop={togglePopLogin_03Pop} /> )}
        { popPopLogin_04Opened && ( <PopLogin_04 togglePop={togglePopLogin_04Pop} /> )}
        { popPopLogin_05Opened && ( <PopLogin_05 togglePop={togglePopLogin_05Pop} /> )}
        { popPopLogin_06Opened && ( <PopLogin_06 togglePop={togglePopLogin_06Pop} /> )}
        { popPopLogin_07Opened && ( <PopLogin_07 togglePop={togglePopLogin_07Pop} /> )}
        { popPopLogin_08Opened && ( <PopLogin_08 togglePop={togglePopLogin_08Pop} /> )}
        { popPopLogin_09Opened && ( <PopLogin_09 togglePop={togglePopLogin_09Pop} /> )}

        { popPopLogin_testOpened && ( <PopLogin_test togglePop={togglePopLogin_testPop} /> )}

    </div>
  )
}

export default CampusPop;