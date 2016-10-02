export default function cocktails_reducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_COCKTAILS':
      return action.payload;
    case 'CREATE_COCKTAIL':
      debugger;
      return [...state, action.payload];
    default:
      return state;
  }
};
