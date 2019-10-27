// API base URL
const BASE_URL = 'https://api.punkapi.com/v2'

export default async function (params = []) {
  const paramsInterface = [
    'abv_gt', 'abv_lt', 'ibu_gt', 'ibu_lt', 'ebc_gt', 'ebc_lt', 'beer_name',
    'yeast', 'brewed_before', 'brewed_after', 'hops', 'malt', 'food', 'page', 'per_page', 'ids'
  ]
  try {
    // Reduce function to create the query string, checking available api params
    debugger
    let paramsQS = params.reduce((acu, actual) => {
      let key = Object.keys(actual)[0]
      if (paramsInterface.includes(key) && actual[key]) {
        acu.push(`${key}=${actual[key]}`)
      }
      return acu
    }, []).join('&')

    let paramsQM = paramsQS ? '?' : ''

    const response = await fetch(`${BASE_URL}/beers${paramsQM}${paramsQS}`)
    return await response.json();
  } catch (error) {
    // eslint-disable-next-line
    console.error(error)
  }
}