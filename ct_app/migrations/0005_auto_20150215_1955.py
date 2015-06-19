# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ct_app', '0004_auto_20150215_1908'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='image',
            options={'ordering': ['name']},
        ),
        migrations.AddField(
            model_name='problem',
            name='location',
            field=models.CharField(max_length=75, blank=True),
            preserve_default=True,
        ),
    ]
