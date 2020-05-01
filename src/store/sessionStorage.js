import initState from './initialState';
export const loadState = () => {
    try {
      const serializedState = sessionStorage.getItem('state');
  
      if (serializedState === null) {
        return initState;
      }
  
      return JSON.parse(serializedState);
    } catch (error) {
      return initState;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem('state', serializedState);
    } catch (error) {
      // Ignore write errors.
    }
  };

  export const resetState = ()=>{
    console.log('clearing the state')
    try {
      const serializedState = sessionStorage.getItem('state');
      if(serializedState)
        sessionStorage.removeItem('state');
    } catch (error) {
      // Ignore write errors.
    }
  }