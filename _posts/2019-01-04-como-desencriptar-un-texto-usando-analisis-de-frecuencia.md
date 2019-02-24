---
layout: post
title: "Como desencriptar un texto usando análisis de frecuencia."
date:   2019-01-04 00:00:01 -0300
comments: true
url: "/2019/01/04/como-desencriptar-un-texto-usando-analisis-de-frecuencia.html"
image: "/assets/images/posts/encriptar.jpg"
image_mini: "/assets/images/posts/encriptar_mini.jpg"

---

![]({{page.image}})

Recientemente encontré una oferta laboral en la que como proceso de preselección pedía desencriptar el siguiente texto y explicar el procedimiento realizado:

<p style="background-color:#f5f5f0">
ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλΨΛΣΘϑΞϗΦϑλΨΣΞΨλϑΞΨζβΣφΔΨΣΦΨΣΞΨξΛϗ
ΞΞϑΨϖΣΞΨΠΣϖΛΣφΔΞΨΩΨΠΛΣΦϖϗϖϑΨΔΨΞΔΨΘΔφϗΔΨϖΣΨΞϑλΨΓΔΘϗΦϑλΨΣΞΨ
ΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣλΨξΔΦϖΣΛΔΨϖΣΨΦϗΣξΞΔΨλβΨΠϑΦΓΡϑΨΔ
ΞΨαϗΣΦμϑΨΞϑΨλΔΞβϖΔΦΨΞΔλΨεΞΔβμΔλΨϖΣΞΨΠΔζϑΦΔΞΨΩΨΔΦϗΘΔΦϖϑΨΞΔ
ΨμΛϑΠΔΨΠΔΛΨΣλϑλΨΓΣΛΛϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΞΔλΨΠΣ
ΦΔλΨΩΨΞΔλΨαΔηβϗμΔλΨλΣΨαΔΦΨΠΔΛΨΞΔΨΘϗλΘΔΨλΣΦϖΔΨΞΔλΨΠΣΦΔλΨλϑ
ΦΨϖΣΨΦϑλϑμΛϑλΨΞΔλΨαΔηβϗμΔλΨλϑΦΨΔζΣΦΔλ</p>

Hace poco también leí el libro 'Los códigos secretos' de Simon Singh, donde cuenta y muestra toda la historia de la criptografía y sus usos, muy bueno y lo súper recomiendo.

