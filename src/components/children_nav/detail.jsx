import React, { Component } from 'react';
import "../../css/detail.css"


class Detail extends Component {
   
    
    render() {
        return (
            <div>
                <ul className="detail_ul">
                    <li>
                        <p className="detail_username">大白</p>
                        <div>
                            <span className="detail_date">2018-07-11</span>
                            <span className="detail_price">600</span>
                            <span className="detail_use">买菜</span>
                        </div>
                    </li>
                </ul>
      </div>
        );
    }
}

export default Detail;
