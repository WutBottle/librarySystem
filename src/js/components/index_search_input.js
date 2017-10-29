import React from 'react';
import { Link } from 'react-router-dom'
import 'whatwg-fetch';
import 'es6-promise';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
var path = {
    pathname:'/search',
    name:'',
};
class SearchInput extends React.Component {
    constructor() {
        super();
        this.sendName=this.sendName.bind(this);
    }

    sendName(){
        var form=this.props.form;
        path.name=form.getFieldValue('book');
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <div class="SearchInput">
                <Form>
                    <FormItem>
                        {getFieldDecorator('book', {
                            rules: [{ required: true }],
                        })(
                            <Input size="large" placeholder={this.props.action} />
                            )}
                    </FormItem>
                    <Link onClick={this.sendName} to={path}><Button size="large" htmlType="submit" type="primary" icon="search">检索</Button></Link>
                </Form>
            </div>
        );
    };
};
export default SearchInput = Form.create()(SearchInput);