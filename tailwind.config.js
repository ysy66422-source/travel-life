/**
 * 룰 준수: 모든 디자인 값은 토큰으로 정의해 arbitrary value(text-[14px] 등) 사용을 차단한다.
 * Figma MA_1000 화면의 컬러/타이포/간격/라운드 값을 그대로 토큰화했다.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // 디자인은 375px 고정 모바일 셸 기준이므로 기본 breakpoint를 모바일 우선으로 둔다.
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      // Figma Grayscale 변수 매핑
      ink: '#111111', // Gray_01
      gray: {
        2: '#4E4E4E',
        3: '#666666',
        4: '#777777', // Gray_04 (상세 설명 텍스트)
        5: '#949494',
        8: '#CCCCCC',
        9: '#DFDFDF',
        11: '#F4F4F4',
      },
      paper: '#FBFBFB', // 태그/공지 카드 배경
      brand: {
        from: '#332CEC',
        to: '#7018E4',
      },
      badge: '#9090FF', // 카드 상단 라벨
      info: '#CCCCFF', // 카드 안내 텍스트
      accent: {
        from: '#7CFF51',
        to: '#00BFEA',
      },
      'search-border': '#BE74CB',
      // 국가 상세: 여행경보 단계 배지 (TR_1100)
      alert: {
        soft: '#DCFCE7', // 배지 배경(연녹)
        text: '#008236', // 배지 텍스트(녹색)
      },
    },
    fontSize: {
      // [size, lineHeight] 형태로 정의해 leading arbitrary 사용을 막는다.
      '2xs': ['10px', '13px'],
      xs: ['11px', '14px'],
      sm: ['13px', '18px'],
      base: ['14px', '20px'],
      md: ['15px', '21px'],
      lg: ['16px', '22px'],
      xl: ['18px', '25px'],
      '2xl': ['22px', '31px'],
      // 국기 이모지를 박스에 꽉 차게(cover) 키우기 위한 크기 (overflow-hidden으로 가장자리 크롭)
      'flag-sm': ['34px', '34px'], // 검색 리스트 국기(39x25)
      'flag-lg': ['78px', '78px'], // 상세 헤더 국기(93x60)
    },
    extend: {
      fontFamily: {
        // 본문: Pretendard Variable, 로고: GangwonEduPower(미보유 시 fallback)
        sans: ['Pretendard Variable', 'Pretendard', 'system-ui', 'sans-serif'],
        logo: [
          'GangwonEduPower',
          'Pretendard Variable',
          'system-ui',
          'sans-serif',
        ],
      },
      spacing: {
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        11: '11px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        25: '25px', // 검색 리스트 국기 높이
        28: '28px',
        32: '32px',
        34: '34px',
        39: '39px', // 검색 리스트 국기 너비
        40: '40px',
        44: '44px',
        56: '56px',
        58: '58px',
        60: '60px', // 상세 헤더 국기 높이
        93: '93px', // 상세 헤더 국기 너비
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        lg: '16px',
        card: '20px',
        pill: '24px',
        badge: '45px',
        circle: '100px',
      },
      borderWidth: {
        // 검색 인풋 테두리(1.8px)는 디자인 고유값이라 토큰으로 등록
        search: '1.8px',
      },
      width: {
        'screen-m': '375px', // 모바일 셸 고정폭 (max-w-* 금지 대응)
      },
      letterSpacing: {
        tight: '-0.32px',
        tighter: '-0.18px',
        label: '-0.4px', // 추천 검색 국가 타이틀
        tab: '-0.72px', // 탭 라벨(18px)
        btn: '-0.28px', // 더보기 버튼
      },
      backgroundImage: {
        // 인라인 스타일 대신 클래스로 그라데이션 적용
        brand: 'linear-gradient(123deg, #332CEC 8%, #7018E4 94%)',
        accent: 'linear-gradient(101deg, #7CFF51 0%, #00BFEA 64%)',
      },
      boxShadow: {
        card: '0px 4px 6px rgba(0, 0, 0, 0.05)',
        'card-strong': '0px 4px 6px rgba(0, 0, 0, 0.15)',
        search: '0px 6px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
