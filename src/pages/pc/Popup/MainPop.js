import { useState } from "react";
import MainHeaderPc from "../MainHeaderPc";
import ConApp from "./ConApp";
import SecessionPop from "./SecessionPop";
import Secession from "./Secession";

const MainPop = () => {

  const [popConAppOpened, setPopConAppOpened] = useState(false);
  const toggleConAppPop = () => { setPopConAppOpened(!popConAppOpened); }

  const [popSecessionPopOpened, setPopSecessionPopOpened] = useState(false);
  const toggleSecessionPopPop = () => { setPopSecessionPopOpened(!popSecessionPopOpened); }

  const [popSecessionOpened, setPopSecessionOpened] = useState(false);
  const toggleSecessionPop = () => { setPopSecessionOpened(!popSecessionOpened); }

  return (
    <div className="wrapper main" id="wrapper">
        <MainHeaderPc selectedGnbIndex={0} popVisible={false} />
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleConAppPop(); }}>홈메인 안내창</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleSecessionPopPop(); }}>회원 탈퇴가 완료되었습니다.</button>
        </div>
        <div style={{background:'#ACB3C1', color: '#333',width: '100%',height: '80px', padding:'30px'}}>
          <button onClick={ e => { toggleSecessionPop(); }}>회원 탈퇴 팝업</button>
        </div>
        { popConAppOpened && ( <ConApp togglePop={toggleConAppPop} /> )}
        { popSecessionPopOpened && ( <SecessionPop togglePop={toggleSecessionPopPop} /> )}
        { popSecessionOpened && ( <Secession togglePop={toggleSecessionPop} /> )}

    </div>
  )
}

export default MainPop;