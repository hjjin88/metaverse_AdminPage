import { useEffect, useState } from "react";

const CampusAgreePc = ({ togglePop }) => {

    return (
    <div className="layer connect mem">
        <div>
            <div className="layerHeader">
                <h1 className="layerTit">학생/교직원 인증</h1>
                <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
            </div>
            <div className="layer-contents pdt24 pdb140">
                <dl>
                    <dt className="form-label">개인정보 정보 제3자 제공동의</dt>
                    <dd className="agree-cotents">
                        <p className="inTxt15_02 pdb24">
                            본인은 아래의 내용을 확인하고 숙명여자대학교가 아래와 같이
                            본인의 개인정보를 스노우버스(Snowverse)의 학생/임직원
                            임증을 통한 회원가입 및 서비스 이용을 위해 활용함에 동의합니다.
                        </p>
                        <ol className="inTxt15_02 pdb24">
                            <li>1) 위탁업체(수탁자): (주)LG유플러스, 갈라랩, 메가존</li>
                            <li>2) 업무 내용 : 스노우버스(Snowverse)의 개발 및 운영 관련 업무, 고객 고충 처리에 관련된 지원 업무</li>
                            <li>3) 수집하는 개인정보 항목: 이메일, 이름, 학과, 학번, 교번</li>
                            <li>4) 수집 및 이용 목적: 학생/임직원 인증을 통한 제한적인 접속 및 학생/임직원 전용 서비스 사용</li>
                            <li>5) 개인정보 보유 및 이용기간: 탈퇴 시까지</li>
                        </ol>
                        <p className="text-bl">
                            ※"거부" 누르면 학생/교직원 인증이 불가합니다. 인증을 위해선 동의 해주시기 바랍니다.
                        </p>
                    </dd>
                </dl>
            </div>
            <div className="layer-btns">
                <button type="button" className="SecBtn01">거부</button>
                <button type="button" className="SecBtn">동의하고 계속 하기</button>
            </div>
        </div>
    </div>
    )
}

export default CampusAgreePc;