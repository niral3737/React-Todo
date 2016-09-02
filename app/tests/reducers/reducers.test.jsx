var expect = require('expect');
var deepFreeze = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type : 'SET_SEARCH_TEXT',
        searchText : 'text'
      };

      var res = reducers.searchTextReducer(deepFreeze(''), deepFreeze(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type : 'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer(deepFreeze(false), deepFreeze(action));

      expect(res).toBe(true);
    });
  });
});
