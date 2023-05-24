import { useState } from "react";

const AFM3dModeTutorial = ({ popName, setPopName }) => {

    const [Toggle, setToggle] = useState(false);

    return (
    <>  
        <div className="Tutorial AFMTutorial">
            <div className="Tutorial-con">
                <p>마우스로 오브젝트를 드래그하여 <br />움직이거나 확대, 축소할 수 있습니다.</p>
            </div>

            <div className="Object">
                <div className="Object-wrap">
                    {/* 대상 이미지 */}
                    <div className="Object-box"/>
                    <div>
                        <img className="Object-img" src="/resources/img/img_cells.svg" alt="대상 이미지" />
                    </div>
                </div>                
            </div>

            <div className="LearnList">
                <dl>
                    <dt className="missionTit-wrap">
                        <div className="missionTit">
                            [1단계] 스캔 준비하기
                            <div className="float-end">(1/12)</div>
                        </div> 
                        <button type="button" 
                            className={`triArrowWt ${Toggle ? 'up' : ''}`}
                            onClick={() => {setToggle(!Toggle)}}>
                        </button>
                    </dt>
                    {Toggle && 
                    <div>
                        <dd className="mission clear"><span>캔틸레버 팁 장착하기</span></dd>
                        <dd className="mission"><span>헤드 장착하기</span></dd>
                    </div>
                    }
                </dl>
            </div>
        </div>
        
    </>
    );
};
export default AFM3dModeTutorial;
