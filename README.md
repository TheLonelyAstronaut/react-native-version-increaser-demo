# react-native-version-increaser-demo
Semantic app version increasing before building 

Setup tool with your CI/CD:
1. Add *tools* folder into your project
2. Add command to *package.json* that will launch increasing before build (check example)
3. Before creating a new release build - change *version* filed in *package.json*
4. Run command from step 2 before build
5. Build your application!