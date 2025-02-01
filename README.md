<h1 align=center>Personal website</h1>

This is my personal website, you can see it in: [nahuelbrandan.com](https://www.nahuelbrandan.com).

Made with :heart:, based on [Jekyll](https://jekyllrb.com/).

## Installation

### Docker mode (Recommended)

```bash
docker compose up
```

Docker development is based on [this](https://github.com/BretFisher/jekyll-serve) project.

### Manual mode

```bash
sudo apt install ruby ruby-dev libffi-dev build-essential zlib1g-dev
sudo gem install bundle jekyll
sudo gem install bundler -v 2.1.4
sudo gem update

bundle install
```

## Execution

### Docker mode (Recommended)

```bash
docker compose up
```

And access to the website: [localhost:4000](http://localhost:4000/)

### Manual mode

Different options of manual execution:

1. `bundle exec jekyll serve`
2. `bundle exec jekyll serve --livereload` -> auto refresh activated
3. `bundle exec jekyll serve --drafts --livereload` -> can see the draft posts

## Update

* `bundle update` -> Run this to update the dependencies gems

## Troubleshooting

* During execution, if you see the error: *FATAL: Listen error: unable to monitor directories for changes.* run:

  `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
* Port is in use or requires root privileges: `fuser -n tcp -k 4000`
