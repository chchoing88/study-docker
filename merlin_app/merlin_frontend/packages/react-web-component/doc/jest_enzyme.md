# react test

- jest : 테스트 프레임워크
- enzyme : 테스트 라이브러리
- jest & enzyme 를 사용해서 react를 단위테스트 하자.

* 테스트는 단위 테스트로 진행한다. 즉, 단일 책임 원칙에 따라서 한 가지 역할만 하면 충분하다.

# jest

describe : 하나의 테스트 그룹
it : describe 하나의 작은 단위 테스트이다.



# enzyme

## 3가지의 메소드

- shallow: 간단한 컴포넌트를 메모리 상에 렌더링합니다. 단일 컴포넌트를 테스트할 때 유용합니다.
- mount: HOC나 자식 컴포넌트까지 전부 렌더링합니다. 다른 컴포넌트와의 관계를 테스트할 때 유용합니다.
- render: 컴포넌트를 정적인 html로 렌더링합니다. 컴포넌트가 브라우저에 붙었을 때 html로 어떻게 되는지 판단할 때 사용합니다.

```javascript
import { shallow, configure } from 'enzyme';

const wrapper = shallow(<Counter />);

```

enzyme 메소드로 렌더링한 wrapper는 다양한 기능을 할 수 있습니다. 내부 state나 props에 접근할 수도 있고, 이벤트를 시뮬레이션할 수도 있습니다.

state에 접근하려면 wrapper.state() 를 사용 하고 props에 접근하려면 wrapper.props를 사용하면된다.
이벤트를 시뮬레이션 하려면 다음과 같이 한다.

```javascript
wrapper.find('#up').simulate('click'); // 버튼 클릭
wrapper.find('#up').simulate('click'); // 버튼 클릭
console.log(wrapper.state().value); // 2

wrapper.find('#title').simulate('change', { target: { value: '값' } }); // 인풋에 값 입력
console.log(wrapper.state().title); // '값'
```

