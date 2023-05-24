import { useEffect, useState } from "react";

const AccountMo02 = ({ togglePop }) => {

  return (
    <div className="layer layer360">
    <dl className="pdb30">
        <dt className="layerHeader">
            <h1 className="layerTit">로그인</h1>
            <button type="button" className="layerClose" onClick={togglePop}><span>레이어 닫기</span></button>
        </dt>
        <dd className="layer-contents">
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

export default AccountMo02;