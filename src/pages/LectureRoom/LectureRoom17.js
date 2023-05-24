const LectureRoom00 = ({setPopName}) => {
    return (
        <>
            <div className="layer"/>
            <div className="lecture-room layer-right-bottom">
                <button type="button" className="subclose close16" onClick={(e) => {
                    setPopName();
                }}/>
                <div className="layer-wrap">
                    <div className="layer-head">질문하기</div>
                    <div className="layer-body request-body">
                        <div className="request-textarea ty01">
                            <textarea
                                name="" id="" cols="30" placeholder="
                                강의 정보는 1~100자 이내로 입력해주세요.&#13;&#10;
                                ex)&#13;&#10;
                                강사 : 홍길동&#13;&#10;
                                강의제목 : 한국어 초급&#13;&#10;
                                유의사항 : 수업 시간 엄수"
                            ></textarea>
                        </div>
                    </div>
                    <div className="layer-footer">
                        <button type="button" className="button button-outline">확인</button>
                        {/*<button type="button" className="button button-primary">확인</button>*/}
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
