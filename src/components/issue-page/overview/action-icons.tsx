import React, { ReactElement } from 'react'

type ActionIconState = { clicked: Boolean }

export function FlagIcon(): ReactElement {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
      <path
        d="M26.216 4.368L28 3.863v19.576l-1.012.269a6.388 6.388 0 01-.395.1c-.137.035-.446.096-.926.186-.48.079-.967.14-1.459.185-.491.034-1.11.05-1.853.05a20.726 20.726 0 01-2.213-.15 12.58 12.58 0 01-2.642-.64c-.88-.326-1.515-.595-1.904-.808a40.72 40.72 0 01-1.819-1.095c-.149-.09-.263-.157-.343-.202-1.51-.942-2.745-1.542-3.706-1.8-1.258-.326-2.854-.388-4.787-.186v-2.71c2.208-.19 4.038-.09 5.49.303.56.146 1.127.348 1.699.606.583.258 1.04.488 1.372.69.344.191.807.466 1.39.825.057.034.212.135.463.303.263.157.435.258.515.303.08.045.24.14.48.286.24.135.412.23.515.287.103.056.269.14.498.252.24.112.429.196.566.252.149.056.337.13.566.22.229.078.44.14.635.184.194.045.406.09.635.135.24.045.48.084.72.118 1.51.19 3.1.168 4.77-.068V7.28c-1.59.247-3.288.258-5.096.034-.949-.113-1.875-.32-2.78-.623-.891-.314-1.583-.6-2.075-.859a48.59 48.59 0 01-1.87-1.094c-.538-.314-.944-.55-1.218-.707a12.962 12.962 0 00-1.133-.555 8.299 8.299 0 00-1.355-.488c-1.716-.45-4.043-.41-6.983.118V28H0V.985L1.03.732c.114-.033.343-.09.686-.168.343-.079.869-.168 1.578-.27C4.014.183 4.747.099 5.49.043a18.11 18.11 0 012.47 0c.916.045 1.74.163 2.471.354 1.236.325 2.711 1.01 4.427 2.053.709.426 1.264.752 1.664.976.412.214.978.45 1.699.707a11.03 11.03 0 002.247.505c2.105.258 4.015.169 5.73-.27h.018z"
        fill="#164176"
      />
    </svg>
  )
}

export function ShareIcon(): ReactElement {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
      <path
        d="M22.444 17.21c1.538 0 2.848.555 3.931 1.665 1.083 1.1 1.625 2.427 1.625 3.98 0 1.552-.542 2.884-1.625 3.994-1.083 1.1-2.393 1.651-3.93 1.651-1.528 0-2.838-.55-3.931-1.651-1.083-1.11-1.625-2.442-1.625-3.994 0-1.054.268-2.023.805-2.907L14 17.054l-3.694 2.894c.537.884.805 1.853.805 2.907 0 1.552-.542 2.884-1.625 3.994-1.083 1.1-2.393 1.651-3.93 1.651-1.537 0-2.848-.55-3.931-1.651C.542 25.739 0 24.407 0 22.855c0-1.553.542-2.88 1.625-3.98 1.083-1.11 2.394-1.665 3.93-1.665 1.204 0 2.288.357 3.25 1.072l4.084-3.203v-3.402c-1.278-.263-2.338-.912-3.18-1.947-.843-1.035-1.265-2.23-1.265-3.585 0-1.562.542-2.893 1.625-3.994C11.153 1.051 12.463.5 14 .5s2.847.55 3.93 1.651c1.084 1.101 1.626 2.432 1.626 3.994 0 1.355-.422 2.55-1.264 3.585-.843 1.035-1.903 1.684-3.18 1.947v3.402l4.082 3.203a5.316 5.316 0 013.25-1.072zM11.625 3.732a3.316 3.316 0 00-.986 2.413c0 .941.329 1.745.986 2.413.657.668 1.45 1.002 2.375 1.002.926 0 1.718-.334 2.375-1.002a3.316 3.316 0 00.986-2.413c0-.94-.329-1.745-.986-2.413-.657-.668-1.45-1.002-2.375-1.002-.926 0-1.718.334-2.375 1.002zM3.181 25.268c.657.668 1.449 1.002 2.375 1.002.925 0 1.717-.334 2.375-1.002a3.316 3.316 0 00.986-2.413c0-.941-.329-1.745-.986-2.413-.658-.669-1.45-1.003-2.375-1.003-.926 0-1.718.334-2.375 1.003a3.316 3.316 0 00-.987 2.413c0 .94.33 1.745.987 2.413zm16.888 0c.658.668 1.45 1.002 2.375 1.002.926 0 1.718-.334 2.375-1.002a3.316 3.316 0 00.987-2.413c0-.941-.33-1.745-.987-2.413-.657-.669-1.449-1.003-2.375-1.003-.925 0-1.717.334-2.375 1.003a3.316 3.316 0 00-.986 2.413c0 .94.329 1.745.986 2.413z"
        fill="#164176"
      />
    </svg>
  )
}

export function HandIcon({ clicked }: ActionIconState): ReactElement {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
      <g clipPath="url(#clip0)">
        <path
          d="M22.608.491c.056 0 .112.003.167.008v13.26h2.68V2.949H28v13.497c0 1.884-.413 3.635-1.239 5.252-.837 1.618-2.02 2.969-3.552 4.054-1.552 1.096-3.298 1.792-5.236 2.089-1.95.296-3.964.179-6.046-.354a15.843 15.843 0 01-3.452-1.351c-1.157-.604-2.153-1.233-2.99-1.889a27.846 27.846 0 01-2.362-2.073c-.738-.727-1.305-1.336-1.702-1.827-.396-.492-.688-.896-.875-1.213A3.684 3.684 0 010 17.26a3.46 3.46 0 01.479-1.843c.286-.49.682-.88 1.189-1.167a3.538 3.538 0 011.668-.491c.342-.02.705.015 1.09.107.375.093.672.185.893.277.209.092.506.235.892.43.341.164.61.292.809.384.198.082.44.159.727.23.275.062.54.082.793.062.33-.02.572-.185.727-.492.154-.307.23-.655.23-1.044V0h2.693v12.756h2.643V0h2.421c.077 0 .153.005.228.014v12.75h2.68V.49h2.445z"
          fill={clicked ? '#FA759E' : '#164176'}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H28V28H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function CommentIcon(): ReactElement {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
      <path
        d="M21.808 0c1.705 0 3.163.656 4.375 1.969C27.394 3.28 28 4.86 28 6.709v7.583c0 1.847-.606 3.427-1.817 4.74C24.97 20.343 23.513 21 21.808 21h-5.503l-6.478 6.599c-.28.267-.595.401-.942.401a1.3 1.3 0 01-.522-.11 1.505 1.505 0 01-.606-.546 1.53 1.53 0 01-.219-.802V21H6.192c-1.705 0-3.163-.656-4.375-1.969C.606 17.72 0 16.14 0 14.291V6.709c0-1.847.606-3.427 1.817-4.74C3.03.657 4.487 0 6.192 0h15.616z"
        fill="#FA759E"
      />
    </svg>
  )
}
