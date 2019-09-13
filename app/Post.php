<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title','description','content'];

    public function attachments() {
        return $this->hasMany(Attachment::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class , 'post_tag');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class , 'post_category');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function likes()
    {
        return $this->belongsToMany(User::class, 'likes');
    }
}
