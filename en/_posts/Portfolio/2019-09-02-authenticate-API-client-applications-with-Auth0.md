---
layout: post
title: "Authenticate API client applications with Auth0"
date:   2019-09-02 00:00:01 -0300
comments: false
categories: [Portfolio]
tags: [Auth0, APIs, Oauth 2.0, Python]
image: "/assets/img/posts/auth0.webp"
thumbnail: "/assets/img/posts/auth0.jpg"
lang: en
ref: auth0
---

In the workplace, I tell you one of the biggest challenges I had to face.

# Introduction

First let's see some definitions.

**What is an API?**

An [API](https://es.wikipedia.org/wiki/Web_API) (Application Programming Interface) is a set of routines that
provides access to certain software functions.


That is, in order not to have to reinvent the wheel, one could make calls to already created APIs that provide the
functionality we want.

In our case we are working specifically with *Web APIs*.

![API design.](https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/104559387/original/88a2503b41467bbd07990f5d35115e84e38c3888/design-and-develop-rest-apis-using-mvc-web-api.webp)

For example, an application that wants to show the weather forecast, instead of developing all the collection and 
analysis of climate data (which would be expensive) makes calls to an API that already implements it, for example 
[Open weather map](https://openweathermap.org/api).


On the other hand, suppose an application that in its description the user can put a song that he likes. 
To save a lot of work the application could make calls to the 
[Spotify API](https://developer.spotify.com/documentation/web-api/).

---

**What is Auth0?**

[Auth0](https://auth0.com/) is an Argentine company that provides the user authentication and authorization service
 into a product, thus simplifying development work.

Basically it provides the applications with the *login box*, so they don't have to develop it themselves, and so on 
avoid expenses and maintenance costs of one of the critical points of any system.

---

**What is Oauth 2.0?**

[Oauth 2.0](https://oauth.net/2/) It is an open protocol for authentication and delegation of access permissions.

Widely used in social networks, for example: to be able to enter with your *Facebook* user to some other
application, without giving the latter the credentials of your facebook user.

---

## Development


In the development project I am working on, one of the features provided by the system is an ***API Manager***, 
which allows you to *create*, *edit*, *publish/unpublish* and *delete* ***APIs***.

Finally, summarizing in a paragraph what I have been developing in the system is:


that an *Editor* of APIs can protect *Endpoints* from this with *Auth0* using the *Oauth 2.0* protocol,
in order to achieve that only the allowed *client applications* can have access.

---
---
