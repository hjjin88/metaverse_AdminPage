import { useEffect, useState } from "react";

const ConsProduce02 = ({ popName, setPopName}) => {

    const [ErrorPop, setErrorPop] = useState(false); 
    
    return (
    <>
        <div className="layer" />
        <div className="ConsProduce">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">상담 등록</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <p className="tit-13Bk">상담 코드를 입력하세요</p>
                    <div className="write-con consCode">
                        <textarea type="text" rows="1" placeholder="1자 이상 입력하세요."/>
                    </div>
                    <div className="Lbtns mgb70">
                        <button type="button" 
                            className="sec-btn-L tit-20Gy3 btn-hover"
                            >
                            입장
                        </button>
                    </div>
                    <p className="txt-15Gy5 center pdb20">상담 등록을 하셔야 코드가 발급됩니다</p>
                    <div className="Lbtns pdb60">
                        <button type="button" 
                            className="sec-btn tit-20Gy3"
                            onClick={() => {setErrorPop(!ErrorPop)}}
                            >
                            상담 등록하기
                        </button>
                    </div>
                    {ErrorPop && 
                        <div className="layer">
                            <div className="Alarm">
                                <dl>
                                    <dt>오류</dt>
                                    <dd className="txt-15Gy5">상담 코드가 올바르지 않습니다</dd>
                                </dl>
                                <button type="button" className="sec-btn-100-on02 ">확인</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
    );
};
export default ConsProduce02;
