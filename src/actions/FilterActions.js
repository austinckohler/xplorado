export const updateSelection = (key, position, showInfoWindow) => {
  return {
    type: "UPDATE_SELECTION",
    key,
    position,
    showInfoWindow,
  };
};

export const updateQuery = (query, showFilters, filters) => {
  return {
    type: "UPDATE_QUERY",
    query,
    showFilters,
    filters,
  };
};
