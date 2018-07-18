import React, { Component } from 'react';
import "../../css/account.css"
class Count extends Component {
    render() {
        return (
            <div>
                <div className="account_count">
                    <div>200</div>
                </div>
                <div className="account_table">
                    <table>
                        <thead>
                            <tr>
                                <th>姓名</th>
                                <th>个人总计</th>
                                <th>平均金额</th>
                                <th>应付</th>
                                <th>应收</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>大白</td>
                                <td>500</td>
                                <td>600.00</td>
                                <td>100.00</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
      </div>
        );
    }
}

export default Count;
