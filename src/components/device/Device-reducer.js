export const initialState = {
  laoding: false,
  called: false,
  result: false,
  data: null,
  metadata: {
    limit: 0,
    offset: 0,
    total: 0
  },
  error : null
}

export const reducer = (state , action) => {
  switch (action.type) {

  case "FETCHING":
    return { ...state, laoding: true }

  case "FETCHED": {
    return {
      ...state,
      laoding: false,
      called: true,
      data : action.payload,
      metadata : {...state.metadata, ...action.metadata},
      result: true
    }
  }
  case "UPDATED": {
    return {
      ...state,
      laoding: false,
      called: true,
      data : action.payload ? action.payload :state.payload,
      metadata : {...state.metadata, ...action.metadata},
      result: true
    }
  }
  case "CREATE": {
    return {
      ...state,
      laoding: false,
      called: true,
      data : action.payload,
      result: true
    }
  }
  case "ERRO": {
    return {
      ...state,
      laoding: false,
      called: true,
      error: action.error,
      result: false
    }
  }
  default:
    return state
  }
}
