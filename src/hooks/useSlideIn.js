import { useEffect, useRef } from 'react'

/**
 * useSlideIn — attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, it receives the 'is-visible' class.
 *
 * @param {Object} options
 * @param {number} options.threshold  - 0–1, how much of the element must be visible (default 0.15)
 * @param {number} options.delay      - extra CSS delay in ms applied inline (default 0)
 */
export function useSlideIn({ threshold = 0.15, delay = 0 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el) // fire once
        }
      },
      { threshold }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold, delay])

  return ref
}
