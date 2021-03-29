# Refactoring-JavaScript

Refactoring JavaScript by Evan Burchard (O'Reilly). Copyright 2017 O'Reilly Media, 978-1-491-96492-7.

## 용어 정리 54p.

- 커버리지(코드 커버리지 또는 테스트 커버리지)  
  테스트 코드에서 쓰는 측정 범위
- 고수준 및 저수준  
  보통 고수준은 '종단 간 테스트', 저수준은 '단위 테스트'에 해당
- 복잡성  
  코드 경로들의 측정 결과
- 확신  
  완전한 테스트 커버리지는 의도 대로 코드 베이스가 잘 동작한다는 확신을 준다.
- 실행  
  test suite에 의해 코드가 실행되면, 해당 코드는 커버리지를 갖게 된다.
- 기술적 부채  
  복잡성과 테스트 커버리지 결여로 인해 개발이 어려워지는 상황
- 피드백 루프  
  코드를 작성하는 것과 제대로 작성되었는지 사이의 간극
- 목업(mockup)과 스텁(stub)  
  테스트를 모의로 대체하여 기능을 직접 행사하는 것을 피하는 두 가지 방법  
  둘의 차이는 목업은 어설션(테스트의 통과 및 실패 부분)을 생성하고 스텁은 생성하지 않는다.

## 테스트 이점

- 어떤 식으로든 이미 테스트를 하고 있다.  
  나의 경우 대부분 수동 테스트를 하고 있지만 테스트 과정을 자동화 하면 편하다.
- 리팩토링은 테스트 없이 불가능하다.  
  테스트는 코드의 동작을 보장해주며 이러한 보장이 있어야 리팩토링이 가능하다.
- 팀과 쉽게 작업할 수 있다.  
  테스트 코드를 통해 동작을 이해하는데 도움이 된다.
- 버그를 일찍 발견할 수 있다.  
  테스트 코드는 고객 보다 개발자와 더 가까이 있다. QA, 고객이 버그를 발견하기 전에 테스트 단계에서 발견할 수 있다.
- 개발 과정을 원활하게 한다.  
  테스트, 리팩토링, 품질 향상, 적은 양의 기술 부채는 시간 확보에 도움을 준다.
- 피드백 루프가 엄격해진다.  
  테스트 코드가 없다면 코드가 작동한다고 가정하거나 수동으로 확인할 수 밖에 없다. 이러한 수동 테스트는 비용이 많이 든다. 만약, 테스트 코드가 있다면 이 피드백을 몇 초로 줄일 수 있다.
