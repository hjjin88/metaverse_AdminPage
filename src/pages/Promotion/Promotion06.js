
import { useEffect, useState } from "react";

const Promotion06 = ({setPopName }) => {

    return (
        <>
        <div className="Promotion CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
            <div className="popTit">게시판 설정</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div className="modal-body">
                        <h6 className="h6-title pb20">게시판 썸네일 설정</h6>
                        <div className="box-gray mb40">
                            <img className="final-img" src="../resources/img/bg.png" alt="" />
                            <div className="btn-wrap position-absolute box-right">
                                <button type="button" className="btn btn-white btn-sm">변경</button>
                                <button type="button" className="btn btn-white btn-sm">삭제</button>
                            </div>
                        </div>
                        <h6 className="h6-title pb20">게시판 이미지 설정</h6>
                        <div className="box-gray mb40">
                            <img className="final-img" src="../resources/img/bg.png" alt="" />
                            <div className="btn-wrap position-absolute box-right">
                                <button type="button" className="btn btn-white btn-sm">변경</button>
                                <button type="button" className="btn btn-white btn-sm">삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center mb30">
                <button type="button" className="sec-btn-L-on02 tit-20Gy3">확인</button>
            </div>
        </div>
        </>
    )
}
export default Promotion06;
