
import { useEffect, useState } from "react";

const StudentCertified02 = ({setPopName }) => {

    const [View, setView] = useState(0); 

    return (
        <>
            <div className="layer" />
            <div className="StudentCertified ty02 CtPop">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                <div className="popTit">학생/교직원 인증</div>
                <div className="layer-wrap">
                    <div className="layer-cont">
                        <div className="stu-certi">
                            <p className="txt-notice">현재 캠퍼스 입장 시 학교 이메일 인증이 필요합니다. <br />이메일을 입력해 주세요.</p>
                            <p className="txt-warning">*숙명여대 이메일 주소(@sookmung.ac.kr)로 입력 바랍니다.</p>
                            <div className="agr">
                                <button type="button" className={`agr_check ${View ? 'on' : null }`} onClick={() => {setView(!View)}}>
                                    개인정보 처리 및 위탁, 제3자 제공동의
                                </button>
                                <button type="button" className="txt-12Bk4" onClick={(e) => {setPopName();}}>보기&gt;</button>
                            </div>
                            <button type="button" className={`google ${View ? null : 'off' }`}>구글로 시작하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StudentCertified02;
