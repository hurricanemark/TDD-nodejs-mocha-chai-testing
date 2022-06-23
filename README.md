# Test Driven Development -- Nodejs-mocha-chai-testing
 
 Typically, QA engineers begin to write unit tests right after completing static testing(reviews of project documents).  Naturally, unit tests will fail at first, and would soon pass when developers refactored their development code.  This process produces strong and structurally organized codebase that is test driven code, where new features will not introduce breaking changes.

 This TDD project uses chai assertions [Chai Assertion Library](https://www.chaijs.com/api/assert/), a test driven development library under the mocha, a light weight nodejs test framework.  Although Mocha can be paired with any of the assertion libraries, it is often paired with Chai.  The independence of test cases is a key principle of unit testing.  Mocha provides tools for cleaning the state of the software being tested in order to insure that test cases are being run independently of each other.

Why do we need to unit test the code when console logging can show most of the errors?  In development, it is an insurmountable task if programmers have to shift through a huge codebase.  Console logging style varries between coder leading to unorganized debuging logs.




### Setting up

Initialize a node project with package management and install both chai and mocha as dev dependencies.

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

