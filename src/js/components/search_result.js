import React from 'react';
import 'antd/dist/antd.css';
import { Select, Form, Row, Col, Input, Button } from 'antd';
const FormItem = Form.Item;
class SearchResult extends React.Component {
    render() {
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
        console.log('Received values of form: ', this.props.location);
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span={8} />
                <Form layout="horizontal">
                    <Col span={4}>
                        <FormItem
                            label="Note"
                            {...formItemLayout}
                            hasFeedback
                        >
                            {getFieldDecorator('note', {
                                rules: [{ type: "string", required: true, max:10,min:5, message: "长度在5~10位" }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                        <FormItem
                            label="Note"
                            {...formItemLayout}
                            hasFeedback
                        >
                            {getFieldDecorator('note1', {
                                rules: [{pattern:/[\u4E00-\u9FA5]/g, required: true, message: '只能输入汉字' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                    <Col span={4}>
                        <FormItem
                            label="Note"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('note2', {
                                rules: [{ required: true, message: 'Please input your note!' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                        <FormItem
                            label="Note"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('note3', {
                                rules: [{ required: true, message: 'Please input your note!' }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                </Form>
                <Col span={8} />
            </Row>
        );
    };
}

export default SearchResult = Form.create()(SearchResult);