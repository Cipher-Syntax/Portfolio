from django.urls import path, include
from .views import ProjectViewSet, FeedbackViewSet
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter #type: ignore

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'feedbacks', FeedbackViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', include('rest_framework.urls')),
]

urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)