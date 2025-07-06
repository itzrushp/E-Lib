import {config as conf} from "dotenv";
conf();  // Load environment variables from .env file


// creating a private config variable 
const _config= {
    port : process.env.PORT,
}

export const config = Object.freeze(_config);  // Freeze the config object to prevent modifications
// This ensures that the config object is immutable and cannot be changed at runtime (Read only).
