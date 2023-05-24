
import { useEffect, useState } from "react";

const Connect = ({setPopName }) => {

    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
      setisOn(!isOn)
    }
    const [Complete, setComplete] = useState(false);

    return (
        <>
        <div className="Connect CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
            <div className="popTit">학생/교직원 인증</div>
            <div className="popCon">
                <div className="inp-wrap">
                    <div className="inp-tit">필수정보</div>
                    <input type="email" placeholder="이메일을 입력하세요."/>
                    <input type="text" placeholder="이름"/>
                </div>
                <div className="inp-wrap">
                    <div className="inp-tit pb10 pt20">회원구분</div>
                    <div className="mem-btns">
                        <button type="button" 
                        className={`mem-btn ${isOn ? null : "on"}`}
                        onClick={toggleHandler} 
                        >학생</button> 
                        <button type="button" 
                        className={`mem-btn ${isOn ? "on" : null}`}
                        onClick={toggleHandler} 
                        >교직원</button>
                    </div>
                    {isOn === false ?
                    <div className="inp-wrap">
                        <input type="text" placeholder="학번" />
                        <input type="text" placeholder="학과" />
                        <input type="tel" placeholder="휴대폰 번호(-빼고 숫자만 입력)" />
                        <span className="er">인증번호를 정확히 입력해 주세요.</span>
                    </div>
                    :
                    <div className="inp-wrap">
                        <input type="text" placeholder="교번" />
                        <input type="tel" placeholder="휴대폰 번호(-빼고 숫자만 입력)" />
                        <span className="er">인증번호를 정확히 입력해 주세요.</span>
                    </div>
                    }
                </div>
                <div className="inp-wrap">
                    <div className="inp-tit pt20">소속 학교 내 닉네임</div>
                    <div className="inp-con ctr">
                        <input type="text" placeholder="변경 닉네임(20자 이내로 입력)" />
                        <button type="button" className="inp-btn">인증<br/>확인</button>
                    </div>
                    <span className="er">닉네임을 정확히 입력해 주세요.</span>
                </div>
            </div>
            <div className="sec-btns">
                <button type="button" className="sec-btn">이전</button>
                <button type="button" 
                className={`sec-btn ${Complete ? "off03" : "on02"}`}
                onClick={() => {setComplete(!Complete)}}
                >인증 완료</button>
            </div>
        </div>
        </>
    )
}
export default Connect;
