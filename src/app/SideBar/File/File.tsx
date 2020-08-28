import React, { useContext } from 'react'
import { SiJava } from 'react-icons/si'
import { OpenFileContext } from '../Helpers/Helpers'
import { IFileTree } from 'app/Models'

export function File(props: { file: IFileTree }) {
    const openFile = useContext(OpenFileContext)
    const openFileHandler = (fileId: number) => {
        return (e: any) => {
            e?.preventDefault()
            openFile(fileId)
        }
    }
    return (
        <div className="file clickable" onClick={openFileHandler(props.file.id)}>
            <span className="file-icon">
                <SiJava />
            </span>
            {props.file.name}
        </div>
    )
}
