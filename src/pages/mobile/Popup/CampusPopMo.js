import { useState } from "react";
import MainHeaderMo from "../MainHeaderMo";
import LoginPopMo from "./LoginPopMo";
import Under14Mo  from "./Under14Mo";
import AccountMo  from "./AccountMo";
import AccountMo02  from "./AccountMo02";
import TermsServiceMo01  from "./TermsServiceMo01";
import TermsServiceMo02  from "./TermsServiceMo02";
import TermsServiceMo03  from "./TermsServiceMo03";
import TermsServiceMo04  from "./TermsServiceMo04";
import TermsServiceMo05  from "./TermsServiceMo05";
import CertiMo from "./CertiMo";
import SelectPhoneMo from "./SelectPhoneMo";
import AlarmMo01 from "./AlarmMo01";
import ConnectMo from "./ConnectMo";
import AgreeMo from "./AgreeMo";
import MemMo  from "./MemMo";
import AlarmMo02 from "./AlarmMo02";
import AlarmMo03 from "./AlarmMo03";
import AlarmMo04 from "./AlarmMo04";
import AlarmMo05 from "./AlarmMo05";
import AlarmMo06 from "./AlarmMo06";
import NicknameMo  from "./NicknameMo";
import EmailCheckMo  from "./EmailCheckMo";
import PwCheckMo  from "./PwCheckMo";
import LoginMo  from "./LoginMo";

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

