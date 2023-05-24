import {useState} from "react";

const ToggleItem = ({ placeholder, item = []}) => {

    const [SelectToggle, setSelectToggle] = useState(false);

    return (
        <div className={`request-select${SelectToggle ? ' request-select-toggle' : ''}`}>
            <button className="request-select-head" onClick={() => setSelectToggle((prev) => !prev)}>
                <span>{placeholder}</span>
            </button>

            {SelectToggle && <div className="request-select-list">
                {item.map((value, key) => (<button type={"button"} className="request-select-item" key={key}>{value}</button>))}
            </div>}
        </div>
    );
};
const LectureRoom14 = ({setPopName }) => {

    const [View, setView] = useState(false); 

    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-center layer-none-scroll">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="layer-wrap">
                    <div className="layer-head">투표 만들기</div>
                    <div className="layer-body">
                        <div className="poll-create">
                            <div className="request-group">
                                <strong className="request-title">제목</strong>
                                <div className="request-input"><input type="text" placeholder="제목을 입력하세요."/></div>
                            </div>
                            <div className="request-group">
                                <strong className="request-title">항목 (최소 2개 입력)</strong>
                                <div className="request-input"><input type="text" placeholder="항목을 입력하세요."/></div>
                                <div className="request-input"><input type="text" placeholder="항목을 입력하세요."/></div>
                                <div className="request-input">
                                    <input type="text" placeholder="항목을 입력하세요."/>
                                    <button className="request-remove">remove</button>
                                </div>
                            </div>
                            <div className="request-group request-inline">
                                <strong className="request-title">투표시간</strong>
                                <ToggleItem placeholder="1분" item={['1분','2분']} />
                            </div>
                        </div>
                    </div>
                    <div className="layer-footer">
                        <button type="button" 
                        className={`sec-btn-L${View ? "on02" : "off02"} tit-20Gy3`}
                        onClick={() => {setView(!View)}} 
                        >시작</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom14;
