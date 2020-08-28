import React from 'react'
import { create } from 'react-test-renderer'
import fixture from '../fixture.json'
import { File } from './File'
import { OpenFileContext } from '../Helpers/Helpers'

test('It should open a file', () => {
    let content = ''
    const tree = create(
        <OpenFileContext.Provider
            value={(event) => {
                content = 'FILE_CONTENT'
            }}
        >
            <File file={fixture as any}></File>
        </OpenFileContext.Provider>
    )
    const instance = tree.root
    const link = instance.findByType('div')
    link.props.onClick()
    expect(content).toEqual('FILE_CONTENT')
})
