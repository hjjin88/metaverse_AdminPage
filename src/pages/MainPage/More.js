
import { useEffect, useState } from "react";

const More = ({setPopName }) => {

    return (
        <>
        <div className="layer" />
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <ul className="more-ty02 txt-11">
                <li><img src="/resources/img/busyMessage.svg" alt="통화중 메세지 버튼 이미지" /><p>통화중 메시지</p></li>
                <li><img src="/resources/img/screenShare24.svg" alt="화면공유 버튼 이미지" /><p>화면공유</p></li>
                <li><img src="/resources/img/subtitle.svg" alt="자막보기 버튼 이미지" /><p>자막보기</p></li>
                <li><img src="/resources/img/reportProblem.svg" alt="문제신고 버튼 이미지" /><p>문제신고</p></li>
                <li><img src="/resources/img/setting.svg" alt="설정 버튼 이미지" /><p>설정</p></li>
                <li><img src="/resources/img/declaration.svg" alt="악용사례 신고 버튼 이미지" /><p>악용사례 신고</p></li>
                <li><img src="/resources/img/hostControlFunction.svg" alt="호스트 제어 기능 버튼 이미지" /><p>호스트 제어 기능</p></li>
                <li><img src="/resources/img/MoreActivity.svg" alt="활동 버튼 이미지" /><p>활동</p></li>
            </ul>
        </div>
        </>
    )
}
export default More;
