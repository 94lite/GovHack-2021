import { createStore, compose } from 'redux'

const INIT = {
  page: "profile",
  maps: {},
  garden: {},
  bank: 12400,
  recent_data: [
    {
      day: "16/08",
      planted: 0,
      color: "#50A387"
    },
    {
      day: "17/08",
      planted: 0,
      color: "#50A387"
    },
    {
      day: "18/08",
      planted: 0,
      color: "#50A387"
    },
    {
      day: "19/08",
      planted: 0,
      color: "#50A387"
    },
    {
      day: "20/08",
      planted: 3,
      color: "#50A387"
    },
    {
      day: "21/08",
      planted: 2,
      color: "#50A387"
    },
    {
      day: "22/08",
      planted: 4,
      color: "#73d13d"
    }
  ]
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
    case 'REWARD':
      return {
        ...state,
        bank: state.bank + action.amount
      }
    case 'SPEND':
      return {
        ...state,
        bank: state.bank - action.amount
      }
    default:
      return state
  }
}

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(global_state, INIT, enhancers);