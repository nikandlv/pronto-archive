<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $fillable = ['file', 'mime', 'title'];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
