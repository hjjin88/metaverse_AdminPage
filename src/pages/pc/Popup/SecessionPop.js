import { useEffect, useState } from "react";


const SecessionPop = ({ togglePop }) => {
    
    return (
      <div className="layer layer300 alarm">
      <div>
        <div className="layerHeader pdb10">
          <h1 className="layerTit">회원 탈퇴가 완료되었습니다.</h1>
        </div>
        <div className="layer-contents">
          <div className="inner-html center">
            <p className="inTxt15_01 mgb24">
              그동안 UVERSE를 <br />
              이용해 주셔서 감사합니다.</p>
            <p className="inTxt15_02">
              미래를 위해 열심히 준비하는<br />
              학생 여러분을 위해 항상 노력하는<br /> 
              UVERSE가 되겠습니다.
            </p>
          </div>
        </div>
        <button type="button" className="SecBtn" onClick={togglePop}>확인</button>
      </div>
  </div>
    )
}

export default SecessionPop;