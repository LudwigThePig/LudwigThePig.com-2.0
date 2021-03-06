import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { AppState } from './reducers/root';

export const initialState:AppState = {
  nav: {
    activeNav : 'home',
  },
  theme: {
    activeTheme: 'dark'
  },
  initialLoad: {
    activeInitialLoad: true
  },
  exitAnimation: {
    activeExitAnimation: false
  },
  projects: {
    projects: []
  }
  
}

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
