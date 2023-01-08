import os
import dj_database_url
from .common import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

SECRET_KEY = os.environ['SECRET_KEY']

ALLOWED_HOSTS = ['teck-prod.herokuapp.com']

DATABASES = {
    'default': dj_database_url.config()
}