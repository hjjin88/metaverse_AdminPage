import { useEffect, useState } from "react";

const ConsProduce = ({ popName, setPopName}) => {

    const [view, setView] = useState(false); 
    const [Copypop, setCopypop] = useState(false); 


    return (
    <>
        <div className="layer" />
        <div className="ConsProduce">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
            <div className="popTit">상담 등록</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <p className="tit-13Bk pdb15">상담실 공지사항을 입력해주세요 <span className="txt-13Bk3">(50자 이내로 입력)</span></p>
                    <div className={`write-con detail ${view ? "more" : null}`}>
                        <textarea type="text" maxLength="50" rows="1" placeholder="1자 이상 입력하세요."/>
                    </div>
                    <div className="center">
                        <button type="button" 
                            className={`sec-btn-L tit-20Gy3 ${view ? "off01" : "off02"}`}
                            onClick={() => {setView(!view)}} 
                            >
                            등록
                        </button>
                    </div>
                    {view && 
                    <div className="ConsProduce-inner">
                        <p className="txt-13Gy2 pdb15">이 코드를 복사하여 초대할 사용자에게 보냅니다. 나중에도 사용할 수 있도록 코드를 저장하세요.</p>
                        <div className="write-con code">
                            <textarea type="text" maxLength="35" rows="1" placeholder="최대 35자까지 입력하세요."/>
                            <button type="button" className="copy20" onClick={() => {setCopypop(!Copypop)}} >
                                {Copypop && 
                                    <div className="Copypop-bk">코드를 복사했습니다.</div>
                                }
                            </button>
                        </div>
                        <div className="center pdb10">
                            <button type="button" 
                                className="sec-btn-L-on02 tit-20Gy3"
                                onClick={(e) => {setPopName();}}>
                                상담실 바로가기
                            </button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    </>
    );
};
export default ConsProduce;
