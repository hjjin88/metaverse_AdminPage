import { useState } from "react";

const AFM3dMode = ({ popName, setPopName }) => {

    const [Toggle, setToggle] = useState(false); 
    const [isOn, setisOn] = useState(false); 

    return (
    <>  
        <div className="layer">
            <div className="Object">            
                <div className="Object-wrap">
                    {/* 대상 이미지 */}
                    <div className="Object-box"/>
                    <div>
                        <img className="Object-img" src="/resources/img/img_cells.svg" alt="대상 이미지" />
                    </div>
                    {/* 확대 아이콘 */}
                    <button type="button" className="Object-zoom">
                        <img src="/resources/img/icon_zoom.svg" alt="확대 아이콘" />
                    </button>
                </div>
            </div>

            <div className="LearnList">
                <dl>
                    <dt className="missionTit-wrap" onClick={() => {setToggle(!Toggle)}}>
                        <div>[15단계]</div>
                        <div className="missionTit">
                            일이삼사오육칠팔구십일이삼사오육칠팔구십
                        </div>                     
                        <div className="missionTit-Page">(7/12)</div>
                        <button type="button" className={`triArrowWt ${Toggle ? 'up' : ''}`} />
                    </dt>

                    {Toggle && 
                    <div className="LearnList-Menu">
                        {/* <dd className="mission clear"><button>서른자까지테스트요옴서른자까지테스트요옴서른자까지테스트요옴일이삼사오</button></dd> */}
                        <dd className="mission clear"><button type="button">헤드 장착하기</button></dd>
                        <dd className="mission"><button type="button">광학카메라 조정하기</button></dd>
                        <dd className="mission"><button type="button">레이저 조정하기</button></dd>
                        <dd className={`mission ${isOn ? '' : 'off'}`} onClick={() => {setisOn(!isOn)}}><button type="button">클리 시 변경</button></dd>
                        <dd className="mission off"><button type="button">Z-stage 조정하기 1</button></dd>
                        <dd className="mission off"><button type="button">Focus stage 조정하기 1</button></dd>
                        <dd className="mission off"><button type="button">Xy stage 조정하기</button></dd>
                        <dd className="mission off"><button type="button">Focus stage 조정하기 2</button></dd>
                        <dd className="mission off"><button type="button">스캔준비하기</button></dd>
                        <dd className="mission off"><button type="button">서른자까지테스트요옴</button></dd>
                        <dd className="mission off"><button type="button">스캔준비하기</button></dd>
                        <dd className="mission off"><button type="button">서른자까지테스트요옴</button></dd>
                    </div>
                    }                
                </dl>
            </div>

            <div className="Interaction-guide">
                <p className="guide-txt">
                    진행해야 하는 인터렉션 가이드 텍스트는 최대 500자까지 입력이 가능하며 가운데 정렬<br />
                    해당 높이를 넘어가면 자동으로 스크롤 처리됨<br />
                    프로그램 Z-stage 바의 하단을 클릭하여 육안으로 확인할 수 있는 부근까지 Z-stage를 내려 시료 포면에 최대한 접근시켜 주세요. 바의 가운데를 클릭하면 헤드를 천천히 이동시킬 수 있습니다.<br />
                    프로그램 Z-stage 바의 하단을 클릭하여 육안으로 확인할 수 있는 부근샘플 시료 장착하기
                    프로그램 Z-stage 바의 하단을 클릭하여 육안으로 확인할 수 있는 부근까지 Z-stage를 내려 Focus stage 조정하기 1
                    프로그램 Z-stage 바의 하단을 클릭하여 육안으로 확인할 수 있는 부근까지 Z-stage를 내려 시료 포면에 최대한 접근시켜 주세요. 바의 가운데를 클릭하면 헤드를 천천히 이동시킬 수 있습니다.
                    프로그램 Z-stage 바의 하단을 클릭하여 육안으로 확인할 수 있는 부근샘플 시료 장착하기
                </p>
            </div>

            <div className="More">
                <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
                <div className="more-ty03 txt-11">
                    <button type="button" onClick={ e => { setPopName('Tutorial'); }}><img src="/resources/img/tutorial24.svg" alt="튜토리얼 버튼 이미지" /><p>튜토리얼</p></button>
                    <button type="button" onClick={ e => { setPopName(); }}><img src="/resources/img/screenshot24.svg" alt="스크린샷 버튼 이미지" /><p>스크린샷</p></button>
                    <button type="button" onClick={ e => { setPopName('Announcement'); }}><img src="/resources/img/announcement24.svg" alt="공지사항 버튼 이미지" /><p>공지사항</p></button>
                    <button type="button" onClick={ e => { setPopName('Tour'); }}><img src="/resources/img/touring24.svg" alt="투어하기 버튼 이미지" /><p>캠퍼스 투어<br/>안내하기</p></button>
                    <button type="button" onClick={ e => { setPopName('Invite'); }}><img src="/resources/img/invite24.svg" alt="초대하기 버튼 이미지" /><p>초대하기</p></button>
                    <button type="button" onClick={ e => { setPopName('NpcInstl'); }}><img src="/resources/img/npc-install24.svg" alt="NPC설치 버튼 이미지" /><p>NPC설치</p></button>
                    <button type="button" onClick={ e => { setPopName(); }}><img src="/resources/img/setting.svg" alt="설정 버튼 이미지" /><p>설정</p></button>
                </div>
            </div>
        </div>
    </>
    );
};
export default AFM3dMode;
