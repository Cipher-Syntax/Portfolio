from rest_framework import serializers #type: ignore
from .models import Project, Feedback

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'created_at']
        
class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['id', 'firstname', 'lastname', 'email', 'message', 'created_at']
        