from django.urls import path, include
from .views import *

urlpatterns = [
    path('user/login', LoginView.as_view()),
    path('user/register', RegisterView.as_view()),
    path('user/profile/<uuid:pk>', UserView.as_view()),
    path('user/add-event', AddEventView.as_view()),
    path('user/tags', AddUserTagView.as_view()),
    path('user/tags/<int:pk>', GetUserTagView.as_view()),
    path('user/application', AddApplicationView.as_view()),
    path('user/application/<uuid:uuid>', ViewApplicationView.as_view()),
    path('events', SearchEventView.as_view()),
    path('events/<uuid:pk>', EventView.as_view()),
    path('events/tags', AddEventTagView.as_view()),
    path('events/tags/<int:pk>', GetEventTagView.as_view())
]