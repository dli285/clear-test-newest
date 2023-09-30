export interface User {
    id: string
    name: string
    isActive: boolean
}


export const mapActiveUser = (users: Array<User>) => {
    return users.filter(user => user.isActive)
}