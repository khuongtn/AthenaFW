Feature: Home Page

Scenario Outline: Home Page navigates to features

Given Navigate and login Athena with username: "jpomije@gmail.com", password: "test2", and "plan" data area
When Click on a feature "<name>"
Then Should navigate successfully to "<page>"

Examples: Launch page successfully
|name |page |
|Routing Management  |https://athena-demo.karrostech.io/#/app/athena |
|Student Ridership  |https://athena-demo.karrostech.io/#/app/ridership |
|Dispatch  |https://athena-demo.karrostech.io/#/app/dispatch |
|Time & Attendance  |https://athena-demo.karrostech.io/#/app/timeandattendance |
|Telematics  |https://athena-demo.karrostech.io/#/app/telematics |
|IVIN  |https://athena-demo.karrostech.io/#/app/ivin |
|Mapping  |https://athena-demo.karrostech.io/#/app/mapping |
|Analytics  |https://athena-demo.karrostech.io/#/app/analytics |
|System Settings  |https://athena-demo.karrostech.io/#/app/admin |