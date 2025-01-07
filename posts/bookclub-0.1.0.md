---
title: Bookclub v0.1.0
summary: Simple application for managing a bookclub.
draft: false
category: application
date: 2025-01-07T00:00:00.000Z
tags:
  - post
  - rust
  - bookclub
---

# Bookclub

> A loco.rs application designed to help you manage your book club.

## Motivation

It can be hard to track bookclub meetings, attendance, books, and more in a group-chat thread.
We found ourselves hard pressed to recall who would host the next meeting, and even made a few mistakes where members were skipped.
So I built Bookclub, a simple application to help manage bookclubs.

## Project Status

The version of bookclub being released today (0.1.0) is extremely simple.
It relies on proxy-authentication, it does not allow creation of multiple distinct bookclubs, and has no instructions on deploying it- but it works for us and may help others as well.

Moving forward, I plan to add the following features:

- Book Search. When adding a new book, it would be nice to be able to search for a book rather than having to manually input everything.
- User Management. Although proxy-auth has been a nice stop-gap, I plan to integrate user management into the application itself.
- Book Rankings. Adding an ability for members to add rankings to books would allow for some fun analysis of the books we read and who picked them.
- Circuit Management. We split our bookclub into two circuits, but that is all codified statically. It would be better if this could be managed in the application itself.

If there's something you'd like to see added, feel free to [open an issue](https://github.com/thoward27/bookclub/issues/new).
I welcome any contributions, but am not actively seeking them out.

## Getting Started

To get started with bookclub, refer to the up-to-date instructions in the root readme [here](https://github.com/thoward27/bookclub/blob/main/README.md#development).

## Deploying Bookclub

Bookclub pushes a public Docker image to [Docker Hub](https://hub.docker.com/r/thoward27/bookclub).
To deploy it, you will need a postgres database, a reverse-proxy that offers proxy-authentication, a way to run Docker containers, and a cache.
For our deployment, we use the following stack:

```
Cloudflare -> Traefik -> Authelia (as a middleware) -> Bookclub -> Redis
                            \-> LLDAP                      \-> Postgres
```
