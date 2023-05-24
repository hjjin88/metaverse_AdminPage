const LectureRoom02_01 = ({setPopName }) => {
    return (
        <>
            <div className="Alarm prompt">
                <div className="prompt-con">
                    <p className="prompt-title">강의 나가기</p>
                    <p className="prompt-msg">강의에서 나가시겠습니까?</p>
                </div>
                <div className="Alarm-Btns">
                    <button type="button" onClick={ e => { setPopName(); }}>취소</button>
                    <button type="button">확인</button>
                </div>
            </div>
        </>
    )
}
export default LectureRoom02_01;
