import { useEffect, useState } from "react";


const SecessionPop = ({ popName, setPopName }) => {
    
  return (
  <div className="layer new_pop02 new_alert secession">
    <div>
      <div className="layer_top">
        <h1 className="layer_tit">회원 탈퇴가 완료되었습니다.</h1>
        <p className="layer_tit_desc">그동안 UVERSE를 <br />이용해 주셔서 감사합니다.</p>
      </div>
      <div className="layer_cont">
        <div className="alert_desc">
          <p className="inTxt15_02">
            미래를 위해 열심히 준비하는<br />
            학생 여러분을 위해 항상 노력하는<br /> 
            UVERSE가 되겠습니다.
          </p>          
        </div>
      </div>
      <button type="button" className="btn_df block on" onClick={ e => { setPopName(); }}>확인</button>
    </div>
</div>
  )
}

export default SecessionPop;