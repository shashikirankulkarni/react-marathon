# Assignment 2

## What is `NPM`?
NPM is a package manager for Node.js packages

## What is `Parcel/Webpack`? Why do we need it?
Parcel and webpack are the bundlers used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact

## What is `.parcel-cache`?
.parcel-cache is a directory that stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch.

## What is `npx` ?
NPX is a tool to execute node.js packages.

##  What is difference between `dependencies` vs `devDependencies`
"dependencies" : Packages required by your application in production. 
"devDependencies" : Packages that are only needed for local development and testing.

## What is Tree Shaking?
In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination".

## What is Hot Module Replacement?
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them.
1. 𝐇𝐨𝐭 𝐌𝐨𝐝𝐮𝐥𝐞 𝐑𝐞𝐩𝐥𝐚𝐜𝐞𝐦𝐞𝐧𝐭 (𝐇𝐌𝐑): Witness changes instantly without a full page reload, boosting development efficiency!
2. 𝐃𝐞𝐯 𝐁𝐮𝐢𝐥𝐝 & 𝐋𝐨𝐜𝐚𝐥 𝐒𝐞𝐫𝐯𝐞𝐫: A seamless development experience with Parcel's built-in server for local testing.
3. 𝐅𝐢𝐥𝐞 𝐖𝐚𝐭𝐜𝐡𝐢𝐧𝐠 𝐀𝐥𝐠𝐨𝐫𝐢𝐭𝐡𝐦 (𝐂++): High-performance file watching for quick feedback during development.
4. 𝐂𝐚𝐜𝐡𝐢𝐧𝐠: Speed up builds by caching dependencies and artifacts, resulting in faster development cycles.
5. 𝐈𝐦𝐚𝐠𝐞 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧: Automatically optimize images for better performance without compromising quality.
6. 𝐌𝐢𝐧𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 & 𝐁𝐮𝐧𝐝𝐥𝐢𝐧𝐠: Shrinks code size for efficient delivery and clean, organized bundles.
7. 𝐂𝐨𝐦𝐩𝐫𝐞𝐬𝐬𝐢𝐧𝐠: Reduces file sizes for faster page loading, essential for a smooth user experience.
8. 𝐂𝐨𝐧𝐬𝐢𝐬𝐭𝐞𝐧𝐭 𝐇𝐚𝐬𝐡𝐢𝐧𝐠: Ensures consistency in file hashing, aiding in cache invalidation strategies.
9. 𝐂𝐨𝐝𝐞 𝐒𝐩𝐥𝐢𝐭𝐭𝐢𝐧𝐠: Enhances performance by splitting code into smaller, more manageable chunks.
10. 𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐭𝐢𝐚𝐥 𝐁𝐮𝐧𝐝𝐥𝐢𝐧𝐠: Supports older browser versions, ensuring compatibility across various user environments.
11. 𝐃𝐢𝐚𝐠𝐧𝐨𝐬𝐭𝐢𝐜𝐬 & 𝐄𝐫𝐫𝐨𝐫 𝐇𝐚𝐧𝐝𝐥𝐢𝐧𝐠: Receives detailed feedback on build processes, aiding in quick issue resolution.
12. 𝐇𝐓𝐓𝐏𝐒 𝐒𝐮𝐩𝐩𝐨𝐫𝐭: Enables secure data transmission, aligning with modern security standards.
13. 𝐓𝐫𝐞𝐞 𝐒𝐡𝐚𝐤𝐢𝐧𝐠: Removes unused code, optimize the final bundle size, and improve performance.
14. 𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐭 𝐃𝐞𝐯 𝐚𝐧𝐝 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧 𝐁𝐮𝐧𝐝𝐥𝐞𝐬: Tailors development and production environments with ease.

## What is `.gitignore`? What should we add and not add into it?
gitignore file is a text file that tells Git which files or folders to ignore in a project.

