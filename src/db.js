import pkg from 'pg'

export const consul = new pkg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Admin123',
    database: 'ActiGest',
    port: '5432'
})