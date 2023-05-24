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
import CertifyMo from "./CertifyMo";
import CertifyLayer01 from "./CertifyLayer01";
import CertifyLayer02 from "./CertifyLayer02";
import CertifyLayer03 from "./CertifyLayer03";
import AlarmMo02 from "./AlarmMo02";
import AlarmMo03 from "./AlarmMo03";
import AlarmMo05 from "./AlarmMo05";
import AlarmMo06 from "./AlarmMo06";
import NicknameMo  from "./NicknameMo";
import EmailCheckMo  from "./EmailCheckMo";
import PwCheckMo  from "./PwCheckMo";
import LoginMo  from "./LoginMo";


const SchoolPopMo = () => {

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

  const [popCertifyMoOpened, setPopCertifyMoOpened] = useState(false);
  const toggleCertifyMoPop = () => { setPopCertifyMoOpened(!popCertifyMoOpened); }

  const [popCertifyLayer01Opened, setPopCertifyLayer01Opened] = useState(false);
  const toggleCertifyLayer01Pop = () => { setPopCertifyLayer01Opened(!popCertifyLayer01Opened); }

  const [popCertifyLayer02Opened, setPopCertifyLayer02Opened] = useState(false);
  const toggleCertifyLayer02Pop = () => { setPopCertifyLayer02Opened(!popCertifyLayer02Opened); }

  const [popCertifyLayer03Opened, setPopCertifyLayer03Opened] = useState(false);
  const toggleCertifyLayer03Pop = () => { setPopCertifyLayer03Opened(!popCertifyLayer03Opened); }

  const [popAlarmMo02Opened, setPopAlarmMo02Opened] = useState(false);
  const toggleAlarmMo02Pop = () => { setPopAlarmMo02Opened(!popAlarmMo02Opened); }

  const [popAlarmMo03Opened, setPopAlarmMo03Opened] = useState(false);
  const toggleAlarmMo03Pop = () => { setPopAlarmMo03Opened(!popAlarmMo03Opened); }

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

  return (
    <div className="wrapper school_wrap uverse_wrap" id="wrapper">
      
        <MainHeaderMo selectedGnbIndex={1} popVisible={false} />
        
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
          <button onClick={ e => { toggleCertifyMoPop(); }}>사용자 인증</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleCertifyLayer01Pop(); }}>출생연도</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleCertifyLayer02Pop(); }}>학년</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleCertifyLayer03Pop(); }}>반</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmMo02Pop(); }}>알람 입력하신 xxx가 정확한가요?</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleAlarmMo03Pop(); }}>알람 인증코드가 틀렸습니다. 다시 확인 후 입력 부탁드립니다.</button>
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
        { popCertifyMoOpened && ( <CertifyMo togglePop={toggleCertifyMoPop} /> )}
        { popCertifyLayer01Opened && ( <CertifyLayer01 togglePop={toggleCertifyLayer01Pop} /> )}
        { popCertifyLayer02Opened && ( <CertifyLayer02 togglePop={toggleCertifyLayer02Pop} /> )}
        { popCertifyLayer03Opened && ( <CertifyLayer03 togglePop={toggleCertifyLayer03Pop} /> )}
        { popAlarmMo02Opened && ( <AlarmMo02 togglePop={toggleAlarmMo02Pop} /> )}
        { popAlarmMo03Opened && ( <AlarmMo03 togglePop={toggleAlarmMo03Pop} /> )}
        { popAlarmMo05Opened && ( <AlarmMo05 togglePop={toggleAlarmMo05Pop} /> )}
        { popAlarmMo06Opened && ( <AlarmMo06 togglePop={toggleAlarmMo06Pop} /> )}
        { popNicknameMoOpened && ( <NicknameMo togglePop={toggleNicknameMoPop} /> )}
        { popEmailCheckMoOpened && ( <EmailCheckMo togglePop={toggleEmailCheckMoPop} /> )}
        { popPwCheckMoOpened && ( <PwCheckMo togglePop={togglePwCheckMoPop} /> )}
        { popLoginMoOpened && ( <LoginMo togglePop={toggleLoginMoPop} /> )}
    </div>
  )
}

export default SchoolPopMo;