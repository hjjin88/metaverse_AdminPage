import { useEffect, useRef, useState } from "react";
import LtTopBar from './LtTopBar'; 
import RtTopBar from './RtTopBar'; 
import RtBar from './RtBar'; 
import BtBar from './BtBar';
import Popups from "./Popups";
import UnKnowBtn from "./UnKnowBtn";

const CounselingwaitingRoom = () => {
  
  const unityRef = useRef();

  // 페이지 리사이즈, 스크롤 대응 state 업데이트 목적
  const [changeHeight, setChangeHeight] = useState(0);
  const [changeScrollTop, setScrollTop] = useState(0);
  const handleResize = () => {
    setChangeHeight(document.documentElement.scrollHeight);
    setScrollTop(document.documentElement.clientHeight - document.documentElement.scrollHeight + document.documentElement.scrollTop);
  }

  // 유니티 캔버스 높이 가져오기
  const [unityHeight, setUnityHeight] = useState(0);

  useEffect(() => {
    if(unityRef.current) {
      setUnityHeight(unityRef.current.clientHeight);
    }
    
  }, [unityRef, changeHeight, changeScrollTop]);  

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    return () => {

      // unmount 이벤트 리스너 제거
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    }
  }, []);

  const [popName, setPopName] = useState();

  return (
    <div id="unity_container">
      {/* 유니티 WebGL 캔버스 영역 */}
      <canvas id="react-unity-webgl-canvas"
        ref={unityRef} 
        style={{ 
          position: 'absolute',
          color: '#fff',
          width: '100%', 
          height: '100vh', 
        }}
      />
      <div className="wrap">
        <LtTopBar popName={popName} setPopName={setPopName} />
        <BtBar popName={popName} setPopName={setPopName} />
        <Popups popName={popName} setPopName={setPopName} />
        <div className="CampusGoing">
            <button type="button" className="sec-btn-L-on02 tit-20Wt" onClick={ e => { setPopName(); }} >캠퍼스로 바로가기</button>
        </div>
        <div className="BtBar">
            <div className="sayBox">
                <div className="sayBoxCon">
                    <img className="sayIcon" src="/resources/img/bg.png" alt="프로필사진 이미지" />
                    <div className="name">July</div>
                    <div className="say">후배님들 안녕하세요 OT는 내일 모레 입니다 후배님들 안녕하세요 OT는 내일 모레 입니다후배님들 안녕하세요 OT는 내일 모레 입니다..</div>
                </div>
            </div>
            <div className="BtBarCon">
                <button type="button" onClick={ e => { setPopName('Chatting'); }}>
                    <img src="/resources/img/say30.svg" alt="채팅 버튼 이미지" />
                    <p>채팅</p>
                </button>
                <button type="button" onClick={ e => { setPopName('Around'); }}>
                    <img src="/resources/img/map30.svg" alt="주변 버튼 이미지" />
                    <p>주변</p>
                </button>
                <button type="button" onClick={ e => { setPopName('Emoji'); }}>
                    <img src="/resources/img/emoji30.svg" alt="이모티콘 버튼 이미지" />
                    <p>이모티콘</p>
                </button>
                <button type="button" onClick={ e => { setPopName('More06'); }}>
                    <img src="/resources/img/setBox30.svg" alt="더보기 버튼 이미지" />
                    <p>더보기</p>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CounselingwaitingRoom;
