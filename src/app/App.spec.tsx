import { create } from 'react-test-renderer'
import React from 'react'
import { App } from './App'

test("It should render 'App'", () => {
    const comp = create(<App></App>)
    expect(comp.toJSON()).toMatchSnapshot()
})
