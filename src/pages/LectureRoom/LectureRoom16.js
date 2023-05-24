const LectureRoom00 = ({setPopName }) => {
    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-right-bottom">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="layer-wrap">
                    <div className="layer-head">강의 정보</div>
                    <div className="layer-body">
                        <div className="question-list">
                            <div className="question-list-head">
                                <strong>강의 안내</strong>
                                <div className="class_name_box">
                                    <div className="class_name txt-12Gy6">2024 현우진의 뉴런 - 수학Ⅰ어쩌고저쩌고</div>
                                    <button type={"button"} className="edit-pen" />
                                </div>
                            </div>
                            <table className="table-list">
                            <thead>
                            <tr>
                                <th><button type={"button"} className="question-list-button">질문목록</button></th>
                                <th></th>
                                <th></th>
                                <th><button type={"button"} className="question-list-add">질문하기</button></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <span className="question-list-user"><img src="/resources/img/bg.png" alt=""/></span>
                                </td>
                                <td>학생</td>
                                <td>질문이 있습니다.
                                    <i className="new"></i>
                                </td>
                                <td><span className="unanswered">미답변</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="question-list-user"><img src="/resources/img/bg.png" alt=""/></span>
                                </td>
                                <td>학생</td>
                                <td>질문이 있습니다.</td>
                                <td><span>답변완료</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="question-list-user"><img src="/resources/img/bg.png" alt=""/></span>
                                </td>
                                <td>학생</td>
                                <td>질문이 있습니다.</td>
                                <td><span className="unanswered">미답변</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="question-list-user"><img src="/resources/img/bg.png" alt=""/></span>
                                </td>
                                <td>학생</td>
                                <td>질문이 있습니다.</td>
                                <td><span>답변완료</span></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LectureRoom00;
