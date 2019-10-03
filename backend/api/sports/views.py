from django.shortcuts import render

from rest_framework import status
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

import json

with open("/Users/jtalegria/Documents/GitHub/rho_exercise/backend/api/sports/json_files/data.json") as json_file:
    json_data = json.load(json_file)
    sports = json_data['sports']
    ordered_sports = sorted(sports, key = lambda x: x['pos'])

class GetAllSports(GenericAPIView):
    def get(self, request):
        return Response(status=status.HTTP_200_OK, data=ordered_sports)

class GetAllEventsBySportID(GenericAPIView):
    def get(self, request, sport_id):
        sport_id = int(sport_id)
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
                return Response(status=status.HTTP_200_OK, data=list_events)
        return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Invalid Sport ID"})
