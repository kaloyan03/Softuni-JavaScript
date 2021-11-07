function httpRequestValidator(httpObject) {
    const validMethods = ['GET', 'POST', 'DELETE','CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];
    const specialCharacters = ['<', '>', '\\', "&", "\'", "\""];
    

    validateMethod();
    validateURI();
    validateVersion();
    validateMessage();

    return httpObject;


    function validateMethod() {
        let propName = 'method';
        if (httpObject[propName] == undefined || validMethods.includes(httpObject[propName]) == false) {
            throw new Error('Invalid request header: Invalid Method')
        };
    };

    function validateURI() {
        let propName = 'uri';
        let uriRegex = /^\*$|^[A-Za-z0-9.]+$/;
        if (httpObject[propName] == undefined || !uriRegex.test(httpObject['uri'])) {
            throw new Error('Invalid request header: Invalid URI')
        };
        
    };

    function validateVersion() {
        let propName = 'version';
        if (httpObject[propName] == undefined || validVersions.includes(httpObject[propName]) === false) {
            throw new Error('Invalid request header: Invalid Version')
        };
    };

    function validateMessage() {
        let propName = 'message';
        if (httpObject[propName] == undefined || specialCharacters.includes(httpObject[propName])) {
            throw new Error('Invalid request header: Invalid Message')
        };
    };
}



httpRequestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
)

httpRequestValidator({
    method: 'GET',
    uri: 'helo',
    version: 'HTTP/1.1',
    message: ''
  }
)


httpRequestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '&sadas'
  }
  )