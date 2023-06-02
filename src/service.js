
const queryStrings = {
    app_id: 'bec426ea',
    app_key: '8910b6097b18788010cb6874f25d4cae'
  };
  
  export const fetchTabData = async (defaultQuery) => {
    const { app_id, app_key } = queryStrings;
    try {
      const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`);
      const response = await data.json();
      console.log(response)
      return response;
    } catch (e) {
      console.log('Something went wrong:', e);
      return e;
    }
  };


