<?php

namespace Themes\Purple\Models;

class SalonHeaderModel extends PurpleModel
{
  function __construct(string $viewName, array $variables = [])
  {
    $this->data = $variables;
    parent::__construct("salon/components/$viewName", $variables);
  }
}
