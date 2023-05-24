
import { useEffect, useState } from "react";

const BtBar = ({ popName, setPopName }) => {

    return (
        <>
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
                <button type="button" onClick={ e => { setPopName('More'); }}>
                    <img src="/resources/img/setBox30.svg" alt="더보기 버튼 이미지" />
                    <p>더보기</p>
                </button>
            </div>
        </div>
        </>
    )
}
export default BtBar;
