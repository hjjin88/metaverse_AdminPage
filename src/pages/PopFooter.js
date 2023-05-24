import { useEffect, useRef, useState } from "react";

const PopFooter = ({ popName, setPopName }) => {

  return (
    <>
    <div className="PopFooter txt-10Bk2">
      <button type="button" onClick={ e => { setPopName('MyProfile'); }}>
          <img src="/resources/img/Profile20.svg" alt="프로필 버튼 이미지" />
          <p>프로필</p>
      </button>
      <button type="button" onClick={ e => { setPopName('MyFriend'); }}>
          <img src="/resources/img/friend20.svg" alt="친구 버튼 이미지" />
          <p>친구</p>
      </button>
      <button type="button" onClick={ e => { setPopName('Message'); }}>
          <img src="/resources/img/msg20.svg" alt="메세지 버튼 이미지" />
          <p>메시지</p>
          {/* 메시지 왔을 때만 표시// 메세지 온게 없을 때는 표시 없음 */}
          <div className="markRd"></div>
      </button>
      <button type="button" onClick={ e => { setPopName('MyActivity'); }}>
          <img src="/resources/img/activityLog20.svg" alt="활동일지 버튼 이미지" />
          <p>활동일지</p>
      </button>
      <button type="button" onClick={ e => { setPopName('MySetting'); }}>
          <img src="/resources/img/setting20.svg" alt="설정 버튼 이미지" />
          <p>설정</p>
      </button>
    </div>
    </>
  );
}

export default PopFooter;
