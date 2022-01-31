---
layout: post
title: "Coloreo propio de grafos"
short_title: "Grafos"
subtitle: "Coloreo propio de grafos"
date:   2019-02-07 10:00:01 -0300
comments: false
categories: [Portfolio]
tags: [C, grafos]
image: "/assets/img/posts/grafos.webp"
thumbnail: "/assets/img/posts/grafos.png"
ref: graph-colored
lang: es
showInIndex: true
---

Programa realizado en el ámbito académico. Es uno de mis mejores trabajos y de los que estoy más orgulloso.

## Introducción

**¿Qué es un grafo?**

Un grafo es un conjunto de vértices intercomunicados por aristas (como en la imagen de portada). Son útiles para 
plantear y resolver cierto tipo de problemas, ej: 
[el problema del viajante](https://es.wikipedia.org/wiki/Problema_del_viajante).

**¿Que es un coloreo de grafo?**

A cada vértice se le asigna un "color", con la condición que no hayan 2 o más vértices que estén conectados por alguna 
arista y que tengan el mismo color.

![ejemplo gráfico](https://docs.google.com/drawings/d/e/2PACX-1vRECQKsD5Ug1nJFwcabXvXEOJ1mRldy4bxWEOwZaI4_GjlQ4RgauR-k4n6dFnj1f7Z8tlfdBykFZWcY/pub?w=426&h=116)

Un coloreo trivial para un grafo sería asignarle un color distinto a cada vértice.

![ejemplo gráfico de grafo con coloreo trivial](https://docs.google.
com/drawings/d/e/2PACX-1vQL5S7da2w4spRjOvP2mGTVKQmMhBo_xVbdJOqT-J58kqvbUAmuLut7_JlIoBc6fcHNsRfWriC2eihQ/pub?w=842&h=537)

**¿Qué es un coloreo propio de grafo?**

Un coloreo **propio** de un grafo, es un coloreo de grafo, con la condición agregada que se estén utilizando la **menor 
cantidad** de colores posibles.

Llamaremos **&chi;** (Chi) a la mínima cantidad de colores necesarios para generar un coloreo propio del grafo.

![el mismo ejemplo gráfico, con coloreo propio. &chi; = 3](https://docs.google.
com/drawings/d/e/2PACX-1vR8f76UOlO4UjXFKGUVnauxr18yiAsPnn0nQTXijj3Ci8E
-1Y_pACI2bRIq4LcpEgORyh7h15rUaNGt/pub?w=824&h=534)

---

Resulta que, salvo para casos particulares, no existe un algoritmo polinomial (rápido) para generar un coloreo propio
de un Grafo, a causa de esto vamos a utilizar una heurística, es decir, una función que aproxime el valor de 
**&chi;**. Dicha función va a ser utilizar múltiples veces 
[**Greedy**](https://en.wikipedia.org/wiki/Greedy_algorithm), el cual depende del ordenamiento inicial 
de los vértices.

---

## Diseño

Este programa fue pensado desde un principio para manejar **grafos grandes**, del orden de millones de vértices y
 decenas de millones de aristas, y utilizar Greedy mil veces!. Por lo tanto para soportar tales magnitudes se tuvo que
  pensar en eficiencia de manera constante durante todo el proceso de desarrollo.

Si no se tiene mucho cuidado se podría desarrollar un programa que tarde días o incluso meses en terminar!

![Descripción gráfica](https://docs.google.com/drawings/d/e/2PACX-1vRtoy1g3svRkMHvuquHsUWwb5f3PU-p46w6sj01tso7xjRhvR3HLZtEwh8tph_Y7Fmx6klteQVu7dlJ/pub?w=944&h=563)

---

## Profundidad

Por información más específica y forma de uso, ver el 
[repositorio con código fuente](https://github.com/nahuelbrandan/discreta2).
