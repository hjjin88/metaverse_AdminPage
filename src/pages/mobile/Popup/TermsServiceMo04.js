import { useEffect, useState } from "react";

const TermsServiceMo04 = ({ togglePop }) => {

    return (
    <div className="layer priagree">
        <div>
            <div className="layerHeader">
                <h1 className="layerTit" id="dialog_label1">(필수) 개인정보 처리 및 위탁,<br/>제3자 제공동의 전문</h1>
            </div>
            <div className="layer-contents">
                <div className="priagree-cotents">
                    <p className="text">회사는 서비스 향상을 위해서 아래와 같이 개인정보를 처리 위탁하고 있으며, 관계 법령에 따라 위탁 계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 감독하고 있습니다.</p>
                    <h4>[개인정보 위탁업체 및 위탁업무 내용]</h4>
                    <table className="priagree" title="개인정보 위탁업체 및 위탁업무 내용">
                        <colgroup>
                            <col width="" />
                            <col width="75%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <td>위탁 받은 자</td>
                                <td>위탁 업무 내용</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>㈜엘비휴넷</td>
                                <td>일반 상담 및 민원 접수 등 고객센터 업무</td>
                            </tr>
                            <tr>
                                <td>(주)갈라랩</td>
                                <td>서비스 개발 및 운영 관련 업무, 고객 고충 처리에 관련된 지원업무</td>
                            </tr>
                            <tr>
                                <td>(주)메가존</td>
                                <td>서비스 개발 및 운영 관련 업무, 고객 고충 처리에 관련된 지원업무</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>[제 3자 제공업체 및 목적, 정보종류, 보유 및 이용기간]</h4>
                    <table className="priagree" title="제 3자 제공업체 및 목적, 정보종류, 보유 및 이용기간">
                        <thead>
                            <tr>
                                <td>제공받는자</td>
                                <td>제공목적</td>
                                <td>제공정보종류</td>
                                <td>조유 및 이용기간</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>㈜엘비휴넷</td>
                                <td>- 신규 가입 고객 상담<br/>
                                    - 서비스 관련 문의</td>
                                <td rowSpan="3">ID, email, 고객명, 
                                    생년월일, 성별, 주소</td>
                                <td rowSpan="3">정보 제공일 부터 서비스 해지 또는 제공 계약 종료일 중 먼저 도래하는 시점 까지 이용 하며, 이용 기간이 종료 한 시점에 파기. 단, 다른 법령에 특별한 규정이 있을 경우 관련 법령에 따라 보관.</td>
                            </tr>
                            <tr>
                                <td>(주)갈라랩</td>
                                <td>- 서비스 관련 문의 및 장애 응대<br/>
                                    - 서비스 개발<br/>
                                    - 서비스 이용자 고충 처리</td>
                            </tr>
                            <tr>
                                <td>(주)메가존</td>
                                <td>- 서비스 관련 문의 및  장애 응대<br/>
                                    - 서비스 개발<br/>
                                    - 서비스 이용자 <br/>고충 처리</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button type="button" className="SecBtn">확인</button>
        </div>
    </div>
    )
}

export default TermsServiceMo04;