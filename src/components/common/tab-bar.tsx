import { cn } from '../../utils/cn'
import type { TabItem } from '../../typing/travel-insurance'

interface TabBarProps {
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
}

/**
 * 하단 밑줄로 활성 탭을 표시하는 가로 스크롤 탭 바.
 * 검색 화면 지역 탭과 국가 상세 콘텐츠 탭에서 공통으로 사용한다.
 */
export const TabBar = ({ items, activeId, onChange }: TabBarProps) => (
  <div className="no-scrollbar flex w-full items-end gap-20 overflow-x-auto px-24">
    {items.map((item) => {
      const isActive = item.id === activeId

      return (
        <button
          key={item.id}
          type="button"
          onClick={() => onChange(item.id)}
          className={cn(
            'shrink-0 whitespace-nowrap border-b-2 py-12 text-xl font-semibold leading-none tracking-tab transition-colors',
            isActive ? 'border-ink text-ink' : 'border-transparent text-gray-5',
          )}
        >
          {item.name}
        </button>
      )
    })}
  </div>
)
