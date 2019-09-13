<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title','description','content'];

    public function attachments() {
        return $this->hasMany(Attachment::class);
    }
}
