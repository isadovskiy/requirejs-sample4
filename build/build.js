({
    appDir: '../src',
    dir: '../www',
    mainConfigFile: '../src/sample/config.js',
    baseUrl: '.',
    modules: [
        {
            name: 'sample/app',
            include: [
                'sample/module2',
                'sample/dependency2'
            ],
            exclude: [
                'jquery'
            ]
        }
    ],
    findNestedDependencies: false,
    optimize: 'none',
    skipDirOptimize: true,
    generateSourceMaps: false,
	removeCombined: false,
    preserveLicenseComments: false
})
