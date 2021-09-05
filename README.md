# <center> Nahuel Brandán

This is my personal website, you can see in: [nahuelbrandan.com](https://www.nahuelbrandan.com)

Developed using [this](https://github.com/crscardellino/crscardellino.github.io) project of Cristian
 Cardellino as a basis.

## Installation

### Docker

    docker-compose up

based in [this](https://github.com/BretFisher/jekyll-serve) project.

### Manual

    sudo apt install ruby ruby-dev libffi-dev build-essential zlib1g-dev
    sudo gem install bundle jekyll
    sudo gem install bundler -v 2.1.4
    sudo gem update

    bundle install

## Execution

### Manual

`bundle exec jekyll serve`

`bundle exec jekyll serve --livereload` auto refresh activated

`bundle exec jekyll serve --drafts --livereload` can see the drafts posts

## Update

    bundle update

## Problems

* When executing, if an error of this type appears: *FATAL: Listen error: unable to monitor directories for changes.* 
  execute the next command:

  `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

* Port is in use or requires root privileges: `fuser -n tcp -k 4000`
* Problem installing bundler: see 
  [this](https://stackoverflow.com/a/52842826/6125910).

## Recommendations

* It is recommended that all the images used have _.webp_ format which is optimized and has a better
performance when loading web pages.

  In Linux, you can do:
  
  * `sudo apt install webp`
  * In the directory of the images execute:
  
    `for f in *.png; do cwebp "$f" "-o" "${f%.png}.webp"; done; for f in *.jpg; do cwebp "$f" "-o" "${f%.jpg}.webp"; done;`

## Performance

Results obtained after an analysis with the _Lighthouse_ tool.

![Performance](assets/img/site/desempeño.png)

Which are excellent values!, showing the love that is given to the site.
