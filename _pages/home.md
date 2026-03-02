---
title: "Home"
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00

---
<!-- Project 갤러리 구간 -->
<div class="gtco-heading" style="margin-top: 2rem;">
  <!-- "Projects" 텍스트 없이 여백만 주거나 원하면 다시 넣을 수 있습니다. 현재는 미니멀리즘을 위해 텍스트 최소화 -->
</div>

<!-- 최신/주요 프로젝트 갤러리 그리드 -->
<div class="main_feature_container">
  <div class="feature__wrapper">
    {% assign sorted_projects = site.projects | sort: "date" | reverse %}
    {% for post in sorted_projects limit: 9 %}
      <div class="feature__item">
        <a class="recent-project" href="{{ post.url }}">
          <div class="archive__item">
            {% if post.header.teaser %}
              <div class="archive__item-teaser">
                <img src="{{ post.header.teaser }}" alt="{{ post.title }}">
              </div>
            {% endif %}
            <div class="archive__item-body" style="text-align: center; padding: 15px;">
              <h2 class="archive__item-title" style="margin: 0; font-size: 1.1rem; font-weight: normal; font-family: 'GmarketSans', sans-serif;">{{ post.title }}</h2>
              <div class="archive__item-excerpt" style="font-family: 'Pretendard', sans-serif; font-size: 0.85rem; color: #777; margin-top: 5px;">
                {{ post.excerpt | strip_html | truncate: 50 }}
              </div>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>