![Portada del libro](http://www.librosmaravillosos.com/loscodigossecretos/imagenes/portada.jpg)

Así que pensé que sería algo interesante para hacer, me arremangue la camisa y comencé.

---

## Análisis de la situación y suposiciones.

En éste punto sabemos muy poco así que vamos a suponer lo siguiente y ver hacia donde nos lleva.

*   Que el lenguaje original esta en español, dado que la oferta laboral estaba en éste idioma.
*   Suponemos que se utilizo una de las encriptaciones más simple e históricas, llamada [*cifrado clásico*](https://es.wikipedia.org/wiki/Cifrado_cl%C3%A1sico) más específicamente un subconjunto de éste llamado [*cifrado por sustitución*](https://es.wikipedia.org/wiki/Cifrado_por_sustituci%C3%B3n).

    En un cifrado por sustitución, las letras (o grupos de letras) son sistemáticamente reemplazadas en el mensaje por otras letras (o grupos de letras).

![Ejemplo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ROT13.png/600px-ROT13.png)

## Análisis de frecuencia.

Para poder romper la encriptación vamos a utilizar el método de [*análisis de frecuencia*](https://es.wikipedia.org/wiki/An%C3%A1lisis_de_frecuencias).

El análisis de frecuencias está basado en el hecho de que, dado un texto, ciertas letras o combinaciones de letras aparecen más a menudo que otras, existiendo distintas frecuencias para ellas. Por ejemplo, en español la letra A y E son muy comunes, mientras que la K y W son muy raras.

![](https://upload.wikimedia.org/wikipedia/commons/9/98/Frecuencia_de_uso_de_letras_en_espa%C3%B1ol.PNG)

Mediante un pequeño programa escrito en **python** vemos los diferentes signos utilizados, y la cantidad de uso de cada uno de ellos:

<pre><code class="language-python">
from collections import Counter

text = "ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλΨΛΣΘϑΞϗΦϑλΨΣΞΨλϑΞΨζβΣφΔΨΣΦΨΣΞΨξΛϗΞΞϑΨϖΣΞΨΠΣϖΛΣφΔΞΨΩΨΠΛΣΦϖϗϖϑΨΔΨΞΔΨΘΔφϗΔΨϖΣΨΞϑλΨΓΔΘϗΦϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣλΨξΔΦϖΣΛΔΨϖΣΨΦϗΣξΞΔΨλβΨΠϑΦΓΡϑΨΔΞΨαϗΣΦμϑΨΞϑΨλΔΞβϖΔΦΨΞΔλΨεΞΔβμΔλΨϖΣΞΨΠΔζϑΦΔΞΨΩΨΔΦϗΘΔΦϖϑΨΞΔΨμΛϑΠΔΨΠΔΛΨΣλϑλΨΓΣΛΛϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΞΔλΨΠΣΦΔλΨΩΨΞΔλΨαΔηβϗμΔλΨλΣΨαΔΦΨΠΔΛΨΞΔΨΘϗλΘΔΨλΣΦϖΔΨΞΔλΨΠΣΦΔλΨλϑΦΨϖΣΨΦϑλϑμΛϑλΨΞΔλΨαΔηβϗμΔλΨλϑΦΨΔζΣΦΔλ"
letters = Counter(text)
print("cantidad de letras = ", len(letters))
print(letters)
</code></pre>


Obteniendo el resultado:

![](http://i68.tinypic.com/15f5a1j.png)

*   Dándonos cierta confirmación de que vamos bien ya que se utilizan 23 signos distintos, un valor cercano a la cantidad de letras en el alfabeto.

*   Además vemos que de mayor a menor en cantidad de usos de un signo es: 74 - 53 - 34 - 31 - 31...

---

Según éste artículo ([frecuencia de aparición de letras](https://es.wikipedia.org/wiki/Frecuencia_de_aparici%C3%B3n_de_letras)) en el idioma español la letra 'a' es la más frecuente, seguida de cerca por la letra 'e', pero superior a éstas es el 'espacio', éste último casi duplicando a la letra más frecuente.

Luego reemplazamos el signo Ψ por un espacio, Δ por una 'a' y Σ por una 'e'.

**Nota:** Tener en cuenta por supuesto que esto no es una ciencia exacta, estamos haciendo uso de la probabilidad, "puede fallar" dijo Tusam, si éste fuera el caso se puede volver atrás e intercambiar la 'a' por la 'e' y continuar el proceso.

Agregamos éstas líneas a nuestro programa:

<pre><code class="language-python">
texto = texto.replace('Ψ', ' ')
texto = texto.replace('Δ', 'a')
texto = texto.replace('Σ', 'e')
print(texto)
</code></pre>

Obteniendo:

![](http://i65.tinypic.com/2eyezyp.png)

Analizando éste resultado es muy posible que el signo 'Ξ' sea una 'l', por que en una palabra se repite 2 veces seguidas, y por que se usaría para las palabras 'las' 'los', 'el, 'la'.

![](http://i63.tinypic.com/2iivlf8.png)

Hacemos el reemplazo..

<pre><code class="language-python">
texto = texto.replace('Ξ', 'l')
</code></pre>

Obteniendo:

![](http://i67.tinypic.com/j76c28.png)

Continuando de la misma forma es muy posible que:

*   Ω sea una 'y'
*   ϑ sea una 'o'
*   λ sea una 's'

<pre><code class="language-python">
texto = texto.replace('Ω', 'y')
texto = texto.replace('ϑ', 'o')
texto = texto.replace('λ', 's')
</code></pre>

Obteniendo:

![](http://i63.tinypic.com/2j1kcb6.png)

Ésto es un proceso iterativo, donde en cada iteración nos vamos acercando cada vez más al objetivo...

A partir de acá ya es mucho más fácil deducir el resto, ¿Te animás a completarlo?. Buena suerte y nos vemos!.
