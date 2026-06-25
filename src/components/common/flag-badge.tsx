import { cn } from '../../utils/cn'

interface FlagBadgeProps {
  flag: string // 유니코드 이모지 국기
  // sm: 검색 리스트(39x25), lg: 상세 헤더(93x60)
  size?: 'sm' | 'lg'
}

/**
 * 국기 표시 배지.
 * 룰상 외부 이미지 URL/별도 에셋을 쓰지 않으므로 유니코드 이모지 국기를 둥근 박스에 담아 표현한다.
 */
export const FlagBadge = ({ flag, size = 'sm' }: FlagBadgeProps) => (
  <div
    className={cn(
      'flex shrink-0 items-center justify-center overflow-hidden border border-gray-9 bg-white leading-none',
      size === 'sm' ? 'h-25 w-39 rounded-xs text-flag-sm' : 'h-60 w-93 rounded-sm text-flag-lg',
    )}
  >
    {/* 이모지를 박스보다 크게 키우고 overflow-hidden으로 잘라 테두리 안을 꽉 채운다. */}
    <span aria-hidden className="leading-none">
      {flag}
    </span>
  </div>
)
