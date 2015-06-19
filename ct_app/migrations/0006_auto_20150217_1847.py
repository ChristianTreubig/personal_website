# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.core.validators


class Migration(migrations.Migration):

    dependencies = [
        ('ct_app', '0005_auto_20150215_1955'),
    ]

    operations = [
        migrations.AlterField(
            model_name='problem',
            name='age',
            field=models.PositiveSmallIntegerField(blank=True, null=True, validators=[django.core.validators.MaxValueValidator(100)]),
            preserve_default=True,
        ),
    ]
