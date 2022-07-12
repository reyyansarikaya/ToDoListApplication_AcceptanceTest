Feature: ToDo List Project
  As Product Owner I want to surf on our ToDo site project

  Scenario: I should see some todo on main page
    Given Empty ToDo list
    When I write "buy some milk" to <text box> and click to <add button>
    Then I should see "buy some milk" item in ToDo list
