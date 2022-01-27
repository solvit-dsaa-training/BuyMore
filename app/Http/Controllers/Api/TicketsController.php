<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TicketsRequests;
use App\Http\Resources\TicketResource;
use App\Models\Event;
use App\Models\Ticket;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TicketsController extends Controller
{
    /**
     * @OA\Get(
     * * tags={"Client Dashboard"},
     ** path="/dashboard/tickets",
     * summary="Get list of all tickets",
     * security={{"bearer":{}}},
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
    public function index()
    {
        $tickets = Ticket::whereHas('event',function($query){
            $query->whereMonth('eventDate','>=',Carbon::now());
        })->get();
        return (new TicketResource($tickets))
                  ->response()
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Post(
     * * tags={"Client Dashboard"},
     ** path="/dashboard/tickets/add-new-ticket",
     *   summary="Add Ticket",
     * security={{"bearer":{}}},
     *  @OA\Parameter(
     *      name="type",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="price",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="number",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     * @OA\Parameter(
     *      name="description",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * @OA\Parameter(
     *      name="event_id",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TicketsRequests $request)
    {
        $event = Event::findOrFail($request->event_id);
        $ticket = Ticket::create([
            'type'=>$request->type,
            'price'=>$request->price,
            'number'=>$request->number,
            'description'=>$request->description,
            'event_id'=>$event->id,
        ]);
        return (new TicketResource($ticket))
                  ->response()
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Get(
     * * tags={"Client Dashboard"},
     ** path="/dashboard/tickets/{ticket}/view",
     * summary="View Single Ticket",
     * security={{"bearer":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     * @OA\Parameter(
     *      name="ticket",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
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
    public function show(Ticket $ticket)
    {
        return (new TicketResource($ticket))
                  ->response()
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Put(
     * * tags={"Client Dashboard"},
     ** path="/dashboard/tickets/{ticket}/update",
     *   summary="Update Ticket Info",
     * security={{"bearer":{}}},
     *  @OA\Parameter(
     *      name="type",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * @OA\Parameter(
     *      name="ticket",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="price",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="number",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     * @OA\Parameter(
     *      name="description",
     *      in="query",
     *      required=true,
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(TicketsRequests $request, Ticket $ticket)
    {
        // $ticket = Ticket::findOrFail($ticket->id);
        $ticket->update([
            'type'=>$request->type,
            'price'=>$request->price,
            'number'=>$request->number,
            'description'=>$request->description,
        ]);

        return (new TicketResource($ticket))
                  ->response()
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Delete(
     * * tags={"Client Dashboard"},
     ** path="/dashboard/tickets/{ticket}/delete",
     * summary="View Single Ticket",
     * security={{"bearer":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     * @OA\Parameter(
     *      name="ticket",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
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
    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
        return response()->json('Ticket Deleted Successfully');
    }
}
