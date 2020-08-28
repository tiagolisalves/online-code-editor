import React, { useEffect, useState } from 'react'
import { SideBar } from './SideBar/SideBar'
import { ActionsBar } from './ActionsBar/ActionsBar'
import { Editor } from './Editor/Editor'

import { AppService } from './AppService'
import { IFile, IFileTree } from './Models'

function App() {
    const [fileTree, setFileTree] = useState([] as IFileTree[])
    const [file, setFile] = useState({} as IFile)
    const load = () => {
        AppService.getFileTree().then((fT) => {
            setFileTree(fT)
        })
    }

    useEffect(() => {
        load()
    }, [])

    const openFile = (fileId: number) => {
        AppService.getFile(fileId).then((fT) => {
            setFile(fT)
        })
    }

    const saveFile = (fileParam: IFile) => {
        return () => {
            AppService.updateFile(fileParam)
        }
    }

    const deleteFile = (fileParam: IFile) => {
        return () => {
            AppService.deleteFile(fileParam.id).then(() => {
                load()
            })
        }
    }

    const onEdit = (fileContentParam: string) => {
        file.content = fileContentParam
    }

    return (
        <div className="app-container">
            <main>
                <div className="side-bar-container">
                    <div className="side-bar-title">EXPLORER</div>
                    <div className="side-bar">{fileTree ? <SideBar fileTree={fileTree} openFile={openFile}></SideBar> : <></>}</div>
                </div>
                <div className="editor-container">
                    <ActionsBar deleteFile={deleteFile(file)} saveFile={saveFile(file)}>
                        {file.name}
                    </ActionsBar>
                    <Editor fileContent={file.content} onEdit={onEdit}></Editor>
                </div>
            </main>
        </div>
    )
}

export { App }
