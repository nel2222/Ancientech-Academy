import * as React from "react"

type Props = React.SVGProps<SVGSVGElement>

// X (formerly Twitter) brand mark (simple inline SVG)
export function XLogo(props: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.504h-7.41l-5.804-7.59-6.64 7.59H.46l8.6-9.84L0 1.153h7.6l5.243 6.93 6.058-6.93Zm-1.29 19.49h2.04L6.49 3.24H4.32l13.29 17.404Z"
      />
    </svg>
  )
}

