import semanticRelease from 'semantic-release';

export const createNewRelease = async (): Promise<string> => {
    const result = await semanticRelease({
        branches: ['master'],
        repositoryUrl: 'https://github.com/TheLonelyAstronaut/react-native-version-increaser-demo.git',
        ci: Boolean(process.env.CI)
    }, {
        env: { ...(process.env as Record<string, any>) },
    });

    return result ? result.nextRelease.version : '0.0.1';
}