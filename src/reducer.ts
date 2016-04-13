const reducer = (state = { message: "Initial message" }, action : any) => {
      switch(action.type) {
          case 'CHANGE_MESSAGE':
            return Object.assign({}, state, { message: action.message });
      }
      
      return state;
};

export default reducer;