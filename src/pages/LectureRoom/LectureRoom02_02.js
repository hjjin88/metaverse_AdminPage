const LectureRoom02_02 = ({setPopName }) => {
    return (
        <>
            <div className="Alarm prompt">
                <div className="prompt-con">
                    <p className="prompt-title">강의 나가기</p>
                    <p className="prompt-msg">현재 진행 중인 강의가 종료되며<br/>강의 안내, 질문 목록이 모두 초기화 됩니다.<br/>정말로 종료하시겠습니까?</p>
                </div>
                <div className="Alarm-Btns">
                    <button type="button" onClick={ e => { setPopName(); }}>취소</button>
                    <button type="button">확인</button>
                </div>
            </div>
        </>
    )
}
export default LectureRoom02_02;
