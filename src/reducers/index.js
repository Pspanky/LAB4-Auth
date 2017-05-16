import { combineReducers } from 'redux';

import PostsReducer from './rootReducer';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
});

export default rootReducer;
