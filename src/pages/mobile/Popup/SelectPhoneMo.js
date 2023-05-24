import { useEffect, useState } from "react";

const SelectPhoneMo = ({ togglePop }) => {

  return (
    <div className="layer phone alarm">
    <div>
        <div className="layer-header">
            <h1 className="layer-title">통신사 선택</h1>
        </div>
        <div className="layer-contents">
            <ul className="carrier">
                <li><a href="#none">LG U+</a></li>
                <li><a href="#none">SKT</a></li>
                <li><a href="#none">KT</a></li>
                <li><a href="#none">LG U+ 알뜰폰</a></li>
                <li><a href="#none">SKT 알뜰폰</a></li>
                <li><a href="#none">KT 알뜰폰</a></li>
            </ul>
        </div>
        <div className="layer-btns pd00">
            <button type="button" className="SecBtn01 UvTxt" onClick={togglePop}>취소</button>
            <button type="button" className="SecBtn">확인</button>
        </div>
    </div>
</div>
  )
}

export default SelectPhoneMo;