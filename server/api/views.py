from django.shortcuts import render
from rest_framework import generics, status, filters
from rest_framework.response import Response
from .models import *
from .serializers import *

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LoginView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def create(self, request, *args, **kwargs):
        email = request.data['email']
        password = request.data['password']
        queryset = self.filter_queryset(self.get_queryset()).filter(email=email, password=password)

        is_registered = queryset.count() == 1
        if is_registered:
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializer = self.get_serializer(page, many=True)
                return self.get_paginated_response(serializer.data)
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)
        return Response(data={'error' : 'Invalid credentials.'}, status=status.HTTP_403_FORBIDDEN)
    """
    def retrieve(self, request, *args, **kwargs):
        email = request.data['email']
        password = request.data['password']
        q = self.get_queryset().filter(email=email, password=password)
        is_registered = q.count() == 1
        if is_registered:
            instance = q.first()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        return Response(data={'error' : 'Invalid credentials.'}, status=status.HTTP_403_FORBIDDEN)
    """

class AddEventView(generics.CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class SearchEventView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']
    def get_queryset(self):
        queryset = Event.objects.all()
        queryset = queryset.filter(ongoing=True)
        return queryset

class EventView(generics.RetrieveUpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    
class AddUserTagView(generics.CreateAPIView):
    queryset = UserTag.objects.all()
    serializer_class = UserTagSerializer

class GetUserTagView(generics.RetrieveAPIView):
    queryset = UserTag.objects.all()
    serializer_class = UserTagSerializer

class GetEventTagView(generics.RetrieveAPIView):
    queryset = EventTag.objects.all()
    serializer_class = EventTagSerializer

class AddEventTagView(generics.CreateAPIView):
    queryset = EventTag.objects.all()
    serializer_class = EventTagSerializer

class AddApplicationView(generics.CreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

class ViewApplicationView(generics.RetrieveUpdateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer