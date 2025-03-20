---
title: 'IS115Lab0a1'
lab: 'Lab 0'
part: 'Part a1'
date: '2025-01-24'
difficulty: 'Easy'
tags: ['Condition']
complexity: 'O(1)'
---

## 📝 Problem Statement

Those who frequent pubs and clubs will know that some clubs impose entry requirements. A particular club in Singapore admits only men who are at least 23 years old and ladies who are at least 18 years old.

Write a program to check if a male or female person of a certain age qualifies to enter this club. Get your input from STDIN and output your answer to STDOUT.

## 🖥️ Input Format

The character 'M' or 'F' (without quotes), followed by a space, and the age as an integer.

## 📤 Output Format

True or False

## 🏷️ Constraints

Input: x y where x is an element in `{M , F}`, and y is an integer

## 🚀 Solution Approach

The program checks the **sex** and **age** conditions as follows:

1. **If `sex == "F"` and `age > 17`**, return `True`.
2. **If `sex == "M"` and `age > 22`**, return `True`.
3. **Otherwise, return `False`.**

## 🧩 Code Implementation

```python
sex, age = input().split()
age = int(age)

if sex == "F" and age > 17:
    print(True)
elif sex == "M" and age > 22:
    print(True)
else:
    print(False)
```
