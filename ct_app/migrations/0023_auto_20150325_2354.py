# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ct_app', '0022_auto_20150313_2245'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='problem',
            name='email',
        ),
        migrations.AlterField(
            model_name='problem',
            name='category',
            field=models.CharField(max_length=20, choices=[(b'career', b'Career'), (b'love', b'Love & Dating'), (b'health', b'Health & Wellness'), (b'arts', b'The Arts'), (b'politics', b'Politics'), (b'sport', b'Sport'), (b'religion', b'Religion'), (b'miscellaneous', b'Miscellaneous')]),
            preserve_default=True,
        ),
    ]
