---
layout: archive
title: "News"
permalink: /news/
author_profile: false
show_date: true
sidebar:
  title: " "
  nav: news
classes: wide
pagination:
  enabled: true
  collection: "news"
  per_page: 10
  sort_field: "date"
  sort_reverse: true
---



<div class="entries-list">
  {% for post in paginator.posts %}
    {% include archive-single.html type="list" %}
  {% endfor %}
</div>

{% include paginator.html %}
