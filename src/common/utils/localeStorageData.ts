export const saveStateToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.error("Failed to save state to local storage:", error);
  }
};

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Failed to load state from local storage:", error);
    return undefined;
  }
};
