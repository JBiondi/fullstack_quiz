from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from fullstack_quiz.models import Quiz
from fullstack_quiz.api.serializers import QuizSerializer


# add some more request types here in api-view the decorator maybe
@api_view(['GET'])
def api_detail_quiz_view(request, slug):

    try:
        quiz = Quiz.objects.get(slug=slug)

    except Quiz.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':

        serializer = QuizSerializer(quiz)
        return Response(serializer.data)


@api_view(['GET'])
def api_create_quiz_view(request):
    print('banana')