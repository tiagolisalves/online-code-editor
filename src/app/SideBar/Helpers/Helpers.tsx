import React from 'react'
import { IFileTree } from 'app/Models'

function runFileTree(fileTree: Array<IFileTree>): [string, IFileTree] {
    const fileTreeEl = fileTree[0]
    if (fileTreeEl.children.length === 1) {
        const result = runFileTree(fileTreeEl.children)
        return [fileTreeEl.name + ' / ' + result[0], result[1]]
    } else {
        return [fileTreeEl.name, fileTreeEl]
    }
}

const OpenFileContext = React.createContext((fileId: number): any => {})

export { OpenFileContext, runFileTree }
