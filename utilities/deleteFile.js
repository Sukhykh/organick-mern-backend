import fs from "fs/promises"

export const deleteFile = async filePath => {
    try {
        await fs.unlink(filePath);
        console.log(`File ${filePath} deleted successfully`);
    } catch (err) {
        console.error(`Error deleting file ${filePath}:`, err);
        throw err;
    }
}