import statusBar from '../../assets/status-bar.png'
import { IconImage } from '../common/icon-image'

/**
 * iOS 상태바 영역. 시계/신호/와이파이/배터리는 정적 목업이라
 * Figma에서 추출한 단일 PNG로 표현한다. (높이 44px 고정)
 */
export const StatusBar = () => (
  <div className="h-44 w-full">
    <IconImage src={statusBar} className="h-full w-full" />
  </div>
)
