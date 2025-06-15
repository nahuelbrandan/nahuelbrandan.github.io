---
layout: post
title: "Como desencriptar un texto usando análisis de frecuencia"
date:   2019-01-04 00:00:01 -0300
comments: true
image: "/assets/img/posts/encriptar.webp"
thumbnail: "/assets/img/posts/encriptar.jpg"
categories: [Article]
tag: [Desencriptar, análisis de frecuenta, Python]
lang: es
ref: decrypt-text-with-frequency-analysis
showInIndex: true
toc: true
---

Recientemente encontré una oferta laboral en la que como proceso de preselección pedía desencriptar el siguiente 
texto y explicar el procedimiento realizado.

<p style="background-color:#f5f5f0; text-align:center; margin-bottom:1em; padding-top: 1em;">
ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλΨΛΣΘϑΞϗΦϑλΨΣΞΨλϑΞΨζβΣφΔΨΣΦΨΣΞΨξΛϗ
ΞΞϑΨϖΣΞΨΠΣϖΛΣφΔΞΨΩΨΠΛΣΦϖϗϖϑΨΔΨΞΔΨΘΔφϗΔΨϖΣΨΞϑλΨΓΔΘϗΦϑλΨΣΞΨ
ΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣλΨξΔΦϖΣΛΔΨϖΣΨΦϗΣξΞΔΨλβΨΠϑΦΓΡϑΨΔ
ΞΨαϗΣΦμϑΨΞϑΨλΔΞβϖΔΦΨΞΔλΨεΞΔβμΔλΨϖΣΞΨΠΔζϑΦΔΞΨΩΨΔΦϗΘΔΦϖϑΨΞΔ
ΨμΛϑΠΔΨΠΔΛΨΣλϑλΨΓΣΛΛϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΞΔλΨΠΣ
ΦΔλΨΩΨΞΔλΨαΔηβϗμΔλΨλΣΨαΔΦΨΠΔΛΨΞΔΨΘϗλΘΔΨλΣΦϖΔΨΞΔλΨΠΣΦΔλΨλϑ
ΦΨϖΣΨΦϑλϑμΛϑλΨΞΔλΨαΔηβϗμΔλΨλϑΦΨΔζΣΦΔλ</p>

Hace poco también leí el libro "Los códigos secretos" de Simon Singh, donde cuenta toda la historia de la criptografía 
y sus usos, muy bueno y lo súper recomiendo.

![Portada del libro]({{"/assets/img/elements_in_posts/portada.webp"}})

Así que pensé que sería algo interesante para hacer, me arremangue la camisa y comencé.

<p class="markdown-toc-title">Tabla de contenidos</p>
1. toc
{:toc}

---

## Análisis de la situación y suposiciones

En este punto sabemos muy poco asi que vamos a suponer lo siguiente y ver hacia donde nos lleva:

