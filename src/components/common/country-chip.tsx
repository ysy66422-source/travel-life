interface CountryChipProps {
  label: string
  onClick: () => void
}

/**
 * 검색 영역 하단의 추천 국가 태그.
 * 선택 상태 없이 누르면 곧바로 검색 화면으로 전환하는 트리거 역할만 한다.
 */
export const CountryChip = ({ label, onClick }: CountryChipProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex shrink-0 items-center justify-center rounded-pill border border-gray-9 bg-white px-16 py-8 text-base text-gray-3 transition-colors active:scale-95"
  >
    {label}
  </button>
)
