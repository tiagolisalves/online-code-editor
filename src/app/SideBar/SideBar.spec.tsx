import { create } from 'react-test-renderer'
import React from 'react'
import { SideBar } from './SideBar'

import fixture from './fixture.json'
import { Directory } from './Directory/Directory'

test('It should get filetree from parent', () => {
    const comp = create(<SideBar fileTree={fixture as any} openFile={() => {}}></SideBar>)
    expect(comp.toJSON()).toMatchSnapshot()
})

test('It should render a directory', () => {
    let fileWasOpen = false
    const comp = create(<SideBar fileTree={fixture as any} openFile={() => (fileWasOpen = true)}></SideBar>)
    const instance = comp.root
    const directory = instance?.findAllByType(Directory)[0]
    expect(directory?.props.name).toEqual('editor / src')
})
