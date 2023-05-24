import { useEffect, useState } from "react";

const PopLogin_03 = ({ togglePop }) => {

  return (
    <div className="layer new_pop alert">
        <div className="">
            <div className="layer_top">
                <h1 className="main_tit"><strong>마케팅 정보 수신 동의</strong></h1>
            </div>
            <div className="layer_cont">
                <p className="txt_gr16">YYYY년 MM월 DD일에<br /> 유버스의 이벤트 및 혜택 알림 수신에<br /> 동의하였습니다.</p>
            </div>
            <div className="layer_bottom">
                <div className="layer-btns">
                    <button type="button" className="Btn_df block On" onClick={togglePop}>확인</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopLogin_03;