* Que el lenguaje original del mensaje es en español, dado que la oferta laboral estaba en este idioma.
* Que se utilizó una de las encriptaciones más simple e históricas, llamada 
  [*cifrado clásico*](https://es.wikipedia.org/wiki/Cifrado_cl%C3%A1sico) más específicamente un subconjunto de 
  éste, llamado [*cifrado por sustitución*](https://es.wikipedia.org/wiki/Cifrado_por_sustituci%C3%B3n).
  
  En un cifrado por sustitución, las letras (o grupos de letras) son sistemáticamente reemplazadas en el mensaje por 
  otras letras (o grupos de letras).

![Ejemplo de cifrado por sustitución](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ROT13.png/600px-ROT13.png)

## Análisis de frecuencia

Para poder romper la encriptación vamos a utilizar el método 
[*análisis de frecuencia*](https://es.wikipedia.org/wiki/An%C3%A1lisis_de_frecuencias).

El _análisis de frecuencias_ está basado en el hecho que, dado un texto, ciertas letras o combinaciones de letras 
aparecen más a menudo que otras, existiendo distintas frecuencias para ellas. 

Por ejemplo, en español las letras *A* y *E* son muy comunes, mientras que la *K* y *W* son muy raras.

![gráfico frecuencia de uso de letras en español]({{"/assets/img/elements_in_posts/Frecuencia_de_uso_de_letras_en_español.webp"}})

Mediante un pequeño programa escrito en **python** vemos los diferentes signos utilizados, y la cantidad de uso de 
cada uno de ellos

<pre><code class="language-python">from collections import Counter

text = "ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλΨΛΣΘϑΞϗΦϑλΨΣΞΨλϑΞΨζβΣφΔΨΣΦΨΣΞΨξΛϗΞΞϑΨϖΣΞΨΠΣϖΛΣφΔΞΨΩΨΠΛΣΦϖϗϖϑΨΔΨΞΔΨΘΔφϗΔΨϖΣΨΞϑλΨΓΔΘϗΦϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣλΨξΔΦϖΣΛΔΨϖΣΨΦϗΣξΞΔΨλβΨΠϑΦΓΡϑΨΔΞΨαϗΣΦμϑΨΞϑΨλΔΞβϖΔΦΨΞΔλΨεΞΔβμΔλΨϖΣΞΨΠΔζϑΦΔΞΨΩΨΔΦϗΘΔΦϖϑΨΞΔΨμΛϑΠΔΨΠΔΛΨΣλϑλΨΓΣΛΛϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΞΔλΨΠΣΦΔλΨΩΨΞΔλΨαΔηβϗμΔλΨλΣΨαΔΦΨΠΔΛΨΞΔΨΘϗλΘΔΨλΣΦϖΔΨΞΔλΨΠΣΦΔλΨλϑΦΨϖΣΨΦϑλϑμΛϑλΨΞΔλΨαΔηβϗμΔλΨλϑΦΨΔζΣΦΔλ"
letters = Counter(text)
print("cantidad de letras = ", len(letters))
print(letters)
</code></pre>


Obteniendo el resultado:


```
cantidad de letras =  23

Counter({'Ψ': 74, 'Δ': 53, 'Σ': 34, 'Ξ': 31, 'λ': 31, 'ϑ': 26, 'Λ': 24, 'Φ': 23, 'ϗ': 16, 'ϖ': 12, 'Π': 9, 'α': 8, 'Θ': 6, 'β': 6, 'μ': 6, 'ξ': 4, 'ζ': 3, 'φ': 3, 'Ω': 3, 'Γ': 3, 'η': 2, 'Ρ': 1, 'ε': 1})
```

Dándonos cierta confirmación de que vamos bien, ya que se utilizan 23 signos distintos, un valor cercano a la cantidad 
de letras en el alfabeto.

Además, vemos que de mayor a menor en cantidad de usos de un signo es: 74 - 53 - 34 - 31 - 31 ...

---

Según el siguiente artículo ([frecuencia de aparición de letras](https://es.wikipedia.org/wiki/Frecuencia_de_aparici%C3%B3n_de_letras)) en el idioma español la letra 'a' es la más 
frecuente, seguida de cerca por la letra 'e', pero superándolas esta el 'espacio' 
casi duplicando a la letra más frecuente.

Por lo tanto, hacemos los siguientes reemplazos:
 
1. El signo Ψ por un espacio
2. El signo Δ por una a
3. El signo Σ por una e

**Nota:** Tener en cuenta por supuesto que esto no es una ciencia exacta, estamos haciendo uso de la probabilidad. 
"Puede fallar" dijo Tusam. Si este fuera el caso se puede volver atrás e intercambiar la 'a' por la 'e' y continuar 
el proceso.

Agregamos las siguientes líneas de código a nuestro programa:

<pre><code class="language-python">text = text.replace('Ψ', ' ')
text = text.replace('Δ', 'a')
text = text.replace('Σ', 'e')
print(text)
</code></pre>

Obteniendo:

![]({{"/assets/img/elements_in_posts/decrypt_program2.webp"}})

Analizando el resultado es muy posible que el signo 'Ξ' sea una 'l', porque en una palabra se repite 2 veces seguidas, 
y porque se usaría para las palabras 'las' 'los', 'el', 'la'.

![]({{"/assets/img/elements_in_posts/decrypt_program3.webp"}})

Hacemos el reemplazo...

<pre><code class="language-python">text = text.replace('Ξ', 'l')
</code></pre>

Obteniendo:

![]({{"/assets/img/elements_in_posts/decrypt_program4.webp"}})

Continuando de la misma forma es muy posible que:

*   Ω sea una 'y'
*   ϑ sea una 'o'
*   λ sea una 's'

<pre><code class="language-python">text = text.replace('Ω', 'y')
text = text.replace('ϑ', 'o')
text = text.replace('λ', 's')
</code></pre>

Obteniendo:

![]({{"/assets/img/elements_in_posts/decrypt_program5.webp"}})

Esto es un proceso iterativo, donde en cada iteración nos vamos acercando cada vez más al objetivo.

A partir de acá ya es mucho más fácil deducir el resto, ¿Te animas a completarlo?

¡Buena suerte y nos vemos!

---
---
