import { useEffect, useState } from "react";


const NicknamePc = ({ togglePop }) => {
    
    const [isBun01, setIsBun01] = useState(false);

    return (
    <div className="layer alarm nic">
        <div>
            <div className="layerHeader mgb8">
                <h1 className="layerTit" id="dialog_label1">닉네임 변경</h1>
                <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            </div>
            <div className="layer-contents pd0">
                <div className="inner-html mgb16">
                    <p className="text">사용하실 닉네임을 입력하세요.</p>
                </div>
                <div className="form-control mgb4">
                    <input type="text" placeholder="8자 이내로 입력" />
                </div>
                <p className="form-notice error">필수 입력 값입니다.</p>
            </div>
            <div className="layer-btns">
                <button type="button" className="SecBtn01" onClick={togglePop}>취소</button>
            { isBun01 ? (
                <button type="button" className="SecBtn bdGy" onClick={ e => { setIsBun01(false); }}>변경</button>
            ) : (
                <button type="button" className="SecBtn02" onClick={ e => { setIsBun01(true); }}>변경</button>
            )}
            </div>
        </div>
    </div>
    )
}
export default NicknamePc;