# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ct_app', '0002_auto_20150210_2221'),
    ]

    operations = [
        migrations.AddField(
            model_name='problem',
            name='category',
            field=models.CharField(default='miscellaneous', max_length=20, choices=[(b'career', b'Career'), (b'love', b'Love and Dating'), (b'health', b'Health and Wellness'), (b'education', b'Education'), (b'arts', b'The Arts'), (b'politics', b'Politics'), (b'sport', b'Sport'), (b'religion', b'Religion'), (b'miscellaneous', b'Miscellaneous')]),
            preserve_default=False,
        ),
    ]
