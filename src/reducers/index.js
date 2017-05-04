import { combineReducers } from 'redux';

import PostsReducer from './rootReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;
