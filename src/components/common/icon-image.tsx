import { cn } from '../../utils/cn'

interface IconImageProps {
  src: string
  alt?: string
  // 크기는 Tailwind size 토큰 클래스로 받아 arbitrary value 사용을 막는다.
  className?: string
}

/**
 * Figma에서 추출한 PNG 아이콘을 일관된 방식으로 렌더한다.
 * 장식용 아이콘은 기본적으로 alt를 비워 스크린리더에서 제외한다.
 */
export const IconImage = ({ src, alt = '', className }: IconImageProps) => (
  <img src={src} alt={alt} className={cn('block object-contain', className)} />
)
