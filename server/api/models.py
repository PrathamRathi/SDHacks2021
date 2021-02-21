from django.db import models
import uuid

USER_TAG_OPTIONS = [
    ('PR', 'Public Relations'),
    ('Lawyer', 'Lawyer'),
    ('SDE', 'Software Developer'),
    ('Finance', 'Finance'),
    ('Accounting', 'Accounting'),
    ('Logistics', 'Logistics'),
    ('MGT', 'Management'),
    ('Merchandise', 'Merchandise')
]

PROJECT_TAG_OPTIONS = [
    ('EDU', 'Education'),
    ('Policing', 'Policing'),
    ('Health', 'Health Care'),
    ('Disaster', 'Disaster Relief'),
    ('Fundraising', 'Fundraising'),
    ('Awareness', 'Awareness'),
    ('Civil', 'Civil Rights'),
    ('Gender Equality', 'Gender Equality')
]

APPLICATION_STATUS = [
    ('Pending', 'Pending'),
    ('Accepted', 'Accepted'),
    ('Rejected', 'Rejected')
]
class User(models.Model):
    uuid = models.UUIDField(primary_key = True, unique = True, default = uuid.uuid4, editable = False)
    email = models.EmailField(unique = True)
    password = models.CharField(max_length = 255)
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    phone = models.CharField(max_length = 10, blank = True, null = True)
    description = models.TextField(blank = True, null = True)
    profile_pic = models.CharField(max_length = 255, blank = True, null = True)

class UserTag(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'tags')
    tag = models.CharField(max_length = 30, choices = USER_TAG_OPTIONS)

class Event(models.Model):
    uuid = models.UUIDField(primary_key = True, unique = True, default = uuid.uuid4, editable = False)
    name = models.CharField(max_length = 255)
    organizer = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'events')
    ongoing = models.BooleanField(default = True)
    dates = models.CharField(max_length = 255)
    available_spots = models.IntegerField()
    location = models.CharField(max_length = 255)
    description = models.TextField()
    questions = models.TextField()

class EventTag(models.Model):
    event = models.ForeignKey(Event, on_delete = models.CASCADE, related_name = 'tags')
    tag = models.CharField(max_length = 30, choices = PROJECT_TAG_OPTIONS)

class Application(models.Model):
    uuid = models.UUIDField(primary_key = True, unique = True, default = uuid.uuid4, editable = False)
    applicant = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'applications')
    event = models.ForeignKey(Event, on_delete = models.CASCADE, related_name = 'applications')
    status = models.CharField(max_length = 30, choices = APPLICATION_STATUS, default='Pending')
    availability = models.TextField()
    description = models.TextField()
    answers = models.TextField()
    
