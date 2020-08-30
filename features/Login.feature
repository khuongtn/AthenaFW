Feature: Log in Athena application

Scenario Outline: Login success

Given Navigate Athena website
When Input username: "<valid_username>", password: "<valid_password>"
When Click login button
When Select "plan" area
When Click Save
Then Should log in successfully to "https://athena-demo.karrostech.io/#/app/main"

Examples: Login success
|valid_username |valid_password |
|jpomije@gmail.com  |test2 |

Scenario Outline: Login unsuccess

Given Navigate Athena website
When Input username: "<username>", password: "<password>"
When Click login button
Then Should log in unsuccessfully with alert "<alert message>" and stay at "https://athena-demo.karrostech.io/#/app/login"

Examples: Login unsuccess
|username   |password   |alert message|
|||Both fields are required.|
|jpomije@gmail.com   ||Both fields are required.|
||test2 |Both fields are required.|
|jpomije1@gmail.com  |test2 |Username or password incorrect.|
|jpomije@gmail.com   |test1 |Username or password incorrect.|