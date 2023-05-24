const LectureRoom00 = ({setPopName }) => {
    return (
        <>
            <div className="Alarm prompt">
                <div className="prompt-con">
                    <p className="prompt-title">강의 정보</p>
                    <div className="prompt-util">
                        <div className="request-input request-input-round">
                            <input type="text" placeholder="강의정보를 입력하세요."/>
                            <button type="button" className="btn-edit"><i className="icon-edit">edit</i></button>
                        </div>
                    </div>
                </div>
                <div className="Alarm-Btns">
                    <button type="button" onClick={ e => { setPopName(); }}>취소</button>
                    <button type="button">확인</button>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
