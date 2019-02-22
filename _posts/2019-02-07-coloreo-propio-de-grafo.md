---
layout: post
title: "Coloreo propio de grafos"
date:   2019-02-07 10:00:01 -0300
comments: false
categories: [Portfolio]
tags: [C]
url: "/portfolio/2019/02/07/coloreo-propio-de-grafos.html"
image: "/assets/images/posts/grafo.png"
image_mini: "/assets/images/posts/grafo_mini.jpg"
---

![]({{page.image}})

Programa realizado en el ámbito académico. Es uno de mis mejores trabajos y de los que estoy más orgulloso.

## Introducción.

**¿Qué es un grafo?**

Un grafo es un conjunto de vértices intercomunicados por aristas (como en la imagen de portada). Son útiles para plantear y resolver cierto tipo de ejercicios.

**¿Que es un coloreo de grafo?**

A cada vértice se le asigna un "color", con la condición que no hayan 2 o más vértices que esten conectados por alguna arista y que tengan el mismo color.

Un coloreo trivial para un grafo sería asignarle un color distinto a cada vértice.

**¿Qué es un coloro propio de grafo?**

Un coloreo propio de un grafo, es un coloreo con la condición agregada que se estén utilizando la menor cantidad de colores posibles.

Llamaremos **&chi;** a la mínima cantidad de colores necesarios para generar un coloreo propio del grafo.

---

Resulta que, salvo para casos particulares, no existe un algoritmo polinomial (rápido) para generar un coloreo propio de un Grafo. Por culpa de ésto vamos a utilizar una heurística, es decir, una función que aproxime el valor de **&chi;**. Dicha función va a ser utilizar múltiples veces **Greedy**, el cual depende del ordenamiento inicial de los vértices.

---

## Diseño.

Éste programa fue pensado desde un pricipio para manejar grafos grandes, del orden de millones de vértices y aristas, y utilizar Greedy mil veces!. Por lo tanto para soportar éstas magnitudes se tuvo que pensar en eficiencia de manera constante. Si no se tiene mucho cuidado se podría desarrollar un programa que tarde días o meses en terminar.

![Descripción gráfica](https://docs.google.com/drawings/d/e/2PACX-1vRtoy1g3svRkMHvuquHsUWwb5f3PU-p46w6sj01tso7xjRhvR3HLZtEwh8tph_Y7Fmx6klteQVu7dlJ/pub?w=944&h=563)

---

## Profundidad.

Por información más específica y forma de uso, ver el repositorio Github donde se encuentra alojado.

Código fuente = [https://github.com/nahuelbrandan/discreta2](https://github.com/nahuelbrandan/discreta2)
