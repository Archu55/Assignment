Feature: GET Request

  Scenario Outline: Get Request-response
    Given I launch the request url with userid <userid>
    Then I verify the <statuscode> statuscode in the response
	And I verify the <userid> userid in the response
	
  Examples:
	| userid | statuscode |
	| 1      | 200        |
