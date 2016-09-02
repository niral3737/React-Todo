var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch setSearchText on entered data', () => {
    var text = 'Ch';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.searchText.value = text;

    TestUtils.Simulate.change(todoSearch.refs.searchText);
    var action = {
      type : 'SET_SEARCH_TEXT',
      searchText : text
    };

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch toggleShowCompleted when checked value', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.showCompleted.checked = true;

    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    var action = {
      type : 'TOGGLE_SHOW_COMPLETED'
    };

    expect(spy).toHaveBeenCalledWith(action);
  });

});
