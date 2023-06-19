describe("Greeting The User", function () {

  it('should return a greeting to the user in Arabic"', function () {
    let greet = MainGreetings();

    greet.setName("Raadiyah")
    greet.setLanguage("arabic")

    assert.equal("مرحباً، Raadiyah!", greet.greetingTheUser("Raadiyah", "arabic"))
  })

  it('should return a greeting to the user in Afrikaans"', function () {
    let greet = MainGreetings();

    greet.setName('Nico')
    greet.setLanguage("afrikaans")

    assert.equal("Hallo, Nico!", greet.greetingTheUser("Nico", "afrikaans"))
  })
  it('should return a greeting to the user in English"', function () {
    let greet = MainGreetings();

    greet.setName('Hidaayat')
    greet.setLanguage("english")

    assert.equal("Hello, Hidaayat!", greet.greetingTheUser("Hidaayat", "english"))
  })

})



describe("Error Messages", function () {
  it('should  be able to return error message for when name is  not entered and radio input is not selected"', function () {
    let greet = MainGreetings();

   greet.setName("")
   greet.setLanguage("")

    assert.equal("Please enter your name and select a language", greet.errorMessages())
  })

  it('should  be able to return error message when name is not entered"', function () {
    let greet = MainGreetings();

    greet.setName("")
    greet.setLanguage("english")

    assert.equal("Please enter your name", greet.errorMessages())
  })
  it('should  be able to return error message for name"', function () {
    let greet = MainGreetings();

    greet.setName("Raadi")
    greet.setLanguage("")

    assert.equal("Please select a language", greet.errorMessages())
  })

})

describe("Validity", function () {
  it('should  be able to return error message when user enters numbers"', function () {
    var errorOne = greet();

    errorOne.setName('544')
    errorOne.setLanguage("")

    assert.equal("Enter a valid name and select a language", errorOne.errorMessage())
  })
  it('should  be able to return error message when user enters characters"', function () {
    var errorOne = greet();

    errorOne.setName('$%#$*&')
    errorOne.setLanguage("")

    assert.equal("Enter a valid name and select a language", errorOne.errorMessage())
  })
  it('should  be able to return error message for name with numers and characters"', function () {
    var greetingOne = greet();

    greetingOne.setName('lely@65')
    greetingOne.setLanguage("xhosa")

    assert.equal("Enter a valid name", greetingOne.errorMessage())
  })
})


describe("counter", function () {
  it('should be able to count number of people greeted "3" for 3 different names name', function () {
    var countOne = greet();


    countOne.addName("lelly");
    countOne.addName("lethabo");
    countOne.addName("letago");


    assert.equal(3, countOne.getCounter());
  });


  it('should  be able to return 1 for same name with different cases"', function () {
    var greetingOne = greet();

    greetingOne.setName('lelLy')
    greetingOne.setName('lelLy')
    greetingOne.setName('lelLy')
    greetingOne.setName('lelLy')


    assert.equal(1, greetingOne.addName(name))
  })
});


describe("Reseting The Counter", function () {
  it('should return 0 once the counter reset button has been pressed ', function () {

    let greet = MainGreetings();

    greet.amountOfUsers("Ngomso", "english")
    greet.amountOfUsers("Tendani", "afrikaans")
    greet.amountOfUsers("Saffah", "arabic")

    greet.getCounter()

    assert.equal( 0, greet.getCounter())
  })
})