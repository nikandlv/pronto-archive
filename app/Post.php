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
        return $this->belongsToMany(Tag::class , 'post_tag' , 'post_id' , 'tag_id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class , 'post_category', 'post_id' , 'category_id');
    }
}
