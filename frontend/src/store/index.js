import { createStore } from 'redux';

const INITIAL_STATE = {
  page: 1,
  listOfMovies: [],
  tipo: '',
  hasMorePages: true,
  search: '',
  scrollPosition: 0,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT_PAGE':
      return {
        ...state,
        page: state.page + 1,
      };
    case 'ADD_DATA':
      return {
        ...state,
        listOfMovies: [...state.listOfMovies, ...action.new_data],
      };
    case 'END_LIST':
      return { ...state, hasMorePages: false };
    case 'NEW_SEARCH':
      return { ...state, search: action.search };
    case 'SEARCH_DATA':
      return {
        ...state,
        listOfMovies: action.search_data,
        page: 1,
        hasMorePages: true,
        tipo: 'none',
      };
    case 'NEW_SCROLL_POSITION':
      return { ...state, scrollPosition: action.scrollPosition };

    case 'CHANGE_TIPO':
      return {
        ...state,
        tipo: action.tipo,
        listOfMovies: state.tipo !== action.tipo ? [] : state.listOfMovies,
        page: 1,
        hasMorePages: false,
      };
    case 'UTIL_PAGES':
      return { ...state, hasMorePages: true };

    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
