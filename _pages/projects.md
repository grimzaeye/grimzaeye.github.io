---
layout: splash
title: "All Projects"
permalink: /projects/
---

<!-- 전체 프로젝트 갤러리 그리드 -->
<div class="gtco-heading" style="margin-top: 4rem;">
  <h2 style="font-family: 'GmarketSans', sans-serif; font-weight: 300;">All Projects</h2>
</div>

<div class="main_feature_container">
  <div class="feature__wrapper">
    {% assign all_projects = site.projects | sort: "date" | reverse %}
    {% for post in all_projects %}
      <div class="feature__item">
        <a class="recent-project" href="{{ post.url }}">
          <div class="archive__item">
            {% if post.header.teaser %}
              <div class="archive__item-teaser">
                <img src="{{ post.header.teaser }}" alt="{{ post.title }}">
              </div>
            {% endif %}
            <div class="archive__item-body" style="text-align: center; padding: 5px 15px 15px;">
              <h2 class="archive__item-title">{{ post.title }}</h2>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>
