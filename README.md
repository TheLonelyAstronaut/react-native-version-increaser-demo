# react-native-version-increaser-demo
Semantic app version increasing before building 

Setup tool with your CI/CD:
1. Install GitHub CLI (*brew install gh*)
2. Add *tools* folder into your project
3. Add command to *package.json* that will launch increasing before build (check example)
4. Run command from step 3 before build
5. Build your application!

After step 4 new tag and release will be added to GitHub project page.