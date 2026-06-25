import type {
  CountryDetail,
  SearchCountry,
  TabItem,
} from '../typing/travel-insurance'

// 검색 화면(TR_1000) 상단 지역 탭. 첫 탭(아시아)이 기본 활성화된다.
export const REGION_TABS: TabItem[] = [
  { id: 'asia', name: '아시아' },
  { id: 'europe', name: '유럽' },
  { id: 'americas', name: '미주' },
  { id: 'middle-east', name: '중동' },
  { id: 'africa', name: '아프리카' },
]

// 국가 상세(TR_1100) 콘텐츠 탭. 현재는 첫 탭만 데이터가 있고 나머지는 준비중 안내를 노출한다.
export const DETAIL_TABS: TabItem[] = [
  { id: 'region-alert', name: '지역별 경보현황' },
  { id: 'prevention', name: '사건·사고 예방정보' },
  { id: 'notice', name: '외교부 공지사항' },
]

// 지역 탭별 국가 리스트. 아시아는 Figma(TR_1000) 디자인 그대로, 나머지는 대표 국가로 구성한다.
export const SEARCH_COUNTRIES: SearchCountry[] = [
  { id: 'np', nameKo: '네팔', nameEn: 'Nepal', flag: '🇳🇵', regionId: 'asia' },
  { id: 'tl', nameKo: '동티모르', nameEn: 'East Timor', flag: '🇹🇱', regionId: 'asia' },
  { id: 'my', nameKo: '말레이시아', nameEn: 'Malaysia', flag: '🇲🇾', regionId: 'asia' },
  { id: 'mv', nameKo: '몰디브', nameEn: 'Maldives', flag: '🇲🇻', regionId: 'asia' },
  { id: 'mn', nameKo: '몽골', nameEn: 'Mongolia', flag: '🇲🇳', regionId: 'asia' },
  { id: 'mm', nameKo: '미얀마', nameEn: 'Myanmar', flag: '🇲🇲', regionId: 'asia' },
  { id: 'vn', nameKo: '베트남', nameEn: 'Vietnam', flag: '🇻🇳', regionId: 'asia' },
  { id: 'bt', nameKo: '부탄', nameEn: 'Bhutan', flag: '🇧🇹', regionId: 'asia' },
  { id: 'jp', nameKo: '일본', nameEn: 'Japan', flag: '🇯🇵', regionId: 'asia' },
  { id: 'th', nameKo: '태국', nameEn: 'Thailand', flag: '🇹🇭', regionId: 'asia' },
  { id: 'fr', nameKo: '프랑스', nameEn: 'France', flag: '🇫🇷', regionId: 'europe' },
  { id: 'gb', nameKo: '영국', nameEn: 'United Kingdom', flag: '🇬🇧', regionId: 'europe' },
  { id: 'de', nameKo: '독일', nameEn: 'Germany', flag: '🇩🇪', regionId: 'europe' },
  { id: 'us', nameKo: '미국', nameEn: 'United States', flag: '🇺🇸', regionId: 'americas' },
  { id: 'ca', nameKo: '캐나다', nameEn: 'Canada', flag: '🇨🇦', regionId: 'americas' },
  { id: 'br', nameKo: '브라질', nameEn: 'Brazil', flag: '🇧🇷', regionId: 'americas' },
  { id: 'bh', nameKo: '바레인', nameEn: 'Bahrain', flag: '🇧🇭', regionId: 'middle-east' },
  { id: 'ae', nameKo: '아랍에미리트', nameEn: 'UAE', flag: '🇦🇪', regionId: 'middle-east' },
  { id: 'eg', nameKo: '이집트', nameEn: 'Egypt', flag: '🇪🇬', regionId: 'africa' },
  { id: 'za', nameKo: '남아프리카공화국', nameEn: 'South Africa', flag: '🇿🇦', regionId: 'africa' },
]

// 여행경보 단계가 없는 일반 국가에 공통으로 쓰는 경보 카드 템플릿.
const DEFAULT_SECTIONS = (countryKo: string): CountryDetail['sections'] => [
  { id: 'ban', title: '여행금지 구역', description: '해당없음' },
  { id: 'evacuate', title: '철수권고 지역', description: '해당없음' },
  { id: 'restraint', title: '여행 자제 지역', description: '해당없음' },
  {
    id: 'caution',
    title: '여행 유의 지역',
    description: `${countryKo} 전 지역 (3, 4, 특별여행주의보 단계 지정 지역 제외)`,
  },
]

// 국가 상세 데이터. Figma(TR_1100)의 말레이시아는 디자인 그대로, 나머지는 동일 구조의 목데이터로 구성한다.
export const COUNTRY_DETAILS: Record<string, CountryDetail> = {
  my: {
    id: 'my',
    nameKo: '말레이시아',
    nameEn: 'Malaysia',
    flag: '🇲🇾',
    alertLabel: '1단계 여행 유의(전체)',
    sections: [
      { id: 'ban', title: '여행금지 구역', description: '아르메니아 접경 5km 구간' },
      {
        id: 'evacuate',
        title: '철수권고 지역',
        description:
          '나고르노-카라바흐 및 인근 7개 지역(아그담(Aghdam), 피줄리(Fizuli), 자브라일(Jabrayil), 장길란(Zanglian), 구바들리(Guabadly), 라친(Lachin), 켈바자르(Kelbajar)), 나흐치반 아르메니아 접경지역',
      },
      { id: 'restraint', title: '여행 자제 지역', description: '해당없음' },
      {
        id: 'caution',
        title: '여행 유의 지역',
        description: '3, 4, 특별여행주의보 단계 지정 지역을 제외한 지역',
      },
    ],
  },
  jp: {
    id: 'jp',
    nameKo: '일본',
    nameEn: 'Japan',
    flag: '🇯🇵',
    alertLabel: '1단계 여행 유의(일부)',
    sections: DEFAULT_SECTIONS('일본'),
  },
  th: {
    id: 'th',
    nameKo: '태국',
    nameEn: 'Thailand',
    flag: '🇹🇭',
    alertLabel: '1단계 여행 유의(일부)',
    sections: DEFAULT_SECTIONS('태국'),
  },
  vn: {
    id: 'vn',
    nameKo: '베트남',
    nameEn: 'Vietnam',
    flag: '🇻🇳',
    alertLabel: '1단계 여행 유의(전체)',
    sections: DEFAULT_SECTIONS('베트남'),
  },
  us: {
    id: 'us',
    nameKo: '미국',
    nameEn: 'United States',
    flag: '🇺🇸',
    alertLabel: '1단계 여행 유의(일부)',
    sections: DEFAULT_SECTIONS('미국'),
  },
  fr: {
    id: 'fr',
    nameKo: '프랑스',
    nameEn: 'France',
    flag: '🇫🇷',
    alertLabel: '1단계 여행 유의(일부)',
    sections: DEFAULT_SECTIONS('프랑스'),
  },
}

// 검색 리스트/태그에서 누른 국가의 상세 데이터를 안전하게 조회한다. (미정의 국가는 템플릿 생성)
export const getCountryDetail = (id: string): CountryDetail => {
  const found = COUNTRY_DETAILS[id]
  if (found) return found

  const fallback = SEARCH_COUNTRIES.find((country) => country.id === id)
  return {
    id,
    nameKo: fallback?.nameKo ?? '국가',
    nameEn: fallback?.nameEn ?? '',
    flag: fallback?.flag ?? '🏳️',
    alertLabel: '여행경보 정보 없음',
    sections: DEFAULT_SECTIONS(fallback?.nameKo ?? '해당 국가'),
  }
}
