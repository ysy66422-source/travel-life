import icSearch from '../../assets/ic-search.png'
import { COUNTRY_TAGS } from '../../mocks/travel-insurance'
import { CountryChip } from '../common/country-chip'
import { SectionTitle } from '../common/section-title'
import { IconImage } from '../common/icon-image'

interface SearchSectionProps {
  // 검색바 터치 시 검색 화면(TR_1000)으로 전환한다.
  onOpenSearch: () => void
  // 추천 국가 태그 터치 시 해당 국가 상세(TR_1100)로 전환한다.
  onOpenCountry: (id: string) => void
}

/**
 * 해외 여행지 정보 검색 영역.
 * 검색바는 직접 입력받지 않고(커서 없음) 터치 즉시 검색 화면으로 전환하는 진입점이며,
 * 추천 국가 태그는 선택 상태 없이 곧바로 해당 국가 상세 화면으로 전환한다.
 */
export const SearchSection = ({
  onOpenSearch,
  onOpenCountry,
}: SearchSectionProps) => {
  return (
    <div className="flex w-full flex-col gap-16">
      <SectionTitle>국내 여행지 정보 검색!!!!!</SectionTitle>
      {/* 입력 대신 버튼으로 두어 포커스/커서 없이 터치만으로 화면을 전환한다. */}
      <button
        type="button"
        onClick={onOpenSearch}
        className="search-field flex h-58 w-full items-center gap-8 px-24 py-12 text-left shadow-search active:opacity-90"
      >
        <IconImage src={icSearch} className="size-18" />
        <span className="flex-1 text-lg tracking-tight text-gray-2">
          국가명을 입력하세요
        </span>
      </button>
      {/* 추천 국가 태그는 줄바꿈 없이 가로 1줄로 노출한다. */}
      <div className="flex w-full flex-nowrap gap-6">
        {COUNTRY_TAGS.map((tag) => (
          <CountryChip
            key={tag.id}
            label={tag.name}
            onClick={() => onOpenCountry(tag.id)}
          />
        ))}
      </div>
    </div>
  )
}
