from django.urls import path
from .views import (
    health, ActivityNoteListCreateView, ActionProposalListCreateView,
    approve_proposal,
)

urlpatterns = [
    path("health/", health, name="health"),
    path("activity-notes/", ActivityNoteListCreateView.as_view(), name="activity-notes"),
    path("proposals/", ActionProposalListCreateView.as_view(), name="proposals"),
    path("proposals/<int:pk>/approve/", approve_proposal, name="approve-proposal"),
]
