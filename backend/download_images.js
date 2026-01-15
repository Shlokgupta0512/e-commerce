
import fs from 'fs';
import path from 'path';
import https from 'https'; // Use https module for simplicity
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const fileStream = fs.createWriteStream(filepath);
                res.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Downloaded: ${filepath}`);
                    resolve();
                });
            } else {
                // If 302/301 redirect (Unsplash often redirects), follow it
                if (res.statusCode === 302 || res.statusCode === 301) {
                    downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
                    return;
                }
                reject(new Error(`Failed to download ${url}: Status Code ${res.statusCode}`));
            }
        }).on('error', (err) => {
            reject(err);
        });
    });
};

const images = [
    { name: "iphone.jpg", url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop" },
    { name: "samsung.jpg", url: "https://images.unsplash.com/photo-1706691456930-b4bd697e8845?q=80&w=800&auto=format&fit=crop" },
    { name: "mi.jpg", url: "https://images.unsplash.com/photo-1698744766444-a09562ac3f31?q=80&w=800&auto=format&fit=crop" },
    { name: "realme.jpg", url: "https://images.unsplash.com/photo-1616422712952-b8c8d8c36398?q=80&w=800&auto=format&fit=crop" },
    { name: "motorola.jpg", url: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b0d?q=80&w=800&auto=format&fit=crop" },
    { name: "poco.jpg", url: "https://images.unsplash.com/photo-1598327105666-5b89351aff23?q=80&w=800&auto=format&fit=crop" },
    { name: "banner.jpg", url: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1600&auto=format&fit=crop" }
];

const targetDir = path.join(__dirname, '../frontend/public/products');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadAll() {
    console.log("Starting downloads...");
    for (const img of images) {
        try {
            await downloadImage(img.url, path.join(targetDir, img.name));
        } catch (error) {
            console.error(`Error downloading ${img.name}:`, error.message);
        }
    }
    console.log("All downloads completed!");
}

downloadAll();
