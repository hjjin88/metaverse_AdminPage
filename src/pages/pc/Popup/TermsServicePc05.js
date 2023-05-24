import { useEffect, useState } from "react";

const TermsServicePc05 = ({ togglePop }) => {

    return (
    <div className="layer priagree alarm">
        <div>
            <div className="layerHeader mgb10">
                <h1 className="layerTit" id="dialog_label1">Uverse(유버스) 플랫폼 마케팅 목적<br/>개인정보 처리 및 광고성 정보 수신을 위한 동의</h1>
                <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            </div>
            <div className="layer-contents">
                <div className="priagree-cotents">
                    <p className="text">본인은 주식회사 LG유플러스(이하 “회사”)가 위 필수동의 항목에서 수집한 개인정보 및 그에 대한 통계ㆍ분석 데이터를 회원탈퇴시까지 회사 또는 회사 제휴사의 상품 내지 서비스의 홍보, 가입 권유, 프로모션, 이벤트 혜택 안내 및 설문조사 목적으로 수집ㆍ이용ㆍ분석하는 것과, 혜택 정보, 광고 정보를 각종 통신 방식 (전화, SMS, LMS, MMS 등)으로 전송하는 것에 동의합니다.
                    </p>
                </div>
            </div>
            <button type="button" className="SecBtn">확인</button>
        </div>
    </div>
    )
}

export default TermsServicePc05;