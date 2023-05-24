import { useEffect, useState } from "react";

const Under14Mo = ({ togglePop }) => {

  return (
  <div className="layer alarm">
    <div className="entrance_box">
      <div className="layerHeader mgb10">
          <h1 className="layerTit" id="dialog_label1">만 14세 미만이신가요?</h1>
          <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
        </div>
      <div className="layer-contents">
        <div className="inner-html">
          <p className="entrance_text">만 14세 미만은 보호자 동의가 <br/>필요합니다.</p>
        </div>
      </div>
      <button type="button" className="SecBtn">14세 이상입니다.</button>
      <button type="button" className="SecBtn01 mgt4" disabled>만 14세 미만입니다.</button>
    </div>
  </div>
  )
}


export default Under14Mo;