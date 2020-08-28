import { create, act } from 'react-test-renderer'
import React from 'react'
import { Directory, DirectoryContent } from './Directory'

test('It should open and close a directory', () => {
    let comp = {} as any

    act(() => {
        comp = create(
            <Directory name="editor">
                <span>Files</span>
            </Directory>
        )
    })
    const instance = comp.root
    const directoryContent = instance?.findAllByType(DirectoryContent)[0]
    const directoryLink = instance?.findAllByType('span')[0] //TODO Refactor span[0] to a new component DirectoryLink
    expect(directoryContent?.props.children).toEqual('')
    act(() => directoryLink.props.onClick())
    expect(directoryContent?.props.children).toEqual(<span>Files</span>)
})
