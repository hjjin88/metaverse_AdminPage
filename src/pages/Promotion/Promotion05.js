
import { useEffect, useState } from "react";

const Promotion05 = ({setPopName }) => {

    return (
        <>
        <div className="Promotion CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
            <div className="popTit">게시판 설정</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div className="modal-body">
                        <h6 className="h6-title pb20">게시판 썸네일 설정</h6>
                        <div className="box-gray type1 mb40">
                            <p className="mb10"><img src="../resources/img/sendSquare36.svg" alt="" /></p>
                            <span className="txt">※ 1MB 미만의 jpg, jpeg, png, bmp 이미지만 설정할 수 있습니다.</span>
                            <button type="button" className="fileselect mt20">파일선택 &gt;</button>
                        </div>
                        <h6 className="h6-title pb20">게시판 이미지 설정</h6>
                        <div className="box-gray type1 mb30">
                            <p className="mb10"><img src="../resources/img/sendSquare36.svg" alt="" /></p>
                            <span className="txt">※ 3MB 미만의 jpg, jpeg, png, bmp 이미지만 설정할 수 있습니다.</span>
                            <button type="button" className="fileselect mt20">파일선택 &gt;</button>
                        </div>
                    </div>
                    <div className="center mb10">
                        <button type="button" className="sec-btn-L tit-20Gy3">확인</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Promotion05;
