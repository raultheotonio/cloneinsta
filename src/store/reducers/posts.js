import { ADD_POST, ADD_COMMENT } from "../actions/actionTypes";

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload,
        }),
      };
      break;
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.commnets.concat(action.payload.comment);
            } else {
              post.comments = [action.payload.comment];
            }
          }
          return post;
        }),
      };
    default:
      return state;
      break;
  }
};

export default reducer;
