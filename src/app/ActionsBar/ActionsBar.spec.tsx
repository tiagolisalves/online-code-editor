import { create } from 'react-test-renderer'
import React from 'react'
import { ActionsBar } from './ActionsBar'

test('It should get filetree from parent', () => {
    const comp = create(
        <ActionsBar deleteFile={() => {}} saveFile={() => {}}>
            Hello.java
        </ActionsBar>
    )
    expect(comp.toJSON()).toMatchSnapshot()
})
