import unittest
from dataclasses import is_dataclass
from application.models import Pessoa

class UnitaryTest(unittest.TestCase):
    def test_if_dataclass(self):
        self.assertFalse(is_dataclass(Pessoa))

#if __name__=='__main__':
#    unittest.main()


"""from django.test import TestCase

class UnitaryTest(TestCase):
    def test_is_an(self):
        self.assertEqual(1, 1)
"""