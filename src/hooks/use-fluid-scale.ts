import { useEffect } from 'react'

// 디자인 기준 폭(375px). 이 값 대비 뷰포트 폭 비율로 전체 화면을 확대/축소한다.
const DESIGN_WIDTH = 375

/**
 * 375px 모바일 디자인을 뷰포트 폭에 비례해 확대/축소한다.
 * rem 환산(소수점 토큰)·arbitrary value·인라인 스타일을 쓰지 않기 위해,
 * 레이아웃에 반영되는 CSS `zoom` 값을 :root의 CSS 변수(--app-zoom)로만 주입한다.
 * (zoom은 transform과 달리 박스 크기에 반영되어 세로 스크롤이 정상 동작한다.)
 */
export const useFluidScale = (): void => {
  useEffect(() => {
    const root = document.documentElement

    const applyScale = () => {
      // clientWidth는 세로 스크롤바 폭을 제외하므로 가로 넘침을 막는다.
      const scale = root.clientWidth / DESIGN_WIDTH
      root.style.setProperty('--app-zoom', String(scale))
    }

    // resize 폭주를 막기 위해 rAF로 프레임당 1회만 갱신한다.
    let frame = 0
    const handleResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(applyScale)
    }

    applyScale()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
      root.style.removeProperty('--app-zoom')
    }
  }, [])
}
