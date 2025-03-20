---
title: 'IS115Lab0a2'
lab: 'Lab 0'
part: 'Part a2'
date: '2025-01-24'
difficulty: 'Easy'
tags: ['Conditionals', 'Input Validation']
complexity: 'O(1)'
---

## 📝 Problem Statement

Those who frequent pubs and clubs will know that some clubs impose entry requirements. A particular club in Singapore admits only men who are at least 23 years old and ladies who are at least 18 years old.

Write a program to check if a male or female person of a certain age qualifies to enter this club. Get your input from STDIN and output your answer to STDOUT.

Your program has to check for / conform to the following rules to pass all the test cases:

1. If there is zero or only 1 input, output "Insufficient input."

2. Ignore all inputs after the second input.

3. The gender can be upper or lower case.

4. The age can be an integer or a floating point number. But the admission rules still stand e.g. a male who is 22.9 years old still should NOT be allowed to enter the pub.

5. For invalid first input, output "Invalid gender. Please use 'M' or 'F'."

6. For invalid second input, output "Invalid age. Please use an integer or a floating point number.".

## 🖥️ Input Format

List of strings / characters / numbers separated by spaces.

## 📤 Output Format

True or False for valid inputs.

Order of other checks:

1. If there is zero or only 1 input, output "Insufficient input." Stop program.

2. The age can be an integer or a floating point number. But the admission rules still stand e.g. a male who is 22.9 years old still should NOT be allowed to enter the pub.

3. Check for first input first. For invalid first input, output "Invalid gender. Please use 'M' or 'F'."

4. If first input is valid, check for second input. For invalid second input, output "Invalid age. Please use an integer or a floating point number.".

## 🏷️ Constraints

Correct input: x y where x is an element in `{M , F}`, and y is a number.

For other details, read the problem statement.

## 🚀 Solution Approach

The program follows a **step-by-step validation process**:

1️⃣ **Check Input Length** → If fewer than 2 inputs, print `"Insufficient input."` and exit.  
2️⃣ **Validate Gender** → Convert to uppercase (`M` or `F`). If invalid, print `"Invalid gender."` and exit.  
3️⃣ **Validate Age** → Attempt to convert to `float`. If invalid, print `"Invalid age."` and exit.  
4️⃣ **Check Admission Criteria** →

- **Males (`M`)** must be **≥ 23** years old.
- **Females (`F`)** must be **≥ 18** years old.
- Print `True` if criteria are met, otherwise `False`.

## 🧩 Code Implementation

```python
data = input().split()
if len(data) < 2:
    print("Insufficient input.")
    exit()

sex, age = data[0], data[1]

if sex not in ['m','f','M','F']:
    print("Invalid gender. Please use 'M' or 'F'.")
    exit()
else:
    sex = sex.upper()

try:
    age = float(age)
except:
    print("Invalid age. Please use an integer or a floating point number.")
    exit()

if sex == 'M' and age >= 23:
    print(True)
elif sex == 'F' and age >= 18:
    print(True)
else:
    print(False)
```
