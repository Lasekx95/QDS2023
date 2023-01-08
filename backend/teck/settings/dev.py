import os
from .common import *


DEBUG = True

SECRET_KEY = 'django-insecure-ch_iofyc$!-sj@nf_hk8j*e)fhjimx!9+7h8r0lg8qa97uvm1r'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'teck_db', 
        'USER': 'zachflentge-wong',
        'PASSWORD': 'password',
        'HOST': 'localhost', 
        'PORT': '5432',
    }
}