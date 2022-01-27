<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Sponsor;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SponsorsController extends Controller
{
    /**
     * @OA\Post(
     *   * tags={"Client Dashboard"},
     ** path="/dashboard/events/{event}/sponsor/add",
     * summary="Add sponsor to event",
     * security={{"bearer":{}}},
     * @OA\RequestBody(
     *required=true,
        *@OA\MediaType(
        *   mediaType="multipart/form-data",
        *   @OA\Schema(
        *     @OA\Property(
        *       property="image",
        *       description="image",
        *       type="file",
        *     ),
        *  ),
        *),
     *),
     *  @OA\Parameter(
     *      name="event",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     * *    @OA\Parameter(
     *      name="name",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="link",
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
    public function store(Event $event, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:150',
            'image' => 'required|image|mimes:png,jpg,webp|max:650',
            'link'=>'url|nullable'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(),400);
        }
        $eveName = Str::slug($event->name.$request->name).time().'.'.$request->image->extension();
        if($request->hasFile('image')){
            $image = $request->image->storeAs('sponsors',$eveName,'public');
        } else{
            $image = 'null';
        }
        $sponsor = Sponsor::create([
            'name'=>$request->name,
            'event_id'=>$event->id,
            'image'=>$image,
            'link'=>$request->link
        ]);
        return response()->json(['message'=>'Sponsor Added Successfuly','Sponsor'=>$sponsor]);
    }

    /**
     * @OA\Delete(
     *  tags={"Client Dashboard"},
     ** path="/dashboard/events/sponsors/{sponsor}/delete",
     * summary="Delete Sponsor",
     * security={{"bearer":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     * @OA\Parameter(
     *      name="sponsor",
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
    public function delete(Sponsor $sponsor)
    {
        $sponsor->delete();
        return response()->json('Sponsor Deleted Successfully');
    }
}
