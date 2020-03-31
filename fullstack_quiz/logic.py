from .models import Prompt


# relevant_quiz_id = quiz_selection_view()

relevant_quiz_id = 1

prompts_queryset = Prompt.objects.filter(quiz_id=relevant_quiz_id).order_by('prompt_id')

prompts_list = list(prompts_queryset)



