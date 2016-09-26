import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
  const props = {
    course: {}, saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

it('Renders form and h1', () => {
  const wrapper = setup(false);
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Manage Course');
});

it('Save button is labeled', () => {
  const wrapper = setup(false);
  expect(wrapper.find('input').props().value).toBe('Saved');
});