What to Add to .gitignore: 
 1. Build Artifacts: Ignore compiled binaries, executables, and build output directories.
    - build/, dist/, *.exe
 2. Temporary Files: Ignore temporary files and editor-specific files.
    - *~, .DS_Store, .vscode/
 3. Dependencies: Ignore package management directories and files.
    - node_modules/, vendor/
 4. Logs and Debug Output: Ignore log files and debugging output.
    - *.log, *.debug
 5. Configuration Files with Sensitive Information: Ignore configuration files containing sensitive information, such as API keys or passwords.
    - config.ini, .env

What Not to Add to .gitignore:
  1. Critical Configuration Files: Do not ignore configuration files that are essential for the project to function. Only ignore files containing sensitive information.
    -  Wrong: Avoid ignoring essential configuration files, !important_config.ini
  2. Documentation: Avoid ignoring documentation files. Documentation is often important for understanding the project.
    - Wrong: Avoid ignoring documentation, doc/, README.md
  3. Version Control Files: Do not ignore version control system files. Git-related files should not be ignored.
    - Wrong: Avoid ignoring version control files, .git/, .gitignore

## What is the difference between `package.json` and `package-lock.json`
package.json: It contains basic information about the project.
package-lock.json: Keeps tack of exact version of the package, it contains the all the configurations of transitive dependencies.

## Why should I not modify `package-lock.json`?
Because it helps maintain consistent dependency versions, ensures reproducibility, and avoids version conflicts in Node.js projects.

## What is `node_modules` ? Is it a good idea to push that on git?
The node_modules folder contains every installed dependency for your project. 
We should not push node_modules to git.

## - What is the `dist` folder?
The name "dist" is short for "distribution,".
The dist folder is the default output directory for the bundled and optimized files during the build process. When you run Parcel to build your project, it processes and bundles your source code, and the resulting files are typically placed in the dist folder. This folder contains the final distribution or production-ready version of your application.

## What is `browserlists`?
browserslist is a configuration file that determines which browsers your project should support.

## Read about: ^ - caret and ~ - tilda
^2.11.0 - ^ updates only minor upgrades in the version automatically. (Safe Choice)
~2.11.0 - ~ updates major upgrades automatically.
 
#

# Notes
- React does not make our application fast, there are many packages to use which makes React app fast, scalable and production ready.
- npm is not node package manager. It manages packages.
- package.json is configuration for npm.
- npm init will initalize the the configuration and creates package.json file.
- One of the important package in project is Bundler.
- As we have HTML, CSS, JS these files have to be bundled, minified, compressed, cached, cleaned before moving to production. Eg. Webpack, Parcel, Vite.
- Create React App uses React Webpack and Babel behind the scenes.
- npm install -D parcel, D stands for dev dependency.
- Two types of Dependency - Dev dependency and Normal dependency.
- Dev dependency is required during development of the app.
- Normal dependency is used in production also.
- ^2.11.0 - ^ updates only minor upgrades in the version automatically. (Safe Choice)
- ~2.11.0 - ~ updates major upgrades automatically.
- package-lock.json: Keeps tack of exact version of the package, it contains the all the configurations of transitive dependencies. 
- package-lock.json has key called integrity which has value of hash code. This hashcode is used to maintain same version of package that is being used in both local and production.
- node_modules is the code fetched from npm for our dependencies.
- node modules can have their own dependencies hence called as Transitive Dependencies.
- npx parcel index.html
- npx is executing a package
- npm install react
- npm install react-dom
### Features of Parcel
- Hot Module Replacement
- Dev build, Local Server
- File Watching Algorithm (C++)
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistant Hashing
- Code Splitting
- Differential Bundling - Provides supports for older browsers versions
- Diagnostics
- Error handling
- HTTPS Support
- Tree Shaking - Remove Unused Code
- Different Dev and Production bundle
##
- npx parcel build index.html - Creates Production Build
- main: in package.json is the entry point to the app
- Browserslist: browserslist is a configuration file that determines which browsers your project should support.