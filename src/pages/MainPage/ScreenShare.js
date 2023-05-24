
import { useEffect, useState } from "react";

const ScreenShare = ({popName, setPopName}) => {

    return (
        <>
        <div className="ScreenShare TopCtPop">
            <dl className="set-guide">
                <dt>어플리케이션 창 공유</dt>
                <dd>Chrome 앱이 meet.google.com 사이드와 내 화면의 콘텐츠를 공유하려고 합니다.</dd>
            </dl>
            <div className="ScreenShare-con">

            </div>
            <div className="Share-btns">
                <button onClick={ e => { setPopName(); }}>취소</button>
                <button type="button">공유</button>
            </div>
        </div>
        </>
    )
}
export default ScreenShare;
