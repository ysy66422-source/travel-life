import icChevronRight from '../../assets/ic-chevron-right.png'
import { FlagBadge } from '../common/flag-badge'
import { IconImage } from '../common/icon-image'
import type { SearchCountry } from '../../typing/travel-insurance'

interface CountryListRowProps {
  country: SearchCountry
  onSelect: (id: string) => void
}

/**
 * 검색 화면(TR_1000) 국가 리스트 한 줄.
 * 국기 + "국가명(영문)" + 우측 chevron 으로 구성하며, 터치 시 해당 국가 상세로 이동한다.
 */
export const CountryListRow = ({ country, onSelect }: CountryListRowProps) => (
  <button
    type="button"
    onClick={() => onSelect(country.id)}
    className="flex w-full items-center justify-between py-20 text-left active:opacity-60"
  >
    <span className="flex flex-1 items-center gap-8">
      <FlagBadge flag={country.flag} />
      <span className="text-lg font-medium text-ink">
        {country.nameKo} ({country.nameEn})
      </span>
    </span>
    <IconImage src={icChevronRight} className="size-24" />
  </button>
)
