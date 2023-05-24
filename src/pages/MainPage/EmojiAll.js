
import { useEffect, useState } from "react";

const EmojiAll = ({setPopName }) => {

    return (
        <>
        <div className="Emoji EmojiAll">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="popTit">이모티콘</div>
            <div className="EmojiCon popCon">
                <p className="tit-13Gy2">최근 사용</p>
                <ul className="EmojiList">
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                </ul>
                <p className="pdt30 tit-13Gy2">이모티콘</p>
                <ul className="EmojiList">
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    {/* 스크롤 테스트 */}
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default EmojiAll;
