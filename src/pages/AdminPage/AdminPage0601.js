import React from "react";

const AdminPage0601 = ({ columns, data,tableList }) => {

  const obj = {
    title: ["활동", "기준", "포인트"],
    data: [
      { activity: "텍스트가 제일 길어질때 까지 나오는 영역은 여기까지", standard: "입장", point:"100,000" },
      { activity: "텍스트가 제일 길어질때 까지 나오는 영역은 여기까지", standard: "클릭", point:"200" },
      { activity: "텍스트가 제일 길어질때 까지 나오는 영역은 여기까지", standard: "1시간", point:"200" },
      { activity: "텍스트가 제일 길어질때 까지 나오는 영역은 여기까지", standard: "입장", point:"200" },
      { activity: "텍스트가 제일 길어질때 까지 나오는 영역은 여기까지", standard: "클릭", point:"200" },
      { activity: "텍스트가 제일 길어질때 까지 나오는 영역은 여기까지", standard: "1시간", point:"200" },
      { activity: "텍스트가 제일 길어질때 까지 나오는 영역은 여기까지", standard: "입장", point:"200" },
      { activity: "텍스트가 제일 길어질때 까지 나오는 영역은 여기까지", standard: "클릭", point:"200" },
      { activity: "텍스트가 제일 길어질때 까지 나오는 영역은 여기까지", standard: "1시간", point:"200" },

    ],
  };

  return (
    <div>
      <div className="AdminTit">포인트 자동 지급</div>
      <div className="AdminCon scroll_wrap">
          {/* <table>
            <colgroup>
              <col width="100px"/>
              <col width="*"/>
              <col width="90px"/>
              <col width="160px"/>
              <col width="120px"/>
              <col width="50px"/>
              <col width="50px"/>
            </colgroup>
            <thead>

              <tr>
                <th>UUID</th>
                <th>TESTNO</th>
                <th>TASK</th>
                <th>TASKSTATUS</th>
                <th>TESTRESULT</th>
                <th>START</th>
                <th>FINISH</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>test-1234-sddf-4321</td>
                <td>1</td>
                <td>할당 및 접속 테스트</td>
                <td>WAIT</td>
                <td>FAIL</td>
                <td>5분전</td>
                <td>2분전</td>
              </tr>
            </tbody>
          </table> */}
          <table class="table_list">
            <thead>
              <tr>
                <th>{obj.title[0]}</th>
                <th>{obj.title[1]}</th>
                <th>{obj.title[2]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{obj.data[0].activity}</td>
                <td>{obj.data[0].standard}</td>
                <td>{obj.data[0].point}</td>
              </tr>
              <tr>
                <td>{obj.data[1].activity}</td>
                <td>{obj.data[1].standard}</td>
                <td>{obj.data[1].point}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    
  )
}

export default AdminPage0601;