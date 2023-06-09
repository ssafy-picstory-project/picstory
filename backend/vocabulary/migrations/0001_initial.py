# Generated by Django 3.2.13 on 2023-03-28 05:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Vocabulary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('word', models.CharField(max_length=55)),
                ('mean', models.CharField(max_length=103)),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vocabulary', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
