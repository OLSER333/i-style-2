<?php

namespace Themes\Purple\Models;

use function App\db;

class ReviewModel extends PurpleModel
{
    function __construct(array $review, string $viewName = 'review', array $variables = [])
    {
        if ($review['review_object'] === 'service') {
            $review['photos'] = db()->find('review_photo', ['review_id' => $review['review_id'], 'review_photo_status' => 'active'], '*', 'review_photo_date_add', true);
            $review['photos_path'] = [];
            if (is_array($review['photos']) and count($review['photos']) > 0) {
                $review['review_with_photo'] = 'review-with-photo';
                foreach ($review['photos'] as $photo) {
                    $review['photos_path'][] = $photo['photo_path'];
                }
            }
            $review['object_url'] = '/services/' . $review['review_object_id'];
        } else {
            $review['object_url'] = '/sellers/' . $review['review_object_id'];
        }
        $review['stars'] = getStars($review['review_rating']);
        $review['date'] = date('d.m.Y', $review['review_date_add']);
        $review['user_name'] = $review['first_name'] . ' ' . $review['last_name'];
        $review['hidden_text'] = false;
        $review['hidden_text_class'] = '';
        if (substr_count($review['review_text'], '<br>') > 2) {
            $review['hidden_text'] = true;
            $review['hidden_text_class'] = 'hidden-review-text';
        }

        $variables = $variables + $review;
        $this->data = $variables;
        parent::__construct("components/$viewName", $variables);
    }
}
