from rest_framework import serializers
from .models import ActivityNote, ActionProposal

class ActivityNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityNote
        fields = ["id", "title", "note", "created_at"]
        read_only_fields = ["id", "created_at"]

class ActionProposalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActionProposal
        fields = ["id", "title", "description", "status", "created_at"]
        read_only_fields = ["id", "status", "created_at"]