const CampusPopMo = () => {

  const [popLoginPopMoOpened, setPopLoginPopMoOpened] = useState(false);
  const toggleLoginPopMoPop = () => { setPopLoginPopMoOpened(!popLoginPopMoOpened); }

  const [popUnder14MoOpened, setPopUnder14MoOpened] = useState(false);
  const toggleUnder14MoPop = () => { setPopUnder14MoOpened(!popUnder14MoOpened); }

  const [popAccountMoOpened, setPopAccountMoOpened] = useState(false);
  const toggleAccountMoPop = () => { setPopAccountMoOpened(!popAccountMoOpened); }

  const [popAccountMo02Opened, setPopAccountMo02Opened] = useState(false);
  const toggleAccountMo02Pop = () => { setPopAccountMo02Opened(!popAccountMo02Opened); }

  const [popTermsServiceMo01Opened, setPopTermsServiceMo01Opened] = useState(false);
  const toggleTermsServiceMo01Pop = () => { setPopTermsServiceMo01Opened(!popTermsServiceMo01Opened); }

  const [popTermsServiceMo02Opened, setPopTermsServiceMo02Opened] = useState(false);
  const toggleTermsServiceMo02Pop = () => { setPopTermsServiceMo02Opened(!popTermsServiceMo02Opened); }

  const [popTermsServiceMo03Opened, setPopTermsServiceMo03Opened] = useState(false);
  const toggleTermsServiceMo03Pop = () => { setPopTermsServiceMo03Opened(!popTermsServiceMo03Opened); }

  const [popTermsServiceMo04Opened, setPopTermsServiceMo04Opened] = useState(false);
  const toggleTermsServiceMo04Pop = () => { setPopTermsServiceMo04Opened(!popTermsServiceMo04Opened); }

  const [popTermsServiceMo05Opened, setPopTermsServiceMo05Opened] = useState(false);
  const toggleTermsServiceMo05Pop = () => { setPopTermsServiceMo05Opened(!popTermsServiceMo05Opened); }

  const [popCertiMoOpened, setPopCertiMoOpened] = useState(false);
  const toggleCertiMoPop = () => { setPopCertiMoOpened(!popCertiMoOpened); }

  const [popSelectPhoneMoOpened, setPopSelectPhoneMoOpened] = useState(false);
  const toggleSelectPhoneMoPop = () => { setPopSelectPhoneMoOpened(!popSelectPhoneMoOpened); }

  const [popAlarmMo01Opened, setPopAlarmMo01Opened] = useState(false);
  const toggleAlarmMo01Pop = () => { setPopAlarmMo01Opened(!popAlarmMo01Opened); }

  const [popConnectMoOpened, setPopConnectMoOpened] = useState(false);
  const toggleConnectMoPop = () => { setPopConnectMoOpened(!popConnectMoOpened); }

  const [popAgreeMoOpened, setPopAgreeMoOpened] = useState(false);
  const toggleAgreeMoPop = () => { setPopAgreeMoOpened(!popAgreeMoOpened); }

  const [popMemMoOpened, setPopMemMoOpened] = useState(false);
  const toggleMemMoPop = () => { setPopMemMoOpened(!popMemMoOpened); }

  const [popAlarmMo02Opened, setPopAlarmMo02Opened] = useState(false);
  const toggleAlarmMo02Pop = () => { setPopAlarmMo02Opened(!popAlarmMo02Opened); }

  const [popAlarmMo03Opened, setPopAlarmMo03Opened] = useState(false);
  const toggleAlarmMo03Pop = () => { setPopAlarmMo03Opened(!popAlarmMo03Opened); }

  const [popAlarmMo04Opened, setPopAlarmMo04Opened] = useState(false);
  const toggleAlarmMo04Pop = () => { setPopAlarmMo04Opened(!popAlarmMo04Opened); }

  const [popAlarmMo05Opened, setPopAlarmMo05Opened] = useState(false);
  const toggleAlarmMo05Pop = () => { setPopAlarmMo05Opened(!popAlarmMo05Opened); }

  const [popAlarmMo06Opened, setPopAlarmMo06Opened] = useState(false);
  const toggleAlarmMo06Pop = () => { setPopAlarmMo06Opened(!popAlarmMo06Opened); }

  const [popNicknameMoOpened, setPopNicknameMoOpened] = useState(false);
  const toggleNicknameMoPop = () => { setPopNicknameMoOpened(!popNicknameMoOpened); }

  const [popEmailCheckMoOpened, setPopEmailCheckMoOpened] = useState(false);
  const toggleEmailCheckMoPop = () => { setPopEmailCheckMoOpened(!popEmailCheckMoOpened); }

  const [popPwCheckMoOpened, setPopPwCheckMoOpened] = useState(false);
  const togglePwCheckMoPop = () => { setPopPwCheckMoOpened(!popPwCheckMoOpened); }

  const [popLoginMoOpened, setPopLoginMoOpened] = useState(false);
  const toggleLoginMoPop = () => { setPopLoginMoOpened(!popLoginMoOpened); }

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
  
  return (
    <div className="wrapper uverse_wrap" id="wrapper">
      
        <MainHeaderMo selectedGnbIndex={2} popVisible={false} />
        {/* 0421 추가 팝업 */}
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'100px 30px 30px'}}>
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


        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '150px', padding:'100px 30px 30px'}}>
          <button onClick={ e => { toggleLoginPopMoPop(); }}>환영합니다. 입장/로그인 창</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleUnder14MoPop(); }}>14세미만구분팝업</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAccountMoPop(); }}>계정연결</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAccountMo02Pop(); }}>로그인 // 계정연결</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleTermsServiceMo01Pop(); }}>개인정보 처리방침 전문</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleTermsServiceMo02Pop(); }}>(필수) 서비스 이용약관 동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleTermsServiceMo03Pop(); }}>(필수) 개인정보 수집 및 이용 동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleTermsServiceMo04Pop(); }}>(필수) 개인정보 처리 및 위탁, 제3자 제공동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleTermsServiceMo05Pop(); }}>(선택) 마케팅 정보 수신 동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleCertiMoPop(); }}>휴대폰본인인증</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleSelectPhoneMoPop(); }}>통신사팝업</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmMo01Pop(); }}>계정연결_ 상세 / 팝업 알람 해당 기능을 사용하려면 인증이 필요합니다. 인증하시겠습니까?</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleConnectMoPop(); }}>학생/교직원인증</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAgreeMoPop(); }}>학생/교직원인증_3자동의</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleMemMoPop(); }}>학생/교직원인증_회원구분</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmMo02Pop(); }}>알람 입력하신 xxx가 정확한가요?</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmMo03Pop(); }}>알람 인증코드가 틀렸습니다. 다시 확인 후 입력 부탁드립니다.</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmMo04Pop(); }}>알람 학생/교직원 인증 완료</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmMo05Pop(); }}>알람 // 오류창 // ‘구글로 시작하기’에서 소속 학교 이메일 주소 (@sookmyung.ac.kr)로 다시 인증 바랍니다.</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmMo06Pop(); }}>알람 // 오류창 // 필수정보는 모두 입력 바랍니다.</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleNicknameMoPop(); }}>닉네임 변경</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleEmailCheckMoPop(); }}>이메일로 시작하기</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { togglePwCheckMoPop(); }}>비밀번호 재설정</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleLoginMoPop(); }}>로그인</button>
        </div>
        { popLoginPopMoOpened && ( <LoginPopMo togglePop={toggleLoginPopMoPop} /> )}
        { popUnder14MoOpened && ( <Under14Mo togglePop={toggleUnder14MoPop} /> )}
        { popAccountMoOpened && ( <AccountMo togglePop={toggleAccountMoPop} /> )}
        { popAccountMo02Opened && ( <AccountMo02 togglePop={toggleAccountMo02Pop} /> )}
        { popTermsServiceMo01Opened && ( <TermsServiceMo01 togglePop={toggleTermsServiceMo01Pop} /> )}
        { popTermsServiceMo02Opened && ( <TermsServiceMo02 togglePop={toggleTermsServiceMo02Pop} /> )}
        { popTermsServiceMo03Opened && ( <TermsServiceMo03 togglePop={toggleTermsServiceMo03Pop} /> )}
        { popTermsServiceMo04Opened && ( <TermsServiceMo04 togglePop={toggleTermsServiceMo04Pop} /> )}
        { popTermsServiceMo05Opened && ( <TermsServiceMo05 togglePop={toggleTermsServiceMo05Pop} /> )}
        { popCertiMoOpened && ( <CertiMo togglePop={toggleCertiMoPop} /> )}
        { popSelectPhoneMoOpened && ( <SelectPhoneMo togglePop={toggleSelectPhoneMoPop} /> )}
        { popAlarmMo01Opened && ( <AlarmMo01 togglePop={toggleAlarmMo01Pop} /> )}
        { popConnectMoOpened && ( <ConnectMo togglePop={toggleConnectMoPop} /> )}
        { popAgreeMoOpened && ( <AgreeMo togglePop={toggleAgreeMoPop} /> )}
        { popMemMoOpened && ( <MemMo togglePop={toggleMemMoPop} /> )}
        { popAlarmMo02Opened && ( <AlarmMo02 togglePop={toggleAlarmMo02Pop} /> )}
        { popAlarmMo03Opened && ( <AlarmMo03 togglePop={toggleAlarmMo03Pop} /> )}
        { popAlarmMo04Opened && ( <AlarmMo04 togglePop={toggleAlarmMo04Pop} /> )}
        { popAlarmMo05Opened && ( <AlarmMo05 togglePop={toggleAlarmMo05Pop} /> )}
        { popAlarmMo06Opened && ( <AlarmMo06 togglePop={toggleAlarmMo06Pop} /> )}
        { popNicknameMoOpened && ( <NicknameMo togglePop={toggleNicknameMoPop} /> )}
        { popEmailCheckMoOpened && ( <EmailCheckMo togglePop={toggleEmailCheckMoPop} /> )}
        { popPwCheckMoOpened && ( <PwCheckMo togglePop={togglePwCheckMoPop} /> )}
        { popLoginMoOpened && ( <LoginMo togglePop={toggleLoginMoPop} /> )}
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

    </div>
  )
}

export default CampusPopMo;