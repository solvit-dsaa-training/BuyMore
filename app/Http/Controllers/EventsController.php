<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventsRequest;
use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class EventsController extends Controller
{
    /**
     * @OA\Get(
     * * tags={"System Admins"},
     ** path="/admin/events",
     * summary="View all Events",
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
        $events = Event::with('tickets','user')->withCount('tickets')->get();
        return (new EventResource($events))
                  ->response()
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }
    /**
     * @OA\Post(
     *   * tags={"Client Dashboard"},
     ** path="/dashboard/register-event",
     * summary="Add New Event",
     * security={{"bearer":{}}},
     * * @OA\RequestBody(
     *required=true,
        *@OA\MediaType(
        *   mediaType="multipart/form-data",
        *   @OA\Schema(
        *     @OA\Property(
        *       property="banner",
        *       description="banner",
        *       type="file",
        *     ),
        *  ),
        *),
     *),
     *  @OA\Parameter(
     *      name="title",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string",
     *           format ="date",
     *      )
     *    ),
     * *  @OA\Parameter(
     *      name="eventDate",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string",
     *           format ="date",
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
     * *    @OA\Parameter(
     *      name="location",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * *    @OA\Parameter(
     *      name="venue",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * *    @OA\Parameter(
     *      name="organizer",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * *    @OA\Parameter(
     *      name="category",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * *    @OA\Parameter(
     *      name="address",
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
        $eveName = Str::slug($req->name).time().'.'.$req->banner->extension();
        if($req->hasFile('banner')){
            $image = $req->banner->storeAs('Events',$eveName,'public');
        } else{
            $image = 'null';
        }
        $event = Event::create([
            'user_id'=>Auth::id(),
            'title'=>$req->title,
            'description'=>$req->description,
            'banner'=>$image,
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

    /**
     * @OA\Put(
     *   * tags={"Client Dashboard"},
     ** path="/dashboard/events/{event}/update",
     * summary="Update Event",
     * security={{"bearer":{}}},
     *  @OA\Parameter(
     *      name="title",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * @OA\Parameter(
     *      name="event",
     *      in="path",
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
     *           type="file"
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
     * *    @OA\Parameter(
     *      name="location",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * *    @OA\Parameter(
     *      name="venue",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * *    @OA\Parameter(
     *      name="organizer",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * *    @OA\Parameter(
     *      name="category",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     * *    @OA\Parameter(
     *      name="address",
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
    public function update(Event $event, EventsRequest $req)
    {
        $event->update([
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

    /**
     * @OA\Put(
     *   * tags={"System Admins"},
     ** path="/admin/events/{event}/Cancel",
     * summary="Cancel an Event",
     * security={{"bearer":{}}},
     *   @OA\Parameter(
     *      name="event",
     *      in="path",
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
     **/
    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function cancel(Event $event)
    {
        $event->update(['status'=>'Cancelled']);

        return (new EventResource($event))
                  ->response('Event Cancelled Successfully!')
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Put(
     *   * tags={"System Admins"},
     ** path="/admin/events/{event}/mark-as-complete",
     * summary="Close an Event",
     * security={{"bearer":{}}},
     *   @OA\Parameter(
     *      name="event",
     *      in="path",
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
     **/
    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function markAsComplete(Event $event)
    {
        $event->update(['status'=>'Completed']);

        return (new EventResource($event))
                  ->response('Event Cancelled Successfully!')
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Put(
     *   * tags={"System Admins"},
     ** path="/admin/events/{event}/Approve",
     * summary="Approve an Event",
     * security={{"bearer":{}}},
     *   @OA\Parameter(
     *      name="event",
     *      in="path",
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
     **/
    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function approve(Event $event)
    {
        $event->update(['status'=>'Allowed']);

        return (new EventResource($event))
                  ->response('Event Approved Successfully!')
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Put(
     *   * tags={"Client Dashboard"},
     ** path="/dashboard/events/{event}/view",
     * summary="View Event and it's correspinding tickets",
     * security={{"bearer":{}}},
     * @OA\Parameter(
     *      name="event",
     *      in="path",
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
     **/
    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        return (new EventResource($event))
                  ->response()
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Delete(
     *  * tags={"System Admins"},
     ** path="/admin/events/{event}/delete",
     * summary="Delete Event",
     * security={{"bearer":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     * @OA\Parameter(
     *      name="event",
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
    public function destroy(Event $event)
    {
        // $event = Event::findOrFail($event->id);
        // return response()->json($event);
        if($event->tickets->count() > 0){
            return response()->json('Delete Tickets First');
        } else{
            $event->delete();
            return response()->json('Event Deleted Successfully');
        }
    }
}
