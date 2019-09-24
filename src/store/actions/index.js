import * as actionTypes from './actionTypes'

export const toggleDarkMode = isDarkMode => ({
  type: actionTypes.TOGGLE_DARKMODE,
  isDarkMode,
})

export const toggleOverlay = toggle => {
  return {
    type: actionTypes.TOGGLE_OVERLAY,
    toggle: toggle,
  }
}
export const setTargetRoute = route => {
  return {
    type: actionTypes.SET_TARGET_ROUTE,
    route: route,
  }
}
