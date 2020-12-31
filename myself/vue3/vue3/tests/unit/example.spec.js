import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AppDown from '@/components/AppDown.vue'

describe('AppDown.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(AppDown, {
      props: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
