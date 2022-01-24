<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventsRequest;
use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class EventsController extends Controller
{
    /**
     * @OA\Post(
     * tags={"Users"},
     ** path="/dashboard/register-event",
     *   summary="register new event",
     *  @OA\Parameter(
     *      name="title",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * *  @OA\Parameter(
     *      name="banner",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * *  @OA\Parameter(
     *      name="eventDate",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="date"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="endDate",
     *      in="query",
     *      @OA\Schema(
     *           type="date"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="description",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="phone",
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
     **/
    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function store(EventsRequest $req)
    {
        $event = Event::create([
            'user_id'=>Auth::id(),
            'title'=>$req->title,
            'description'=>$req->description,
            'banner'=>$req->banner,
            'eventDate'=>$req->eventDate,
            'endDate'=>$req->endDate,
            'location'=>$req->location,
            'venue'=>$req->venue,
            'organizer'=>$req->organizer,
            'category'=>$req->category,
            'address'=>$req->address,
            'phone'=>$req->phone,
            'email'=>$req->email,
        ]);

        return (new EventResource($event))
                  ->response()
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }
}
