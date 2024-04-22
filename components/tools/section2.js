import React from "react";
const data = [
  {
    name: "Sync & Reply",
    desc: "Directly via Slack Channels",
    img: (
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.8054 20.3243C52.4582 13.6582 45.2398 9.67835 37.4993 9.67835C30.1421 9.67835 23.1346 13.351 18.7531 19.5033L16.7827 18.0999C21.6166 11.3115 29.3607 7.25903 37.4993 7.25903C46.0614 7.25903 54.0364 11.6488 58.8331 19.0024L56.8054 20.3243Z"
          fill="#024430"
        />
        <path
          d="M48.3677 58.0104L47.314 55.8314C53.8596 52.6685 58.6947 46.4253 60.2481 39.1301L62.6154 39.6345C60.9084 47.6544 55.5813 54.5243 48.3677 58.0104Z"
          fill="#024430"
        />
        <path
          d="M26.6229 58.0056C19.4352 54.529 14.1152 47.6821 12.394 39.6888L14.759 39.1797C16.3242 46.4494 21.1528 52.672 27.6766 55.8267L26.6229 58.0056Z"
          fill="#024430"
        />
        <path
          d="M30.043 57.9654V66.5323H44.957V57.9654C44.957 56.5963 43.8861 55.4871 42.5654 55.4871H40.4887L37.4994 60.4438L34.5101 55.4871H32.4333C31.1138 55.4871 30.043 56.5963 30.043 57.9654Z"
          fill="#06D6A0"
        />
        <path
          d="M44.956 67.7421H30.0432C29.3745 67.7421 28.8335 67.2005 28.8335 66.5325V57.9656C28.8335 55.9308 30.4483 54.2776 32.4347 54.2776H34.5114C34.9361 54.2776 35.3295 54.5003 35.5475 54.8629L37.4996 58.1009L39.4517 54.8629C39.6708 54.5003 40.0642 54.2776 40.4877 54.2776H42.5644C44.5508 54.2776 46.1656 55.932 46.1656 57.9656V66.5325C46.1656 67.2005 45.6246 67.7421 44.956 67.7421ZM31.2528 65.3228H43.7463V57.9656C43.7463 57.2651 43.2165 56.6969 42.5644 56.6969H41.1711L38.535 61.0683C38.0985 61.7954 36.8995 61.7954 36.463 61.0683L33.8269 56.6969H32.4335C31.7826 56.6969 31.2516 57.2663 31.2516 57.9656L31.2528 65.3228Z"
          fill="#024430"
        />
        <path
          d="M40.2535 62.9034L41.3267 61.1238V62.9034H40.2535ZM33.6719 62.9034V61.1238L34.7451 62.9034H33.6719Z"
          fill="#06D6A0"
        />
        <path
          d="M33.1479 48.0621V46.5477C33.1479 44.0463 35.103 42.0044 37.4993 42.0044C39.8956 42.0044 41.8506 44.0451 41.8506 46.5477V48.0621C41.8506 50.5635 39.8956 52.6054 37.4993 52.6054C35.103 52.6054 33.1479 50.5635 33.1479 48.0621Z"
          fill="white"
        />
        <path
          d="M37.4995 53.8139C34.434 53.8139 31.9385 51.2339 31.9385 48.0609V46.5476C31.9385 43.3747 34.434 40.7947 37.4995 40.7947C40.565 40.7947 43.0605 43.3747 43.0605 46.5476V48.0609C43.0605 51.2339 40.565 53.8139 37.4995 53.8139ZM37.4995 43.214C35.7671 43.214 34.3578 44.7089 34.3578 46.5476V48.0609C34.3578 49.8996 35.7671 51.3945 37.4995 51.3945C39.2319 51.3945 40.6412 49.8996 40.6412 48.0609V46.5476C40.6412 44.7089 39.2319 43.214 37.4995 43.214Z"
          fill="#024430"
        />
        <path
          d="M12.8583 22.1873C11.9948 23.5156 10.4402 24.4087 8.66588 24.4087C6.89097 24.4087 5.33696 23.5156 4.47342 22.1873L1.79835 23.645C1.43451 23.8446 1.20947 24.2114 1.20947 24.6066V34.6229H16.1235V24.7909C16.1235 24.4158 15.9215 24.0649 15.586 23.8606L12.8583 22.1873Z"
          fill="#FFD166"
        />
        <path
          d="M16.1237 35.8337H1.20966C0.540448 35.8337 0 35.2914 0 34.624V24.6077C0 23.7696 0.468388 22.9952 1.22029 22.5841L3.89536 21.1264C4.45057 20.824 5.14223 20.9994 5.48835 21.5292C6.15815 22.5599 7.37667 23.2002 8.66607 23.2002C9.95664 23.2002 11.1746 22.5599 11.8438 21.5292C12.2017 20.9787 12.93 20.8133 13.4899 21.1565L16.2182 22.8298C16.9157 23.2581 17.3333 23.9911 17.3333 24.792V34.624C17.3333 35.2914 16.7923 35.8337 16.1237 35.8337ZM2.41459 33.4143H14.914V24.792L13.1468 23.7589C11.9997 24.9408 10.3943 25.6207 8.66607 25.6207C6.92659 25.6207 5.31293 24.9308 4.16352 23.7359L2.37679 24.7093L2.41459 33.4143Z"
          fill="#024430"
        />
        <path
          d="M4.83887 30.9952V27.1677C6.00482 27.7324 7.30898 28.0389 8.6663 28.0389C10.0236 28.0389 11.329 27.7336 12.4949 27.1677V30.9952H4.83887Z"
          fill="#FFD166"
        />
        <path
          d="M4.31494 14.9844V13.4693C4.31494 10.9679 6.27 8.92603 8.66628 8.92603C11.0626 8.92603 13.0176 10.9667 13.0176 13.4693V14.9844C13.0176 17.4858 11.0626 19.5277 8.66628 19.5277C6.27 19.5277 4.31494 17.4858 4.31494 14.9844Z"
          fill="white"
        />
        <path
          d="M8.66598 20.7373C5.60049 20.7373 3.10498 18.1568 3.10498 14.9856V13.4711C3.10498 10.2993 5.60049 7.71875 8.66598 7.71875C11.7327 7.71875 14.2282 10.2993 14.2282 13.4711V14.9856C14.2282 18.1556 11.7327 20.7373 8.66598 20.7373ZM8.66598 10.1369C6.93359 10.1369 5.5243 11.6324 5.5243 13.4694V14.9844C5.5243 16.8231 6.93359 18.3168 8.66598 18.3168C10.3995 18.3168 11.8088 16.8213 11.8088 14.9844V13.4694C11.8088 11.6324 10.3995 10.1369 8.66598 10.1369Z"
          fill="#024430"
        />
        <path
          d="M73.1337 23.9776L69.0463 22.0786L66.8881 26.2858C66.6501 26.7501 66.0151 26.7501 65.7777 26.2858L63.6194 22.0786L59.5758 23.7697C59.1499 23.9474 58.8765 24.3408 58.8765 24.7749V34.6241H73.7893V24.964C73.7893 24.5464 73.5353 24.1654 73.1337 23.9776Z"
          fill="#AEE6B9"
        />
        <path
          d="M73.7892 35.8337H58.8752C58.2066 35.8337 57.6655 35.2915 57.6655 34.624V24.7749C57.6655 23.8529 58.232 23.0207 59.1061 22.6544L63.1527 20.9634C63.7369 20.7224 64.4084 20.9658 64.6949 21.5269L66.3328 24.7182L67.9707 21.5269C68.266 20.9486 68.9624 20.7059 69.5577 20.9829L73.6451 22.8818C74.469 23.264 75 24.0821 75 24.9651V34.624C74.9988 35.2915 74.4584 35.8337 73.7892 35.8337ZM60.0789 33.4144H72.5795V25.0543L69.5914 23.6656L67.9636 26.8386C67.644 27.4594 67.0197 27.8439 66.3316 27.8439C66.3304 27.8439 66.3304 27.8439 66.3292 27.8439C65.6423 27.8439 65.0168 27.4582 64.6996 26.8375L63.0523 23.6273L60.04 24.8877L60.0789 33.4144ZM72.6232 25.0749H72.6362H72.6232Z"
          fill="#024430"
        />
        <path
          d="M62.5039 30.995V27.8557L62.5488 27.9431C63.2806 29.3743 64.7313 30.2632 66.3325 30.2632C67.9291 30.2632 69.3797 29.3755 70.1139 27.9467L70.16 27.8569V30.9939L62.5039 30.995Z"
          fill="#AEE6B9"
        />
        <path
          d="M62.0098 14.937V13.4226C62.0098 10.9206 63.9642 8.87866 66.3605 8.87866C68.7568 8.87866 70.7119 10.9194 70.7119 13.4226V14.937C70.7119 17.4384 68.7568 19.4803 66.3605 19.4803C63.9642 19.4791 62.0098 17.4384 62.0098 14.937Z"
          fill="white"
        />
        <path
          d="M66.3604 20.6888C63.2943 20.6888 60.7988 18.1088 60.7988 14.937V13.4225C60.7988 10.2507 63.2943 7.67017 66.3604 7.67017C69.4259 7.67017 71.9214 10.2507 71.9214 13.4225V14.937C71.9214 18.1088 69.4271 20.6888 66.3604 20.6888ZM66.3604 10.0883C64.6269 10.0883 63.2181 11.5838 63.2181 13.4214V14.9358C63.2181 16.7745 64.6269 18.2683 66.3604 18.2683C68.0928 18.2683 69.5021 16.7733 69.5021 14.9358V13.4214C69.5021 11.5838 68.0928 10.0883 66.3604 10.0883Z"
          fill="#024430"
        />
      </svg>
    ),
  },
  {
    name: "Monitor",
    desc: "All replies from individual slack users can be monitored via your Next Tools Dashboard.",
    img: (
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2523_13203)">
          <path d="M0 60.085H73.9466V62.5043H0V60.085Z" fill="#024430" />
          <path
            d="M67.1459 67.7333L65.6362 65.8426L71.7584 60.9584L65.6912 56.7979L67.0591 54.8032L74.4742 59.8876C74.7914 60.1044 74.9857 60.4588 74.9993 60.8421C75.0141 61.2242 74.8446 61.5922 74.5457 61.8314L67.1459 67.7333Z"
            fill="#024430"
          />
          <path
            d="M47.6343 62.509L46.6632 60.2929C56.366 56.0407 62.634 46.5512 62.634 36.1167C62.634 21.5376 50.6212 9.67836 35.8548 9.67836C21.1221 9.67836 9.1371 21.5387 9.1371 36.1167C9.1371 36.7599 9.15955 37.399 9.20562 38.0316L6.79279 38.207C6.74317 37.516 6.71777 36.8208 6.71777 36.1167C6.71777 20.2044 19.7878 7.25903 35.8548 7.25903C51.9555 7.25903 65.0533 20.2044 65.0533 36.1167C65.0533 47.5105 58.2165 57.87 47.6343 62.509Z"
            fill="#024430"
          />
          <path
            d="M6.88169 40.2466C6.80904 40.2466 6.73521 40.2401 6.66256 40.226C6.29044 40.1569 5.9709 39.9188 5.80138 39.5798L1.66797 31.375L3.82859 30.2876L7.24435 37.0677L13.2436 31.5853L14.8762 33.372L7.69975 39.9306C7.47353 40.1362 7.18174 40.2466 6.88169 40.2466Z"
            fill="#024430"
          />
          <path
            d="M51.5306 34.9348C51.5306 26.3862 44.5148 19.4561 35.8605 19.4561C27.2062 19.4561 20.1904 26.3862 20.1904 34.9348C20.1904 43.4834 27.2062 50.4135 35.8605 50.4135C44.5148 50.4135 51.5306 43.4834 51.5306 34.9348Z"
            fill="#06D6A0"
          />
          <path
            d="M35.8607 51.6231C26.5538 51.6231 18.981 44.1365 18.981 34.9335C18.981 25.7305 26.5538 18.2451 35.8607 18.2451C45.1677 18.2451 52.7405 25.7317 52.7405 34.9335C52.7405 44.1353 45.1677 51.6231 35.8607 51.6231ZM35.8607 20.6644C27.8881 20.6644 21.4003 27.066 21.4003 34.9335C21.4003 42.8022 27.8869 49.2038 35.8607 49.2038C43.8346 49.2038 50.3212 42.8022 50.3212 34.9335C50.3212 27.066 43.8334 20.6644 35.8607 20.6644Z"
            fill="#024430"
          />
          <path
            d="M35.8607 38.4839C33.8803 38.4839 32.2666 36.8921 32.2666 34.9335C32.2666 32.9749 33.8791 31.3831 35.8607 31.3831C37.8412 31.3831 39.4549 32.9749 39.4549 34.9335C39.4549 36.8921 37.8424 38.4839 35.8607 38.4839Z"
            fill="white"
          />
          <path
            d="M34.6509 24.3674H37.0702V32.8239H34.6509V24.3674Z"
            fill="white"
          />
          <path
            d="M37.9463 33.7239H47.1298V36.1432H37.9463V33.7239Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2523_13203">
            <rect width="75" height="75" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Multiple Apps, Any Country",
    desc: "Simple, one time setup per developer account.",
    img: (
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2164_61953)">
          <g clip-path="url(#clip1_2164_61953)">
            <path
              d="M6 50.025V9C6 7.35 7.35 6 9 6H66C67.65 6 69 7.35 69 9V50.025C69 51.675 67.65 53.025 66 53.025H9C7.35 53.025 6 51.675 6 50.025Z"
              fill="#FFE7BB"
            />
            <path
              d="M55.62 75H19.38C18.96 75 18.63 74.67 18.63 74.25V72.75C18.63 69.435 21.315 66.75 24.63 66.75H28.365C29.775 66.75 30.93 65.595 30.93 64.185V62.16C30.93 60.435 29.52 59.025 27.795 59.025H5.25C2.355 59.025 0 56.67 0 53.775V5.25C0 2.355 2.355 0 5.25 0H69.75C72.645 0 75 2.355 75 5.25V53.775C75 56.67 72.645 59.025 69.75 59.025H47.19C45.465 59.025 44.055 60.435 44.055 62.16V64.185C44.055 65.595 45.21 66.75 46.62 66.75H50.355C53.67 66.75 56.355 69.435 56.355 72.75V74.25C56.37 74.67 56.025 75 55.62 75ZM20.13 73.5H54.855V72.75C54.855 70.275 52.83 68.25 50.355 68.25H46.62C44.37 68.25 42.555 66.42 42.555 64.185V62.16C42.555 59.61 44.64 57.525 47.19 57.525H69.75C71.82 57.525 73.5 55.845 73.5 53.775V5.25C73.5 3.18 71.82 1.5 69.75 1.5H5.25C3.18 1.5 1.5 3.18 1.5 5.25V53.775C1.5 55.845 3.18 57.525 5.25 57.525H27.81C30.36 57.525 32.445 59.61 32.445 62.16V64.185C32.445 66.435 30.615 68.25 28.38 68.25H24.645C22.17 68.25 20.145 70.275 20.145 72.75V73.5H20.13Z"
              fill="#024430"
            />
            <path
              d="M33.6901 59.0249H26.8501C26.4301 59.0249 26.1001 58.6949 26.1001 58.2749C26.1001 57.8549 26.4301 57.5249 26.8501 57.5249H33.6901C34.1101 57.5249 34.4401 57.8549 34.4401 58.2749C34.4401 58.6949 34.0951 59.0249 33.6901 59.0249Z"
              fill="#024430"
            />
            <path
              d="M38.925 59.0249H37.5C37.08 59.0249 36.75 58.6949 36.75 58.2749C36.75 57.8549 37.08 57.5249 37.5 57.5249H38.925C39.345 57.5249 39.675 57.8549 39.675 58.2749C39.675 58.6949 39.345 59.0249 38.925 59.0249Z"
              fill="#024430"
            />
            <path
              d="M47.6549 68.25H39.3599C38.9399 68.25 38.6099 67.92 38.6099 67.5C38.6099 67.08 38.9399 66.75 39.3599 66.75H47.6549C48.0749 66.75 48.4049 67.08 48.4049 67.5C48.4049 67.92 48.0599 68.25 47.6549 68.25Z"
              fill="#024430"
            />
            <path
              d="M6 9.75C5.58 9.75 5.25 9.42 5.25 9C5.25 6.93 6.93 5.25 9 5.25H11.595C12.015 5.25 12.345 5.58 12.345 6C12.345 6.42 12.015 6.75 11.595 6.75H9C7.755 6.75 6.75 7.755 6.75 9C6.75 9.42 6.42 9.75 6 9.75Z"
              fill="#024430"
            />
            <path
              d="M6 24.8549C5.58 24.8549 5.25 24.5249 5.25 24.1049V13.0049C5.25 12.5849 5.58 12.2549 6 12.2549C6.42 12.2549 6.75 12.5849 6.75 13.0049V24.1049C6.75 24.5099 6.42 24.8549 6 24.8549Z"
              fill="#024430"
            />
            <path
              d="M16.0498 6.75H14.9248C14.5048 6.75 14.1748 6.42 14.1748 6C14.1748 5.58 14.5048 5.25 14.9248 5.25H16.0498C16.4698 5.25 16.7998 5.58 16.7998 6C16.7998 6.42 16.4698 6.75 16.0498 6.75Z"
              fill="#024430"
            />
            <path
              d="M66.0003 53.7749H63.4053C62.9853 53.7749 62.6553 53.4449 62.6553 53.0249C62.6553 52.6049 62.9853 52.2749 63.4053 52.2749H66.0003C67.2453 52.2749 68.2503 51.2699 68.2503 50.0249C68.2503 49.6049 68.5803 49.2749 69.0003 49.2749C69.4203 49.2749 69.7503 49.6049 69.7503 50.0249C69.7503 52.0949 68.0703 53.7749 66.0003 53.7749Z"
              fill="#024430"
            />
            <path
              d="M69 46.7699C68.58 46.7699 68.25 46.4399 68.25 46.0199V34.9199C68.25 34.4999 68.58 34.1699 69 34.1699C69.42 34.1699 69.75 34.4999 69.75 34.9199V46.0199C69.75 46.4399 69.42 46.7699 69 46.7699Z"
              fill="#024430"
            />
            <path
              d="M60.0752 53.7749H58.9502C58.5302 53.7749 58.2002 53.4449 58.2002 53.0249C58.2002 52.6049 58.5302 52.2749 58.9502 52.2749H60.0752C60.4952 52.2749 60.8252 52.6049 60.8252 53.0249C60.8252 53.4449 60.4952 53.7749 60.0752 53.7749Z"
              fill="#024430"
            />
            <path
              d="M19.2451 40.6951H11.9551C11.1301 40.6951 10.4551 41.3701 10.4551 42.1951V47.1901C10.4551 48.0151 11.1301 48.6901 11.9551 48.6901H19.2601C20.0851 48.6901 20.7601 48.0151 20.7601 47.1901V42.1951C20.7451 41.3701 20.0851 40.6951 19.2451 40.6951Z"
              fill="white"
            />
            <path
              d="M33.8548 40.6951H26.5498C25.7248 40.6951 25.0498 41.3701 25.0498 42.1951V47.1901C25.0498 48.0151 25.7248 48.6901 26.5498 48.6901H33.8548C34.6798 48.6901 35.3548 48.0151 35.3548 47.1901V42.1951C35.3548 41.3701 34.6798 40.6951 33.8548 40.6951Z"
              fill="white"
            />
            <path
              d="M48.45 40.6951H41.145C40.32 40.6951 39.645 41.3701 39.645 42.1951V47.1901C39.645 48.0151 40.32 48.6901 41.145 48.6901H48.45C49.275 48.6901 49.95 48.0151 49.95 47.1901V42.1951C49.95 41.3701 49.275 40.6951 48.45 40.6951Z"
              fill="white"
            />
            <path
              d="M63.0452 40.6951H55.7402C54.9152 40.6951 54.2402 41.3701 54.2402 42.1951V47.1901C54.2402 48.0151 54.9152 48.6901 55.7402 48.6901H63.0452C63.8702 48.6901 64.5452 48.0151 64.5452 47.1901V42.1951C64.5452 41.3701 63.8852 40.6951 63.0452 40.6951Z"
              fill="white"
            />
            <path
              d="M30.1952 30.3751H18.9902C18.5702 30.3751 18.2402 30.0451 18.2402 29.6251C18.2402 29.2051 18.5702 28.8751 18.9902 28.8751H30.0002L47.2802 19.4401C47.3102 19.4251 47.3402 19.4101 47.3702 19.3951L55.8602 16.1551C56.2502 16.0051 56.6852 16.2001 56.8352 16.5901C56.9852 16.9801 56.7902 17.4151 56.4002 17.5651L47.9552 20.7901L30.5552 30.2851C30.4502 30.3451 30.3302 30.3751 30.1952 30.3751Z"
              fill="#024430"
            />
            <path
              d="M15.6 33.0151C17.4722 33.0151 18.99 31.4974 18.99 29.6251C18.99 27.7529 17.4722 26.2351 15.6 26.2351C13.7277 26.2351 12.21 27.7529 12.21 29.6251C12.21 31.4974 13.7277 33.0151 15.6 33.0151Z"
              fill="#AAB1BA"
            />
            <path
              d="M15.6 33.7651C13.32 33.7651 11.46 31.9051 11.46 29.6251C11.46 27.3451 13.32 25.4851 15.6 25.4851C17.88 25.4851 19.74 27.3451 19.74 29.6251C19.74 31.9051 17.88 33.7651 15.6 33.7651ZM15.6 26.9851C14.145 26.9851 12.96 28.1701 12.96 29.6251C12.96 31.0801 14.145 32.2651 15.6 32.2651C17.055 32.2651 18.24 31.0801 18.24 29.6251C18.24 28.1701 17.055 26.9851 15.6 26.9851Z"
              fill="#024430"
            />
            <path
              d="M30.1952 33.0151C32.0674 33.0151 33.5852 31.4974 33.5852 29.6251C33.5852 27.7529 32.0674 26.2351 30.1952 26.2351C28.3229 26.2351 26.8052 27.7529 26.8052 29.6251C26.8052 31.4974 28.3229 33.0151 30.1952 33.0151Z"
              fill="#ECF4F7"
            />
            <path
              d="M30.1952 33.7651C27.9152 33.7651 26.0552 31.9051 26.0552 29.6251C26.0552 27.3451 27.9152 25.4851 30.1952 25.4851C32.4752 25.4851 34.3352 27.3451 34.3352 29.6251C34.3352 31.9051 32.4902 33.7651 30.1952 33.7651ZM30.1952 26.9851C28.7402 26.9851 27.5552 28.1701 27.5552 29.6251C27.5552 31.0801 28.7402 32.2651 30.1952 32.2651C31.6502 32.2651 32.8352 31.0801 32.8352 29.6251C32.8352 28.1701 31.6652 26.9851 30.1952 26.9851Z"
              fill="#024430"
            />
            <path
              d="M44.805 25.3349C46.6773 25.3349 48.195 23.8172 48.195 21.9449C48.195 20.0727 46.6773 18.5549 44.805 18.5549C42.9328 18.5549 41.415 20.0727 41.415 21.9449C41.415 23.8172 42.9328 25.3349 44.805 25.3349Z"
              fill="#FDDF7F"
            />
            <path
              d="M44.805 26.0849C42.525 26.0849 40.665 24.2249 40.665 21.9449C40.665 19.6649 42.525 17.8049 44.805 17.8049C47.085 17.8049 48.945 19.6649 48.945 21.9449C48.945 24.2249 47.085 26.0849 44.805 26.0849ZM44.805 19.3049C43.35 19.3049 42.165 20.4899 42.165 21.9449C42.165 23.3999 43.35 24.5849 44.805 24.5849C46.26 24.5849 47.445 23.3999 47.445 21.9449C47.445 20.4899 46.26 19.3049 44.805 19.3049Z"
              fill="#024430"
            />
            <path
              d="M59.3998 19.32C61.272 19.32 62.7898 17.8023 62.7898 15.93C62.7898 14.0578 61.272 12.54 59.3998 12.54C57.5275 12.54 56.0098 14.0578 56.0098 15.93C56.0098 17.8023 57.5275 19.32 59.3998 19.32Z"
              fill="#FDDF7F"
            />
            <path
              d="M59.3998 20.07C57.1198 20.07 55.2598 18.21 55.2598 15.93C55.2598 13.65 57.1198 11.79 59.3998 11.79C61.6798 11.79 63.5398 13.65 63.5398 15.93C63.5398 18.21 61.6798 20.07 59.3998 20.07ZM59.3998 13.275C57.9448 13.275 56.7598 14.46 56.7598 15.915C56.7598 17.37 57.9448 18.555 59.3998 18.555C60.8548 18.555 62.0398 17.37 62.0398 15.915C62.0398 14.46 60.8548 13.275 59.3998 13.275Z"
              fill="#024430"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2164_61953">
            <rect width="75" height="75" fill="white" />
          </clipPath>
          <clipPath id="clip1_2164_61953">
            <rect width="75" height="75" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
const ToolsSection2 = () => {
  return (
    <section className="section mt-100">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8 col-md-8">
            <h2 className="color-brand-1 mb-20">Slack Tool</h2>
            <p className="font-lg color-gray-500">NEXT CONSOLE FEATURES</p>
          </div>
          <div className="col-lg-4 col-md-4 text-md-end text-start">
            <a className="btn btn-default font-sm-bold pl-0">
              Learn More
              <svg
                className="w-6 h-6 icon-16 ml-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="row mt-50">
          {data.map((item) => (
            <div key={item.name} className="col-lg-4 col-md-6 col-sm-6">
              <div className="card-offer hover-up">
                <div className="card-image">{item.img}</div>
                <div className="card-info">
                  <h4 className="color-brand-1 mb-15">{item.name}</h4>
                  <p className="font-md color-grey-500 mb-15">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection2;
