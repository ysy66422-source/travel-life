import dayjs from 'dayjs'
import icInfo from '../../assets/ic-info.png'
import icTravelInsurance from '../../assets/ic-travel-insurance.png'
import icChevronRight from '../../assets/ic-chevron-right.png'
import { IconImage } from '../common/icon-image'
import { INSURANCE_INFO, NEXT_TRIP_PROMO } from '../../mocks/travel-insurance'

/**
 * "이번 달 적용보험" 카드.
 * 흰색 카드가 그라데이션 카드를 감싸는 구조로, 그라데이션의 둥근 하단 모서리 사이로
 * 뒤의 흰색 카드가 비쳐 Figma의 적층(stacked) 카드 효과를 재현한다.
 */
export const InsuranceCard = () => {
  const { label, name, startDate, endDate, noticeLines } = INSURANCE_INFO

  // 적용 기간은 dayjs로 포맷해 표시 형식을 데이터와 분리한다.
  const period = `${dayjs(startDate).format('YYYY년 M월 D일')} ~ ${dayjs(
    endDate,
  ).format('M월 D일')}`

  return (
    <div className="relative w-full">
      <div className="relative z-10 flex w-full flex-col gap-24 rounded-card bg-brand px-24 py-32 shadow-card-strong">
        <p className="text-base font-bold text-badge">{label}</p>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-bold text-white">{name}</p>
            <p className="bg-accent bg-clip-text text-lg font-semibold tracking-tight text-transparent">
              {period}
            </p>
          </div>
          <div className="flex flex-col gap-2 border-t border-badge/70 pt-16">
            <div className="flex items-center gap-4">
              <IconImage src={icInfo} className="size-16" />
              <p className="text-base text-info">{noticeLines[0]}</p>
            </div>
            <p className="pl-20 text-base text-info">{noticeLines[1]}</p>
          </div>
        </div>
      </div>

      {/* Sec-1 흰색 카드 + 다음 여행계획 버튼을 한 그룹으로 묶어, 그라데이션 카드 뒤에서 함께 내려온다.
          -mt-20으로 카드 상단을 그라데이션 뒤에 숨기고 pt-20으로 본문 위치를 보정한다. */}
      <div className="next-trip-reveal relative -mt-20 w-full rounded-card bg-white pt-20 shadow-card">
        <button
          type="button"
          className="flex w-full items-center justify-between px-20 py-24 active:opacity-70"
        >
          <span className="flex items-center gap-10 pr-12">
            <IconImage
              src={icTravelInsurance}
              alt="여행자 보험"
              className="size-34"
            />
            <span className="flex flex-col gap-2 text-left">
              <span className="text-lg font-bold text-ink">
                {NEXT_TRIP_PROMO.title}
              </span>
              <span className="text-base text-gray-2">
                {NEXT_TRIP_PROMO.description}
              </span>
            </span>
          </span>
          <IconImage src={icChevronRight} className="size-24" />
        </button>
      </div>
    </div>
  )
}
