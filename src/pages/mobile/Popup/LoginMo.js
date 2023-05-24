import { useEffect, useState } from "react";


const LoginMo= ({ togglePop }) => {

    const [isBun01, setIsBun01] = useState(false);
    const [isBun02, setIsBun02] = useState(false);
    
    return (
    <div className="layer alarm Login">
        <div>
            <div className="layerHeader pdb28">
                <h1 className="layerTit">로그인</h1>
                <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            </div>
            <div className="form-control">
                <input type="text" className="mgb16" placeholder="이메일을 입력하세요." />
                <input type="text" className="mgb12" placeholder="비밀번호를 입력하세요." />
                <p className="form-notice error">비밀번호를 정확하게 입력해주세요.</p>
            </div>
        { isBun01 ? (
            <button type="button" className="SecBtn bdGy mgt10" onClick={ e => { setIsBun01(false); }}>로그인</button>
        ) : (
            <button type="button" className="SecBtn02 mgt10" onClick={ e => { setIsBun01(true); }}>로그인</button>
        )}
        { isBun02 ? (
            <button type="button" className="SecBtn bdGy mgt10" onClick={ e => { setIsBun02(false); }}>비밀번호 재설정</button>
        ) : (
            <button type="button" className="SecBtn01 UvTxt02 mgt10" onClick={ e => { setIsBun02(true); }}>비밀번호 재설정</button>
        )}
            <div className="inTxt14 pdt24 mgb16">처음 방문이세요? <button type="button" className="underBar UvTxt02">회원가입</button></div>
        </div>
    </div>
    )
}
export default LoginMo;