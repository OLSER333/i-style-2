<!-- dashboard -->
<div class="catalog-content catalog-dashboard nunito">
  <?php // if (!empty($favorites)) { 
  ?>
  <div class="profile-catalog-filters profile-catalog-filters-service">
    <div class="profile-search-panel">
      <div class='header-search profile-header-search_mb'>
        <div class="searchform_filter_container">
          <input id='searchform_filter' type="text" placeholder="<?= t('salon_name_master') ?>" class="text-input searchform_filter_mb">
          <button data-name='search' class='search-button profile-content-searchform-js'><img src='/themes/purple/assets/images/search.svg'></button>
        </div>
        <button class="search-date">
          Поиск по дате
          <img src="/themes/purple/assets/images/calendar-fiolet.svg">
        </button>
      </div>
      <div class="profile-seacrch-panel-line"></div>
      <div data-active-class="active" class="profile-catalog-filter-items change-list-js">
        <a data-name="view" data-query="all" class="change-list-item-js profile-content-filter-js profile-catalog-filter-item flex gap-10 hover active"><i class="fas fa-circle"></i>Все записи</a>
        <a data-name="view" data-query="salons" class="change-list-item-js profile-content-filter-js profile-catalog-filter-item flex gap-10 hover">
          <img src="/themes/purple/assets/images/last-oclock.svg" alt="">
          История записей</a>
      </div>
    </div>
  </div>

  <div class="space30"></div>
  <div id='profile_content_items' class='opacity-transition'>
    <div class="my-service-item my-service-item-active">
      <div class="my-service-item-title">
        <h2 class="my-service-item-h2">
          Холодное выпрямление-восстановление волос
        </h2>
        <div class="salon-page-header-info">
          <div class="salon-adress">
            <span>Адрес</span>
            <img src="/themes/purple/assets/images/location.png" alt="">
            <span>г. Санкт-Петербург, Невский проспект, 2</span>
          </div>
          <a class="salon-page-question">Как добраться?</a>
        </div>
      </div>
      <div class="my-service-item-information">
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Стоимость услуги
          </div>
          <div class="my-service-item-information-block-text cost-sales service-info-button">
            11 000 $
          </div>
        </div>
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Длительность
          </div>
          <div class="my-service-item-information-block service-info-button time-button">
            <img src="/themes/purple/assets/images/clock.svg" alt="">
            2 ч
          </div>
        </div>
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Дата и время
          </div>
          <div class="my-service-item-information-block-text service-info-button">
            <img src="/themes/purple/assets/images/calendar-gray.svg" alt="">
            4 май 14:00
          </div>
        </div>
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Мастер
          </div>
          <div class="my-service-item-information-block-text service-info-button">
            <img src="/themes/purple/assets/images/profile-man.svg" alt="">
            Ion Sirbu
          </div>
        </div>
      </div>
      <div class="my-service-item-action">
        <a href="#" class="button big-button icon-ml-10 font12">Подробнее об услуге<i class="fa-solid fa-chevron-right font10"></i></a>
        <button class="my-service-item-action-text my-service-item-action-active">
          <img src="/themes/purple/assets/images/cancellation.svg" alt="">
          Отменить запись
        </button>


      </div>
    </div>



    <div class="my-service-item my-service-item-completed">
      <div class="my-service-item-title">
        <h2 class="my-service-item-h2">
          Холодное выпрямление-восстановление волос
        </h2>
        <div class="salon-page-header-info">
          <div class="salon-adress">
            <span>Адрес</span>
            <img src="/themes/purple/assets/images/location.png" alt="">
            <span>г. Санкт-Петербург, Невский проспект, 2</span>
          </div>
          <a class="salon-page-question">Как добраться?</a>
        </div>
      </div>
      <div class="my-service-item-information">
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Стоимость услуги
          </div>
          <div class="my-service-item-information-block-text cost-sales service-info-button">
            11 000 $
          </div>
        </div>
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Длительность
          </div>
          <div class="my-service-item-information-block service-info-button time-button">
            <img src="/themes/purple/assets/images/clock.svg" alt="">
            2 ч
          </div>
        </div>
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Дата и время
          </div>
          <div class="my-service-item-information-block-text service-info-button">
            <img src="/themes/purple/assets/images/calendar-gray.svg" alt="">
            4 май 14:00
          </div>
        </div>
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Мастер
          </div>
          <div class="my-service-item-information-block-text service-info-button">
            <img src="/themes/purple/assets/images/profile-man.svg" alt="">
            Ion Sirbu
          </div>
        </div>
      </div>
      <div class="my-service-item-action">
        <a href="#" class="button big-button icon-ml-10 font12">Подробнее об услуге<i class="fa-solid fa-chevron-right font10"></i></a>
        <button class="my-service-item-action-text my-service-item-action-completed">
          <img src="/themes/purple/assets/images/check-mark.svg" alt="">
          Отменить запись
        </button>
      </div>
    </div>



    <div class="my-service-item my-service-item-delete">
      <div class="my-service-item-title">
        <h2 class="my-service-item-h2">
          Холодное выпрямление-восстановление волос
        </h2>
        <div class="salon-page-header-info">
          <div class="salon-adress">
            <span>Адрес</span>
            <img src="/themes/purple/assets/images/location.png" alt="">
            <span>г. Санкт-Петербург, Невский проспект, 2</span>
          </div>
          <a class="salon-page-question">Как добраться?</a>
        </div>
      </div>
      <div class="my-service-item-information">
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Стоимость услуги
          </div>
          <div class="my-service-item-information-block-text cost-sales service-info-button">
            11 000 $
          </div>
        </div>
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Длительность
          </div>
          <div class="my-service-item-information-block service-info-button time-button">
            <img src="/themes/purple/assets/images/clock.svg" alt="">
            2 ч
          </div>
        </div>
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Дата и время
          </div>
          <div class="my-service-item-information-block-text service-info-button">
            <img src="/themes/purple/assets/images/calendar-gray.svg" alt="">
            4 май 14:00
          </div>
        </div>
        <div class="my-service-item-information-block">
          <div class="my-service-item-information-block-title">
            Мастер
          </div>
          <div class="my-service-item-information-block-text service-info-button">
            <img src="/themes/purple/assets/images/profile-man.svg" alt="">
            Ion Sirbu
          </div>
        </div>
      </div>
      <div class="my-service-item-action">
        <a href="#" class="button big-button icon-ml-10 font12">Подробнее об услуге<i class="fa-solid fa-chevron-right font10"></i></a>
        <button class="my-service-item-action-text my-service-item-action-delete">
          <img src="/themes/purple/assets/images/cancel-del.svg" alt="">
          Отменить запись
        </button>
      </div>
    </div>
  </div>
  <?php // } else { 
  ?>
  <!-- <div id='profile_content_items' class='opacity-transition'>
    <div class="gray-text font22 mt60 text-center nunito"><?= t('there_is_nothing_in_favorites') ?></div>
  </div> -->
  <?php // } 
  ?>
</div>
<!-- dashboard -->