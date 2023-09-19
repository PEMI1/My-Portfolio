from django.shortcuts import render
from django.http import JsonResponse
from .models import ContactMessage


def index_view(request):
    return render(request, 'portfolio_app/index.html')

def save_contact_message(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        if name and email and message:
            contact_message = ContactMessage(name=name, email=email, message=message)
            contact_message.save()
            return JsonResponse({"message": "Form submitted successfully!"})

    return JsonResponse({"message": "Form submission failed."}, status=400)