import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const getRedisClient = () => {
    const redisUrl = process.env.UPSTASH_REDIS_URL;
    if (redisUrl && redisUrl !== "your_redis_url_here") {
        return new Redis(redisUrl);
    }

    console.warn("⚠️ Redis URL not found. Falling back to in-memory storage.");

    // Simple In-memory Fallback
    const storage = new Map();
    return {
        get: async (key) => storage.get(key) || null,
        set: async (key, value, mode, duration) => {
            storage.set(key, value);
            if (mode === "EX" && duration) {
                setTimeout(() => storage.delete(key), duration * 1000);
            }
        },
        del: async (key) => storage.delete(key),
        on: (event, callback) => {
            console.log(`Redis mock: ignoring event '${event}'`);
        },
    };
};

export const redis = getRedisClient();
