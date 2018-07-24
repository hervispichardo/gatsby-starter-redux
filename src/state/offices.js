const initialState = {
  list: "offices list",
  current: "current"
};

const LOAD_OFFICES = 'LOAD_OFFICES';
export const loadOffices = offices => ({ type: LOAD_OFFICES, payload: offices });

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_OFFICES:
      return { ...state, list: payload };
    default:
      return state;
  }
};
