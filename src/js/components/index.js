import React from 'react';
import IndexSearch from './index_search';
import { Row, Col ,Carousel ,Card} from 'antd'
export default class Index extends React.Component{
    render(){
        return(
            <div class="index">
                <div class="index-logo">
                    <Row>
                        <Col span={4}></Col>
                        <Col span={16}>
                        <div>
                            <img src="./src/images/logo.png" alt="logo"/>
                        </div>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                </div>
                <div class="index-row">
                    <Row class="index-row1" gutter={5}>
                        <Col span={4}></Col>
                        <Col span={8}>
                            <Carousel autoplay>
                                <div><img src="./src/images/carousel-img/1.jpg" alt="img1"/></div>
                                <div><img src="./src/images/carousel-img/2.jpg" alt="img2"/></div>
                                <div><img src="./src/images/carousel-img/3.jpg" alt="img3"/></div>
                                <div><img src="./src/images/carousel-img/4.jpg" alt="img4"/></div>
                            </Carousel>
                        </Col>
                        <Col span={4}>
                            <Card class="dynamic-resource" loading title="资源动态">
                                
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card class="lecture-activity" loading title="讲座活动">
                                
                            </Card>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row class="index-row2" gutter={5}>
                        <Col span={4}></Col>
                        <Col span={12}>
                            <IndexSearch/>
                        </Col>
                        <Col span={4}>
                            <Card class="myLibrary" loading title="我的图书馆">
                                
                            </Card>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row class="index-row3" gutter={5}>
                        <Col span={4}></Col>
                        <Col span={4}>
                            <Card class="resource" loading title="资源">
                                
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card class="service" loading title="服务">
                                
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card class="survey" loading title="概况">
                                
                            </Card>
                        </Col>
                        <Col span={4}>广告</Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row class="index-row4">
                        <Col span={4}></Col>
                        <Col span={16}>其他功能</Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row class="index-row5">
                        <Col span={4}></Col>
                        <Col span={16} class="footer">
                            <p>&copy;&nbsp;2017 图书管理系统 All Rights Reserved .</p>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                </div>
            </div>
        );
    };
}