import { AppFooter } from '../../components/travel-insurance/app-footer'
import { CouponSection } from '../../components/travel-insurance/coupon-section'
import { HeroTitle } from '../../components/travel-insurance/hero-title'
import { InsuranceCard } from '../../components/travel-insurance/insurance-card'
import { NavigationBar } from '../../components/travel-insurance/navigation-bar'
import { NoticeRow } from '../../components/travel-insurance/notice-row'
import { SearchSection } from '../../components/travel-insurance/search-section'
import { StatusBar } from '../../components/travel-insurance/status-bar'

interface TravelInsurancePageProps {
  // 검색바 터치 시 검색 화면(TR_1000)으로 전환한다.
  onOpenSearch: () => void
  // 추천 국가 태그 터치 시 해당 국가 상세(TR_1100)로 전환한다.
  onOpenCountry: (id: string) => void
}

/**
 * MA_1000 여행자보험 메인 페이지.
 * 375px(w-screen-m) 기준 디자인을 app-shell의 zoom으로 뷰포트 폭에 비례해
 * 확대/축소한다. 스케일 비율은 App의 useFluidScale 훅이 주입한다.
 *
 * 디자인 구조(MA_1000): 바깥 프레임은 흰색, 내부 MAIN 영역만 #F4F4F4 배경을 갖는다.
 */
export const TravelInsurancePage = ({
  onOpenSearch,
  onOpenCountry,
}: TravelInsurancePageProps) => (
  <div className="app-shell mx-auto flex w-screen-m flex-col bg-white">
    {/* MAIN: 메인 페이지에만 적용되는 #F4F4F4 배경 영역 */}
    <div className="flex w-full flex-col bg-gray-11">
      <StatusBar />
      <NavigationBar />
      <div className="flex flex-col gap-40 px-20 pb-56 pt-24">
        <div className="flex flex-col gap-16">
          <HeroTitle />
          <InsuranceCard />
        </div>
        <SearchSection onOpenSearch={onOpenSearch} onOpenCountry={onOpenCountry} />
        <CouponSection />
        <NoticeRow />
        <AppFooter />
      </div>
    </div>
  </div>
)
