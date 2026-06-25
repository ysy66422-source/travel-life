import brandMega from '../assets/brand-mega.png'
import brandLotte from '../assets/brand-lotte.png'
import brandPaiks from '../assets/brand-paiks.png'
import brandEmart from '../assets/brand-emart.png'
import brandMammoth from '../assets/brand-mammoth.png'
import brandCompose from '../assets/brand-compose.png'
import brandGs from '../assets/brand-gs.png'
import brandHd from '../assets/brand-hd.png'
import type {
  BrandLogo,
  CompanyInfo,
  CountryTag,
  FooterLink,
  InsuranceInfo,
  NextTripPromo,
} from '../typing/travel-insurance'

// 화면은 정적 UI이므로 실제 API 대신 mock 데이터로 구성한다.
export const INSURANCE_INFO: InsuranceInfo = {
  label: '이번 달 적용보험',
  name: '해외여행자 보험',
  startDate: '2026-06-01',
  endDate: '2026-06-30',
  noticeLines: [
    '해외여행자 보험 기간 종료후 자동으로 일상혜택',
    '배상책임보험으로 전환됩니다.',
  ],
}

export const NEXT_TRIP_PROMO: NextTripPromo = {
  title: '다음 여행계획이 있으신가요?',
  description: '기간 종료 후 이어서 적용할 수 있어요',
}

// key로 사용할 안정적 id 포함 (index key 금지 룰 대응)
export const COUNTRY_TAGS: CountryTag[] = [
  { id: 'jp', name: '일본' },
  { id: 'th', name: '태국' },
  { id: 'vn', name: '베트남' },
  { id: 'us', name: '미국' },
  { id: 'fr', name: '프랑스' },
]

// TR(node 227:1003) 디자인 순서대로 8개 제휴 브랜드 로고를 노출한다.
export const BRAND_LOGOS: BrandLogo[] = [
  { id: 'mega', name: '메가커피', image: brandMega },
  { id: 'lotte', name: '롯데', image: brandLotte },
  { id: 'paiks', name: '빽다방', image: brandPaiks },
  { id: 'emart', name: '이마트', image: brandEmart },
  { id: 'mammoth', name: '매머드커피', image: brandMammoth },
  { id: 'compose', name: '컴포즈커피', image: brandCompose },
  { id: 'gs', name: 'GS25', image: brandGs },
  { id: 'hd', name: '현대', image: brandHd },
]

export const FOOTER_LINKS: FooterLink[] = [
  { id: 'terms', label: '서비스 이용약관' },
  { id: 'privacy', label: '개인정보처리방침' },
]

export const COMPANY_INFO: CompanyInfo = {
  name: '(주)헥토이노베이션',
  address: '서울특별시 강남구 테헤란로 34길 6 태광타워 12,13층',
  businessNumber: '사업자등록번호 214-88-39117',
  copyright: 'Copyright(C) Hecto Innovation Co., Ltd. All rights reserved.',
}
