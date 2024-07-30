export const initialState = {
  videoViewed: false,
  // other initial state properties
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'VIDEO_VIEWED':
      console.log('Sending action:', action);
      console.log('Current state:', state);

      const newState = {
        ...state,
        videoViewed: action.payload
      };

      console.log('New state:', newState);

      return newState;

    // ... other cases
    default:
      return state;
  }
};

export default reducer;
