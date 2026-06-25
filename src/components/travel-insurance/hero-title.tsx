/**
 * 화면 최상단 타이틀 영역.
 * 두 줄 헤드라인 + 서브 카피로 구성되며 Figma Title 노드와 동일하게 좌측 4px 패딩을 둔다.
 */
export const HeroTitle = () => (
  <div className="flex w-full flex-col gap-12 px-4">
    <h1 className="text-2xl font-bold leading-tight text-ink">
      여행은 더 안전하게
      <br />
      일상은 더 알뜰하게
    </h1>
    <p className="text-base text-gray-2">
      매달 내 라이프스타일에 맞는 보험을 선택하세요
    </p>
  </div>
)
