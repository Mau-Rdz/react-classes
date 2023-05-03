export interface User {
    id: number,
    name: string,
    role: string,
    address: string,
    salary: number,
}

export const users: User[] = [
    {
        id: 1,
        name: 'Mau',
        role: 'Developer',
        address: 'abc123',
        salary: 1000,
    },
    {
        id: 2,
        name: 'Mau2',
        role: 'Developer2',
        address: 'abc1232',
        salary: 10002,
    },
    {
        id: 3,
        name: 'Mau3',
        role: 'Developer3',
        address: 'abc1233',
        salary: 10003,
    },
]