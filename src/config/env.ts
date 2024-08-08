import 'dotenv/config';
import { config } from 'dotenv';

config();

export const env = {
    db: {
        HOST: process.env.DB_HOST,
        PORT: Number(process.env.DB_PORT),
        NAME: process.env.DB_NAME,
        PASSWORD: process.env.DB_PASSWORD,
        USER: process.env.DB_USER,
        SCHEMA: process.env.DB_SCHEMA,
    },
};