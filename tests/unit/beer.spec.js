import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import Beer from '../../src/components/Beer.vue'
import mockBeers from './mocks/beers.mock'

const localVue = createLocalVue()

describe('Beer Component', () => {
  const mockBeer = mockBeers[0]
  let wrapper
  beforeAll(() => {
    wrapper = mount(Beer, {
      propsData: {
        beer: mockBeer
      },
      stubs: ['router-link'],
      localVue,
      attachToDocument: true
    })
  })

  it('Check if render', () => {
    expect(wrapper.vm.$el.innerHTML).not.toBeNull()
  })
  it('Render title and main data', () => {
    expect(wrapper.find('.name').element.textContent).toBe(mockBeer.name)
    expect(wrapper.find('.descript').element.textContent).toBe(mockBeer.description.trim())
    expect(wrapper.find('.abv').element.textContent).toBe(`ABV ${mockBeer.abv}`)
    expect(wrapper.find('.ibu').element.textContent).toBe(`IBU ${mockBeer.ibu}`)
  })
})