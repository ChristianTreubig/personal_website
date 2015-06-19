# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ct_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='problem',
            name='date_solve',
            field=models.DateTimeField(null=True, blank=True),
            preserve_default=True,
        ),
    ]
