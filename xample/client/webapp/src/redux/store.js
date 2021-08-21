import { createStore, compose } from 'redux'

const INIT = {
  page: "profile",
  maps: {},
  garden: {}
}

function global_state(state = INIT, action) {
  switch (action.type) {
    case 'SWAP_PAGE':
      return {
        ...state,
        page: action.page
      }
    case 'INIT_TREE_FORM':
      return {
        ...state,
        garden: {}
      }
    case 'TREE_FORM':
      return {
        ...state,
        garden: {
          ...state.garden,
          [action.key]: action.value
        }
      }
    default:
      return state
  }
}

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(global_state, INIT, enhancers);