<?php

namespace Themes\Purple\Models;

class ServiceRegistrationModel extends PurpleModel
{
  function __construct(array $variables = [])
  {
    parent::__construct('forms/service-registration', $variables);
  }
}
