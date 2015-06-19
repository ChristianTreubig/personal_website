from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from ct_app.admin import admin_site
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = patterns('',
    url(r'', include('ct_app.urls')),

    url(r'^admin/', include(admin_site.urls)), #Note that this hooks up to the custom admin instance in admin.py (not the default one).
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #Should automatically disable when DEBUG = False, but remove anyway.

urlpatterns += staticfiles_urlpatterns() #Should automatically disable when DEBUG = False