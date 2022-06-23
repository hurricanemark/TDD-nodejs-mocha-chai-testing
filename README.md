# Test Driven Development -- Nodejs-mocha-chai-testing
 
 Software testing by applying chai assertions, a test driven development library under the mocha, a light weight nodejs test framework.  Although Mocha can be paired with any of the assertion libraries, it is often paired with Chai.

Why do we need to unit test the code when console logging can show most of the errors?  In development, it is an insurmountable task if programmers have to shift through a huge codebase.  Console logging style varries between coder leading to unorganized debuging logs.

Typically, QA engineers write unit tests started when static testing(reviews of project documents) finished.  Naturally, unit tests will fail at first, and would soon pass when developers refactored their development code.  This process produces strong and structurally organized codebase that is test driven code. 

### Setting up

Initialize a node project and install both chai and mocha as dev dependencies.

```
npm init -y

npm install --save-dev

```

Insert test script in the package.json file.

```
"scripts": {
	"test": "mocha"
	}
```

}

### Running tests

```
npm run test
```

or

```
npm run
```

![Tests output](/public/Output.PNG)

