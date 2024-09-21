---
title: "Category in collection"
layout: category
permalink: /categoryInCollection
author_profile: false
collection: project
categories: research
taxonomy: research
entries_layout: grid
grid_number: 3
sidebar:
  enable: true
  nav: "sidebar-category"
---
<div>
  {% assign collection_items = site[include.collection] | where: "categories", include.taxonomy %}
  {% for item in collection_items %}
    <a href="{{ item.url }}">{{ item.title }}</a>
  {% endfor %}
</div>