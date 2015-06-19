from django.conf.urls import patterns, url
from ct_app import views

urlpatterns = patterns('',
    url(r'^$', views.home, name='home'),
    url(r'^submit/$', views.ProblemCreate.as_view(), name='submit'),
    url(r'^submit_done/$', views.submit_done, name='submit_done'),
    url(r'^problems/(?P<pk>\d+)/$', views.ProblemDetailView.as_view(), name="problem_detail"),
    url(r'^mission/$', views.mission, name='mission'),
)