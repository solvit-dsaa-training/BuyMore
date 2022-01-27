<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'banner',
        'eventDate',
        'endDate',
        'status',
        'location',
        'venue',
        'organizer',
        'category',
        'address',
        'phone',
        'email'
    ];

    /**
     * Get the user that owns the Event
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get all of the tickets for the Event
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    /**
     * Get all of the sponsors for the Event
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function sponsors()
    {
        return $this->hasMany(Sponsor::class);
    }
}
