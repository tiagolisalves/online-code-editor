import { create } from 'react-test-renderer'
import React from 'react'
import fixture from '../fixture.json'
import { runFileTree } from './Helpers'
import { IFileTree } from '../../Models'

test('It should flat directory paths', () => {
    expect(runFileTree(fixture as IFileTree[])[0]).toEqual('editor / src')
})
