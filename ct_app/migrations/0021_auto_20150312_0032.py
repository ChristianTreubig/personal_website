# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ct_app', '0020_auto_20150312_0025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='problem',
            name='problem',
            field=models.CharField(default='This is a placeholder problem. This is a placeholder problem. This is a placeholder problem. This is a placeholder problem. This is a placeholder problem. This is a placeholder problem. This is a placeholder problem. This is a placeholder problem. This is a placeholder problem.', max_length=600),
            preserve_default=False,
        ),
    ]
