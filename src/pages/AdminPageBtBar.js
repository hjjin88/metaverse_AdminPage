
import { useEffect, useState } from "react";

const Admin_BtBar = ({ setPopName }) => {

    return (
        <>
        <div className="Admin_BtBar">
            <div className="Admin_BtBar-Con">
                <button type="button" onClick={ e => { setPopName('Chatting'); }}>
                    <img src="/resources/img/say30-bk.svg" alt="채팅 버튼 이미지" />
                    <p>채팅</p>
                </button>
                <button type="button" onClick={ e => { setPopName('Around'); }}>
                    <img src="/resources/img/map30-bk.svg" alt="주변 버튼 이미지" />
                    <p>주변</p>
                </button>
                <button type="button" onClick={ e => { setPopName('Emoji'); }}>
                    <img src="/resources/img/emoji30-bk.svg" alt="이모티콘 버튼 이미지" />
                    <p>이모티콘</p>
                </button>
                <button type="button" onClick={ e => { setPopName('More'); }}>
                    <img src="/resources/img/setBox30-bk.svg" alt="더보기 버튼 이미지" />
                    <p>더보기</p>
                </button>
            </div>
        </div>
        </>
    )
}
export default Admin_BtBar;
