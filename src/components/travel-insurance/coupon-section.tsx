import { BRAND_LOGOS } from '../../mocks/travel-insurance'
import { SectionTitle } from '../common/section-title'
import { IconImage } from '../common/icon-image'

/**
 * 쿠폰 혜택 영역. 카드 내부에 안내 문구와 제휴 브랜드 로고를 가로로 배치한다.
 * 로고 줄은 카드 양끝까지 확장되며, 양쪽 끝이 페이드(블러) 처리되고 좌우로 스크롤할 수 있다.
 */
export const CouponSection = () => {
  return (
    <div className="flex w-full flex-col gap-16">
      <SectionTitle>쿠폰 혜택</SectionTitle>
      {/* 로고 줄을 카드 끝까지 붙이기 위해 카드 자체의 좌우 패딩은 제거하고 텍스트에만 부여한다. */}
      <div className="flex w-full flex-col gap-28 overflow-hidden rounded-card bg-white py-28">
        <p className="px-24 text-lg tracking-tight text-gray-2">
          상황에 따라 골라 받는
          <br />
          다양한 할인쿠폰혜택을 선택하세요
        </p>
        {/* 트랙은 카드 전체 폭을 차지하고 mask-fade-x로 양끝을 블러 처리한다. 내부 px로 첫/마지막 로고에 여백을 준다. */}
        <div className="no-scrollbar mask-fade-x flex items-center gap-11 overflow-x-auto px-24">
          {BRAND_LOGOS.map((brand) => (
            <IconImage
              key={brand.id}
              src={brand.image}
              alt={brand.name}
              className="size-44 shrink-0 rounded-circle object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
