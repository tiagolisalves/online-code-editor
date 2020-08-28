import React from 'react'
import { SiJava } from 'react-icons/si'
import { FiTrash2, FiSave } from 'react-icons/fi'

function ActionsBar(props: { deleteFile: any; saveFile: any; children: any }) {
    return (
        <div>
            {props.children ? (
                <div className="editor-bar">
                    <div className="actions-bar">
                        <span className="action-btn clickable" onClick={() => props.saveFile()}>
                            <FiSave size="43px" color="gray" />
                        </span>
                        <span className="action-btn clickable" onClick={() => props.deleteFile()}>
                            <FiTrash2 size="43px" color="gray" />
                        </span>
                    </div>
                    <div className="current-file-name">
                        <span className="file-icon">
                            <SiJava />
                        </span>
                        {props.children}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export { ActionsBar }
