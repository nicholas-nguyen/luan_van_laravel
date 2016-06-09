<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    public $timestamps = true;
    protected $table = 'photos';
    
    public function user(){
        return $this->belongsTo(Users::class);
    }
    
    public function status(){
        return $this->belongsTo(Status::class);
    }
}
