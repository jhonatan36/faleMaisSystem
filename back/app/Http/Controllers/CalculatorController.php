<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CalculatorController extends Controller
{
    public function calculate(Request $request)
    {
        $constBoostPrice = 1.1;

        $request->validate([
            'origin' => 'required|integer|min:1',
            'destination' => 'required|integer|min:1',
            'minutes' => 'required|integer|min:1',
        ]);

        $plans = Plan::select('plans.*', 'destinations.price')
            ->join('destinations', 'plans.destination_id', '=', 'destinations.id')
            ->where('destinations.origin', $request->origin)
            ->where('destinations.destination', $request->destination)
            ->get();

        $results = [];
        foreach($plans as $plan) {
            $results[] = [
                'origin' => $request->origin,
                'destination' => $request->destination,
                'plan' => $plan->description,
                'no_plan_price' => $plan->price * $request->minutes,
                'with_plan_price' => $this->getPriceMinutesWithPlan($request->minutes, $plan->minutes, $plan->price, $constBoostPrice),
            ];
        }

        return Response()->json($results)->setStatusCode(200);
    }

    public function getPriceMinutesWithPlan($totalMinutes, $planMinutes, $price, $constBoostPrice)
    {
        $restMinutes = $totalMinutes - $planMinutes;
        $restMinutes = $restMinutes < 0 ? 0 : $restMinutes;
        $noPlan = (double) ($restMinutes * $price) * $constBoostPrice;

        return $noPlan;
    }
}
