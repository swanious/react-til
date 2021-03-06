// Ducks 패턴을 사용한 액션 타입, 액션 생성함수, 리듀서를 작성한 코드를 모듈이라고합니다.
// components폴더에 모듈을 적용하여 상태를 관리할 모듈이 되겠습니다.

// 액션 타입 정의하기
// 액션 타입은 '컴포넌트이름/액션' 형태로 작성합니다. 
// 이는 '어떤 컴포넌트에 해당'하는 '액션'인지를 명시하기 위함이고,
// 프로젝트가 커졌을 때 액션의 이름이 충돌되지 않게해주기 위함입니다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
// 다른 파일에서 이 함수를 불러와 사용할 수 있도록 export로 내보냅니다.
// export와 export default의 차이는 
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
};

// 초기 상태 및 리듀서 함수 만들기
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
export default counter;
