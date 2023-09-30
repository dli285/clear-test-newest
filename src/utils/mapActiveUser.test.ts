import { User, mapActiveUser } from "./mapActiveUser"

const mockUsers: Array<User> = [
    {
        id: '1',
        name:'Bob',
        isActive: true
    },
    {
        id: '2',
        name:'Mary',
        isActive: false
    },
    {
        id:'3',
        name:'John',
        isActive: true
    },
]

test('Функция возвращает список активных пользователей', () => {
    expect(mapActiveUser(mockUsers)).toEqual(
        mockUsers.filter(i => i.isActive))
})
