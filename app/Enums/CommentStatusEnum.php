<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

class CommentStatusEnum extends Enum
{
    const APPROVED = 'APPROVED';
    const WAITING = 'WAITING';
    const DECLINED = 'DECLINED';
}
