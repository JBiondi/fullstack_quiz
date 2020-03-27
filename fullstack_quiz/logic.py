from .models import Prompt


prompts_queryset = Prompt.objects.filter(quiz_id=1).order_by('prompt_id')

prompts_list = list(prompts_queryset)



