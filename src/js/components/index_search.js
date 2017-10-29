import React from 'react';
import { Tabs } from 'antd';
import SearchInput from './index_search_input'
const TabPane = Tabs.TabPane;
export default class IndexSearch extends React.Component {
    render() {
        return (
            <div class="resource-search">
                <Tabs type="line" defaultActiveKey="1">
                    <TabPane tab="馆藏检索" key="1">
                        <SearchInput action="馆藏检索"/>
                    </TabPane>
                    <TabPane tab="中文文献" key="2">
                        <SearchInput action="中文文献"/>
                    </TabPane>
                    <TabPane tab="外文文献" key="3">
                        <SearchInput action="外文文献"/>
                    </TabPane>
                    <TabPane tab="数据库" key="4">
                        <SearchInput action="数据库"/>
                    </TabPane>
                    <TabPane tab="电子图书" key="5">
                        <SearchInput action="电子图书"/>
                    </TabPane>
                    <TabPane tab="电子期刊" key="6">
                        <SearchInput action="电子期刊"/>
                    </TabPane>
                </Tabs>
            </div>
        );
    };
};