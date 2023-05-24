
import { useEffect, useState } from "react";
// import styled, { css } from 'styled-components';

const RtBar = ({ popName, setPopName }) => {
    // 변수 추가 내용 확인하기
    // static defaultProps={
    //     name:'기본이름'
    // }

    const [Person, setPerson] = useState(false);
    const [Speaker, setSpeaker] = useState(false);
    const [Camera, setCamera] = useState(false);
    const [Mike, setMike] = useState(false);
    
    return (
        <>
        <div className="RtBar txt-11Wt"> 
            <div> 
                <button type="button">
                    <img src="/resources/img/fullScreen24.svg" alt="전체화면 이미지" />
                    <p>전체화면</p>
                </button>
                <button type="button" onClick={() => {setPerson(!Person)}}>
                    {Person ? <div className="person3rd24" /> : <div className="personFirst24" />} 
                    <p>시점</p>
                </button>
                <button type="button" onClick={() => {setSpeaker(!Speaker)}}>
                    {Speaker ? <div className="speakerOff24" /> : <div className="speakerOn24" />} 
                    <p>스피커</p>
                </button>
            </div>
            <div> 
                <button type="button" onClick={ e => { setPopName('MyProfile'); }}>
                    <img className="pfp" src="/resources/img/img2.png" alt="마이프로필 이미지" />
                    <p>마이</p>
                </button>
                <button type="button">
                    <img src="/resources/img/msg24.svg" alt="메시지 이미지" onClick={ e => { setPopName('Message'); }}/>
                    <p>메세지</p>
                    <div className="-No txt-9Wt">99</div>
                </button>
                <button type="button" onClick={() => {setCamera(!Camera)}}>
                    <img src="/resources/img/cameraOn24.svg" alt="카메라 이미지" />
                    <p>카메라</p>
                    {Camera ? <span className="markOn" /> : <span className="markOff" />} 
                </button>
                <button type="button" onClick={() => {setMike(!Mike)}}>
                    <img src="/resources/img/mikeOn24.svg" alt="카메라 이미지" />
                    <p>카메라</p>
                    {Mike ? <span className="markOn" /> : <span className="markOff" />} 
                </button>
            </div>
        </div>
        </>
        )
}
export default RtBar;
