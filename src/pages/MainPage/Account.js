
import { useEffect, useState } from "react";

const Account = ({setPopName }) => {

    const [Toggle, setToggle] = useState(false); 
    const [Check, setCheck] = useState(false); 

    return (
        <>
            <div className="layer" />
            <div className="Account CtPop">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                <div className="popTit">경찬 님의 스터디 현황</div>
                <div className="Account-con">
                    <div className="con-left">
                        <div className="left-tit">
                            <h6 className="tit-13Bk">서비스 이용 안내</h6>
                            <button type="button" href="#none" className="link-fulldoc">개인정보 처리방침 전문</button>
                        </div>
                        <div className="accdian-wrap">
                            <div className="acc-item">
                                <div className="acc-tit" onClick={() => {setToggle(!Toggle)}}>
                                    <label className="checkbox-label" for="authcheck_all">
                                        <input type="checkbox" className="checkbox-input" name="authcheck" id="authcheck_all" />
                                        <button 
                                        className={`checkbox-box ${Check ? "on" : null }`}
                                        onClick={() => {setCheck(!Check)}}/>
                                        약관 전체동의{" "}
                                    </label>
                                        {Toggle ? <button type="button" className="downArrow"></button> : <button type="button" className="downArrow up"></button>} 
                                </div>
                            { Toggle &&
                                <div className="acc-cont">
                                    <div className="form-check">
                                        <label className="checkbox-label" for="authcheck1">
                                            <input type="checkbox" className="checkbox-input" name="authcheck" id="authcheck1" checked />
                                            <button type="button"
                                            className={`checkbox-box ${Check ? "on" : null }`}
                                            onClick={() => {setCheck(!Check)}}/>
                                            (필수) 서비스 이용약관 동의
                                        </label>
                                        <button type="button" className="viewlink">보기&gt;</button>
                                    </div>
                                    <div className="form-check">
                                        <label className="checkbox-label" for="authcheck2">
                                            <input type="checkbox" className="checkbox-input" name="authcheck" id="authcheck2" checked />
                                            <button type="button"
                                            className={`checkbox-box ${Check ? "on" : null }`}
                                            onClick={() => {setCheck(!Check)}}/>
                                            (필수) 개인정보 수집 및 이용 동의
                                        </label>
                                        <button type="button" className="viewlink">보기&gt;</button>
                                    </div>
                                    <div className="form-check">
                                        <label className="checkbox-label" for="authcheck3">
                                            <input type="checkbox" className="checkbox-input" name="authcheck" id="authcheck3" checked />
                                            <button type="button"
                                            className={`checkbox-box ${Check ? "on" : null }`}
                                            onClick={() => {setCheck(!Check)}}/>
                                            (필수) 개인정보 처리 및 위탁, 제3자 제공동의
                                        </label>
                                        <button type="button" className="viewlink">보기&gt;</button>
                                    </div>
                                    <div className="form-check">
                                        <label className="checkbox-label" for="authcheck4">
                                            <input type="checkbox" className="checkbox-input" name="authcheck" id="authcheck4" checked />
                                            <button type="button"
                                            className={`checkbox-box ${Check ? "on" : null }`}
                                            onClick={() => {setCheck(!Check)}}/>
                                            (선택) 마케팅 정보 수신 동의
                                        </label>
                                        <button type="button" className="viewlink">보기&gt;</button>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`con-right ${Check ? null : "off" }`}>
                        <button type="button" className="google">구글로 시작하기</button>
                        <button type="button" className="facebook">페이스북으로 시작하기</button>
                        <button type="button" className="cacao">카카오로 시작하기</button>
                        <button type="button" className="naver">카카오로 시작하기</button>
                        <button type="button" className="apple">Apple로 시작하기</button>
                        <button type="button" >휴대폰 번호로 로그인</button>
                        <button type="button" >이메일로 로그인</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account;
