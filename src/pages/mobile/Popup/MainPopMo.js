import { useState } from "react";
import MainHeaderMo from "../MainHeaderMo";
import SecessionMo from "./SecessionMo";
import SecessionPopMo from "./SecessionPopMo";

const MainPopMo = () => {

  const [popSecessionMoOpened, setPopSecessionMoOpened] = useState(false);
  const toggleSecessionMoPop = () => { setPopSecessionMoOpened(!popSecessionMoOpened); }

  const [popSecessionPopMoOpened, setPopSecessionPopMoOpened] = useState(false);
  const toggleSecessionPopMoPop = () => { setPopSecessionPopMoOpened(!popSecessionPopMoOpened); }

  return (
  <div className="wrapper main" id="wrapper">
      <MainHeaderMo selectedGnbIndex={0} popVisible={false} />
      <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '150px', padding:'100px 30px 30px'}}>
        <button onClick={ e => { toggleSecessionMoPop(); }}>회원 탈퇴 팝업</button>
      </div>
      <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
        <button onClick={ e => { toggleSecessionPopMoPop(); }}>회원 탈퇴가 완료되었습니다.</button>
      </div>
      { popSecessionMoOpened && ( <SecessionMo togglePop={toggleSecessionMoPop} /> )}
      { popSecessionPopMoOpened && ( <SecessionPopMo togglePop={toggleSecessionPopMoPop} /> )}
  </div>
  )
}

export default MainPopMo;