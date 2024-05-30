const handlePoolData = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    poolData: payload,
  };
};

export default handlePoolData;
