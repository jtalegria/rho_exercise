from django.shortcuts import render

from rest_framework import status
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

import os, json

#with open("/Users/jtalegria/Documents/GitHub/rho_exercise/backend/api/sports/json_files/data.json") as json_file:
with open(os.path.join(os.path.dirname(__file__), 'json_files/data.json')) as json_file:
    json_data = json.load(json_file)
    sports = json_data['sports']
    ordered_sports = sorted(sports, key = lambda x: x['pos'])

class GetAllSports(APIView):
    def get(self, request):
        return Response(status=status.HTTP_200_OK, data=ordered_sports, headers={"Access-Control-Allow-Origin": "*"})

class GetAllEventsBySportID(APIView):
    def get(self, request, sport_id):
        sport_id = int(sport_id)
        for i in range(len(ordered_sports)):
            if ordered_sports[i]['id'] == sport_id:
                comp = ordered_sports[i]['comp']
                if not comp:
                    return Response(status=status.HTTP_200_OK, data=[])

                list_events = []
                for i in range (0, len(comp)):
                    if len(comp[i]['events']) == 1:
                        list_events.append(comp[i]['events'][0])
                    else:
                        for j in range(0, len(comp[i]['events'])):
                            list_events.append(comp[i]['events'][j])
                return Response(status=status.HTTP_200_OK, data=list_events)
        return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Invalid Sport ID"})

class GetOutcomesByEventID(APIView):
    def get(self, request, sport_id, event_id):
        sport_id = int(sport_id)
        event_id = int(event_id)

        for i in range(len(ordered_sports)):
            if ordered_sports[i]['id'] == sport_id:
                comp = ordered_sports[i]['comp']
                if not comp:
                    return Response(status=status.HTTP_400_BAD_REQUEST, data={"warning": "There is no events for this Sport"})

                list_events = []
                for i in range (0, len(comp)):
                    if len(comp[i]['events']) == 1:
                        list_events.append(comp[i]['events'][0])
                    else:
                        for j in range(0, len(comp[i]['events'])):
                            list_events.append(comp[i]['events'][j])

                for i in range(0, len(list_events)):
                    if list_events[i]['id'] == event_id:
                        teamA = list_events[i]['oppADesc']
                        teamB = list_events[i]['oppBDesc']
                        final_scr = list_events[i]['scoreboard']['scr']
                        final_scr_parts = final_scr.split("-")
                        return Response(status=status.HTTP_200_OK, data={"outcome": final_scr, 
                                                                        "details": {
                                                                            "teamA": {
                                                                                "name": teamA,
                                                                                "score": int(final_scr_parts[0])
                                                                            },
                                                                            "teamB":{
                                                                                "name": teamB,
                                                                                "score": int(final_scr_parts[1])
                                                                            }
                                                                        }
                                                                    })
                    
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Invalid Event ID"})

