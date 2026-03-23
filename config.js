/**
 * Pastel Dream Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "고건호",
    nameEn: "Geonho Ko",
    father: "고영석",
    mother: "김경애",
    fatherDeceased: true,
    motherDeceased: false
  },

  bride: {
    name: "김예은",
    nameEn: "Yeeun Kim",
    father: "김충효",
    mother: "홍지연",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-10",
    time: "12:00",
    venue: "그라벨호텔 제주",
    hall: "사려니홀",
    address: "제주특별자치도 제주시 일주서로 7316",
    tel: "064-740-8000"
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  mapLinks: {
    kakao: "https://kko.to/t3Sw9A432U",
    naver: "https://naver.me/5apDA4Ee",
    embed: "https://map.kakao.com/link/embed/그라벨호텔제주,33.497920,126.437699"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "고건호", bank: "농협은행", number: "000-000-000000" },
      { role: "어머니", name: "김경애", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김예은", bank: "카카오뱅크", number: "000-000-000000" },
      { role: "어머니", name: "홍지연", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "건호 ♥ 예은 결혼합니다",
    description: "2026년 10월 10일, 소중한 분들을 초대합니다."
  }
};
