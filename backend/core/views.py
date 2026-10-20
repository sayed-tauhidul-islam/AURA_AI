from django.utils import timezone
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ActivityNote, ActionProposal
from .serializers import ActivityNoteSerializer, ActionProposalSerializer

@api_view(["GET"])
def health(request):
    return Response({
        "status": "ok",
        "application": "AURA",
        "timestamp": timezone.now().isoformat(),
        "note": "Starter API only; no desktop actions are executed."
    })

class ActivityNoteListCreateView(generics.ListCreateAPIView):
    queryset = ActivityNote.objects.all()
    serializer_class = ActivityNoteSerializer

class ActionProposalListCreateView(generics.ListCreateAPIView):
    queryset = ActionProposal.objects.all()
    serializer_class = ActionProposalSerializer

@api_view(["POST"])
def approve_proposal(request, pk):
    try:
        proposal = ActionProposal.objects.get(pk=pk)
    except ActionProposal.DoesNotExist:
        return Response({"detail": "Proposal not found."}, status=status.HTTP_404_NOT_FOUND)
    if proposal.status != "pending":
        return Response({"detail": "Only pending proposals can be approved."},
                        status=status.HTTP_400_BAD_REQUEST)
    proposal.status = "approved_not_executed"
    proposal.save(update_fields=["status"])
    return Response({
        "id": proposal.id,
        "status": proposal.status,
        "detail": "Approval recorded. No desktop or external action was executed."
    })
