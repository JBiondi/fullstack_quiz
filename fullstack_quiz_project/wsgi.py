"""
WSGI config for fullstack_quiz_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os
from dotenv import load_dotenv
from django.core.wsgi import get_wsgi_application
from fullstack_quiz_project.settings import BASE_DIR

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fullstack_quiz_project.settings')

project_folder = os.path.expanduser(os.path.join(BASE_DIR, "fullstack_quiz_project"))
load_dotenv(os.path.join(project_folder, '.env'))

application = get_wsgi_application()
