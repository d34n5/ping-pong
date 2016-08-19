# Ping-Pong #

#### Javascript-powered Ping-Pong Game ####

## Week 3 Independent Project by Dean Scelza @ Epicodus, 8-19-16 ##

### Please check out my work on gh-pages: https://d34n5.github.io/ping-pong

## Description & Technologies Used
This webpage takes a user-provided integer and returns a range of numbers from 1 to the provided number, but with the following exceptions: Numbers divisible by 3 are replaced with pings, numbers divisible by 5 are replaced with pongs, and numbers divisible by 15 are replaced with pingpong.  Project also provides me an opportunity to practice for loops and conditional statements in Javascript.

## Specifications
1. Take integer from user
 - Ex. In: 2
 - Ex. Out: 2
2. Count Up to provided number
 - Ex. In: 2
 - Ex. Out: [1,2]
3. Remove numbers divisible by 3 and replace with ping
 - Ex. In: [1,2,3,4,5]
 - Ex. Out: [1,2,ping,4,5]
4. Remove numbers divisible by 5 and replace with pong
 - Ex. In: [1,2,ping,4,5]
 - Ex. Out: [1,2,ping,4,pong]
5. Remove numbers divisible by 15 and replace with pingpong
 - Ex. In: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pong,16]
 - Ex. Out: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong,16]
6. Return full range of numbers to the user
 - Ex. In: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong,16]
 - Ex. Out: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong,16]
7. Clear results each time a new number is entered.
 - Ex. In: [1,2,3,4]
 - Ex. Out: []
8. Return a special .gif if user inputs a number greater than 50.
 - Ex. In [51]
 - Ex. Out [mind blown image]

## Installation & Set-Up
1. Clone the repository: https://github.com/d34n5/ping-pong
2. Use your preferred browser to open index.html

## Known Bugs
There are no known bugs.  However, I encourage both feedback and criticism: If you have ANY concerns, questions or suggestions, feel free to contact me at:  deanscelza@gmail.com

## License
**Copyright (c) 2016, Dean Scelza @ Epicodus**
This software is licensed under the MIT license.
