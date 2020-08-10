### Descripción.

Esta es mi página web, la pueden visualizar en: [nahuelbrandan.com](https://www.nahuelbrandan.com)

### Instalación.

    sudo apt install ruby ruby-dev libffi-dev build-essential zlib1g-dev
    sudo gem install bundle jekyll
    sudo gem install bundler -v 1.17.2
    sudo gem update

    bundle install

### Ejecución, diferentes formas.

    bundle exec jekyll serve    

    bundle exec jekyll serve --livereload

    bundle exec jekyll serve --drafts --livereload

* La segunda forma no necesita hacer un refresh de la página ante cada cambio que hagamos.
* La tercera forma se le agrega la visualización de los drafts (publicaciones en proceso de construcción.)

### Actualización.

    bundle update

### Errores.

* Por problemas con la instalación de Jekyll ver: [Jekyll installation problems.](https://jekyllrb.com/docs/troubleshooting/#installation-problems)
* Al ejecutar, si figura un error del tipo: *FATAL: Listen error: unable to monitor directories for changes.* ejecutar el siguiente comando

  `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

* Port is in use or requires root privileges

  `fuser -n tcp -k 4000`
