# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Problem',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50)),
                ('age', models.PositiveSmallIntegerField()),
                ('email', models.EmailField(max_length=100, verbose_name=b'email address')),
                #('problem', models.TextField()), #did this to add CharField in 0020_auto_20150312_0025.py
                ('date_submit', models.DateTimeField(auto_now_add=True)),
                ('solution', models.TextField()),
                ('date_solve', models.DateTimeField()),
                ('active', models.BooleanField(default=False)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
