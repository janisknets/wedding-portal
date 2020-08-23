export type TNavMenuItem = {
    path: string,
    name: string,
}

export const navigation: TNavMenuItem[] = [
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
