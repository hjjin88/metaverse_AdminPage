import { useEffect, useState } from "react";

const AccountPc = ({ togglePop }) => {

  return (
    <div className="layer layer420" id="dialog1" role="dialog" aria-modal="true" aria-labelledby="dialog_label1" aria-describedby="dialog_desc1" tabIndex="-1">
    <dl className="pdb30">
        <dt className="layerHeader">
            <h1 className="layerTit" id="dialog_label1">계정 연결</h1>
            <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
        </dt>
        <dd className="layer-contents" id="dialog_desc">
            <div className="flexJcSb pdt20">
                <p className="form-label">서비스 이용 안내</p>
                <button type="button" className="txt-btn">개인정보 처리방침 전문</button>
            </div>
            <div className="ui-toggle terms-wrap form-check">
                <div className="btn">
                    <input type="checkbox" name="allAgree" id="allAgree" className="allAgree" />
                    <label htmlFor="allAgree">약관 전체동의</label>
                    <button type="button" aria-expanded="false" aria-controls="toggleContents" id="toggleTrigger" className="toggle-trigger"></button>
                </div>
                <ul className="account terms toggle-contents" aria-labelledby="toggleTrigger" id="toggleContents">
                    <li>
                        <input type="checkbox" name="agree01" id="agree01" className="agree" />
                        <label htmlFor="agree01">(필수) 서비스 이용약관 동의</label>
                        <button type="button"><span className="text-next">보기</span></button>
                    </li>
                    <li>
                        <input type="checkbox" name="agree02" id="agree02" className="agree" />
                        <label htmlFor="agree02">(필수) 개인정보 수집 및 이용 동의</label>
                        <button type="button"><span className="text-next">보기</span></button>
                    </li>
                    <li>
                        <input type="checkbox" name="agree03" id="agree03" className="agree" />
                        <label htmlFor="agree03">(필수) 개인정보 처리 및 위탁, 제3자</label>
                        <button type="button"><span className="text-next">보기</span></button>
                    </li>
                    <li>
                        <input type="checkbox" name="agree04" id="agree04" className="agree" />
                        <label htmlFor="agree04">(선택) 마케팅 정보 수신 동의</label>
                        <button type="button"><span className="text-next">보기</span></button>
                    </li>
                </ul>
            </div>
            <div className="sns-wrap pdt24">
                <button type="button" className="btn btn-google" disabled>구글로 시작하기</button>
                <button type="button" className="btn btn-facebook">페이스북으로 시작하기</button>
                <button type="button" className="btn btn-kakao">카카오로 시작하기</button>
                <button type="button" className="btn btn-naver">네이버로 시작하기</button>
                <button type="button" className="btn btn-apple">Apple로 시작하기</button>
                <button type="button" className="btn">휴대폰 번호로 로그인</button>
                <button type="button" className="btn">이메일 로그인</button>
            </div>
        </dd>
    </dl>
</div>
  )
}

export default AccountPc;