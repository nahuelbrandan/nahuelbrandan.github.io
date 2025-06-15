---
layout: post
title: "How to decrypt a text using frequency analysis"
date:   2019-01-04 00:00:01 -0300
comments: true
image: "/assets/img/posts/encriptar.webp"
thumbnail: "/assets/img/posts/encriptar.jpg"
categories: [Article]
tags: [Decrypt, frequency analysis, Python]
lang: en
ref: decrypt-text-with-frequency-analysis
showInIndex: true
toc: true
---

I recently found a job offer in which, as a pre-selection process, wants to decrypt the following text and explain 
the procedure performed.

<p style="background-color:#f5f5f0; text-align:center; margin-bottom:1em; padding-top: 1em;">
ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλΨΛΣΘϑΞϗΦϑλΨΣΞΨλϑΞΨζβΣφΔΨΣΦΨΣΞΨξΛϗ
ΞΞϑΨϖΣΞΨΠΣϖΛΣφΔΞΨΩΨΠΛΣΦϖϗϖϑΨΔΨΞΔΨΘΔφϗΔΨϖΣΨΞϑλΨΓΔΘϗΦϑλΨΣΞΨ
ΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣλΨξΔΦϖΣΛΔΨϖΣΨΦϗΣξΞΔΨλβΨΠϑΦΓΡϑΨΔ
ΞΨαϗΣΦμϑΨΞϑΨλΔΞβϖΔΦΨΞΔλΨεΞΔβμΔλΨϖΣΞΨΠΔζϑΦΔΞΨΩΨΔΦϗΘΔΦϖϑΨΞΔ
ΨμΛϑΠΔΨΠΔΛΨΣλϑλΨΓΣΛΛϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΞΔλΨΠΣ
ΦΔλΨΩΨΞΔλΨαΔηβϗμΔλΨλΣΨαΔΦΨΠΔΛΨΞΔΨΘϗλΘΔΨλΣΦϖΔΨΞΔλΨΠΣΦΔλΨλϑ
ΦΨϖΣΨΦϑλϑμΛϑλΨΞΔλΨαΔηβϗμΔλΨλϑΦΨΔζΣΦΔλ</p>

I recently also read the book "The Code Book" by Simon Singh, where he tells the whole history of cryptography and its 
uses, very good, and I highly recommend it.

![Book cover]({{"/assets/img/elements_in_posts/code_book.webp"}})

So I thought it would be an interesting thing to do, I rolled up my sleeves and started.

<p class="markdown-toc-title">Table of contents</p>
1. toc
{:toc}

---

## Analysis of the situation and assumptions

At this point we know very little so let's assume the following and see where it takes us:

