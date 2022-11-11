<?php

namespace Themes\Purple\Models;

use App\System\Core\Model;

class TopupModel extends PurpleModel
{
    function __construct(Model $topupContent, string $openButtonClass, string $activeClass = 'active', array $variables = [], array $topups = [])
    {
        if (count($topups) == 0) {
            $variables['content'][0] = $topupContent;
            $variables['open_button'][0] = $openButtonClass;
            $variables['active_class'][0] = $activeClass;
            $variables['topup_id'][0] = md5(rand(100000, 999999) . '-' . microtime());
            $variables['topup_count'] = 1;
        } else {
            for ($i = 0; $i < count($topups); $i++) {
                $variables['content'][$i] = $topups[$i][0];
                $variables['open_button'][$i] = $topups[$i][1];
                $variables['active_class'][$i] = $topups[$i][2];
                $variables['topup_id'][$i] = md5(rand(100000, 999999) . '-' . microtime());
            }
            $variables['topup_count'] = count($topups);
        }

        parent::__construct('layouts/topup', $variables);
    }
}
