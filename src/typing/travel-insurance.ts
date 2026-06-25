/**
 * MA_1000 여행자보험 화면에서 사용하는 도메인 타입 정의.
 * 룰에 따라 데이터 형태는 interface로 선언한다.
 */

// 이번 달 적용 보험 카드 정보
export interface InsuranceInfo {
  label: string // 카드 상단 라벨 (예: 이번 달 적용보험)
  name: string // 보험명 (예: 해외여행자 보험)
  startDate: string // 적용 시작일 (ISO 문자열, dayjs로 포맷)
  endDate: string // 적용 종료일 (ISO 문자열)
  noticeLines: string[] // 기간 종료 후 안내 문구 (줄 단위)
}

// 다음 여행 계획 안내 row
export interface NextTripPromo {
  title: string
  description: string
}

// 검색 영역 하단 국가 추천 태그
export interface CountryTag {
  id: string
  name: string
}

// 쿠폰 혜택 브랜드 로고
export interface BrandLogo {
  id: string
  name: string
  image: string // import한 로컬 PNG 에셋
}

// 푸터 약관 링크
export interface FooterLink {
  id: string
  label: string
}

// 푸터 사업자 정보
export interface CompanyInfo {
  name: string
  address: string
  businessNumber: string
  copyright: string
}

// 검색 화면(TR_1000) 지역 탭 / 국가 상세(TR_1100) 콘텐츠 탭 공용 타입
export interface TabItem {
  id: string
  name: string
}

// 검색 화면 국가 리스트 행
export interface SearchCountry {
  id: string // 국가 코드 (상세 페이지 라우팅 키)
  nameKo: string
  nameEn: string
  flag: string // 유니코드 이모지 국기
  regionId: string // 소속 지역 탭 id
}

// 국가 상세(TR_1100) 경보 카드 한 건
export interface AlertSection {
  id: string
  title: string // 예: 여행금지 구역
  description: string // 예: 해당없음
}

// 국가 상세(TR_1100) 페이지 데이터
export interface CountryDetail {
  id: string
  nameKo: string
  nameEn: string
  flag: string // 유니코드 이모지 국기
  alertLabel: string // 여행경보 단계 배지 문구
  sections: AlertSection[] // 지역별 경보현황 카드 목록
}
