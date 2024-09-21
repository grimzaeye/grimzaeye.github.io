---
title: "Home"
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00
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
# intro: 
#   - excerpt: 'Nullam suscipit et nam, tellus velit pellentesque at malesuada, enim eaque. Quis nulla, netus tempor in diam gravida tincidunt, *proin faucibus* voluptate felis id sollicitudin. Centered with `type="center"`'
# feature_row:
#   - image_path: assets/images/unsplash-gallery-image-1-th.jpg
#     alt: "placeholder image 1"
#     title: "Placeholder 1"
#     excerpt: "This is some sample content that goes here with **Markdown** formatting."
#   - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
#     image_caption: "Image courtesy of [Unsplash](https://unsplash.com/)"
#     alt: "placeholder image 2"
#     title: "Placeholder 2"
#     excerpt: "This is some sample content that goes here with **Markdown** formatting."
#     url: "#test-link"
#     btn_label: "Read More"
#     btn_class: "btn--primary"
#   - image_path: /assets/images/unsplash-gallery-image-3-th.jpg
#     title: "Placeholder 3"
#     excerpt: "This is some sample content that goes here with **Markdown** formatting."
# feature_row2:
#   - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
#     alt: "placeholder image 2"
#     title: "Placeholder Image Left Aligned"
#     excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
#     url: "#test-link"
#     btn_label: "Read More"
#     btn_class: "btn--primary"
# feature_row3:
#   - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
#     alt: "placeholder image 2"
#     title: "Placeholder Image Right Aligned"
#     excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
#     url: "#test-link"
#     btn_label: "Read More"
#     btn_class: "btn--primary"
# feature_row4:
#   - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
#     alt: "placeholder image 2"
#     title: "Placeholder Image Center Aligned"
#     excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
#     url: "#test-link"
#     btn_label: "Read More"
#     btn_class: "btn--primary"
carousels:
  - images: 
    - image: /assets/images/slider/image1.png
    - image: /assets/images/slider/image2.png
    - image: /assets/images/slider/image3.png
    - image: /assets/images/slider/image4.png
---
<!-- #이미지 슬라이더 구간  -->

{% include carousel.html height="50" unit="%" duration="7" number="1" %}


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
        <a href="{{ post.url }}">
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
    {% include recent-posts.html %}
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

