    <header class="header">
      <div class="header__logo">
        <a href="/"
          ><h1>
            <img
              src="/images/logo.png"
              alt="forProのロゴ画像"
              width="100"
              height="24"
            />
            <span class="hidden">forPro</span>
          </h1></a
        >
      </div>
      <?php if ( is_home() || is_front_page() ) : ?>
      <div class="header__navigation header__navigation--sp">
        <button id="header__navigationButton" class="header__navigationButton">
          <div class="hamburgerMenu">
            <span class="hamburgerMenu__border"></span>
            <span class="hamburgerMenu__border"></span>
            <span class="hamburgerMenu__border"></span>
          </div>
          <span class="hidden">メニューを開く</span>
        </button>
      </div>

      <nav class="header__navigation header__navigation--pc">
        <ul class="header__navigationList">
          <li class="header__navigationListItem">
            <div
              class="navigation__listItemButton"
              data-transform="3"
              role="button"
            >
              プロの皆様へ
            </div>
          </li>
          <li class="header__navigationListItem">
            <div
              class="navigation__listItemButton"
              data-transform="4"
              role="button"
            >
              foRProの魅力
            </div>
          </li>
          <li class="header__navigationListItem">
            <div
              class="navigation__listItemButton"
              data-transform="5"
              role="button"
            >
              プロジェクト事例
            </div>
          </li>
          <li class="header__navigationListItem">
            <div
              class="navigation__listItemButton"
              data-transform="6"
              role="button"
            >
              ご利用フロー
            </div>
          </li>
        </ul>
        <div class="applicationForm">
          <div class="applicationForm__contents">
            <a
              href="/registration/"
              class="applicationForm__button applicationForm__web"
              >Web登録</a
            ><a
              href="/lineform/"
              class="applicationForm__button applicationForm__line applicationForm__line--border"
              >LINE登録</a
            >
          </div>
        </div>
      </nav>
      <?php endif; ?>
    </header>