*   That the original language of the message is in Spanish, since the job offer was in this language.
*   That one of the simplest and most historical encryptions was used, called 
    [*classical cipher*](https://en.wikipedia.org/wiki/Classical_cipher), more specifically a 
    subset of it, called [*substitution cipher*](https://en.wikipedia.org/wiki/Substitution_cipher).
    
    In a substitution cipher, letters (or groups of letters) are systematically replaced in the message by 
    other letters (or groups of letters).

![Example of substitution cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ROT13.png/600px-ROT13.png)

## Frequency analysis

In order to break the encryption we are going to use the
[*frequency analysis*](https://en.wikipedia.org/wiki/Frequency_analysis) method.

Frequency analysis is based on the fact that, given a text, certain letters or combinations of letters
appear more often than others, there are different frequencies for them.

For example:

* in Spanish the letters *A* and *E* are very common, while *K* and *W* are very rare
* in English the letters *E*, *T* and *A* are very common, while *J*, *X* and *Z* are very rare

![graph frequency of use of letters in Spanish]({{"/assets/img/elements_in_posts/Frecuencia_de_uso_de_letras_en_español.webp"}})

![graph frequency of use of letters in English](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/English_letter_frequency_%28alphabetic%29.svg/340px-English_letter_frequency_%28alphabetic%29.svg.png)

Through a small program written in python we see the different signs used, and the amount of use of each one of them

<pre><code class="language-python">from collections import Counter

text = "ΣΦΨΞΔλΨΔΛΣΦΔλΨξΔϗΞΔΦΨΞϑλΨΛΣΘϑΞϗΦϑλΨΣΞΨλϑΞΨζβΣφΔΨΣΦΨΣΞΨξΛϗΞΞϑΨϖΣΞΨΠΣϖΛΣφΔΞΨΩΨΠΛΣΦϖϗϖϑΨΔΨΞΔΨΘΔφϗΔΨϖΣΨΞϑλΨΓΔΘϗΦϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣλΨξΔΦϖΣΛΔΨϖΣΨΦϗΣξΞΔΨλβΨΠϑΦΓΡϑΨΔΞΨαϗΣΦμϑΨΞϑΨλΔΞβϖΔΦΨΞΔλΨεΞΔβμΔλΨϖΣΞΨΠΔζϑΦΔΞΨΩΨΔΦϗΘΔΦϖϑΨΞΔΨμΛϑΠΔΨΠΔΛΨΣλϑλΨΓΣΛΛϑλΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΣΞΨΔΛΛϗΣΛϑΨαΔΨΞΔλΨΠΣΦΔλΨΩΨΞΔλΨαΔηβϗμΔλΨλΣΨαΔΦΨΠΔΛΨΞΔΨΘϗλΘΔΨλΣΦϖΔΨΞΔλΨΠΣΦΔλΨλϑΦΨϖΣΨΦϑλϑμΛϑλΨΞΔλΨαΔηβϗμΔλΨλϑΦΨΔζΣΦΔλ"
letters = Counter(text)
print("number of letters = ", len(letters))
print(letters)
</code></pre>

Obtaining the result:

```
number of letters =  23

Counter({'Ψ': 74, 'Δ': 53, 'Σ': 34, 'Ξ': 31, 'λ': 31, 'ϑ': 26, 'Λ': 24, 'Φ': 23, 'ϗ': 16, 'ϖ': 12, 'Π': 9, 'α': 8, 'Θ': 6, 'β': 6, 'μ': 6, 'ξ': 4, 'ζ': 3, 'φ': 3, 'Ω': 3, 'Γ': 3, 'η': 2, 'Ρ': 1, 'ε': 1})
```

Giving us some confirmation that we are doing well since 23 different signs are used, a value close to the amount
of letters in the alphabet.

We also see that from highest to lowest in quantity of uses of a sign is: 74 - 53 - 34 - 31 - 31 ...

---

According to the following article 
([frequency of appearance of letters](https://es.wikipedia.org/wiki/Frecuencia_de_aparici%C3%B3n_de_letras))
in the Spanish language the letter 'a' is the most frequent, closely followed by the letter 'e', but exceeding 
them is the 'space' almost doubling the most frequent letter.

Then we do the next replacements:
 
1. The sign Ψ by a space
2. The sign Δ by a 'a'
3. The sign Σ by a 'e'

**Note:** Bear in mind of course that this is not an exact science, we are making use of probability. 
"It may fail" said Tusam. If this were the case you can go back and exchange the 'a' for the 'e' and continue the 
process.

We add the following lines of code to our program:

<pre><code class="language-python">text = text.replace('Ψ', ' ')
text = text.replace('Δ', 'a')
text = text.replace('Σ', 'e')
print(text)
</code></pre>

Obtaining:

![]({{"/assets/img/elements_in_posts/decrypt_program2.webp"}})

Analyzing the result it is very possible that the sign 'Ξ' is an 'l', because in a word it is repeated 2 times in a row,
and why would it be used for the words: 'las', 'los', 'el', 'la' (very common articles in Spanish).

![]({{"/assets/img/elements_in_posts/decrypt_program3.webp"}})

We make the replacement...

<pre><code class="language-python">text = text.replace('Ξ', 'l')
</code></pre>

Obtaining:

![]({{"/assets/img/elements_in_posts/decrypt_program4.webp"}})

Continuing in the same way it is very possible that:

*   Ω be a 'y'
*   ϑ be a 'o'
*   λ be a 's'

<pre><code class="language-python">text = text.replace('Ω', 'y')
text = text.replace('ϑ', 'o')
text = text.replace('λ', 's')
</code></pre>

Obtaining:

![]({{"/assets/img/elements_in_posts/decrypt_program5.webp"}})

This is an iterative process, where in each iteration we get closer and closer to the goal.

From here it is much easier to deduce the rest, do you dare to complete it?

Good luck and see you!

---
---
