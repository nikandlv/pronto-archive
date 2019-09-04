<?php

use App\Enums\CommentStatusEnum;
use App\Enums\RoleEnum;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Comments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('post_id');
            $table->unsignedBigInteger('parent_id');
            $table->unsignedBigInteger('user_id');

            $table->string('status')->enum([CommentStatusEnum::WAITING , CommentStatusEnum::APPROVED , CommentStatusEnum::DECLINED]);
            $table->json('content');


            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
            $table->foreign('parent_id')->references('id')->on('comments')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
