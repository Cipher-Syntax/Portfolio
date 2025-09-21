from django.shortcuts import render
from rest_framework import viewsets #type: ignore
from .serializers import ProjectSerializer, FeedbackSerializer
from .models import Project, Feedback

# Create your views here.
class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    
    queryset = Project.objects.all().order_by('-created_at')
    
class FeedbackViewSet(viewsets.ModelViewSet):
    serializer_class = FeedbackSerializer
    queryset = Feedback.objects.all().order_by('created_at')
