---
title: "Home"
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00

---
<!-- Projects Section -->
<div class="gtco-heading" style="margin-top: 2rem;">
  <h2 style="font-family: 'GmarketSans', sans-serif; font-weight: 300;">Projects</h2>
</div>

<!-- 최신 주요 프로젝트 갤러리 그리드 (Arts category) -->
<div class="main_feature_container">
  <div class="feature__wrapper">
    {% assign arts_projects = site.projects | where: "category", "arts" | sort: "date" | reverse %}
    {% for post in arts_projects limit: 6 %}
      <div class="feature__item">
        <a class="recent-project" href="{{ post.url }}">
          <div class="archive__item">
            {% if post.header.teaser %}
              <div class="archive__item-teaser">
                <img src="{{ post.header.teaser }}" alt="{{ post.title }}">
              </div>
            {% endif %}
            <div class="archive__item-body" style="text-align: center; padding: 15px;">
              <h2 class="archive__item-title">{{ post.title }}</h2>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>

<!-- News & Updates Section -->
<div class="gtco-heading" style="margin-top: 4rem;">
  <h2 style="font-family: 'GmarketSans', sans-serif; font-weight: 300;">News & Updates</h2>
</div>

<div class="main-news recent-posts">
  <div class="gtco-news">
    <h3 style="font-family: 'GmarketSans', sans-serif; font-weight: 300; font-size: 1.2rem; margin-bottom: 1.5rem; color: #4d4d4d; border-bottom: 1px solid #eee; padding-bottom: 0.5rem;">Research</h3>
    <ul class="clean-post-list">
      {% assign sorted_research = site.projects | where: "category", "research" | sort: "date" | reverse %}
      {% for post in sorted_research limit: 3 %}
        <li>
          {% if post.date %}
          <div class="post-date">{{ post.date | date: "%B %d, %Y" }}</div>
          {% endif %}
          <div class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></div>
        </li>
      {% endfor %}
    </ul>
    <div class="view-all-link" style="margin-top: 15px; text-align: right;">
      <a href="/research/" style="font-family: 'GmarketSans', sans-serif; font-weight: 300; font-size: 0.8rem; color: #a0a0a0; text-decoration: none; letter-spacing: 1px; transition: color 0.3s;">VIEW ALL &rarr;</a>
    </div>
  </div>

  <div class="gtco-news">
    <h3 style="font-family: 'GmarketSans', sans-serif; font-weight: 300; font-size: 1.2rem; margin-bottom: 1.5rem; color: #4d4d4d; border-bottom: 1px solid #eee; padding-bottom: 0.5rem;">News</h3>
    <ul class="clean-post-list">
      {% assign sorted_news = site.news | sort: "date" | reverse %}
      {% for post in sorted_news limit: 3 %}
        <li>
          {% if post.date %}
          <div class="post-date">{{ post.date | date: "%B %d, %Y" }}</div>
          {% endif %}
          <div class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></div>
        </li>
      {% endfor %}
    </ul>
    <div class="view-all-link" style="margin-top: 15px; text-align: right;">
      <a href="/news/" style="font-family: 'GmarketSans', sans-serif; font-weight: 300; font-size: 0.8rem; color: #a0a0a0; text-decoration: none; letter-spacing: 1px; transition: color 0.3s;">VIEW ALL &rarr;</a>
    </div>
  </div>
</div>
