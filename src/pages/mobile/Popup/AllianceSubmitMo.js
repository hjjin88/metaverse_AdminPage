import { useEffect, useState } from "react";

const AllianceSubmitMo = ({ togglePop }) => {

  return (
  <div className="layer alliance alarm">
    <div>
      <div className="layerHeader mgb10">
        <h1 className="layerTit">제출이 완료되었습니다.</h1>
      </div>
      <div className="layer-contents">
        <div className="inner-html">
          <p className="text">감사합니다.</p>
        </div>
      </div>
      <button type="button" className="SecBtn" onClick={togglePop}>확인</button>
    </div>
  </div>
  )
}

export default AllianceSubmitMo;