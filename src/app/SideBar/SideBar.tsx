import React, { useState, useContext, useEffect } from 'react'
import { IFileTree } from 'app/Models'
import { Directory } from './Directory/Directory'
import { File } from './File/File'
import { runFileTree, OpenFileContext } from './Helpers/Helpers'
import { FaTruckLoading } from 'react-icons/fa'

function SideBar(props: { fileTree: IFileTree[]; openFile: (fileId: number) => any }) {
    const [fileTree, setFileTree] = useState([] as IFileTree[])
    useEffect(() => {
        setFileTree(props.fileTree as IFileTree[])
    }, [props.fileTree])
    return (
        <OpenFileContext.Provider value={props.openFile}>
            {fileTree.length === 0 ? <span>Loading...</span> : <FileTree fileTree={fileTree}></FileTree>}
        </OpenFileContext.Provider>
    )
}

function FileTree(props: any) {
    let fileTree: IFileTree & IFileTree[] = props.fileTree
    return (
        <>
            {fileTree.length > 0 ? (
                fileTree.map((file) =>
                    (() => {
                        if (file.children?.length > 1) {
                            return (
                                <Directory key={file.id} name={file.name}>
                                    {file.children.map((child) => (
                                        <FileTree fileTree={child.isDirectory ? [child] : child} key={child.id}></FileTree>
                                    ))}
                                </Directory>
                            )
                        } else if (file.children?.length === 1) {
                            const fileTreeDirectory = runFileTree(fileTree)
                            return (
                                <Directory key={file.id} name={fileTreeDirectory[0]}>
                                    {fileTreeDirectory[1].children.map((child) => (
                                        <FileTree fileTree={child.isDirectory ? [child] : child} key={child.id}></FileTree>
                                    ))}
                                </Directory>
                            )
                        }
                    })()
                )
            ) : (
                <File key={fileTree.id} file={fileTree}></File>
            )}
        </>
    )
}

export { SideBar }
