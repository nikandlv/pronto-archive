<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class CommentStatusEnum extends Enum
{
    const APPROVED = 'APPROVED';
    const WAITING = 'WAITING';
    const DECLINED = 'DECLINED';
}
