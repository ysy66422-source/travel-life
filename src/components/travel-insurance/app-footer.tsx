import { Fragment } from 'react'
import { COMPANY_INFO, FOOTER_LINKS } from '../../mocks/travel-insurance'

/**
 * 하단 푸터: 약관 링크 + 사업자 정보.
 * 약관 링크 사이에는 세로 구분선을 두며, 링크는 안정적 id를 key로 사용한다.
 */
export const AppFooter = () => (
  <footer className="flex w-full flex-col gap-28">
    <div className="flex items-center gap-16">
      {FOOTER_LINKS.map((link, index) => (
        <Fragment key={link.id}>
          {index > 0 && <span className="h-14 w-px bg-gray-9" />}
          <button
            type="button"
            className="text-base font-medium tracking-tight text-gray-3 active:opacity-60"
          >
            {link.label}
          </button>
        </Fragment>
      ))}
    </div>
    <div className="flex flex-col gap-20">
      <p className="text-base font-semibold tracking-tight text-ink">
        {COMPANY_INFO.name}
      </p>
      <div className="flex flex-col gap-10 text-base tracking-tight text-gray-5">
        <p>{COMPANY_INFO.address}</p>
        <p>{COMPANY_INFO.businessNumber}</p>
        <p className="leading-snug">{COMPANY_INFO.copyright}</p>
      </div>
    </div>
  </footer>
)
