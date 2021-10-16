---
layout: post
title: "Proper Coloring of a Graph"
short_title: "Graph"
subtitle: "Proper Coloring of a Graph"
date:   2019-02-07 10:00:01 -0300
comments: false
categories: [Portfolio]
tags: [C]
image: "/assets/img/posts/grafos.webp"
thumbnail: "/assets/img/posts/grafos.png"
lang: en
ref: graph-colored
showInIndex: false
---

Program carried out in the academic field. It is one of my best works and of which I'm most proud.

## Introduction

**What is a graph?**

A graph is a set of vertices intercommunicated by edges (as in the cover image). They are useful for represent certain 
types of problems, ej: 
[Travelling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem).

**What is a graph colored?**

Each vertex is assigned a color, with the condition that there are not 2 or more vertex that are connected by any
edge and have the same color.

![graphic example](https://docs.google.com/drawings/d/e/2PACX-1vRECQKsD5Ug1nJFwcabXvXEOJ1mRldy4bxWEOwZaI4_GjlQ4RgauR
-k4n6dFnj1f7Z8tlfdBykFZWcY/pub?w=426&h=116)

A trivial coloring for a graph would be to assign a different color to each vertex.

![example of graph with trivial coloring](https://docs.google.com/drawings/d/e/2PACX-1vQL5S7da2w4spRjOvP2mGTVKQmMhBo_xVbdJOqT-J58kqvbUAmuLut7_JlIoBc6fcHNsRfWriC2eihQ/pub?w=842&h=537)

**What is a proper coloring graph?**

A **proper** coloring graph, is a coloring of a graph, with the added condition that use the minor
numbers of colors possible.

We will call **&chi;** (Chi) the minimum number of colors necessary to generate a proper coloring of the graph.

![the same graphic example, with proper coloring. &chi; = 3](https://docs.google.com/drawings/d/e/2PACX-1vR8f76UOlO4UjXFKGUVnauxr18yiAsPnn0nQTXijj3Ci8E-1Y_pACI2bRIq4LcpEgORyh7h15rUaNGt/pub?w=824&h=534)

---

It turns out that, except for particular cases, there is no (fast) polynomial algorithm to generate a proper coloring 
of a Graph. Because of this we are going to use a heuristic, that is, a function that approximates the value of χ. 
This function will be to use [**Greedy algorithm**](https://en.wikipedia.org/wiki/Greedy_algorithm) multiple times, 
which depends on the initial ordering of the vertices.

---

## Design

This program was designed from the beginning to handle **larges graphs**, of the order of millions of vertices and
 tens of millions of edges, and use Greedy a thousand times! Therefore, to support **such magnitudes**, it was 
necessary to constantly think about **efficiency** throughout the development process.

If you are not very careful you could develop a program that takes days or even months to finish!

![graphic description](https://docs.google.com/drawings/d/e/2PACX-1vRtoy1g3svRkMHvuquHsUWwb5f3PU
-p46w6sj01tso7xjRhvR3HLZtEwh8tph_Y7Fmx6klteQVu7dlJ/pub?w=944&h=563)

---

## Conclusion

For more specific information and how to use it, see the source code 
[here](https://github.com/nahuelbrandan/discreta2).
