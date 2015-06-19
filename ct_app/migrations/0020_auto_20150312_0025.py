# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ct_app', '0006_auto_20150217_1847'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='problem',
            options={'ordering': ['-date_solve']},
        ),
        migrations.AddField(#This was a manual change from "AlterField".
            model_name='problem',
            name='problem',
            field=models.CharField(max_length=600, null=True, blank=True),
            preserve_default=True,
        ),
    ]
