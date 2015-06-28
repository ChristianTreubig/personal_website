from django.test import TestCase, SimpleTestCase
from django.test import Client
from django.core.urlresolvers import reverse

class MasterTest(TestCase, SimpleTestCase):
    def setUp(self):
        self.client = Client()

    def test_ok(self):
        response_home = self.client.get(reverse("home"))
        response_submit = self.client.get(reverse("submit"))
        response_submit_done = self.client.get(reverse("submit_done"))
        response_mission = self.client.get(reverse("mission"))
        self.assertEqual(response_home.status_code, 200)
        self.assertEqual(response_submit.status_code, 200)
        self.assertEqual(response_submit_done.status_code, 200)
        self.assertEqual(response_mission.status_code, 200)
        
    def test_problem(self):
        response_submit_post = self.client.post(reverse("submit"), 
                                      {"name": "Rick Thorne", 
                                       "age": 42, 
                                       "location": "Woodward", 
                                       "category": "sport", 
                                       "problem": "Broke my ankle."}, 
                                      follow=True)
        self.assertRedirects(response_submit_post, reverse("submit_done"))