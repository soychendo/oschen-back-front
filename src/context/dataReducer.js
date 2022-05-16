
const initialState = {
  user: {id: 1, name: "chendo"},
  login: [
    {id: 1, on: 'ON_LOGIN'},
    {id: 2, off: 'OFF_LOGIN'},
  ]
}

const dataReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export {initialState};
export default dataReducer;