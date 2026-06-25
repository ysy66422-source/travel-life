import icChevronRight from '../../assets/ic-chevron-right.png'
import icMenuRight from '../../assets/ic-menu-right.png'
import { IconImage } from './icon-image'

interface TopNavProps {
  onBack: () => void
  // 가운데 타이틀. 없으면(상세 페이지) 좌측 뒤로/우측 메뉴만 노출한다.
  title?: string
}

/**
 * 하위 화면 공통 상단 네비게이션.
 * 좌측 뒤로가기(우향 chevron을 180° 회전), 가운데 타이틀, 우측 전체 메뉴로 구성한다.
 */
export const TopNav = ({ onBack, title }: TopNavProps) => (
  <nav className="flex h-56 w-full items-center justify-between px-16">
    <button
      type="button"
      aria-label="뒤로"
      onClick={onBack}
      className="active:opacity-60"
    >
      <IconImage src={icChevronRight} className="size-32 rotate-180" />
    </button>
    {title ? (
      <p className="text-center text-xl font-medium tracking-tighter text-ink">
        {title}
      </p>
    ) : null}
    <button type="button" aria-label="전체 메뉴" className="active:opacity-60">
      <IconImage src={icMenuRight} className="size-32" />
    </button>
  </nav>
)
