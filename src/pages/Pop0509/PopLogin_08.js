import { useEffect, useState } from "react";

const PopLogin_08 = ({ togglePop }) => {

    const [But01, setBut01] = useState(false);

  return (
    <div className="layer alarm nic">
        <div>
            <div className="layerHeader pb28">
                <h1 className="layerTit" id="dialog_label1">이메일로 로그인</h1>
                <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            </div>
            <div className="form-control pb17">
                <input type="text" placeholder="이메일을 입력하세요." />
                <input type="text" placeholder="비밀번호를 입력하세요." />
                <p className="redTxt inTxt12">비밀번호를 정확하게 입력해주세요.</p>
            </div>
            <div className="Login">
                <button type="button" 
                    className={`SecBtn03 ${But01 ? 'On' : ' '}`}
                    onClick={() => {setBut01(!But01)}} 
                    >로그인</button>
            </div>
        </div>
    </div>
  )
}

export default PopLogin_08;