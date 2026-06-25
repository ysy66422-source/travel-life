import { useMemo, useState } from 'react'
import icSearch from '../../assets/ic-search.png'
import icChevronRight from '../../assets/ic-chevron-right.png'
import { COUNTRY_TAGS } from '../../mocks/travel-insurance'
import { REGION_TABS, SEARCH_COUNTRIES } from '../../mocks/country'
import { StatusBar } from '../../components/travel-insurance/status-bar'
import { TopNav } from '../../components/common/top-nav'
import { TabBar } from '../../components/common/tab-bar'
import { CountryChip } from '../../components/common/country-chip'
import { IconImage } from '../../components/common/icon-image'
import { CountryListRow } from '../../components/search/country-list-row'

interface SearchPageProps {
  onBack: () => void
  // 국가 선택(리스트 행/추천 태그) 시 해당 국가 상세로 이동한다.
  onOpenCountry: (id: string) => void
}

/**
 * TR_1000 검색 초기화면.
 * 메인 검색바 터치로 진입하며, 추천 태그/지역별 국가 리스트에서 국가를 고르면 상세로 이동한다.
 */
export const SearchPage = ({ onBack, onOpenCountry }: SearchPageProps) => {
  const [query, setQuery] = useState('')
  const [activeRegion, setActiveRegion] = useState(REGION_TABS[0].id)

  // 활성 지역 탭에 속한 국가만 노출한다. (탭 전환 시에만 재계산)
  const countries = useMemo(
    () => SEARCH_COUNTRIES.filter((country) => country.regionId === activeRegion),
    [activeRegion],
  )

  return (
    <div className="app-shell mx-auto flex w-screen-m flex-col bg-white">
      <StatusBar />
      <TopNav onBack={onBack} title="트래블라이프" />

      <div className="flex flex-col gap-32 pb-56">
        <div className="flex flex-col gap-24 px-20 pt-32">
          {/* 검색 화면에서는 실제 입력이 목적이라 포커스/커서를 허용한다. */}
          <div className="search-field flex h-58 w-full items-center gap-8 px-24 py-12 shadow-search">
            <IconImage src={icSearch} className="size-18" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="국가명을 입력하세요"
              autoFocus
              className="flex-1 bg-transparent text-lg tracking-tight text-ink outline-none placeholder:text-gray-2"
            />
          </div>

          <div className="flex w-full flex-col gap-12">
            <p className="text-lg font-bold tracking-label text-ink">추천 검색 국가</p>
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
        </div>

        <div className="flex w-full flex-col">
          <TabBar
            items={REGION_TABS}
            activeId={activeRegion}
            onChange={setActiveRegion}
          />
          <div className="flex w-full flex-col px-20 py-12">
            {countries.map((country) => (
              <CountryListRow
                key={country.id}
                country={country}
                onSelect={onOpenCountry}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full items-center justify-center px-20">
          {/* 더보기는 현재 동작 없는 스텁이며 press 피드백만 제공한다. */}
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-8 border-t border-gray-9 py-20 active:opacity-60"
          >
            <span className="text-base font-medium tracking-btn text-gray-4">더보기</span>
            <IconImage src={icChevronRight} className="size-14 rotate-90" />
          </button>
        </div>
      </div>
    </div>
  )
}
