<!-- profile/layout -->
<div class="salon-wrapper">
  <div class="salon-info">
    <div class="profile-info flex gap-20 flex-start">
      <input id='photo_file' type="file" name="" class='hidden'>
      <label for='photo_file'>
        <div class="profile-avatar profile-avatar_mb hover pointer">
          <?= $profile_avatar ?>
          <div class="change-photo-button"><i class="fas fa-camera"></i></div>
        </div>
      </label>
      <div class="profile-name nunito profile-name_mb">
        <div><?= $profile_first_name ?></div>
        <div><?= $profile_last_name ?></div>
      </div>
    </div>

    <div class="salon-menu">
      <?php foreach ($profile_menu->items as $menuItem) { ?>
        <a href="<?= $menuItem->url ?>" class="<?= $menuItem->active ?>"><?= $menuItem->title ?></a>
      <?php } ?>
    </div>
  </div>
</div>


<div class="salon-wrapper">
  <? echo $salon_content_header ?>
</div>

<div class="salon-content-box">
  <div class="salon-content-box-wrapper">
    <?= $profile_content ?>
  </div>

</div>
<!-- profile/layout -->