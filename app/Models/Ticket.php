<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'Type_of_tickets',
        'Price_of_ticks',
        'Number_of_tickecks'
       ];
}
