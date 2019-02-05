Feature: POST Request

  Scenario Outline: Post Request-response
    Given I launch the request url
    Then I verify the <statuscode> statuscode in the response
	And I verify the <userid> userid in the response
	
  Examples:
	| userid | statuscode |
	| 1      | 200        |