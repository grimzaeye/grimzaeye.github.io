---
layout: archive
title: "news by year"
collection: news
permalink: /test/
# header:
#   # overlay_color: "#000"
#   # overlay_filter: "0.5"
#   # overlay_image: /assets/images/unsplash-image-1.jpg
#   image: /assets/images/unsplash-image-1.jpg
#   # actions:
#   #   - label: "Download"
#   #     url: "https://github.com/mmistakes/minimal-mistakes/"
#   caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
# excerpt: "Bacon ipsum dolor sit amet salami ham hock ham, hamburger corned beef short ribs kielbasa biltong t-bone drumstick tri-tip tail sirloin pork chop."
sidebar:
  enable: true
  nav: "sidebar-category"

entries_layout: list
# grid_number: 3
# classes: wide
related: true
# category: research

---

<div>
여기는 test 페이지 입니다
  {% assign entries_layout = page.entries_layout | default: 'list' %}
  {% assign postsByYear = site.posts | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  {% for year in postsByYear %}
    <section id="{{ year.name }}" class="taxonomy__section">
      <h2 class="archive__subtitle">{{ year.name }}</h2>
      <div class="entries-{{ entries_layout }}">
        {% for post in year.items %}
          {% include archive-single.html type=entries_layout %}
        {% endfor %}
      </div>
      <a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>
    </section>
  {% endfor %}

</div>