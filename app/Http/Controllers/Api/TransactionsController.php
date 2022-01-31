<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TransactionsRequest;
use App\Http\Resources\TransactionResource;
use App\Models\Ticket;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class TransactionsController extends Controller
{
    /**
     * @OA\Post(
     *   * tags={"Users"},
     ** path="/events/checkout/{ticket}",
     * summary="Checkout an event",
     *  @OA\Parameter(
     *      name="ticket",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     * *    @OA\Parameter(
     *      name="name",
     *      in="query",
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="phone",
     *      in="query",
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * @OA\Parameter(
     *      name="seats",
     *      in="query",
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="email",
     *      in="query",
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req,$ticket_id)
    {
        $validator = Validator::make($req->all(),[
            'name'=>'nullable|string|min:4|max:140',
            'email'=>'email|string|nullable|required_with:name|min:5|max:140',
            'phone'=>'required_with:name|string|between:10,13',
            'seats'=>'integer|min:1|max:10|required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }

        // $ticket_id = Crypt::decryptString($ticket_id);
        $ticket = Ticket::findOrFail($ticket_id);
        $price = $ticket->price;
        
        if($req->seats >= 3 && $req->seats <= 5){
            $discount = 1;
        }
        else if($req->seats >= 6 && $req->seats <= 10){
            $discount = 10;
        } else if($req->seats >= 11){
            $discount = 15;
        } else{
            $discount = null;
        }

        $total = $price * $req->seats;
        if(!is_null($discount)){
            $total = $total - ((($discount * $price)/100) * $req->seats);
        }

        $user = Auth::check()?Auth::id():NULL;
        $trans = Transaction::create([
            'ticket_id'=>$ticket->id,
            'user_id'=>$user,
            'name'=>$req->name,
            'email'=>$req->email,
            'phone'=>$req->phone,
            'amount'=>$price,
            'dicount'=>$discount,
            'total_payments'=>$total,
            'seats'=>$req->seats,
        ]);

        return (new TransactionResource($trans))
                  ->response()
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }
}
