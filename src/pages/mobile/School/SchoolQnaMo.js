import MainFooterMo from "../MainFooterMo";
import MainHeaderMo from "../MainHeaderMo";

const SchoolQnaMo = () => {
    return (
    <div className="wrapper school_wrap uverse_wrap" id="wrapper">
        <MainHeaderMo selectedGnbIndex={1} />
        <main className="container uverse_container">
            <div className="contents" id="contents">
                <section className="Partnership qna-wrap" id="Partnership">
                    <h3 className="page-title">자주하는 질문</h3>
                    <div className="ui-accordion qna-contents">
                        <dl className="">
                            <dt className="accordion-title">
                                <button type="button" aria-expanded="false" className="accordion-trigger" aria-controls="panel1" id="acc1id">
                                    <span className="title">자주 묻는 질문들 문구위치입니다. 자주 묻는 질문들 문구 자주 묻는 질문들 문구 자주?</span>
                                </button>
                            </dt>
                            <dd className="accordion-panel" role="region" id="panel1" aria-labelledby="acc1id">
                                <div>
                                    <div className="cont">
                                        1회초 선발 임기영이 흔들리며 2점을 먼저 내주며 힘들게 출발했다. 1회말 1사 1,2루의 찬<br />
                                        스에서 소크라테스가 병살타를 쳐 무산되고 2회초 2사 후 홍창기의 2루타가 터지자 빠르<br />
                                        게 임기영을 내리고 김기훈을 올려 분위기 반전에 나섰다. 김기훈이 박해민을 삼진으로 돌<br />
                                        려세워 추가 실점을 막았다. 1회초 선발 임기영이 흔들리며 2점을 먼저 내주며 힘들게 출발<br />
                                        했다. 1회말 1사 1,2루의 찬스에서 소크라테스가 병살타를 쳐 무산되고 2회초 2사 후 홍창<br />
                                        기의 2루타가 터지자 빠르게 임기영을 내리고 김기훈을 올려 분위기 반전에 나섰다. 김기<br />
                                        훈이 박해민을 삼진으로 돌려세워 추가 실점을 막았다.
                                    </div>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="accordion-title">
                                <button type="button" aria-expanded="false" className="accordion-trigger" aria-controls="panel2" id="acc2id">
                                    <span className="title">자주 묻는 질문들 문구위치입니다. 자주 묻는 질문들 문구 자주 묻는 질문들 문구 자주 묻는 질문들 문구자주 묻는 질문들 문구자주 묻는 질문들 문구?</span>
                                </button>
                            </dt>
                            <dd className="accordion-panel" role="region" id="panel2" aria-labelledby="acc2id">
                                <div>
                                    아코디언 내용
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="accordion-title">
                                <button type="button" aria-expanded="false" className="accordion-trigger" aria-controls="panel3" id="acc3id">
                                    <span className="title">자주 묻는 질문들 문구위치입니다. 자주 묻는 질문들 문구 자주 묻는 질문들 문구 자주?</span>
                                </button>
                            </dt>
                            <dd className="accordion-panel" role="region" id="panel3" aria-labelledby="acc3id">
                                <div>
                                    아코디언 내용
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="accordion-title">
                                <button type="button" aria-expanded="false" className="accordion-trigger" aria-controls="panel4" id="acc4id">
                                    <span className="title">자주 묻는 질문들 문구위치입니다. 자주 묻는 질문들 문구 자주 묻는 질문들 문구 자주?</span>
                                </button>
                            </dt>
                            <dd className="accordion-panel" role="region" id="panel4" aria-labelledby="acc4id">
                                <div>
                                    아코디언 내용
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="accordion-title">
                                <button type="button" aria-expanded="false" className="accordion-trigger" aria-controls="panel5" id="acc5id">
                                    <span className="title">자주 묻는 질문들 문구위치입니다. 자주 묻는 질문들 문구 자주 묻는 질문들 문구 자주?</span>
                                </button>
                            </dt>
                            <dd className="accordion-panel" role="region" id="panel5" aria-labelledby="acc5id">
                                <div>
                                    아코디언 내용
                                </div>
                            </dd>
                        </dl>
                    </div>
                </section>
                <MainFooterMo />
            </div>
        </main>
    </div>
    ) 
}

export default SchoolQnaMo;