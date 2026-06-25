import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useFluidScale } from './hooks/use-fluid-scale'
import { TravelInsurancePage } from './pages/travel-insurance/travel-insurance-page'
import { SearchPage } from './pages/search/search-page'
import { CountryDetailPage } from './pages/country-detail/country-detail-page'

// 라우터 미사용 프로젝트라 최상위 뷰를 단순 상태로 전환한다.
// detail은 진입 출처(from)를 기억해 뒤로가기 목적지를 결정한다.
type View =
  | { name: 'main' }
  | { name: 'search' }
  | { name: 'detail'; countryId: string; from: 'main' | 'search' }

// 렌더 단계 오류를 사용자에게 안내하기 위한 최소 fallback UI
const ErrorFallback = () => (
  <div className="app-shell mx-auto flex w-screen-m flex-col items-center gap-12 px-20 py-56 text-center">
    <p className="text-xl font-bold text-ink">문제가 발생했어요</p>
    <p className="text-base text-gray-2">잠시 후 다시 시도해 주세요.</p>
  </div>
)

const App = () => {
  // 뷰포트 폭에 맞춰 전체 화면을 비율 확대/축소한다. (오류 시 fallback에도 동일 적용)
  useFluidScale()

  const [view, setView] = useState<View>({ name: 'main' })

  const renderView = () => {
    switch (view.name) {
      case 'search':
        return (
          <SearchPage
            onBack={() => setView({ name: 'main' })}
            onOpenCountry={(countryId) =>
              setView({ name: 'detail', countryId, from: 'search' })
            }
          />
        )
      case 'detail':
        return (
          <CountryDetailPage
            countryId={view.countryId}
            onBack={() =>
              setView(
                view.from === 'search' ? { name: 'search' } : { name: 'main' },
              )
            }
          />
        )
      default:
        return (
          <TravelInsurancePage
            onOpenSearch={() => setView({ name: 'search' })}
            onOpenCountry={(countryId) =>
              setView({ name: 'detail', countryId, from: 'main' })
            }
          />
        )
    }
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{renderView()}</ErrorBoundary>
  )
}

export default App
