define(['require', './dependency1'], function (require, dependency) {
    return function () {
        console.log('Initial dependency: ' + dependency.version);

        requirejs.config({
           map: {
               '*': {
                   'sample/dependency1': 'sample/dependency2'
               }
           }
        });

        require(['./module2'], function (module) {
            module();
        });

    }
});