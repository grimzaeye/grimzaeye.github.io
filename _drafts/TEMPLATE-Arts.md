---
title: "새로운 예술 프로젝트 제목 (Arts Template)"
excerpt: "목록에 쓰일 짧은 한 줄 설명입니다. (예: 2026년 진행한 미디어 아트 전시 기록)"
date: 2026-03-01
collection: projects
category: arts
header:
  # 페이지 상단 배경으로 깔릴 메인 이미지 (가로로 넓은 고해상도 추천)
  image: /assets/images/unsplash-gallery-image-2.jpg
  # 갤러리 썸네일로 보일 이미지 (4:3 비율 추천)
  teaser: /assets/images/unsplash-gallery-image-2-th.jpg
sidebar:
  - title: "Information"
    text: "전시 명: 템플릿 전시<br>기간: 2026.03<br>역할: 기획 및 디자인"
gallery:
  - url: /assets/images/unsplash-gallery-image-1.jpg
    image_path: /assets/images/unsplash-gallery-image-1-th.jpg
    alt: "작품 사진 1"
  - url: /assets/images/unsplash-gallery-image-2.jpg
    image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "작품 사진 2"
  - url: /assets/images/unsplash-gallery-image-3.jpg
    image_path: /assets/images/unsplash-gallery-image-3-th.jpg
    alt: "작품 사진 3"
---

<!-- 이 부분부터 본문(코펍 바탕체 적용)이 시작됩니다. -->
이곳에 예술 프로젝트가 기획된 배경이나 전시 설명 등 풍성한 내용을 작성하세요. 이 문단은 브라우저에서 읽기 가장 편안한 **KoPubWorldBatang** 폰트로 렌더링됩니다.

## 1. 프로젝트 개요 (Overview)
여기에 소제목 단위로 내용을 나누어 적을 수 있습니다. 텍스트 사이에 필요하다면 일반 이미지 삽입도 가능합니다:
`![이미지 설명](/assets/images/원하는_이미지.jpg)`

## 2. 작품 갤러리 (Gallery)
상단 설정(`gallery:`)에 적어둔 3장의 사진을 본문 중간에 갤러리 형태로 예쁘게 띄우려면 아래 코드를 사용하세요.
{% include gallery caption="작품 설치 전경 및 디테일 컷 모음" %}

## 3. 작가 노트 (Artist Note)
이 프로젝트를 진행하며 느꼈던 점이나 고민했던 지점들을 남겨둡니다. 
> "강조하고 싶은 인용구나 중요한 대사는 이렇게 인용문(`>`) 블럭을 사용하면 멋지게 보입니다."

본문을 풍성하게 작성할수록 에세이나 전시 도록을 읽는 듯한 분위기가 강조됩니다. 작성 완료 후 이 파일을 `_projects` 폴더로 옮기시면 됩니다!
