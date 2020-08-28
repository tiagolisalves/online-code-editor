export interface IFileTree {
    id: number
    name: string
    isDirectory: boolean
    children: Array<IFileTree>
}
export interface IFile {
    id: number
    name: string
    content: string
}
