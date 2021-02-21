from rest_framework import serializers
from .models import *

class UserTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTag
        fields = ('user', 'tag')

class EventTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventTag
        fields = ('event', 'tag')

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('uuid', 'applicant', 'event', 'status', 'availability', 'description')

class TagFrequencySerializer(serializers.ModelSerializer):
    class Meta:
        model = TagFrequency
        fields = ('user', 'event_tag', 'frequency')

class EventSerializer(serializers.ModelSerializer):
    tags = EventTagSerializer
    applications = ApplicationSerializer
    class Meta:
        model = Event
        fields = ('uuid', 'name', 'organizer', 'ongoing', 'dates', 'available_spots', 'location', 'description', 'tags', 'applications')

class UserSerializer(serializers.ModelSerializer):
    tags = UserTagSerializer
    applications = ApplicationSerializer
    events = EventSerializer
    class Meta:
        model = User
        fields = ('uuid', 'email', 'password', 'first_name', 'last_name', 'phone', 'description', 'profile_pic', 'tags', 'applications', 'events', 'tag_frequency')