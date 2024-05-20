# Sesac-C-Arte-Project
'화가들의 작품을 구매하고, 실시간 경매에 입찰하여 작품을 낙찰받을 수 있는 온라인 아트 경매 플랫폼' 웹 페이지 입니다.

## index
- [Description](#Description)
- [Folder Structure](#Folder-Structure)
- [Technologies](#Technologies)
- [Tools](#Tools)
- [Data Sources](#Data-Sources)
- [Page Features](#Page-Features)
- [How To Use](#How-To-Use)

## Description
Sesac-C-Arte-Project은 온라인 실시간 경매가 가능한 통합 플랫폼 입니다. 
미술품의 판매와 온라인 경매를 제공합니다.
웹페이지는 반응형으로 구현 되었으며 React, JavaScript, HTML, CSS, SASS, Bootstrap을 활용해 구현하였습니다.
현재 해당 프로젝트는 netlify를 통해 배포된 상태입니다.

## Folder Structure
```bash
📦src
 ┣ 📂assets
 ┃ ┣ 📜1 (2).svg
 ┃ ┣ 📜artist.json
 ┃ ┗ 📜logo.svg
 ┣ 📂components
 ┃ ┣ 📂AddressInput
 ┃ ┃ ┣ 📜AddressInput 2.jsx
 ┃ ┃ ┗ 📜AddressInput.jsx
 ┃ ┣ 📂Art
 ┃ ┃ ┣ 📜ArtistInfo.jsx
 ┃ ┃ ┗ 📜ProductDetail.jsx
 ┃ ┣ 📂Artist
 ┃ ┃ ┣ 📜ArtistBanner.jsx
 ┃ ┃ ┣ 📜ArtistDetails.jsx
 ┃ ┃ ┣ 📜ArtistIntroduction.jsx
 ┃ ┃ ┣ 📜Artwork.jsx
 ┃ ┃ ┗ 📜Recommend.jsx
 ┃ ┣ 📂Auction
 ┃ ┃ ┣ 📜AuctionCountdown.jsx
 ┃ ┃ ┗ 📜AuctionItemList.jsx
 ┃ ┣ 📂CartList
 ┃ ┃ ┣ 📜CartList 2.jsx
 ┃ ┃ ┗ 📜CartList.jsx
 ┃ ┣ 📂checkbox
 ┃ ┃ ┣ 📜Checkbox 2.jsx
 ┃ ┃ ┗ 📜Checkbox.jsx
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜Item.jsx
 ┃ ┣ 📂darkmode
 ┃ ┃ ┣ 📜DarkMode 2.jsx
 ┃ ┃ ┗ 📜DarkMode.jsx
 ┃ ┣ 📂dropdownProfile
 ┃ ┃ ┗ 📜DropDownProfile.jsx
 ┃ ┣ 📂footer
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜SearchHeader 2.jsx
 ┃ ┃ ┗ 📜SearchHeader.jsx
 ┃ ┣ 📂login
 ┃ ┃ ┗ 📜Form.js
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┣ 📜ai-24-05-pc.jpg
 ┃ ┃ ┃ ┣ 📜am-24-04-pc-3.jpg
 ┃ ┃ ┃ ┣ 📜am-24-05-pc.jpg
 ┃ ┃ ┃ ┣ 📜carousel1 2.jpg
 ┃ ┃ ┃ ┣ 📜carousel1.jpg
 ┃ ┃ ┃ ┣ 📜carousel2 3.jpg
 ┃ ┃ ┃ ┣ 📜carousel2.jpg
 ┃ ┃ ┃ ┣ 📜carousel3 2.jpg
 ┃ ┃ ┃ ┣ 📜carousel3.jpg
 ┃ ┃ ┃ ┣ 📜carousel4 3.jpg
 ┃ ┃ ┃ ┣ 📜carousel4.jpg
 ┃ ┃ ┃ ┣ 📜girl_with_a_pearl_earring.webp
 ┃ ┃ ┃ ┣ 📜mona_lisa.webp
 ┃ ┃ ┃ ┣ 📜news_4.jpg
 ┃ ┃ ┃ ┣ 📜news_5.jpg
 ┃ ┃ ┃ ┣ 📜news_6.jpg
 ┃ ┃ ┃ ┣ 📜pc-mb-4.jpg
 ┃ ┃ ┃ ┣ 📜pc-mb-5.jpg
 ┃ ┃ ┃ ┣ 📜starry_night.webp
 ┃ ┃ ┃ ┣ 📜sunflower.webp
 ┃ ┃ ┃ ┣ 📜sunset_in_venice.webp
 ┃ ┃ ┃ ┣ 📜the_last_supper.webp
 ┃ ┃ ┃ ┣ 📜the_persistence_of_memory.webp
 ┃ ┃ ┃ ┣ 📜the_scream.webp
 ┃ ┃ ┃ ┣ 📜viva_la_vida.webp
 ┃ ┃ ┃ ┗ 📜woman-1283009_1920.jpg
 ┃ ┃ ┣ 📜BestArt.jsx
 ┃ ┃ ┣ 📜MonthArtist.jsx
 ┃ ┃ ┣ 📜New.jsx
 ┃ ┃ ┗ 📜Sell.jsx
 ┃ ┣ 📂modal
 ┃ ┃ ┗ 📜PaymentModal.jsx
 ┃ ┣ 📂Search
 ┃ ┃ ┣ 📜Available.jsx
 ┃ ┃ ┣ 📜Result 2.jsx
 ┃ ┃ ┣ 📜Result 2.scss
 ┃ ┃ ┣ 📜Result.jsx
 ┃ ┃ ┣ 📜Result.scss
 ┃ ┃ ┣ 📜SearchTab.jsx
 ┃ ┃ ┗ 📜SelectBox.jsx
 ┃ ┣ 📂userinfo
 ┃ ┃ ┣ 📜UserInfo 2.jsx
 ┃ ┃ ┗ 📜UserInfo.jsx
 ┃ ┣ 📜.gitkeep
 ┃ ┗ 📜Carousel.jsx
 ┣ 📂data
 ┃ ┣ 📜art.json
 ┃ ┣ 📜artist.json
 ┃ ┣ 📜auction.json
 ┃ ┗ 📜users.json
 ┣ 📂hooks
 ┃ ┣ 📜.gitkeep
 ┃ ┗ 📜use-form.js
 ┣ 📂img
 ┃ ┣ 📜ai-24-05-pc.jpg
 ┃ ┣ 📜am-24-04-pc-3.jpg
 ┃ ┣ 📜am-24-05-pc.jpg
 ┃ ┣ 📜auction.webp.webp
 ┃ ┣ 📜girl_with_a_pearl_earring.webp
 ┃ ┣ 📜hammer-1707731_1280.jpg
 ┃ ┣ 📜img10.webp
 ┃ ┣ 📜img13.webp
 ┃ ┣ 📜isolated-2532037_1920.png
 ┃ ┣ 📜mona_lisa.webp
 ┃ ┣ 📜MonthArtistbg.webp
 ┃ ┣ 📜pc-mb-4.jpg
 ┃ ┣ 📜pc-mb-5.jpg
 ┃ ┣ 📜request 2.jpg
 ┃ ┣ 📜request.jpg
 ┃ ┣ 📜starry_night.webp
 ┃ ┣ 📜sunflower.webp
 ┃ ┣ 📜sunset_in_venice.webp
 ┃ ┣ 📜the_last_supper.webp
 ┃ ┣ 📜the_persistence_of_memory.webp
 ┃ ┣ 📜the_scream.webp
 ┃ ┣ 📜viva_la_vida.webp
 ┃ ┗ 📜woman-1283009_1920.jpg
 ┣ 📂pages
 ┃ ┣ 📜ArtDetail.jsx
 ┃ ┣ 📜Artist.jsx
 ┃ ┣ 📜ArtistInfo.jsx
 ┃ ┣ 📜Auction.jsx
 ┃ ┣ 📜AuctionList.jsx
 ┃ ┣ 📜Cart.jsx
 ┃ ┣ 📜LoginRegister.jsx
 ┃ ┣ 📜Main.jsx
 ┃ ┣ 📜MyPage.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┣ 📜OtherPage.jsx
 ┃ ┗ 📜Search.jsx
 ┣ 📂store
 ┃ ┣ 📂modules
 ┃ ┣ 📜cart-context 2.js
 ┃ ┗ 📜cart-context.js
 ┣ 📂styles
 ┃ ┣ 📜AddressInput.css
 ┃ ┣ 📜ArtDetail.css
 ┃ ┣ 📜Artist.scss
 ┃ ┣ 📜ArtistIntroduction.css
 ┃ ┣ 📜auction.css
 ┃ ┣ 📜AuctionItemList.module.scss
 ┃ ┣ 📜AuctionList.scss
 ┃ ┣ 📜BestArt.scss
 ┃ ┣ 📜Carousel.scss
 ┃ ┣ 📜Cart 3.css
 ┃ ┣ 📜Cart.css
 ┃ ┣ 📜Cartlist.css
 ┃ ┣ 📜DarkMode 2.css
 ┃ ┣ 📜DarkMode.css
 ┃ ┣ 📜footer.css
 ┃ ┣ 📜header.css
 ┃ ┣ 📜Item.module.scss
 ┃ ┣ 📜LoginRegister.css
 ┃ ┣ 📜Main.scss
 ┃ ┣ 📜Mypage.css
 ┃ ┣ 📜PaymentModal.css
 ┃ ┣ 📜reset.css
 ┃ ┗ 📜Search.scss
 ┣ 📂utils
 ┃ ┣ 📜artist 2.js
 ┃ ┣ 📜artist.js
 ┃ ┗ 📜auction.js
 ┣ 📜App.js
 ┗ 📜index.js
```

## Technologies

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">

## Tools
<img src="https://img.shields.io/badge/visualstudio-5C2D91?style=for-the-badge&logo=visualstudio&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <a href="https://www.notion.so/2-C-96a44cf86ea745739afdb0f296b0de2f"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"></a>

## Data Sources
이 프로젝트에서는 다음과 같은 데이터 소스를 사용하였습니다.

### Mock Data
- 작품 
  - Art-Mock-Data : `/src/data/art.json`
  - Artist-Mock-Data : `/src/data/artist.json`
  - Auction-Mock-Data : `/src/data/auction.json`
- 사용자
  - User-Mock-Data : `/src/api/user.json`

## Page Features


## How To Use
















