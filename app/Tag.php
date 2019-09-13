<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['title'];

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_tag' ,'tag_id' , 'post_id');
    }
}
