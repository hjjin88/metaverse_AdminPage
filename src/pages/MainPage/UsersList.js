
import { useEffect, useState } from "react";

const UsersList = ({setPopName }) => {

    const [View, setView] = useState(false); 

    return (
        <>
        <div className="UsersList TopCtPop">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
           {/* <div className="UsersList_img"><img src="/resources/img/bg.png" alt="프로필 이미지 이미지" /></div> */}
            <div className="popTit">안내 도우미 눈송이</div>
            <div className="con-wrap">
                <div className="guide_con">
                    <img className="guide_img" src="/resources/img/guide_img.svg" alt="안내원 이미지" />
                    <div className="guide_msg">
                        자, 그럼 스터디윗미 설명을 시작해 볼까?<br/>
                        먼저 자리에 앉아 타이머를 켜고 공부를 시작해 봐!<br/>
                        {/* 기록 체크도 하고 랭킹도 볼 수 있다던걸?<br/>
                        모니터가 있는 곳이 바로 ‘스터디윗미’존이야!<br/>
                        다른 송이의 모습을 보면서 같이 공부할 수 있어<br/>
                        물론, 내 모습을 보여주는 것도 가능하다구! */}
                    </div>
                </div>
                <div className="guide_lists">
                    <button type="button" 
                    className={`${View ? "on" : null}`}
                    onClick={() => {setView(!View)}} 
                    >스터디 안내</button>
                    <button type="button" 
                    className={`${View ? "on" : null}`}
                    onClick={() => {setView(!View)}} 
                    >스터디 윗미</button>
                    <button type="button" 
                    className={`${View ? "on" : null}`}
                    onClick={() => {setView(!View)}} 
                    >그룹 스터디</button>
                    <button type="button" 
                    className={`${View ? "on" : null}`}
                    onClick={() => {setView(!View)}} 
                    >친구초대</button>
                    <button type="button" 
                    className={`${View ? "on" : null}`}
                    onClick={() => {setView(!View)}} 
                    >기타</button>
                    <button type="button" 
                    className={`${View ? "on" : null}`}
                    onClick={() => {setView(!View)}} 
                    >스터디 안내</button>
                    <button type="button" 
                    className={`${View ? "on" : null}`}
                    onClick={() => {setView(!View)}} 
                    >스터디 윗미</button>
                    <button type="button" 
                    className={`${View ? "on" : null}`}
                    onClick={() => {setView(!View)}} 
                    >그룹 스터디</button>
                    <button type="button" 
                    className={`${View ? "on" : null}`}
                    onClick={() => {setView(!View)}} 
                    >친구초대</button>
                    <button type="button" 
                    className={`${View ? "on" : null}`}
                    onClick={() => {setView(!View)}} 
                    >기타</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default UsersList;
