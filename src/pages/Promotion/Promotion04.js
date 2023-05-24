
import { useEffect, useState } from "react";

const Promotion04 = ({setPopName }) => {

    const [View, setView] = useState(false); 

    return (
        <>
        <div className="Promotion CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
            <div className="popTit">홍보물 설정</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div className="modal-body">
                        <h6 className="h6-title pb20">홍보물 썸네일 설정</h6>
                        <div 
                        className={`box-gray type1 mb40 ${View ? "d-none" : null }`}
                        >
                            <p className="mb10"><img src="../resources/img/sendSquare36.svg" alt="" /></p>
                            <span className="txt">※ 1MB 미만의 jpg, jpeg, png, bmp 이미지만 설정할 수 있습니다.</span>
                            <button type="button" className="fileselect mt20" onClick={() => {setView(!View)}} >파일선택 &gt;</button>
                        </div>
                        {View && 
                            <div className="box-gray mb40">
                                <img className="final-img" src="../resources/img/bg.png" alt="" />
                                <div className="btn-wrap position-absolute box-right">
                                    <button type="button" className="btn btn-white btn-sm">변경</button>
                                    <button type="button" className="btn btn-white btn-sm">삭제</button>
                                </div>
                            </div>
                        }
                        <h6 className="h6-title pb20">홍보물 링크 설정</h6>
                        <div className="linkaddress pb200">
                            <input type="text" className="linkaddresswrite w-100" placeholder="홍보물을 클릭했을 때 이동할 홈페이지를 작성해주세요." />
                            <button type="button" 
                            className={`closeGy20 ${View ? null : "d-none" }`}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center mb30">
                <button type="button" 
                className={`sec-btn-L${View ? "-on02" : null } tit-20Gy3`}
                >확인</button>
            </div>
        </div>
        </>
    )
}
export default Promotion04;
