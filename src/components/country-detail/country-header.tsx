import { FlagBadge } from '../common/flag-badge'

interface CountryHeaderProps {
  flag: string
  nameKo: string
  nameEn: string
  alertLabel: string
}

/**
 * 국가 상세(TR_1100) 헤더.
 * 국기 + 국가명 + 여행경보 단계 배지로 구성한다.
 */
export const CountryHeader = ({
  flag,
  nameKo,
  nameEn,
  alertLabel,
}: CountryHeaderProps) => (
  <div className="flex w-full items-center gap-16 px-20">
    <FlagBadge flag={flag} size="lg" />
    <div className="flex flex-1 flex-col justify-center gap-10">
      <p className="text-xl font-semibold text-ink">
        {nameKo} ({nameEn})
      </p>
      <span className="flex items-center justify-center self-start rounded-badge bg-alert-soft px-12 py-6 text-sm font-medium text-alert-text">
        {alertLabel}
      </span>
    </div>
  </div>
)
