import random

def reference_number(request):
    ref = random.randrange(100000, 1000000)
    return dict(reference_number = ref)