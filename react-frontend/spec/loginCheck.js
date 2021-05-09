import React from 'react';
import { shallow } from 'enzyme';
import Login from './index';
describe('Test case for testing login',() =>{
let wrapper;
test('username check',()=>
{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'userId', value: 'user56'}});
expect(wrapper.state('userId')).toEqual('user56');
})
it('password check',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'mohiu516'}});
expect(wrapper.state('password')).toEqual('mohiu516');
})
it('login check with right data',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'userId', value: 'user56'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'mohiu516'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(true);
})
it('login check with wrong data',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'userId', value: 'user56'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'mohiu516'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(false);
})
})