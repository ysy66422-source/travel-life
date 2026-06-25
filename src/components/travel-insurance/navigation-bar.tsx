import icMenu from '../../assets/ic-menu.png'
import icMenuRight from '../../assets/ic-menu-right.png'
import { IconImage } from '../common/icon-image'

/**
 * 상단 네비게이션 바: 좌측 메뉴 / 중앙 로고(트래블라이프) / 우측 메뉴.
 * 메뉴 버튼은 현재 동작 없는 스텁이며 press 피드백만 제공한다.
 */
export const NavigationBar = () => (
  <nav className="flex h-56 w-full items-center justify-between px-16">
    <button type="button" aria-label="메뉴 열기" className="active:opacity-60">
      <IconImage src={icMenu} className="size-32" />
    </button>
    <p className="text-center font-logo text-xl font-extrabold tracking-tighter text-ink">
      트래블라이프
    </p>
    <button type="button" aria-label="전체 메뉴" className="active:opacity-60">
      <IconImage src={icMenuRight} className="size-32" />
    </button>
  </nav>
)
