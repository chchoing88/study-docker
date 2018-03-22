# Atomic Structure

별거 아님.


###리액트와 Atomic Structure
1. Atomic structure

참고: https://medium.com/@FourwingsY/react-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%98-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0-bb183c0a426e
- 개념: 쪼갤 수 있을때까지 element 단위로 쪼개라.
- 장점: 재사용 가능
- 단점: 처음부터 atomic 하게 짜여지지 않은 앱의 경우 리팩토링이 어려울 수도..

2. 리액트와 아토믹 스트럭쳐
- 아주 atomic한 구조는 아니더라도 아주 자연스럽게 사용되는 설계
- 다음과 같이 사용 가능

```
// Todo.js (index.js)
import { TodoLists } from '../molecules/TodoLists'


// TodoList.js
import { TodoItem } from '../atom/TodoItem'
import { DeleteButton } from '../atom/DeleteButton'

```

