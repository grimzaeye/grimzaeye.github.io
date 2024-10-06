---
title: "Home"
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00

# excerpt: "Bacon ipsum dolor sit amet salami ham hock ham, hamburger corned beef short ribs kielbasa biltong t-bone drumstick tri-tip tail sirloin pork chop."

carousels:
  - images: 
    - image: /assets/images/slider/dust06.jpeg
    - image: /assets/images/slider/bbb.jpg
    - image: /assets/images/slider/Vacance.png
    - image: /assets/images/slider/산책자의 행복.jpg
---
<!-- #이미지 슬라이더 구간  -->

{% include carousel.html height="58" unit="%" duration="7" number="1" %}


<!-- Project 구간 -->
<div class = "gtco-heading">
  <h2> Projects </h2>
  <p> 주저리 주저리 주저리'Nullam suscipit et nam, tellus velit pellentesque at malesuada, enim eaque. Quis nulla, netus tempor in diam gravida tincidunt
  </p>
</div>

<!-- 최신 프로젝트 grid with 섬네일, 제목, 요약 -->
<div class = "main_feature_container">
  <div class="feature__wrapper">
    {% assign sorted_projects = site.projects | sort: "date" | reverse %}
    {% for post in sorted_projects limit: 3 %}
    
      <div class="feature__item">
        <a class ="recent-project" href="{{ post.url }}">
          <div class="archive__item">
            {% if post.header.teaser %}
              <div class="archive__item-teaser">
                <img src="{{ post.header.teaser }}" alt="{{ post.title }}">
              </div>
            {% endif %}
            <div class="archive__item-body">
              <h2 class="archive__item-title">{{ post.title }}</h2>
              <div class="archive__item-excerpt">
                {{ post.excerpt |strip_html| truncate: 35 }}
              </div>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>

<!-- ===== 메인 하단 news 아카이빙 + testimony ====== -->
<section class = "main-news">
  <!-- 1st row, news section-->
  <div class="gtco-news">
    {% include recent-news.html %}
    <!-- ReadMore 버튼 -->
    <a href="{{ "/news/" }}" class="btn">Read More</a>
  </div>  
  <!-- 2nd row, Testimonials Section -->
  <div class="gtco-testimonials">
    <h2>Testimonials</h2>
    <blockquote>
      <p>&ldquo;Testimonial content goes here.&rdquo;</p>
      <p class="author"><cite>&mdash; John Doe</cite></p>
    </blockquote>
  </div>
</section>

