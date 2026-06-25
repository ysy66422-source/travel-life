import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 조건부/중복 Tailwind 클래스를 안전하게 병합한다.
 * clsx로 조건부 처리 후 twMerge로 충돌 클래스를 정리해 의도치 않은 스타일 중복을 막는다.
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))
