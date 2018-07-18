import React, { Component } from 'react'
import "../../css/submit.css"
import { Button, DatePicker, Picker, List } from "antd-mobile";

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

const district = [
    {
        label: '大白',
        value: '大白',
    },
    {
        label: '大白2',
        value: '大白2',
    }
]
export default class Submit extends Component {
    state = {
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false
    }
    render() {
        return <div>
            <div className="submit_date">
              <DatePicker mode="date" title="Select Date" extra="Optional" value={this.state.date} onChange={date => this.setState(
                    { date }
                  )}>
                <List.Item arrow="horizontal">时间</List.Item>
              </DatePicker>
            </div>

            <div className="submit_name">
              <Picker data={district} cols={1} className="forss">
                <List.Item arrow="horizontal">姓名</List.Item>
              </Picker>
            </div>
            <div className="am-list-item am-list-item-middle">
              <div className="am-list-line">
                <div className="am-list-content">金额</div>
                <input className="am-list-extra" placeholder="请输入金额" />
              </div>
            </div>
            <div className="am-list-item am-list-item-middle">
              <div className="am-list-line">
                <div className="am-list-content">用途备注</div>
                <input className="am-list-extra" placeholder="请输入备注" />
              </div>
            </div>
            <div className="submit_btns">
              <Button type="primary" inline style={{ marginRight: "4px" }}>
                提交
              </Button>
              <Button type="ghost" inline style={{ marginRight: "4px" }} className="am-button-borderfix">
                清空
              </Button>
            </div>
          </div>;
    }
}
