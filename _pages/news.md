---
layout: archive
title: "News"
collection: news
permalink: /news/
author_profile: false
show_date: true
sidebar:
  title: " "
  nav: news
# entries_layout: grid
# grid_number: 3
classes: wide
---

A Collection of Recent News and Reflections `(In Progress)`.
<div>
  {% assign entries_layout = page.entries_layout | default: 'list' %}
  {% assign postsByYear = site.news | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  {% for year in postsByYear reversed %}
    <section id="{{ year.name }}" class="taxonomy__section">
      <h2 class="archive__subtitle">{{ year.name }}</h2>
      <div class="entries-{{ entries_layout }}">
        {% assign reversed_posts = year.items | reverse %}
        {% for post in reversed_posts %}
          {% include archive-single.html type=entries_layout %}
        {% endfor %}
      </div>
      <a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>
    </section>
  {% endfor %}
</div>
