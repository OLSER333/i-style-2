<!-- topup -->
<?php for ($i = 0; $i < $topup_count; $i++) { ?>
    <div data-id='<?= $topup_id[$i] ?>' data-active-class='<?= $active_class[$i] ?>' data-open-button-class='<?= $open_button[$i] ?>' class="topup-wrapper flex flex-center">
        <div class="topup-content-container">
            <div class="topup-content">
                <?= $content[$i] ?>
            </div>
        </div>
    </div>
<?php } ?>

<script>
    $(document).ready(function() {
        <?php for ($i = 0; $i < $topup_count; $i++) { ?>
            topup($('[data-id=<?= $topup_id[$i] ?>]'), '<?= $open_button[$i] ?>', '<?= $active_class[$i] ?>');
        <?php } ?>
    });
</script>