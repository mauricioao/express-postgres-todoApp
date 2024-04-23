import "dotenv/config";
import pg from 'pg'
const { Pool, Client } = pg

export const pool = new Pool({
    allowExitOnIdle: true,
})

try {
    await pool.query("SELECT NOW()");
    console.log("Database connected");
} catch (error) {
    console.error(error);;
}