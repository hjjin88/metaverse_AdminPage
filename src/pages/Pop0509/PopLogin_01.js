import { useEffect, useState } from "react";

const PopLogin_01 = ({ setPopName }) => {

  return (
    <div className="layer new_pop">
        <div className="pop_loginJoin bg_pink">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="layer_top">
                <img className="pop_logo" src="/resources/img/pop_logo.svg" alt="유버스 로고" />
                <h1 className="main_tit"><strong>환영합니다!</strong></h1>
            </div>
            <div className="layer_cont">
                <ul className="loginJoin_wrap">
                    <li className="join_btn">
                        <button type="button">
                            <p className="txt_wrap">
                                <span className="sub_txt">유버스가 처음이라면,</span>
                                <strong className="main_txt">새로운 아바타 만들기</strong>
                            </p>                            
                        </button>
                    </li>
                    <li className="login_btn">
                        <button type="button">
                            <p className="txt_wrap">
                                <span className="sub_txt">가입한 계정이 있다면</span>
                                <strong className="main_txt">로그인해서 이용하기</strong>
                            </p>
                        </button>
                    </li>
                </ul>                
            </div>
        </div>
    </div>
  )
}

export default PopLogin_01;