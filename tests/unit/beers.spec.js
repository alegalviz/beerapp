import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import Beer from '../../src/components/Beers.vue'
import mockBeers from './mocks/beers.mock'

const localVue = createLocalVue()

describe('Beers Component', () => {
  const mockManyBeers = mockBeers
  let wrapper
  beforeAll(() => {
    wrapper = mount(Beer, {
      propsData: {
        beers: mockManyBeers
      },
      localVue,
      attachToDocument: true
    })
  })

  it('Check if render', () => {
    expect(wrapper.vm.$el.innerHTML).not.toBeNull()
  })
  it('Render beer list', () => {
    expect(wrapper.find('.container').element.children.length).toBe(10)
  })
})