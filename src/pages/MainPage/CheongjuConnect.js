
import { useEffect, useState } from "react";

const CheongjuConnect = ({setPopName }) => {

    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
      setisOn(!isOn)
    }
    const [Complete, setComplete] = useState(false);

    return (
        <>
        <div className="Connect CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
            <div className="popTit">청주대 재학생/교직원 인증</div>
            <div className="popCon">
                <div className="inp-wrap">
                    <div className="inp-tit">필수정보</div>
                    <input type="text" placeholder="이름을 입력해주세요"/>
                    <input type="text" placeholder="학번 또는 교번을 입력해주세요"/>
                </div>
                <div className="inp-wrap">
                    <div className="inp-tit pb10 pt20">인증방법</div>
                    <div className="mem-btns">
                        <button type="button" 
                        className={`mem-btn ${isOn ? null : "on"}`}
                        onClick={toggleHandler} 
                        >휴대폰번호 인증</button> 
                        <button type="button" 
                        className={`mem-btn ${isOn ? "on" : null}`}
                        onClick={toggleHandler} 
                        >이메일 인증</button>
                    </div>
                    <span className="er">*에델바이스에 등록된 휴대폰번호를 입력하세요.</span>
                    {isOn === false ?
                    <div className="inp-wrap">
                        <div className="inp-con ctr">
                            <input type="tel" placeholder="휴대폰 번호(-빼고 숫자만 입력)" />
                            <button type="button" className="inp-btn">인증<br/>요청</button>
                        </div>
                        <div className="inp-con ctr">
                            <input type="text" placeholder="인증번호 입력" />
                            <button type="button" className="inp-btn">인증<br/>확인</button>
                        </div>
                    </div>
                    :
                    <div className="inp-wrap">
                        <div className="inp-con ctr">
                            <input type="email" placeholder="이메일을 입력해 주세요" />
                            <button type="button" className="inp-btn">인증<br/>요청</button>
                        </div>
                        <div className="inp-con ctr">
                            <input type="text" placeholder="인증번호 입력" />
                            <button type="button" className="inp-btn">인증<br/>확인</button>
                        </div>
                    </div>
                    }
                </div>
                <div className="inp-wrap">
                    <div className="inp-tit pt20">소속 학교 내 닉네임</div>
                    <div className="inp-con ctr">
                        <input type="text" placeholder="변경 닉네임(20자 이내로 입력)" />
                        <button type="button" className="inp-btn">확인</button>
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
export default CheongjuConnect;
