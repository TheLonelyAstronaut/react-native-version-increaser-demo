import childProcess from 'child_process';
import { Readable } from 'stream';

export const streamToString = async (stream: Readable | null): Promise<string> => {
    const chunks: Buffer[] = [];

    if(!stream) {
        return 'null stream';
    }

    return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        stream.on('error', (err) => reject(err));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    })
}

export const execute = async (command: string): Promise<string> => {
    const { stdout, stderr } = await childProcess.exec(command);
    const decoded = await streamToString(stdout ?? stderr);

    if(stderr) {
        console.error(decoded);
    }

    return decoded;
}