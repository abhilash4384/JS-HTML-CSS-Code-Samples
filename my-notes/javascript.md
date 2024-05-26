# History:

- Developed by Brendan Eich is an American computer programmer for @ Ntescape communication corporation in 1995 (I belive it was specially created for popup advertisement or something)

# Defination (Inspired by 3 iditos Chatur)

- Single threaded, loosly typed, garbage collected, interpreted or JIT compiled, prototype based, dynamic programming lang with non-blocking event loop.

# Sourcemaps:

- source map are mapping files which keeps the links between budled files(build or dist mostly in case of frontend) and original files(development files)
- usually when we debug files the debugger uses source map files to establish a link between original file and bundled files (Not entirly sure but I think the webpack used to have sourcemaps in older react version)
- The sourcemaps files are configurable from the bundlers scripts - whether to generate it or not, destination folder etc
- This files are also useful in production bug of frontend - for this we have to configure analytics tools like firebase or sentry and provide them the sourcemap file.

# Ways to create object in JS

1. const a = {}
2. new Object()
3. Object.create(prototype)
4. Function constructor (using new keyword for a function)
5. Object.defineProperty(...)
6. Object.assign(...)
