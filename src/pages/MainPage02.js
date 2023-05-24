import { useEffect, useRef, useState } from "react";

const MainPage02 = () => {
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
    <div id="unity_container" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {/* 유니티 WebGL 캔버스 영역 */}
      <canvas id="react-unity-webgl-canvas" 
        ref={unityRef} 
        style={{ 
          position: 'absolute',
          backgroundColor:'#4B750D', 
          width: '100%', 
          height: '100%' 
        }}
      />

      {/* 웹UI 영역 */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
        
        {/* 탑 샘플 */}
        <div style={{ position: 'absolute', zIndex: 5, top: 0, left: 0, width: '100%', height: '60px', border: 'solid 1px #000' }}>
          탑메뉴 샘플
        </div>

        {/* 테스트 창 */}
        <div style={{ position: 'absolute', zIndex: 1, left: '50%', top: '60px', transform: 'translateX(-50%)', width: '80%', height: unityHeight - 100, overflow: 'hidden', overflowY: 'auto', border: 'solid 1px #000' }}>
          <p>테스트 * 녹색 배경 영역이 Unity WebGL</p>
          <div>레이아웃은 종류별 위치별 z-index 지정이 필요</div>
          <button onClick={ e => { setPopName('pop1'); }}>팝업 띄우기 1</button>
          <button onClick={ e => { setPopName('pop2'); }}>팝업 띄우기 2</button>
          <button onClick={ e => { setPopName('pop3'); }}>팝업 띄우기 3</button>
        </div>
        
        {/* 왼쪽 샘플 - 탑 메뉴 높이만큼 밀어 내린 샘플 */}
        <div style={{ position: 'absolute', zIndex: 5, top: 60, left: 0, width: '60px', height: unityHeight - 60, border: 'solid 1px #000' }}>
          왼<br />쪽<br />
          <br />샘<br />플
        </div>

        {/* 오른쪽 샘플 */}
        <div style={{ position: 'absolute', zIndex: 5, top: 0, right: 0, width: '60px', height: unityHeight, border: 'solid 1px #000' }}>
          오<br />른<br />쪽<br />
          <br />샘<br />플
        </div>

        {/* 하단 샘플 */}
        <div style={{ position: 'absolute', zIndex: 5, left: '50%', transform: 'translateX(-50%)', bottom: '10px', width: '400px', height: '120px', border: 'solid 1px #000' }}>
          아래 샘플
        </div>

        {/* 팝업들 */}
        { popName === 'pop1' && (
        <div style={{ position: 'absolute', zIndex: 10, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', border: 'solid 1px #000' }}>
          팝업 샘플 1<br />
          <button onClick={ e => { setPopName(); }}>팝업닫기</button>
        </div>
        )}
        { popName === 'pop2' && (
        <div style={{ position: 'absolute', zIndex: 10, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', border: 'solid 1px #000' }}>
          팝업 샘플 2<br />
          <button onClick={ e => { setPopName(); }}>팝업닫기</button>
        </div>
        )}
        { popName === 'pop3' && (
        <div style={{ position: 'absolute', zIndex: 10, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', border: 'solid 1px #000' }}>
          팝업 샘플 3ccccccccc<br />
          <button onClick={ e => { setPopName(); }}>팝업닫기</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default MainPage02;


