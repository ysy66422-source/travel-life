import type { AlertSection } from '../../typing/travel-insurance'

interface AlertCardProps {
  section: AlertSection
}

/**
 * 국가 상세(TR_1100) 지역별 경보현황 카드.
 * 구분 제목(굵게)과 해당 지역 설명을 묶어 라운드 카드로 표시한다.
 */
export const AlertCard = ({ section }: AlertCardProps) => (
  <div className="flex w-full flex-col gap-8 rounded-lg border border-gray-9 bg-white px-20 py-20">
    <p className="text-lg font-semibold leading-none text-ink">{section.title}</p>
    <p className="text-lg text-gray-4">{section.description}</p>
  </div>
)
