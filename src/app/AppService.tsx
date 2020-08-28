import { IFile } from './Models'
const url = (path: string) => `https://my-json-server.typicode.com/open-veezoo/editor/${path}`

const options: (method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: any) => RequestInit = (method = 'GET', data) => {
    return {
        method,
        mode: 'cors',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }
}

const AppService = {
    getFileTree: async () => await (await fetch(url('filetree'))).json(),
    getFile: async (id: number) => await (await fetch(url(`files/${id}`))).json(),
    updateFile: (file: IFile) => fetch(url(`files/${file.id}`), options('PUT', file)),
    deleteFile: (id: number) => fetch(url(`files/${id}`), options('DELETE')),
}

export { AppService }
