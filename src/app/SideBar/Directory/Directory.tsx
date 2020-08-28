import React, { useState } from 'react'
import { FaFolderOpen, FaFolder } from 'react-icons/fa'

export function Directory(props: { name: string; children: any }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="directory">
            <span onClick={() => setOpen(!open)}>
                <span className="directory-icon">{open ? <FaFolderOpen color="orange" /> : <FaFolder color="orange" />}</span>
                <span className="directory-name">{props.name}</span>
            </span>
            <DirectoryContent>{open ? props.children : ''}</DirectoryContent>
        </div>
    )
}
export function DirectoryContent(props: any) {
    return <div className="directory-content">{props.children}</div>
}
