export type NavMenuItem = {
    path: string,
    name: string,
}

export const navigation: NavMenuItem[] = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/directions',
        name: 'Directions'
    },
    {
        path: '/contacts',
        name: 'Contacts'
    }
];