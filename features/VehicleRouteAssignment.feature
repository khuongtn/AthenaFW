Feature: Vehicle Route Assignment

Scenario Outline: Login success

Given Navigate Athena website
When Input username: "<valid_username>", password: "<valid_password>"
When Click login button
When Select "plan" area
When Click Save
Then Should log in successfully to "https://athena-demo.karrostech.io/#/app/main"