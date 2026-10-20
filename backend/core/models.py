from django.db import models

class ActivityNote(models.Model):
    title = models.CharField(max_length=160)
    note = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title

class ActionProposal(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("approved_not_executed", "Approved, not executed"),
        ("rejected", "Rejected"),
    ]
    title = models.CharField(max_length=160)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=32, choices=STATUS_CHOICES, default="pending")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.title} ({self.status})"
