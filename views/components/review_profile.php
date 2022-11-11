<!-- review_perofile -->
<div class="profile-review-item bordered border-radius <?php if (!empty($photos)) {
                                                            echo 'review-main-photo';
                                                        } ?> ">
    <div class="review-body">
        <div class="review-body-title">
            <div class="review-body-title-name"><?= $user_name ?></div>
            <div class="review-body-title-date"><?= $date ?></div>
            <div class="review-body-title-stars"><?= $stars ?></div>
        </div>
        <div class="profile-review-container">
            <div class="uncover-container">
                <p class="review-text"><?= $review_text ?></p>
                <button class="review-uncover-button profile-review-uncover-js">читать полностью</button>
            </div>

            <?php if (!empty($photos)) { ?>
                <div class="review-main-photo profile-review-uncover-js">
                    <img class='review-photo-preview bordered' src="<?= $photos[0]['photo_path'] ?>" alt="">
                </div>

                <div class="swiper-hidden">
                    <?php foreach ($photos as $photo) { ?>
                        <div class="swiper-slide">
                            <img class="review-photo" src=" <?= $photo['photo_path'] ?>" alt="">
                        </div>
                    <?php } ?>
                </div>
            <?php } ?>
        </div>

        <div class="review-buttons">
            <a target='_blank' href="<?= $object_url ?>" class="button primary-transparent-button primary-text icon-button"><?= t('go_to_review_page') ?><i class="fa-solid fa-chevron-right"></i></a>
            <a class='brown-text hover left-icon-button' href="?delete=<?= $review_id ?>"><i class="far fa-times-circle"></i><?= t('delete_review') ?></a>
        </div>
    </div>
</div>
<!-- review_perofile -->