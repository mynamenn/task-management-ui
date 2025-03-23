import { Box } from "@mui/material";

// Copied SVG directly from https://www.frontierhealth.ai :)
const FrontierLogo = () => (
  <Box
    component="svg"
    sx={{
      height: 30,
      width: "auto",
      color: "inherit",
      flexGrow: 1,
      display: "flex",
      justifyContent: "flex-start",
      "& path": {
        transformOrigin: "left",
      },
    }}
    viewBox="0 0 240 34"
    preserveAspectRatio="xMinYMid meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.825 0H34V4.25H4.25V34H0V3.825C0 1.71251 1.71251 0 3.825 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.7659 33.9857L33.5715 16.1801L30.5663 13.1749L12.7607 30.9805L15.7659 33.9857Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.175 12.75H12.75V17H29.75V34H34V16.575C34 14.4625 32.2875 12.75 30.175 12.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.825 0H34V4.25H4.25V34H0V3.825C0 1.71251 1.71251 0 3.825 0Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.7659 33.9857L33.5715 16.1801L30.5663 13.1749L12.7607 30.9805L15.7659 33.9857Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.175 12.75H12.75V17H29.75V34H34V16.575C34 14.4625 32.2875 12.75 30.175 12.75Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M230.818 33.7125H225.45V11.8625H230.818V20.6313H230.959C231.167 20.2863 231.43 19.9317 231.75 19.5675C232.089 19.1842 232.532 18.8583 233.078 18.59C233.624 18.3217 234.312 18.1875 235.141 18.1875C236.365 18.1875 237.326 18.475 238.022 19.05C238.738 19.6058 239.247 20.315 239.548 21.1775C239.849 22.0208 240 22.8738 240 23.7363V33.7125H234.632V24.8288C234.632 24.2729 234.491 23.765 234.208 23.305C233.926 22.8258 233.436 22.5863 232.739 22.5863C232.381 22.5863 232.071 22.6533 231.807 22.7875C231.562 22.9217 231.364 23.1038 231.214 23.3338C231.082 23.5446 230.978 23.7842 230.903 24.0525C230.846 24.3017 230.818 24.5604 230.818 24.8288V33.7125ZM218.632 33.5687C219.348 33.8562 220.271 34 221.401 34C222.135 34 222.776 33.9521 223.322 33.8563L224.169 33.7125V29.6875L223.859 29.7738C223.651 29.8121 223.397 29.8313 223.096 29.8313C222.342 29.8313 221.825 29.6683 221.542 29.3425C221.259 28.9975 221.118 28.5567 221.118 28.02V22.7875H224.028V18.475H221.118V14.7375H215.75V18.475H213.321V22.7875H215.75V28.2213C215.75 28.5279 215.769 28.9208 215.807 29.4C215.844 29.86 215.948 30.3583 216.118 30.895C216.287 31.4317 216.57 31.9396 216.965 32.4188C217.361 32.8787 217.916 33.2621 218.632 33.5687ZM212.344 33.7125H206.976V11.8625H212.344V33.7125ZM197.29 18.5038C196.763 18.2929 196.132 18.1875 195.397 18.1875C194.305 18.1875 193.353 18.4175 192.544 18.8775C191.752 19.3183 191.084 19.9221 190.538 20.6888C190.01 21.4363 189.615 22.2796 189.351 23.2188C189.087 24.1579 188.956 25.1163 188.956 26.0938C188.956 27.0713 189.087 28.0296 189.351 28.9688C189.615 29.9079 190.01 30.7608 190.538 31.5275C191.084 32.275 191.752 32.8788 192.544 33.3388C193.353 33.7796 194.305 34 195.397 34C196.132 34 196.763 33.9042 197.29 33.7125C197.817 33.5017 198.241 33.2717 198.561 33.0225C198.9 32.7733 199.145 32.5529 199.296 32.3613L199.55 32.045H199.776V33.7125H205.144V18.475H199.776V20.1425H199.55L199.296 19.855C199.145 19.6442 198.9 19.4142 198.561 19.165C198.241 18.9158 197.817 18.6954 197.29 18.5038ZM195.623 23.075C196.037 22.7108 196.555 22.5287 197.177 22.5287C197.798 22.5287 198.316 22.7108 198.731 23.075C199.145 23.42 199.456 23.8704 199.663 24.4263C199.87 24.9629 199.974 25.5188 199.974 26.0938C199.974 26.6688 199.87 27.2342 199.663 27.79C199.456 28.3267 199.145 28.7771 198.731 29.1413C198.316 29.4863 197.798 29.6588 197.177 29.6588C196.555 29.6588 196.037 29.4863 195.623 29.1413C195.209 28.7771 194.898 28.3267 194.691 27.79C194.484 27.2342 194.38 26.6688 194.38 26.0938C194.38 25.5188 194.484 24.9629 194.691 24.4263C194.898 23.8704 195.209 23.42 195.623 23.075ZM180.734 34C179.359 34 178.163 33.7796 177.146 33.3388C176.148 32.8979 175.319 32.3038 174.66 31.5563C174.001 30.7896 173.511 29.9367 173.191 28.9975C172.871 28.0392 172.711 27.0617 172.711 26.065C172.711 25.1067 172.861 24.1579 173.163 23.2188C173.483 22.2796 173.963 21.4363 174.604 20.6888C175.244 19.9221 176.054 19.3183 177.033 18.8775C178.031 18.4175 179.209 18.1875 180.565 18.1875C182.034 18.1875 183.324 18.5038 184.435 19.1362C185.546 19.7687 186.413 20.6888 187.034 21.8963C187.656 23.0846 187.967 24.5317 187.967 26.2375V27.4738H178.107C178.144 27.9146 178.267 28.3267 178.474 28.71C178.681 29.0742 178.973 29.3713 179.35 29.6013C179.727 29.8313 180.188 29.9463 180.734 29.9463C181.186 29.9463 181.554 29.8792 181.836 29.745C182.137 29.6108 182.363 29.4575 182.514 29.285C182.684 29.1125 182.797 28.9592 182.853 28.825L182.966 28.6238H187.882L187.741 29.17C187.647 29.5342 187.468 29.9846 187.204 30.5213C186.94 31.0388 186.545 31.5658 186.017 32.1025C185.49 32.6392 184.793 33.0896 183.927 33.4538C183.079 33.8179 182.015 34 180.734 34ZM178.079 24.455H182.853C182.834 23.9375 182.721 23.5063 182.514 23.1613C182.326 22.7971 182.053 22.5288 181.695 22.3563C181.337 22.1838 180.923 22.0975 180.452 22.0975C179.849 22.0975 179.312 22.2892 178.841 22.6725C178.389 23.0558 178.135 23.65 178.079 24.455ZM153.689 33.7125H159.114V25.145H166.007V33.7125H171.431V12.4375H166.007V20.43H159.114V12.4375H153.689V33.7125ZM142.287 33.7125H136.919V18.475H142.23V20.89H142.4C142.55 20.4683 142.767 20.0562 143.05 19.6538C143.332 19.2321 143.737 18.8871 144.264 18.6187C144.792 18.3312 145.489 18.1875 146.355 18.1875C146.807 18.1875 147.146 18.2258 147.372 18.3025L147.739 18.3887V23.7938L147.344 23.7075C147.099 23.6308 146.722 23.5925 146.214 23.5925C145.536 23.5925 144.952 23.6883 144.462 23.88C143.973 24.0525 143.558 24.3304 143.219 24.7138C142.899 25.0779 142.664 25.5571 142.513 26.1513C142.362 26.7263 142.287 27.4163 142.287 28.2213V33.7125ZM124.83 33.3388C125.847 33.7796 127.043 34 128.418 34C129.699 34 130.763 33.8179 131.611 33.4538C132.477 33.0896 133.174 32.6392 133.702 32.1025C134.229 31.5658 134.624 31.0388 134.888 30.5213C135.152 29.9846 135.331 29.5342 135.425 29.17L135.566 28.6238H130.65L130.537 28.825C130.481 28.9592 130.368 29.1125 130.198 29.285C130.048 29.4575 129.822 29.6108 129.52 29.745C129.238 29.8792 128.87 29.9463 128.418 29.9463C127.872 29.9463 127.411 29.8313 127.034 29.6013C126.657 29.3713 126.365 29.0742 126.158 28.71C125.951 28.3267 125.829 27.9146 125.791 27.4738H135.651V26.2375C135.651 24.5317 135.34 23.0846 134.719 21.8963C134.097 20.6888 133.231 19.7687 132.119 19.1362C131.008 18.5038 129.718 18.1875 128.249 18.1875C126.893 18.1875 125.716 18.4175 124.717 18.8775C123.738 19.3183 122.928 19.9221 122.288 20.6888C121.647 21.4363 121.167 22.2796 120.847 23.2188C120.546 24.1579 120.395 25.1067 120.395 26.065C120.395 27.0617 120.555 28.0392 120.875 28.9975C121.195 29.9367 121.685 30.7896 122.344 31.5563C123.003 32.3038 123.832 32.8979 124.83 33.3388ZM130.537 24.455H125.763C125.819 23.65 126.073 23.0558 126.526 22.6725C126.996 22.2892 127.533 22.0975 128.136 22.0975C128.607 22.0975 129.021 22.1838 129.379 22.3563C129.737 22.5288 130.01 22.7971 130.198 23.1613C130.405 23.5063 130.518 23.9375 130.537 24.455ZM113.349 33.7125V18.475H118.717V33.7125H113.349ZM116.033 16.9513C115.148 16.9513 114.413 16.6637 113.83 16.0887C113.265 15.4946 112.982 14.795 112.982 13.99C112.982 13.1467 113.265 12.4375 113.83 11.8625C114.413 11.2875 115.148 11 116.033 11C116.918 11 117.653 11.2875 118.237 11.8625C118.821 12.4375 119.113 13.1467 119.113 13.99C119.113 14.795 118.821 15.4946 118.237 16.0887C117.653 16.6637 116.918 16.9513 116.033 16.9513ZM106.446 33.5687C107.162 33.8562 108.085 34 109.215 34C109.95 34 110.59 33.9521 111.136 33.8563L111.984 33.7125V29.6875L111.673 29.7738C111.466 29.8121 111.211 29.8313 110.91 29.8313C110.157 29.8313 109.639 29.6683 109.356 29.3425C109.074 28.9975 108.932 28.5567 108.932 28.02V22.7875H111.842V18.475H108.932V14.7375H103.565V18.475H101.135V22.7875H103.565V28.2213C103.565 28.5279 103.583 28.9208 103.621 29.4C103.659 29.86 103.762 30.3583 103.932 30.895C104.101 31.4317 104.384 31.9396 104.779 32.4188C105.175 32.8787 105.731 33.2621 106.446 33.5687ZM91.2401 33.7125H85.8722V18.475H91.2401V20.6312H91.3814C91.5886 20.2863 91.8522 19.9317 92.1724 19.5675C92.5115 19.1842 92.9541 18.8583 93.5003 18.59C94.0465 18.3217 94.7339 18.1875 95.5627 18.1875C96.7869 18.1875 97.7475 18.475 98.4444 19.05C99.1601 19.6058 99.6686 20.315 99.97 21.1775C100.271 22.0208 100.422 22.8738 100.422 23.7363V33.7125H95.0541V24.8287C95.0541 24.2729 94.9129 23.765 94.6303 23.305C94.3478 22.8258 93.8581 22.5863 93.1613 22.5863C92.8034 22.5863 92.4926 22.6533 92.2289 22.7875C91.9841 22.9217 91.7863 23.1038 91.6356 23.3338C91.5038 23.5446 91.4002 23.7842 91.3249 24.0525C91.2684 24.3017 91.2401 24.5604 91.2401 24.8287V33.7125ZM73.2379 33.3675C74.2549 33.7892 75.4133 34 76.7129 34C78.0124 34 79.1614 33.7892 80.1596 33.3675C81.1767 32.9458 82.0336 32.3708 82.7305 31.6425C83.4274 30.9142 83.9548 30.0708 84.3126 29.1125C84.6893 28.1542 84.8777 27.1479 84.8777 26.0938C84.8777 25.0204 84.6893 24.0142 84.3126 23.075C83.9548 22.1167 83.4274 21.2733 82.7305 20.545C82.0336 19.8167 81.1767 19.2417 80.1596 18.82C79.1614 18.3983 78.0124 18.1875 76.7129 18.1875C75.4133 18.1875 74.2549 18.3983 73.2379 18.82C72.2396 19.2417 71.3921 19.8167 70.6952 20.545C69.9983 21.2733 69.4615 22.1167 69.0848 23.075C68.727 24.0142 68.548 25.0204 68.548 26.0938C68.548 27.1479 68.727 28.1542 69.0848 29.1125C69.4615 30.0708 69.9983 30.9142 70.6952 31.6425C71.3921 32.3708 72.2396 32.9458 73.2379 33.3675ZM78.2102 29.17C77.7959 29.4767 77.2967 29.63 76.7129 29.63C76.1478 29.63 75.6487 29.4767 75.2155 29.17C74.8011 28.8442 74.4809 28.4129 74.2549 27.8763C74.0289 27.3396 73.9159 26.7454 73.9159 26.0938C73.9159 25.4229 74.0289 24.8288 74.2549 24.3113C74.4809 23.7746 74.8011 23.3529 75.2155 23.0463C75.6487 22.7204 76.1478 22.5575 76.7129 22.5575C77.2967 22.5575 77.7959 22.7204 78.2102 23.0463C78.6246 23.3529 78.9448 23.7746 79.1708 24.3113C79.3968 24.8288 79.5098 25.4229 79.5098 26.0938C79.5098 26.7454 79.3968 27.3396 79.1708 27.8763C78.9448 28.4129 78.6246 28.8442 78.2102 29.17ZM62.944 33.7125H57.5761V18.475H62.8875V20.89H63.057C63.2077 20.4683 63.4243 20.0562 63.7068 19.6538C63.9893 19.2321 64.3943 18.8871 64.9216 18.6187C65.449 18.3312 66.1459 18.1875 67.0123 18.1875C67.4643 18.1875 67.8033 18.2258 68.0293 18.3025L68.3966 18.3887V23.7938L68.0011 23.7075C67.7562 23.6308 67.3796 23.5925 66.871 23.5925C66.193 23.5925 65.6091 23.6883 65.1194 23.88C64.6297 24.0525 64.2153 24.3304 63.8763 24.7138C63.5561 25.0779 63.3207 25.5571 63.17 26.1513C63.0193 26.7263 62.944 27.4163 62.944 28.2213V33.7125ZM47.4244 26.3813H55.8717V21.81H47.4244V17.21H57.1431V12.4375H47.4244H42V17.21V21.81V26.3813V33.7125H47.4244V26.3813Z"
      fill="currentColor"
    ></path>
  </Box>
);

export default FrontierLogo;
