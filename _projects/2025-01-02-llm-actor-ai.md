---
title: "LLM 기반 희곡 분석을 통한 Actor AI 구현 (2025)"
excerpt: "LLM 기반 희곡 분석을 통한 Actor AI 구현 연구"
date: 2025-01-02
last_modified_at: 2026-03-04
collection: projects
category: research
header:
  teaser: "/assets/images/portfolio/actor-ai-whole-system.png"
  overlay_image: "/assets/images/portfolio/actor-ai-whole-system.png"
  overlay_filter: 0.5
sidebar:
  - title: "Role"
    text: "Researcher"
  - title: "Details"
    text: "[Thesis] 석사 학위 논문 연구"
gallery:
  - url: "/assets/images/portfolio/actor-ai-chat.png"
    image_path: "/assets/images/portfolio/actor-ai-chat.png"
    alt: "Actor AI Chat Screenshot"
  - url: "/assets/images/portfolio/actor-ai-graph.png"
    image_path: "/assets/images/portfolio/actor-ai-graph.png"
    alt: "Actor AI Graph"
  - url: "/assets/images/portfolio/actor-ai-raydar-chart.png"
    image_path: "/assets/images/portfolio/actor-ai-raydar-chart.png"
    alt: "Actor AI Radar Chart"
  - url: "/assets/images/portfolio/actor-ai-whole-system.png"
    image_path: "/assets/images/portfolio/actor-ai-whole-system.png"
    alt: "Actor AI Whole System Architecture"
---

> 대규모 언어 모델(LLM)을 활용하여 스타니슬랍스키(Stanislavski) 연기 이론을 바탕으로 등장인물의 감정과 맥락을 이해하고 반응하는 'Actor AI'를 개발 및 검증한 연구 논문입니다.

## 연구 개요
본 연구는 스타니슬랍스키 연기 이론의 핵심 개념인 '비트(beat)', '초목표(objective)', '서브텍스트(subtext)'를 적용하여 대규모 언어 모델(LLM) 기반의 상호작용형 시스템인 **Actor AI**를 개발하는 것을 목적으로 합니다. 극적 상황과 감정의 변화에 맞춰 정교하게 반응하며, 궁극적으로 AI가 연기의 주체로서 기능할 수 있는지 검증하고자 하였습니다.

## 문제의식
최근 생성형 AI는 페르소나 시뮬레이션 및 상호작용 에이전트 개발에서 큰 발전을 이루었지만, 연극의 본질적 구조와 이론적 개념에 기반한 AI 연기 시스템은 아직 매우 초기 단계에 머물러 있습니다. 특히 극의 흐름에 따라 등장인물의 목표와 감정이 역동적으로 변화하는 연기 과정은, AI가 해당 상황을 제대로 이해수용하고 감정적·전략적으로 어떻게 반응해야 하는지 평가할 수 있는 중요한 연구 분야입니다.

![Actor AI System Architecture](/assets/images/portfolio/actor-ai-whole-system.png){: .align-center}

## 연구 과정 스토리
연구 진행을 위해 고전 희곡인 안톤 체호프의 《갈매기(The Seagull)》를 여러 비트로 분할하고, 각 비트별 목표, 감정의 흐름, 그리고 인물 간의 관계를 정리하여 연기 분석 데이터를 자동으로 구축했습니다.

- **상호작용 설계**: Actor AI는 사용자와의 대화 및 상호작용 과정에서 극적 상황과 감정의 변화에 가장 적합한 대사와 반응을 생성해 내도록 설계되었습니다. 
- **페르소나 유지**: 자동화된 연기 분석을 통해 연출과 배우 사이의 리허설 과정을 시뮬레이션함으로써, Actor AI가 지속적인 대화 내내 일관성 있는 페르소나 제약을 잃지 않고 유지할 수 있게 구성했습니다.

![Actor AI Graph](/assets/images/portfolio/actor-ai-graph.png){: .align-center}

## 핵심 결과 요약
Actor AI의 실제 성능을 검증하기 위해 5명의 연극 전문가가 참여하여 일반 GPT와 Actor AI를 비교 평가했습니다. 

총 15개의 세부 평가 기준 중, Actor AI는 '자기 인식(self-knowledge)' 및 '연기 분석 정확도' 분야에서 매우 큰 효과 크기(large effect sizes)를 나타내며 **7개 항목에서 기존 GPT를 능가**하는 결과를 보여주었습니다.
정성적 평가에서도 대본 분석 및 공연 예술적 활용 가능성에 대해 높은 평가를 이끌어냈습니다. (단, 감정 표현과 미학적 다양성 측면에서는 모종의 한계점 또한 관찰되었습니다.)

![Actor AI Radar Chart](/assets/images/portfolio/actor-ai-raydar-chart.png){: .align-center}

---

결론적으로 본 연구는 연극적 방법론을 기반으로 데이터를 정형/구조화하고, 연기 분석을 자동화함으로써 향후 공연 예술에 특화된 AI의 가능성을 밝게 제시합니다. 나아가 연극과 기술의 융합을 통해 창작 도구 시스템 확보, 맞춤형 연기 훈련 시스템 구축, 대관객 상호작용 콘텐츠 등 다양하고 실질적인 응용 가능성을 기대해 볼 수 있습니다.

{% include gallery id="gallery" class="half" caption="Actor AI 논문 연구 관련 도표 및 다각형 다이어그램" %}
