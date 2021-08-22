from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
import pandas as pd
import os

class Industry(APIView):
    # permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request, industry: str, *args, **kwargs):
        df = pd.read_csv("./additional_data/greenhouse-gas-emissions-industry-and-household-year-ended-2018-CSV.csv")
        subset = df.loc[df["anzsic_descriptor"] == industry]
        avg = subset["data_value"].mean()
        return Response(avg, status=status.HTTP_200_OK)
