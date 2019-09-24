import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isDarkMode: false,
  overlayVisible: null,
  targetRoute: '/',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode }
    case actionTypes.TOGGLE_OVERLAY:
      return {
        ...state,
        overlayVisible: action.toggle,
      }
    case actionTypes.SET_TARGET_ROUTE:
      return {
        ...state,
        targetRoute: action.route,
      }
    default:
      return state
  }
}

export default reducer
