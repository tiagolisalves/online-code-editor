import React, { useEffect } from 'react'
// import hljs from 'highlight.js/lib/languages/java'
import hljs from 'highlight.js'
import java from 'highlight.js/lib/languages/java'
hljs.registerLanguage('java', java)

function Editor(props: { fileContent: string; onEdit: any }) {
    let editable: HTMLElement | null
    useEffect(() => {
        if (editable) {
            hljs.highlightBlock(editable)
        }
    })

    const onEdit = (event: React.FormEvent<HTMLDivElement>) => {
        let fileContentParam = (event.currentTarget as any).innerText
        props.onEdit(fileContentParam)
    }

    return (
        <div contentEditable="true" className="editor-area" onInput={onEdit} suppressContentEditableWarning={true}>
            <pre>
                <code
                    ref={(editableRef) => {
                        editable = editableRef
                    }}
                >
                    {props.fileContent}
                </code>
            </pre>
        </div>
    )
}

export { Editor }
