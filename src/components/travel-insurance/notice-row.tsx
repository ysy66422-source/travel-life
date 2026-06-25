import icChevronRight from '../../assets/ic-chevron-right.png'
import { IconImage } from '../common/icon-image'

/**
 * 공지사항 진입 row. 클릭 동작은 스텁이며 press 피드백만 제공한다.
 */
export const NoticeRow = () => (
  <button
    type="button"
    className="flex h-58 w-full items-center justify-between rounded-card border border-gray-9 bg-paper px-20 py-16 active:opacity-70"
  >
    <span className="text-lg font-semibold tracking-tight text-ink">
      공지사항
    </span>
    <IconImage src={icChevronRight} className="size-24" />
  </button>
)
