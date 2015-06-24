from django.db import models
from django.core.validators import MaxValueValidator
from django.db.models.signals import pre_delete
from django.dispatch import receiver

class Problem(models.Model):
    CHOICES = (
               ("career", "Career"),
               ("love", "Love & Dating"),
               ("health", "Health & Wellness"),
               ("arts", "Arts & Leisure"),
               ("politics", "Politics"),
               ("sport", "Sport"),
               ("religion", "Religion"),
               ("miscellaneous", "Miscellaneous")
            )
    
    name = models.CharField(max_length = 50)
    age = models.PositiveSmallIntegerField(blank = True, null = True, validators = [MaxValueValidator(100)])
    location = models.CharField(max_length = 75, blank = True)
    #email = models.EmailField(verbose_name='email address', max_length=100)
    category = models.CharField(max_length = 20, choices = CHOICES)
    problem = models.CharField(max_length = 600)
    date_submit = models.DateTimeField("Date Submitted", auto_now_add = True)
    solution = models.TextField(blank = True)
    date_solve = models.DateTimeField(blank = True, null = True)
    active = models.BooleanField("solved", default = False)
    
    class Meta:
        ordering = ["-date_solve"]
    
    def __unicode__(self):
        return self.name + ", " + str(self.date_submit.date())
    
class Image(models.Model):
    name = models.CharField(max_length = 100, unique = True)
    image = models.ImageField(upload_to = "images/")
    
    class Meta:
        ordering = ["name"]
        
    def __unicode__(self):
        return self.name
    
@receiver(pre_delete, sender=Image)
def my_image_pre_delete_handler(sender, **kwargs):
    '''
    Upon deleting image path from DB, delete the actual image file.
    '''
    obj = Image.objects.get(id=kwargs["instance"].id)
    storage, path = obj.image.storage, obj.image.path
    storage.delete(path)