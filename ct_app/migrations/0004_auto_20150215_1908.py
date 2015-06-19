# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ct_app', '0003_problem_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to=b'images/')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AlterField(
            model_name='problem',
            name='active',
            field=models.BooleanField(default=False, verbose_name=b'solved'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='problem',
            name='date_submit',
            field=models.DateTimeField(auto_now_add=True, verbose_name=b'Date Submitted'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='problem',
            name='solution',
            field=models.TextField(blank=True),
            preserve_default=True,
        ),
    ]
