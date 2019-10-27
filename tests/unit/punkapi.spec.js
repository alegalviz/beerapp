import beerApi from '../../src/services/punkapi.service'
import mockBeers from './mocks/beers.mock'

describe('Services', () => {
  beforeEach(() => {
    const mockJsonPromise = Promise.resolve(mockBeers)
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
  })

  afterEach(() => {
    global.fetch.mockClear()
    delete global.fetch
  })

  it('Fetch data with no params', async () => {
    await beerApi()

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith('https://api.punkapi.com/v2/beers')
  })
  it('Fetch data with all valid params', async () => {
    await beerApi(
    [
      {abv_gt: 'some'},
      {abv_lt: 'some'},
      {ibu_gt: 'some'},
      {ibu_lt: 'some'},
      {ebc_gt: 'some'},
      {ebc_lt: 'some'},
      {beer_name: 'some'},
      {yeast: 'some'},
      {brewed_before: 'some'},
      {brewed_after: 'some'},
      {hops: 'some'},
      {malt: 'some'},
      {food: 'some'},
      {ids: 'some'}
    ])

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.punkapi.com/v2/beers?abv_gt=some&abv_lt=some&ibu_gt=some&ibu_lt=some&ebc_gt=some&ebc_lt=some&beer_name=some&yeast=some&brewed_before=some&brewed_after=some&hops=some&malt=some&food=some&ids=some'
    )
  })
  it('Fetch data with invalid params', async () => {
    await beerApi(
    [
      {lalala: 'some'},
      {popopo: 'some'},
      {ids: 'some'}
    ])

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.punkapi.com/v2/beers?ids=some'
    )
  })
  it('Fetch data with invalid type param', async () => {
    let error
    try {
      await beerApi('some');
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(TypeError('params.reduce is not a function'));
  })
})
