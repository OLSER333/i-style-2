<!-- review -->
<div class="review-item slide-review <?= $review_with_photo ?>">
  <div class="review-item-header">
    <div class="review-item-main-info">
      <div class="review-item-title"><?= $user_name ?></div>
      <div class="review-item-date"><?= $date ?></div>
    </div>

    <div class="review-item-rating">
      <?= $stars ?>
    </div>
  </div>

  <p class="review-item-text <?= $hidden_text_class ?>"><?= $review_text ?></p>

  <?php if (isset($review_with_photo) and !empty($review_with_photo)) { ?>
    <div class="swiper">
      <div class="swiper-wrapper review-photo-list">
        <?php foreach ($photos_path as $photo_path) { ?>

          <div class="swiper-slide review-photo-container">
            <img class="review-photo" src=" <?= $photo_path ?>" alt="">
          </div>

        <?php } ?>
      </div>

      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev swiper-button"><i class="fa-solid fa-chevron-left"></i></div>
      <div class="swiper-button-next swiper-button"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
  <?php } ?>
  <button class="review-uncover-button review-uncover-js">читать полностью</button>
</div>
<!-- review -->