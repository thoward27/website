---
template: post
title: 'Crash Course C++: Bottom Up'
slug: /posts/crash-course-cpp-bottom-up/
draft: false
date: 2019-05-09T23:46:37.121Z
description: >-
  Core Concepts of C++ Compressed Completely taught bottom up, or low-level to
  high-level.
category: Tutorials
tags:
  - C++
  - Tutorials
  - Bottom-Up
---

This article is part of a 2-part series on learning C++.

While this article presents C++ from a bottom-up perspective, it's compatriot uses a top-down approach to accomplish the same goal: teaching you the bare necessities of C++ as fast as possible.

## Why C++

- 3rd in Popularity (TIOBE Rating Jan. 2018), only behind Java and C
- 2nd in Average Salary (Indeed.com): $115k
- Extremely Fast (Beat Java/Go/Scala according to Google
- Offers low-level functionality, with object-oriented tools
- Can be used to build almost anything

## Evolution of C++

### History of C

- Developed during 1969-1973 in Bell Labs
- Acts as a layer of abstraction over assembly
- Is extremely flexible, but offers no protection
- Very small feature set
- Compiled with gcc

Here's an example of a `hello world` program in C:
```C
/* Hello World */
#include <stdio.h>
int main() {	
    printf(“Hello, world!\n”);	
    return 0;
}
```

### Introduction to C++

- Evolved as a superset of C in 1985
- Initially called “C with Classes”
- Expanded feature set while still maintaining speed
- The goal was to let programmers use object-oriented techniques with the power and speed of C

```C++
/* Hello World */

#include <iostream>  // New include style for builtins

int main() {
    std::cout << “Hello, world”; // New functions for I/O
    std::cout << std::endl;
    return 0;
}
```


