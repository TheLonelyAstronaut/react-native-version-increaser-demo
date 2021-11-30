import childProcess from 'child_process';

export const execute = async (command: string): Promise<string> => {
    const { stdout, stderr } = await childProcess.exec(command);

    if(stderr) {
        console.error(stderr);
    }

    return stdout?.read().toString() ?? stderr?.read().toString()!!
}