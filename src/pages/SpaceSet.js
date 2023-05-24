import { useEffect, useRef, useState } from "react";
import LtTopBar from './LtTopBar'; 
import RtBar from './RtBar'; 
import BtBar from './BtBar';
import Popups from "./Popups";
import UnKnowBtn from "./UnKnowBtn";


const SpaceSet = () => {
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
      <div className="wrap SpaceSet">
        <Popups popName={popName} setPopName={setPopName} />
        <RtBar popName={popName} setPopName={setPopName} />
        <div className="LtTopBar">
              <button type="button" className="exit24" onClick={ e => { setPopName(''); }} />
              <div className="tit-24Wt">스페이스 설정</div>
          </div>
        <div className="BtBar">
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
                <button type="button" onClick={ e => { setPopName('More'); }}>
                    <img src="/resources/img/setBox30.svg" alt="더보기 버튼 이미지" />
                    <p>더보기</p>
                </button>
            </div>
        </div>
        <div className="SpaceSet_con">
          <div className="SpaceSet_left">
            <div className="left_top_con">
              <p>스페이스 URL</p> 
              <input type="text" placeholder="http://example.com/시스템 자동생성"/>
              <button  type="button" className="copyWt17"/>
            </div>
            <div className="left_bottom_con">
              <p>인증되지 않은 사용자 입장 허용</p>
              <label>
                  <input type="checkbox"/>
                  <i></i>
              </label>
              <button className="lecture-chromakey-pointer" style={{top: '10px', left: '10px'}}></button>
            </div>
          </div>
          <div className="SpaceSet_right">
            <div className="right_list">
              <div className="right_tit">
                <p>화이트 리스트</p>
                <button type="button" className="txt-14BWt5">
                  <img src="/resources/img/manage16.svg" alt=""/>
                  관리
                  </button>
                </div>
              <div className="right_box">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">닉네임</th>
                      <th scope="col">유저ID</th>
                      <th scope="col">요청메세지</th>
                      <th scope="col">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td className="accept">수락</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                      <td>대기</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="right_list Bk">
              <div className="right_tit">
                <p>블랙 리스트</p>
                <button type="button" className="txt-14BWt5">
                  <img src="/resources/img/manage16.svg" alt=""/>
                  관리
                  </button>
                </div>
              <div className="right_box">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">닉네임</th>
                      <th scope="col">유저ID</th>
                      <th scope="col">IP주소</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                    <tr>
                      <td>Jennie Park</td>
                      <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                      <td>청강생입니다.입장좀요</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpaceSet;
