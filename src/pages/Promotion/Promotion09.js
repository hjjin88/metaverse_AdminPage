
import { useEffect, useState } from "react";

const Promotion09 = ({setPopName }) => {

    return (
        <>
        <div className="CtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
            <div className="popTit">홍보물</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                    <img className="pb10" src="../resources/img/promotion.png" alt="홍보물 이미지"/>
                    <img className="pb10" src="../resources/img/promotion.png" alt="홍보물 이미지"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Promotion09;
