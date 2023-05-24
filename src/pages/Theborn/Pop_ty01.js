
import { useEffect, useState } from "react";

const Pop_ty01 = ({setPopName }) => {

    const [view, setView] = useState(false); 

    return (
        <>
        <div className="Pop" onClick={setView}>
            <div className="Pop-ty01">
                <dl>
                    <dt className="Pop-tit-01">미션 성공</dt>
                    <dd className="Pop-txt">영상을 모두 시청했어요!<br/>다음 퀘스트로 GO! GO!</dd>
                </dl>
                <button type="button" className="Pop-btn-01">확인</button>
                {/* <button type="button" className="Pop-ty01-btn">재도전</button> */}
            </div>
        </div>
        </>
    )
}
export default Pop_ty01;
