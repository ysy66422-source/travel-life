import { useState } from 'react'
import { DETAIL_TABS, getCountryDetail } from '../../mocks/country'
import { StatusBar } from '../../components/travel-insurance/status-bar'
import { TopNav } from '../../components/common/top-nav'
import { TabBar } from '../../components/common/tab-bar'
import { CountryHeader } from '../../components/country-detail/country-header'
import { AlertCard } from '../../components/country-detail/alert-card'

interface CountryDetailPageProps {
  countryId: string
  onBack: () => void
}

/**
 * TR_1100 국가별 상세 화면.
 * 국가 헤더 + 콘텐츠 탭으로 구성하며, 첫 탭(지역별 경보현황)에 경보 카드 목록을 노출한다.
 * 나머지 탭은 현재 목데이터가 없어 준비중 안내를 표시한다.
 */
export const CountryDetailPage = ({
  countryId,
  onBack,
}: CountryDetailPageProps) => {
  const detail = getCountryDetail(countryId)
  const [activeTab, setActiveTab] = useState(DETAIL_TABS[0].id)
  const isRegionAlert = activeTab === DETAIL_TABS[0].id

  return (
    <div className="app-shell mx-auto flex w-screen-m flex-col bg-white">
      <StatusBar />
      <TopNav onBack={onBack} />

      <div className="flex flex-col gap-32 pb-56 pt-20">
        <CountryHeader
          flag={detail.flag}
          nameKo={detail.nameKo}
          nameEn={detail.nameEn}
          alertLabel={detail.alertLabel}
        />

        <div className="flex w-full flex-col gap-24">
          <TabBar
            items={DETAIL_TABS}
            activeId={activeTab}
            onChange={setActiveTab}
          />

          {isRegionAlert ? (
            <div className="flex w-full flex-col gap-16 px-20">
              {detail.sections.map((section) => (
                <AlertCard key={section.id} section={section} />
              ))}
            </div>
          ) : (
            <div className="flex w-full items-center justify-center px-20 py-40">
              <p className="text-lg text-gray-4">준비 중인 정보입니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
