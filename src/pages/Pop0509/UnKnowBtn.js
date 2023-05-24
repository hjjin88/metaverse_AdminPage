
import { useEffect, useState } from "react";

const UnKnowBtn = ({ popName, setPopName }) => {

    return (
        <>
        <div className="UnKnowBtn">
            <div className="Btns">
                {/* 05/09 추가 팝업 */}
                <button onClick={ e => { setPopName('PopLogin_01'); }} style={{background:'#c64cdc'}}>0509 추가 01 로그인/가입하기 선택</button>
                <button onClick={ e => { setPopName('PopLogin_02'); }} style={{background:'#c64cdc'}}>0509 추가 02 약관 동의</button>
                <button onClick={ e => { setPopName('PopLogin_03'); }} style={{background:'#c64cdc'}}>0509 추가 03 약관 동의 - 마케팅 수신 동의</button>
                <button onClick={ e => { setPopName('PopLogin_04'); }} style={{background:'#c64cdc'}}>0509 추가 04 아바타 만들기</button>
                <button onClick={ e => { setPopName('PopLogin_05'); }} style={{background:'#c64cdc'}}>0509 추가 05 계정 연동</button>
                <button onClick={ e => { setPopName('PopLogin_06'); }} style={{background:'#c64cdc'}}>0509 추가 06 계정 연동 (학교 계정으로 연동하기)</button>
                <button onClick={ e => { setPopName('PopLogin_07'); }} style={{background:'#c64cdc'}}>0509 추가 07 로그인</button>
                <button onClick={ e => { setPopName('PopLogin_08'); }} style={{background:'#c64cdc'}}>0509 추가 08 이메일 로그인</button>
                <button onClick={ e => { setPopName('PopLogin_09'); }} style={{background:'#c64cdc'}}>0509 추가 09 이메일 인증</button>
            </div>
        </div>
        </>
    )
}
export default UnKnowBtn;
