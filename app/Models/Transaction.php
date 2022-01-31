<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Transaction extends Model
{
    protected $fillable = [
        'code',
        'ticket_id',
        'user_id',
        'name',
        'email',
        'phone',
        'amount',
        'dicount',
        'total_payments',
        'seats',
        'status',
    ];

    /**
     * Get the user that owns the Transaction
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function client()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    
    /**
     * Get the ticket that owns the Transaction
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ticket()
    {
        return $this->belongsTo(Ticket::class,'ticket_id','id');
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function($model){
            $lastCol = Transaction::max('id');
            $model->code = strtoupper(Str::random(4)) . str_pad($lastCol+1,4,'0',STR_PAD_LEFT);
        });
    }
}
