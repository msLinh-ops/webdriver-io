Feature: Interacting with a login form

    @androidApp
    Scenario: Login Successfully
        Given I launch the app
        When I login with username and password
        Then I should see a flash message saying You are logged in!

    @androidApp
    Scenario: Sign up Successfully
        Given I launch the app
        When I sign up a new account
        Then I should see a flash message saying You successfully signed up!

    # @iosApp
    # Scenario: Launch Settings app of an iphone
    #   Given I launch the settings app of iphone
    #   Then I should see the general label

    # @androidBrowser
    # Scenario: Launch the google url in browser
    #     Given I launch the google
    #     Then I verify the title to be Google
