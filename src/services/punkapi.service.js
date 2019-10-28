// API base URL
const BASE_URL = 'https://api.punkapi.com/v2'

/*
 * @params Array
 * Description: Fetch beers from bpunkapi with params. Param list from documentation.
 * Returns a promise
 */
export default async function (params = []) {
  const paramsInterface = [
    'abv_gt', 'abv_lt', 'ibu_gt', 'ibu_lt', 'ebc_gt', 'ebc_lt', 'beer_name',
    'yeast', 'brewed_before', 'brewed_after', 'hops', 'malt', 'food', 'page', 'per_page', 'ids'
  ]
  try {
    // Reduce function to create the query string, checking available api params
    let paramsQS = params.reduce((acu, actual) => {
      let [key, value] = actual
      if (paramsInterface.includes(key) && value) {
        acu.push(`${key}=${value}`)
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