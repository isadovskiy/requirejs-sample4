define(['sample/dependency1'], function (dependency) {
    return function () {
        console.log('Subsequent dependency: ' + dependency.version);
    }
});