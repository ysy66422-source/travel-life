interface SectionTitleProps {
  children: string
}

/**
 * "해외 여행지 정보 검색", "쿠폰 혜택" 등 섹션 헤더 타이틀.
 * Figma Title 노드와 동일한 좌측 4px 패딩/18px Bold 스타일을 공유한다.
 */
export const SectionTitle = ({ children }: SectionTitleProps) => (
  <div className="flex w-full items-center px-4">
    <h2 className="text-xl font-bold text-ink">{children}</h2>
  </div>
)
